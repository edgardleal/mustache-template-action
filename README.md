<h1 align="center">Welcome to mustache-template-action 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/ts-template" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/ts-template.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A github action to parse template files in mustache format

## Template format

[You can check more template details here](https://handlebarsjs.com/guide/#what-is-handlebars)

## Usage

Include this job in your github action wile
```
  - name: Parse config file
    uses: edgardleal/mustache-template-action@v1.0.0
    env:
      ENV: dev
    with:
      input: templates/config.json
      output: config.json
```

Possible content for templates/config.json

```json
{
  "mykey": "{{ ENV }}"
}
```

## Parameters

### input

> The path of template file

* required = `true`

### output

> The path of output file

* required = `true`

### debug 

> Print the parsed content on console

* required = `false`
* default = `false`

## Author

👤 **Edgard Leal**

* Website: https://github.com/edgardleal
* Github: [@edgardleal](https://github.com/edgardleal)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
