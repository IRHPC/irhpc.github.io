---
slug: slurm
---

# Slurm

## Interactive Sessions

### Move to the Node

We can request a job with two compute nodes, and 48 tasks over for thirty minutes.

```bash
❯ srun -N 2 -n 48 -t 30 --pty /bin/bash
# This brings you to the node directly
```

Recall that we have more information with `srun --help`, along with the manpages `man srun` which [may be accessed here](http://manpages.org/srun/1).

### Request Nodes

With `sallocate` we do not get shifted to the node, this is useful for callbacks.
