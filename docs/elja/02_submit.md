---
slug: submit_jobs
---

# Submitting Jobs

## SLURM

Elja uses `SLURM` as the batch scheduler and resource manager. 
Basic common commands are summarized below.

| Command                     | Description                          |
|-----------------------------|--------------------------------------|
| `sbatch`                    | submit a batch job script            |
| `srun`                      | run a parallel job                   |
| `squeue` (-a, -u \<uname\>) | show queue status                    |
| `sinfo`                     | view info about nodes and partitions |
| `scancel` \<jobid\>         | cancel a job                         |

## Batch jobs

The command `sbatch` is used to submit jobs to the `SLURM` queue

```bash
sbatch submit_script
```

A batch submit script usually starts like this

```bash
#!/bin/bash
#SBATCH --mail-type=ALL
#SBATCH --mail-user=<Your E-mail> # for example uname@ugla.is
#SBATCH --partition=Intel48
#SBATCH -N 2      # Minimum of 1 node
#SBATCH -n 96     # 48 MPI processes per node, 96 tasks in total, appropriate for Intel48
#SBATCH --time=0-04:00:00 # run for 4 hours maximum (1-00:00:00 is equivalent to 1 Day)
#SBATCH --output=slurm_job_output.log   
#SBATCH --error=slurm_job_errors.log   # Logs if job crashes
```

To cancel a job type

```bash
scancel <jobid>
```

The IDs of your jobs can be revealed like this

```bash
squeue -u <uname>
```

## Array jobs
