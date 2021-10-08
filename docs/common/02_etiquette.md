---
slug: etiquette
---

# Etiquette

Congratulations on getting an account on one of the IRHPC clusters. The documentation here is applicable to all of the machines. Please read this page carefully, and if you are in any doubt on how to perform your tasks on the cluster do not hesitate to contact support.

<<<<<<< HEAD
=======
- Never give your login password or SSH key to anyone else

>>>>>>> 9a6f4c645b512be8f7d46b903aa245a57d304772
# Login Node

The login node is a shared resource between all of the users. It controls the entire cluster, including SLURM which runs jobs and the queues. 

That is why it should only be used for the following simple tasks:
- Submit jobs
- Edit scripts and files
- Prepare / delete data (scp, cp, mv, rm etc.)
<<<<<<< HEAD
=======
- Run effortless scripts (no computations)
- Compile small software packages (e.g. an in-house code)

# Resource Management

# Data Storage

The disk space on the cluster is similarly a shared resource and is distributed fairly among the users. It is not a limitless resource. 
Hitting your quota stops you from writing data and may cause jobs to fail. 

```bash
quota
```

will reveal your current disk space usage and quota. It is advisable to periodically transfer files or data not being used by jobs from your home directory to your personal computer for storage. See here for more details.

# Scratch Disk
>>>>>>> 9a6f4c645b512be8f7d46b903aa245a57d304772
