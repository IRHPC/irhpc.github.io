---
slug: getting_started
---

# Að Byrja

Takk fyrir að hugsa um að leggja til við skjölun. Við munum lýsa nokkrum algengum verkflæðum hér að neðan.

## Tól

Staflinn okkar er:

- Node og npm
- [**Docusaurus 2 alpha**](https://docusaurus.io/) til að smíða
- GitHub fyrir hýsingu, samstæðustjórnun og vandamál.

## Common Concepts
## Algeng hugtök

- **Notaðu** skýrtt `00_nafn` í stað þess að nota `sidebar_position` lykilinn í hausnum
  - Þetta er erfiðara að fylgjast með á staðnum en auðveldar síðari notkun
  - Kemur einnig í veg fyrir árekstra
- **Notaðu** `slug` hausin og kallaðu hann `nafn`
- **EKKI** nota `.mdx` skrár
  - Erfiðara að vinna með

### Staðbundin notkun

Við viljum frekar nota `nvm`, sem er `Node` útgáfustjór.

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

