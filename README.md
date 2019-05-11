# zce-cli

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> A CLI tool for my personal productivity, inspired by gluegun & vue-cli & yeoman & etc.

## Todos

- [x] invoke help
- [x] integration tests
- [x] unit tests
- [x] test files location
  - https://medium.com/@JeffLombardJr/organizing-tests-in-jest-17fc431ff850
- [x] sinon of jest mock?
  - https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
  - https://medium.com/codeclan/mocking-es-and-commonjs-modules-with-jest-mock-37bbb552da43
- [ ] extract core
- [ ] list command
- [ ] init command
- [ ] commands docs

## dependencies

- chalk
- got
- minimist
- minimist-options
- ora
- redent
- zce

## devDependencies

- @commitlint/cli
- @commitlint/config-conventional
- @types/execa
- @types/got
- @types/jest
- @types/lodash
- @types/minimist
- @types/node
- @types/semver
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- commitizen
- cz-conventional-changelog
- eslint
- execa
- husky
- jest
- lint-staged
- prettier
- standard-version
- ts-jest
- ts-node
- typescript

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me/)

[travis-image]: https://img.shields.io/travis/zce/zce-cli/next.svg
[travis-url]: https://travis-ci.org/zce/zce-cli
[codecov-image]: https://img.shields.io/codecov/c/github/zce/zce-cli/next.svg
[codecov-url]: https://codecov.io/gh/zce/zce-cli
[downloads-image]: https://img.shields.io/npm/dm/zce-cli.svg
[downloads-url]: https://npmjs.org/package/zce-cli
[version-image]: https://img.shields.io/npm/v/zce-cli.svg
[version-url]: https://npmjs.org/package/zce-cli
[license-image]: https://img.shields.io/github/license/zce/pages-boilerplate.svg
[license-url]: https://github.com/zce/zce-cli/blob/next/LICENSE
[dependency-image]: https://img.shields.io/david/zce/zce-cli.svg
[dependency-url]: https://david-dm.org/zce/zce-cli
[devdependency-image]: https://img.shields.io/david/dev/zce/zce-cli.svg
[devdependency-url]: https://david-dm.org/zce/zce-cli?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
