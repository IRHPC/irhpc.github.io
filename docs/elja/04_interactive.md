---
slug: interactive_session
---

# Interactive Sessions

Sometimes it is necessary to run software - or a combination of software -
directly from the command line on a node (e.g. for data analysis and manipulation).
For example

```bash
srun --job-name "InteractiveJob" --cpus-per-task 24 --mem-per-cpu 1500 --time 24:00:00 --pty bash
```

requests an interactive session and is allocated when the requested resources are available.
The `SLURM` queue rules and limits still apply here.
