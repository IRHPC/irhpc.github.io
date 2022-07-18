---
slug: nix_resources
---

# Nix Resources
Here we collect some supplementary resources regarding the `nix` ecosystem.

## Flakes
The canonical introduction to flakes are the following three posts from Tweag.io's Eelco Dolstra:
- [Part 1: An introduction and tutorial](https://www.tweag.io/blog/2020-05-25-flakes/)
- [Part 2: Evaluation caching](https://www.tweag.io/blog/2020-06-25-eval-cache/)
- [Part 3: Managing NixOS systems](https://www.tweag.io/blog/2020-07-31-nixos-flakes/)
Some other references:
- Zimbatm as a [nice running log](https://zimbatm.com/NixFlakes/)
- Nix [Wiki entry](https://nixos.wiki/wiki/Flakes)

## HPC Usage
Briefly, `nix` is installed on the **login node** and ports have been forwarded to ensure that the nodes can access the `nix-daemon`. This is similar in spirit to the GRICAD setup.
