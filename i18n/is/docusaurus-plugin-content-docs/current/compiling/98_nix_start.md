---
slug: nix_start
---

# Nix
The `elja` cluster exposes `nix` to its users, allowing for non-root installations and sharing of configurations. We use an NUR (nix user repository) for `elja` specific packages.

If you are not comfortable using `nix`, feel free to open an issue to request a particular package. Additionally, a `nix` to `ml` helper is being designed to aid users more familiar with the `lmod` system.

## First Steps

We recommend using `nix flakes` for much of the details described in this documentation. Flakes are as yet not part of the standard distribution, but provide native reproducibility advantages over alternatives like `niv`.
