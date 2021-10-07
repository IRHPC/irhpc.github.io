---
slug: terminology
---

# Terminology

Some terms which are used throughout:

- **Login node** :: front facing node where you can log into to submit, monitor and view the results of your jobs. It is not intended for number chrunching or computations.

- **Job** :: in order to run calculations on the `HPC` cluster, one submits a job. This job consists of the executable program to run as well as command line arguments which configure the `SLURM` scheduler.

- **Compute nodes** :: The work horses of the `HPC` cluster where computations are performed. Most of the nodes fall under this category. 

- **Partition** :: A partition defines a set of compute nodes which fall under the same category, reflecting for example different hardware.

- **Scheduler** :: A software running on the login node which is responsible for allocating resources to jobs in the queue. The Elja `HPC` makes use of the `SLURM` scheduler.

- **Queue** :: a list of jobs waiting to be allocated resources. The amount of time spent in the queue depends on the amount of resources and time requested. The queue and priority therein is controlled by the `SLURM` scheduler. 
