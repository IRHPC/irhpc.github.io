
---
slug: submit_jobs
---

# Submitting Batch Jobs

## SLURM

Elja uses `SLURM` as the batch scheduler and resource manager. 
Basic common commands are summarized below.

| Command                     | Description                          |
|-----------------------------|--------------------------------------|
| `sbatch`                    | submit a batch job script            |
| `srun`                      | run a parallel job                   |
| `squeue` (-a, -u $USER) | show queue status                    |
| `sinfo`                     | view info about nodes and partitions |
| `scancel` **JOBID**         | cancel a job                         |

## Fairshare
The Cluster provides the Slurm Fairshare Algortihm. It organizes which job in the slurm queue should run next, based of a fairshare factor between jobs, by using a floating point value between 0.0 and 1 that is calculated by an equation. 

This equation takes in account many factors like the number of nodes requested,  More details about this equation can be found [here](https://slurm.schedmd.com/fair_tree.html#fairshare) and [here](https://slurm.schedmd.com/SLUG19/Priority_and_Fair_Trees.pdf). 


## Batch jobs

The command `sbatch` is used to submit jobs to the `SLURM` queue

```bash
[..]$ sbatch submit_script
```

A batch submit script usually starts like this

```bash
#!/bin/bash
#SBATCH --mail-type=ALL
#SBATCH --mail-user=<Your E-mail> # for example uname@hi.is
#SBATCH --partition=48cpu_192mem  # request node from a specific partition
#SBATCH --nodes=2                 # number of nodes
#SBATCH --ntasks-per-node=48      # 48 cores per node (96 in total)
#SBATCH --mem-per-cpu=3900        # MB RAM per cpu core
#SBATCH --time=0-04:00:00         # run for 4 hours maximum (DD-HH:MM:SS)
#SBATCH --hint=nomultithread      # Suppress multithread
#SBATCH --output=slurm_job_output.log   
#SBATCH --error=slurm_job_errors.log   # Logs if job crashes

. ~/.program_env_bash

mpirun python job.py
```

Here two nodes from the `48mem_192mem` partition is requested, using 48 processors per node for a total of 96 processors. The memory per cpu-core is set to 3900MB RAM. See the [Partitions & Hardware](/docs/hardware/parthardw) for details on the available partitions.

When the `SLURM` scheduler has allocated the resources the subsequent lines are executed in order. First a program environment bash is loaded (see [Program Environment](/docs/compiling/easybuild)), and an `mpirun` instance of a Python script is executed.

Hyper-threading of the intel based CPUs is on by default, hence it is
is highly recommended to suppress it in your submit (or .bashrc) script
(unless your software supports and is correctly compiled with openmp).

For .basrhc

```bash                                                                 
export OMP_NUM_THREADS=1
export MKL_NUM_THREADS=1
```

After submitting a job you can view the current status and jobids' like this

```bash
[..]$ squeue -u $USER
JOBID PARTITION     NAME    USER    ST  TIME  NODES NODELIST(REASON)
11729 48cpu_192 Interact   <uname>  R   2:10      1 compute-17
```

You can cancel a job using the JOBID number. In this example

```bash
[..]$ scancel 11729
```

IF your job requires a lot of input data, or if it generates a lot of output it is advisable to make use of the **/scratch/** disk available on the compute nodes. See the next [section](scratch_disk).
