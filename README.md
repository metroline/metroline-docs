<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Metroline Docs" src="./branding/logo.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Metroline Docs
</h1>

This repository contains the sources of  [https://docs.metroline.io](https://docs.metroline.io). Feel free to improve it !

## Get started

1. Install dependencies `npm run install`
1. Run `cp .env.example .env`
1. Start `npm start`

## Page info

You set metadata at the top of your Markdown files. It's not mandatory, but allows you to control SEO data.

```markdown
---
title: 'page title'
excerpt: 'some description'
isHomePage: true | false
---
```

## Special markdown blocks

**Code blocks**

Blank lines are important.

```markdown
<div class="code-group" data-props='{ "lineNumbers": ["true"] }'>

\`\`\`yaml
#Your code here
\`\`\`

</div>
```

**Info/Warning/Danger**

Blank lines are important.

```markdown
<div class="blockquote" data-props='{ "mod": "info" }'>

Your content here.

</div>
```

```markdown
<div class="blockquote" data-props='{ "mod": "warning" }'>

Your content here.

</div>
```

```markdown
<div class="blockquote" data-props='{ "mod": "danger" }'>

Your content here.

</div>
```

## Ackee

[Ackee](https://github.com/electerious/Ackee) is a privacy-friendly, self-hosted tracking tool. To use it:

```dotenv
GATSBY_ACKEE_SERVER=http://localhost:3000
GATSBY_ACKEE_DOMAIN_ID=...
```

if you've changed `ACKEE_TRACKER` in your Ackee server:

```dotenv
GATSBY_ACKEE_TRACKER=custom-name
```

To disable detailed tracking:

```dotenv
GATSBY_ACKEE_DETAILED=false
```

To also send tracking info for localhost:

```dotenv
GATSBY_ACKEE_IGNORE_LOCALHOST=false
```

## Algolia

You can find this info in your Algolia account under **API keys**.

```dotenv
ALGOLIA_ADMIN_KEY=
GATSBY_ALGOLIA_APP_ID=
GATSBY_ALGOLIA_INDEX_NAME=
GATSBY_ALGOLIA_SEARCH_ONLY_KEY=
```
