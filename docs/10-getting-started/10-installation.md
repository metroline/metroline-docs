---
title: 'Installation'
excerpt: ''
---

# Installation

To deploy, you'll need to:
- Create a `docker-compose.yml` file
- Register Metroline as an OAuth app in your Git server and update your `docker-compose.yml`
- Run `docker-compose up -d`
- Browse `http://localhost:3000`

## Basic docker-compose

Create a `docker-compose.yml` (we'll complete it further below):

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
version: "3"

services:
  ui:
    image: metroline/ui:latest
    restart: unless-stopped
    ports:
      - "3000:80"
    environment:
      METROLINE_SERVER_URL: http://localhost:3001

  server:
    image: metroline/server:latest
    restart: unless-stopped
    ports:
      - "3001:80"
    environment:
      METROLINE_HOST: http://localhost:3001
      METROLINE_UI_URL: http://localhost:3000
      # Generated with "openssl rand -hex 32"
      METROLINE_JWT_SECRET: 896933b3545913aac9175890882c2ca3d861f6109dfe2c48f1b4c15686c59542
      # Generated with "openssl rand -hex 32"
      METROLINE_RUNNER_SECRET: 1f1b3c989bd7514797f5bc8da6a6dd8ac6acd08c3719acf47aa2a7f4aa1a7e57
      METROLINE_MONGO_URI: mongodb://mongo:27017/metroline

  runner-1:
    image: metroline/runner:latest
    restart: unless-stopped
    environment:
      METROLINE_SERVER_ADDRESS: http://server
      METROLINE_RUNNER_SECRET: 1f1b3c989bd7514797f5bc8da6a6dd8ac6acd08c3719acf47aa2a7f4aa1a7e57
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

  mongo:
    image: mongo:4.2-bionic
    restart: unless-stopped
    volumes:
      - metroline-mongo:/data/db

volumes:
  metroline-mongo:
```

</div>

## Register Metroline as an OAuth app

### Gitea

In **Settings / Applications**, add an OAuth application with the following settings:

| Field | Value |
| ---- | ---- |
| Application name   | Metroline | 
| Authorization callback URL | `<metroline-server-url>/auth/gitea/oauth/callback` |

Copy your **Client ID** and **Client secret**.

<div class="blockquote" data-props='{ "mod": "info" }'>

If you've changed [`REFRESH_TOKEN_EXPIRATION_TIME`](https://docs.gitea.io/en-us/config-cheat-sheet/#oauth2-oauth2) in your Gitea config, make sure to set `METROLINE_REFRESH_TOKEN_EXPIRATION_TIME` with that same value. We've opened [an issue](https://github.com/go-gitea/gitea/issues/12641) on their repo to improve this.

</div>

Now, you can update your `docker-compose.yml`:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
# ...
services:
  # ...
  server:
    # ...
    environment:
      # ...
      METROLINE_GITEA_CLIENT_ID: <your-gitea-client-id>
      METROLINE_GITEA_CLIENT_SECRET: <your-gitea-client-secret>
      METROLINE_GITEA_URL: http://10.0.1.23:3003
```

</div>

### Gitlab

From your Gitlab **admin area**, [add a new application](https://docs.gitlab.com/ee/integration/oauth_provider.html#adding-an-application-through-the-profile) with the following settings:

| Field | Value |
| ---- | ---- |
| Name   | Metroline | 
| Redirect URL | `<metroline-server-url>/auth/gitlab/oauth/callback` |
| Trusted | true |
| Scopes | api |

After creating the application, Gitlab will give you both the **Client ID** and **Client Secret**, which they respectively name **Application ID** and **Application Secret**.

<div class="blockquote" data-props='{ "mod": "warning" }'>

You may need to check "Allow requests to the local network from web hooks and services" in **Admin / Settings / Network / Outbound requests** for webhooks to be sent to Metroline.

</div>

Now, you can update your `docker-compose.yml`:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
# ...
services:
  # ...
  server:
    # ...
    environment:
      # ...
      METROLINE_GITLAB_CLIENT_ID: <your-gitlab-application-id>
      METROLINE_GITLAB_CLIENT_SECRET: <your-gitlab-application-secret>
      METROLINE_GITLAB_URL: http://10.0.1.23:3003
      # optionally if your Metroline server uses a self-signed certificate
      METROLINE_GITLAB_WEBHOOK_SSL_VERIFY: "false"
```

</div>

### Github

In Github, go to **Settings / Developer Settings / OAuth Apps** and add a new OAuth app with the following settings:

| Field | Value |
| ---- | ---- |
| Application name   | Metroline | 
| Homepage URL   | https://metroline.io | 
| Authorization callback URL | `<metroline-server-url>/auth/github/oauth/callback` |

Now, you can update your `docker-compose.yml`:

<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

```yaml
# ...
services:
  # ...
  server:
    # ...
    environment:
      # ...
      METROLINE_GITHUB_CLIENT_ID: <your-github-oauth-app-client-id>
      METROLINE_GITHUB_CLIENT_SECRET: <your-github-oauth-app-client-secret>
      METROLINE_GITHUB_URL: http://10.0.1.23:3003
      # optionally if your Metroline server uses a self-signed certificate
      METROLINE_GITHUB_WEBHOOK_SSL_VERIFY: "false"
```

</div>
