---
sidebar_position: 1
---

# Logging In

## Externally
For users outside the University Network, we access the clusters via the `krafla` front-facing node:

```bash
uglaUser="rog68"
ssh $uglaUser@krafla.rhi.hi.is
# Now on the network
ssh elja.hi.is # or garpur or jotunn
```

## First steps

Congratulations on getting to login node! **Do nothing** without reading the [common etiquette section](common/etiquette).

# Login Node Etiquette

The login node is a shared resource between all of the users. It controls the entire cluster, including SLURM which runs jobs and the queues.

That is why it should only be used for the following simple tasks:
- Submit jobs
- Edit scripts and files
- Prepare / delete data (scp, cp, mv, rm etc.)

Or **try Docusaurus immediately** with **[new.docusaurus.io](https://new.docusaurus.io)**.

## Generate a new site

Generate a new Docusaurus site using the **classic template**:

```shell
npx @docusaurus/init@latest init my-website classic
```

## Start your site

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and display your changes.
