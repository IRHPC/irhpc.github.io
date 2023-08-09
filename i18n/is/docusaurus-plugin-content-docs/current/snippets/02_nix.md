---
slug: nix_snippets
---

# Nix bútar

## Skráastjórnun

Fyrir tímabundinn skráastjóra, notaðu eftirfarandi ákall:

```bash
nix-shell -p lxsession lxappearance lxrandr lxmenu-data gsettings-desktop-schemas xfce.thunar
lxsession &
thunar
```
Til að fá táknþema skaltu nota eftirfarandi:

```bash
mkdir -p $HOME/Git/Github/icons
cd $HOME/Git/Github/icons
git clone https://github.com/bikass/kora.git
mkdir -p $HOME/.local/share/icons
cp kora/kora* $HOME/.local/share/icons
```
