<p align="right">
  <a href="https://slapdash.com/" target="_blank"><img width="150" src="assets/images/slapdash-logo.png" alt="Slapdash" title="Slapdash: work at the speed of thought"></a>
</p>

# 💻 Slapdash Commands

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

### Slapdash brings all your apps together in one place to give you new superpowers.

This package makes writing your own Slapdash commands fun and easy.

## Highlights

- Actions
- Configs
- Move actions
- Tokens
- Views (`list`, `form`, and `masonry`)
- Response builder
- **Autocomplete**
- **Arguments**
- **Zero dependencies and lightweight (22 kB)**
- **Well-documented**

## Getting Started

### Requirements

#### Slapdash

To test and run your commands, you should have [Slapdash](https://slapdash.com/) installed.

## Installation

Install and use this package as easy as running this command.

```sh
npm install slapdash-commands
```

## Usage

This is our recommended directory structure.

```
.
└── my-command/
    ├── src/
    │   ├── pages/
    │   │   ├── first.ts
    │   │   ├── second.ts
    │   │   └── third.ts
    │   ├── args.ts
    │   └── command.ts
    ├── package.json
    └── tsconfig.json
```

### pages

Each move action is called a page here. A move action changes the location of the Command Bar. We recommend you follow this structure to make your code understandable and testable.

### args.ts

This is optional, but creating an interface of the command's arguments helps you with linting and auto-completion.

```typescript
interface Arguments {
  firstArg?: string;
  secondArg?: string;
  // ...
}
```

### command.ts

Start writing your own command from here.

```typescript
slapdash((args: Arguments) => {
  // Use the pages, from last to first
  if (args.secondArg !== undefined) {
    return thirdPage(args.secondArg);
  } else if (args.firstArg !== undefined) {
    return secondPage(args.firstArg);
  }

  return firstPage();
});
```

_For more examples, please refer to the [Documentation](https://developers.slapdash.com/)._

## [Contributing](https://github.com/meness/slapdash-commands/blob/main/CONTRIBUTING.md)

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### Donate 🙏

You can support this project and transfer BTC to this address.

```
bc1qgwar7xmpsed3qaq0fvf08qxmyvd40t8t9tnaf4
```

## License

Distributed under the MIT License. See [MIT license](https://github.com/meness/slapdash-commands/blob/main/LICENSE) for more information.

[contributors-shield]: https://img.shields.io/github/contributors/meness/slapdash-commands?style=for-the-badge
[contributors-url]: https://github.com/meness/slapdash-commands/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/meness/slapdash-commands?style=for-the-badge
[forks-url]: https://github.com/meness/slapdash-commands/network/members
[stars-shield]: https://img.shields.io/github/stars/meness/slapdash-commands?style=for-the-badge
[stars-url]: https://github.com/meness/slapdash-commands/stargazers
[issues-shield]: https://img.shields.io/github/issues/meness/slapdash-commands?style=for-the-badge
[issues-url]: https://github.com/meness/slapdash-commands/issues
[license-shield]: https://img.shields.io/github/license/meness/slapdash-commands?style=for-the-badge
[license-url]: https://github.com/meness/slapdash-commands/blob/main/LICENSE
