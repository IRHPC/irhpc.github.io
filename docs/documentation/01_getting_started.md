# Getting Started

Thanks for thinking of contributing to the documentation. We will describe some common workflows for the same.

## Tools

The entire stack is:

- Node and npm
- [**Docusaurus 2 alpha**](https://docusaurus.io/) for builds
- GitHub for hosting and issues

## Common Concepts

- **Do use** explicit `00_name` instead of using the `sidebar_position` key in the header
  - This is harder to keep track of locally but makes subsequent usage easier
  - Also prevents clashes
- **Do not** use `.mdx` files
  - Harder to work with

### Local Usage

We prefer the usage of `nvm`, a `Node` version manager.

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# Install the node version used
nvm install
# Use the node version
nvm use
# Install dependencies
npm i
# Run the site (en)
npm run start
# Run the Icelandic site
npm run start -- --locale is
```

