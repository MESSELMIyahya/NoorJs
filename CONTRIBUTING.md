# Contributing

![hero](docs/imgs/contributing.png)

We're are happy for your interest in contributing to NoorJs.

Please read the [documentation](docs/doc.md) and understand the how NoorJs works then read this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to message me on [Telegram](https://t.me/Yahyamesselmi).

## Repository

This is a monorepo repository .

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.
- We use [changesets](https://github.com/changesets/changesets) for managing releases.

## Folder Structure

This repository is structured as follows:

```

apps
└─ web

packages
├─ core
│   ├── tests
│   └── src
│       ├── appliers
│       ├── components
│       │   ├── creators
│       │   ├── generators
│       │   ├── handlers
│       │   ├── lifecycle
│       │   └── render
│       │
│       ├── interfaces
│       ├── root
│       ├── utils
│       └── plugs
│
└── vite-plugin
```

| Path                           | Description                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------- |
| `apps/web`                     | NoorJs Vite app for working with core                                        |
| `packages/core/src/appliers`   | Applier functions used in the plugs                                          |
| `packages/core/src/components` | Component core functionality functions like (generators,creators,handlers..) |
| `packages/core/src/interfaces` | The types folder                                                             |
| `packages/core/src/root`       | Root Utility functions like (createRoot..)                                   |
| `packages/core/src/utils`      | Utility functions like (generateElementId..)                                 |
| `packages/core/src/plugs`      | All the built-In plugs                                                       |
| `packages/core/tests`          | The tests folder                                                             |
| `packages/vite-plugin`         | Vite plugin for NoorjS                                                       |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone git@github.com:MESSELMIyahya/NoorJs.git
```

### Navigate to project directory

```bash
cd NoorJs
```

### Create a new Branch

```bash
git checkout -b new-feature
```

### Install dependencies

```bash
pnpm install
```

### Run the server

```bash
pnpm dev
```

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(core): add headerPlug new plug`

For more detailed specification visit
https://www.conventionalcommits.org/

## Requests for feature

If want to request for a feature, please open a discussion on GitHub.

## Testing

Tests are written using [Vitest](https://vitest.dev). You can run all the tests from the root of the repository.

```bash
pnpm test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.
