---
slug: nix_snippets
---

# Nix Snippets

## File Management

For a transient file manager, use the following invocation:

```bash
nix-shell -p lxsession lxappearance lxrandr lxmenu-data gsettings-desktop-schemas xfce.thunar
lxsession &
thunar
```

To get an icon theme, use the following:

```bash
mkdir -p $HOME/Git/Github/icons
cd $HOME/Git/Github/icons
git clone https://github.com/bikass/kora.git
mkdir -p $HOME/.local/share/icons
cp kora/kora* $HOME/.local/share/icons
```
