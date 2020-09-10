---
title: 'Conditional jobs'
excerpt: ''
---

# Conditional jobs

Sometimes, you want to execute a job conditionally. You can use the `when` job property for this. 

## branch

You can limit job execution to specific branch by setting `when.branch` to an array of **regular expressions**.

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
job:
  test:
    when:
      branch:
        - master
        - feat/.*
    image: alpine
    script:
      - echo "test"
```

</div>

or use `include` (same behavior as above):

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
job:
  test:
    when:
      branch:
        include:
          - master
    image: alpine
    script:
      - echo "test"
```

</div>

When you **do not** want a job to be executed on a specific branch, you can use `branch.exclude`:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
job:
  test:
    when:
      branch:
        exclude:
          - master
    image: alpine
    script:
      - echo "test"
```

</div>

By default, when a job is skipped, we do not prevent downstream jobs to be executed. To force downstream jobs to be skipped as well, set `when.propagate` to `true`:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
job:
  test:
    when:
      propagate: true
      branch:
        exclude:
          - master
    image: alpine
    script:
      - echo "test"
```

</div>

## status

You can limit job execution based on the **upstream status**, which is the status computed for jobs **upstream** (parents + parents of parents + ...) of the given job.

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
job:
  test:
    when:
      status:
        - success
        - failure
    image: alpine
    script:
      - echo "test"
```

</div>

or use `include` (same behavior as above):

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
job:
  test:
    when:
      status:
        include:
          - success
          - failure
    image: alpine
    script:
      - echo "test"
```

</div>

When you **do not** want a job to be executed on a specific branch, you can use `branch.exclude`:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
job:
  test:
    when:
      status:
        exclude:
          - failure
    image: alpine
    script:
      - echo "test"
```

</div>

possible values are:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```shell script
success # all jobs succeeded
failure # one or more jobs failed
partial # one ore more jobs with allowFailure:true failed
skipped # all jobs were skipped
```

</div>
