---
title: 'Secrets'
excerpt: ''
---

# Secrets

Secrets can be defined at the repo level or globally. They are set as job environment variables and masked in logs. You can also inject them in your `.metroline.yml`.

Secret names must match `/[a-zA-Z_][a-zA-Z0-9_]*/`.

## Repo secrets

You can define secrets at the repo level in the UI.

When you toggle on **Protected branches only**, your secret will only be provided to jobs that are run for commits that were made on a protected branch.

You can also specify **Branches** with a comma separated list of Javascript regular expressions. Your secret will only be provided to jobs run for commits that were made on a branch that matches one of these patterns.

## Global secrets

Set the `METROLINE_GLOBAL_SECRETS` environment variable passed to Metroline server with JSON string defining global secrets. Each global secret should comply with the following interface:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```ts
interface GlobalSecret {
  name: string;
  value: string;
  protectedBranchesOnly?: boolean;
  branches?: string[];
}
```

</div>

For example:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```shell script
METROLINE_GLOBAL_SECRETS=[{"name":"test","value":"val","branches":["master"]},{"name":"test2","value":"val","protectedBranchesOnly":true}]
```

</div>

Note that if you define multiple secrets with the same name, the last value will be used.

## Secret environment variable injection

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
docker:
  auth: {{DOCKER_AUTH_JSON}}
```

</div>

Assuming `MY_VAR=hello`, here are a few examples:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
{{MY_VAR}} # is replaced with "hello"
\{{MY_VAR}} # is replaced with "\{{MY_VAR}}"
\\{{MY_VAR}} # is replaced with "\hello"
\\\{{MY_VAR}} # is replaced with "\\{{MY_VAR}}"
```

</div>

More generally, we escape when there is an odd number of leading backslashes (`\`) before `{{MY_VAR}}`.

## Secrets as job environment variables

Secrets are set as job environment variables. The order of precedence is (higher entires override lower ones):
- [pipeline env vars](#pipeline-environment-variables)
- job env defined in config
- global env defined in config
- repo secrets
- global secrets

## A note on secret masking

Metroline runner listens to logs sent by the Docker exec API. We mask logs in chunks we receive, but if your secret is broken into multiple chunks (we haven't seen this happening so far), we won't be able to mask it.

Multiline secrets are difficult to hide because there can be issues with `\r\n` vs `\r`.

We advise to take a few precautions to limit the risk of leaking secrets
- protect your branches and limit sensitive secrets to protected branches
- limit sensitive secrets to specific branches (in case you don't have protected branches)
- review code changes: make sure changes make sense and look for potential leaks (injections, throwing errors that may print environment variables), review added packages...
