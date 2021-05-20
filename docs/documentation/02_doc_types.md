---
slug: doc_types
---

# Types of Documentation

We welcome contributions and edits of all kinds, however, primarily we are interested in:

- Slurm Snippets
- Nix Snippets
- Case Studies
- Internationalization (translations)

## Translations

In particular, to contribute an Icelandic translation of an existing:

- Copy file (`bla.md`) from `docs` to the `i18n/is/docusaurus-plugin-content-docs/current` folder
- Translate the file
  - **Do not** change the content more than required, keep in mind that the same meaning must be clearly conveyed
  - The **english** version is canonical, and will take precedence for interpretation
- Test locally with `npm run start -- --locale is`
- Make a PR, request a review from an Icelandic admin
  - Use the `translation` tag
  - Add `google_translate` tag if you have used Google Translate
