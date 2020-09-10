# Basic CI configuration

Metroline expects your CI configuration inside a `.metroline.yml` file placed at the root of your projects.

A basic example looks like this: 

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
jobs:
  # our build job
  build:
    # docker image of this job
    image: node:12
    # a set of commands to execute in a node:12 container
    script:
      - npm ci
      - npm run build
  # a job named "test"
  test:
    image: node:12
    script:
      - npm test
```

</div>

<div class="blockquote" data-props='{ "mod": "warning" }'>

Job name `clone` is reserved.

</div>

## Global image

Instead of defining an image for each job, you can define a global one:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
image: node:12
jobs:
  build:
    script:
      - npm run build
  test:
    script:
      - npm run test
```

</div>

<div class="blockquote" data-props='{ "mod": "info" }'>

You must specify a job image if you haven't defined a global image

</div>

## bin

By default, all jobs use the `/bin/sh` executable, but you are free to change it with the `bin` job property:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
image: node:12
jobs:
  build:
    bin: /bin/bash # or simply "bash"
    script:
      - npm run build
```

</div>

This can be any valid executable available in the shell. In the above example, we could have set `bin` to `bash`, because bash is available globally in the `node:12` Docker image.

## dependencies

By default, all jobs are executed **in parallel**. To model dependencies between your jobs, you can use the `dependencies` job property:

<div class="blockquote" data-props='{ "mod": "info" }'>

You cannot defined cyclic dependencies.

</div>

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
image: node:12
jobs:
  build:
    script:
      - npm run build
  test:
    script:
      - npm run test
    dependencies:
      - build
```

</div>

In the above example, job `test` will be executed **only** when job `build` has succeeded.

This might sound a bit verbose, but it allows you to create complex workflows:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
image: node:12
jobs:
  build:
    script:
      - npm run build
  test-node-11:
    image: node:11
    script:
      - npm run test
    dependencies:
      - build
  test-node-12:
    script:
      - npm run test
    dependencies:
      - build
  publish:
    script:
      - npm publish
    dependencies:
      - test-node-11
      - test-node-12
```

</div>

Job `publish` will only be executed when jobs `test-node-11` and `test-node-12` have succeeded.

<div class="blockquote" data-props='{ "mod": "warning" }'>

Metroline shares the same workspace between jobs, you are responsible for making sure parallel jobs do not conflict using the filesystem.

</div>

## allowFailure

Sometimes, you don't want your entire pipeline to stop because a not-so-important job failed. You can use the `allowFailure` job property for this purpose:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'> 

```yaml
 version: '1'
 image: node:12
 jobs:
   build:
     script:
       - npm run build
   test-node-11:
     image: node:11
     allowFailure: true
     script:
       - npm run test
     dependencies:
       - build
   test-node-12:
     script:
       - npm run test
     dependencies:
       - build
   publish:
     script:
       - npm publish
     dependencies:
       - test-node-11
       - test-node-12
```

</div>

If job `test-node-11` fails, job `publish` will still be executed.
