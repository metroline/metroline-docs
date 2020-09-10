# Before and after scripts

To define scripts that run `before` and/or `after` the script of each jobs, you can use the `beforeScript` and `beforeScript` properties.

To run a script **before** each job:  

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
image: node:12
# run this script before each job
beforeScript:
 - echo before
jobs:
  build:
    script:
      - echo build
  test:
    script:
      - echo test
```

</div>

To tun a script **after** each job:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
image: node:12
# run this script before each job
afterScript:
 - echo before
jobs:
  build:
    script:
      - echo build
  test:
    script:
      - echo test
```

</div>
