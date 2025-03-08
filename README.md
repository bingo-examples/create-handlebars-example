<h1 align="center">Create Handlebars Example</h1>

<p align="center">
	Example of a template repository built with Bingo and Handlebars.
	💝
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 2" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-2-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/bingo-examples/create-handlebars-example/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/bingo-examples/create-handlebars-example" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/bingo-examples/create-handlebars-example?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/bingo-examples/create-handlebars-example/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/create-handlebars-example"><img alt="📦 npm version" src="https://img.shields.io/npm/v/create-handlebars-example?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npx create-example
```

This repository is a general example of using [Bingo](https://create.bingo) with its [Handlebars engine](https://create.bingo/engines/handlebars/about).
Its `src/template.ts` file describes a repository with four string options:

- `description`: 'Sentence case.' description of the repository, with a hardcoded value
- `owner`: GitHub organization or user the repository is underneath
- `repository`: 'kebab-case' or 'PascalCase' title of the repository
- `title`: 'Title Case' title for the repository, with a default value based on title-casing `repository`

Those options are used as values in the Handlebars templates located in `template/`.

The following command was used to generate [bingo/created-handlebars-example](https://github.com/created-handlebars-example):

```shell
npx create-handlebars-example --owner bingo-examples --repository created-handlebars-example
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 💖

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/bingo-examples/create-handlebars-example/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/bingo-examples/create-handlebars-example/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo engine](https://create.bingo).
