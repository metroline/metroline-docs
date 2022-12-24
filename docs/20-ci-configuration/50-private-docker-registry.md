---
title: 'Private Docker registry'
excerpt: ''
---

# Private Docker registry

Say you want to use a private Docker image in your CI configuration:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
jobs:
  test:
    image: docker.company.com/my-image
    script:
      - npm test
```

</div>

Add a secret with the content of a Docker JSON config file. For example, we'll name it `DOCKER_AUTH_JSON` and set its content to:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```json
{"auths": {"docker.company.com": {"auth": "<your-token>"}}}
```

</div>

<div class="blockquote" data-props='{ "mod": "warning" }'>

Make sure to convert the content of your Docker auth file to a single line to avoid [YAML format issues](https://github.com/metroline/metroline/issues/4).

</div>

Now, use the secret to set the `docker.auth` property in your config:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: '1'
docker:
  auth: '{{DOCKER_AUTH_JSON}}'
jobs:
  test:
    image: docker.company.com/my-image
    script:
      - npm test
```

</div>
