<h1 align="center">Welcome to mustache-template-action 👋</h1>
<p>
  <a href="https://github.com/edgardleal/mustache-template-action/actions/workflows/validate.yml" target="_blank">
    <img alt="Validate" src="https://github.com/edgardleal/mustache-template-action/actions/workflows/validate.yml/badge.svg">
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
  "mykey": "{{ ENV }}",
  "database": "{{#if eq(ENV, 'dev')}}localhost{{else}}{{PRODUCTION_DB}}{{/if}}"
}
```

## Custom helpers

> this project include some custom helpers to complement the builtin from mustache

### eq

Receive two parameters and return a `boolean` informing if these values are equals

```
{{#if eq(A, B)}}
  A and B are equals ({{A}}, {{B}})
{{else}}
  A anb B are not equals
{{/if}}
```

> in this example A and B are environment variables

### neq

The saem `eq` but negating. ( check is values are not equals )

### loop

This helper is similar to builtin [each](https://handlebarsjs.com/guide/builtin-helpers.html#each) from mustache, but it works with
string lists.

Parameters:

* a `string` with the list ( `"t,f,r,s"` ) or a environment variable name with these list
* The list delimiter. The default value is `,`

Ex.:

Having a environment variable as the bellow:

`LIST="1,2,3,4,5"`

You can create a loop throughout these values as the code bellow:

```
{{#loop LIST ","}}
Value: {{this}}
{{/loop}}
```

Will generate the follow output:

```
Value: 1
Value: 2
Value: 3
Value: 4
Value: 5
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

<a href="https://www.buymeacoffee.com/edgardleal" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
