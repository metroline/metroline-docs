---
title: 'Environment'
excerpt: ''
---

# Environment

## Job environment

If you want to provide environment variables to your jobs, use the `env` job property.

<div class="blockquote" data-props='{ "mod": "info" }'>

Environment variables must match `/[a-zA-Z_][a-zA-Z0-9_]*/`.

</div>

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
image: node:12
jobs:
  build:
    env:
      MY_VAR: world
      MY_VAR_2: world
    script:
      - echo "Hello $MY_VAR"
      - echo $MY_VAR_2 > world.txt
```

</div>

## Global environment

You can also define environment variables globally with the `env` property:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
image: node:12
env:
  MY_VAR: world
jobs:
  build:
    env:
      MY_VAR_2: world
    script:
      - echo "Hello $MY_VAR"
      - echo $MY_VAR_2 > world.txt
```

</div>

Variables defined in the global `env` will be overridden by those defined in the `env` job property. 

## Predefined pipeline environment variables

Metroline provides a number of predefined environment variables.

### METROLINE_PIPELINE_ID
Pipeline ID

### METROLINE_COMMIT_SHA
Commit sha

### METROLINE_COMMIT_BRANCH
Commit branch

### METROLINE_COMMIT_URL
Commit url

### METROLINE_REPO_ID
Id of the git repository in your git server

### METROLINE_REPO_URL_SSH
SSH url to clone the git repository

### METROLINE_UPSTREAM_STATUS
Status of the jobs **upstream** of the current job. This includes **only** the current job's dependency tree up to the pipeline root.
