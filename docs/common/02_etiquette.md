---
slug: etiquette
---

# Etiquette

Congratulations on getting an account on one of the IRHPC clusters. The documentation here is applicable to all of the machines. Please read this page carefully, and if you are in any doubt on how to perform your tasks on the cluster do not hesitate to contact [support](mailto:help@hi.is).

- Never give your login password or SSH key to anyone else

- Never connect to Elja through an unsecure public network (see [here](docs/connecting/general))


# Login Node

The login node is a shared resource. This is where all of the users perform tasks to prepare and submit their jobs. 

That is why it should only be used for the following simple tasks:
- Submit jobs
- Edit scripts and files
- Prepare / delete data (scp, cp, mv, rm etc.)
- Run effortless scripts (no computations)
- Compile small software packages (e.g. an in-house code)

System administrators will kill processes which are resource intensive.

:::caution
**Repeated offense will result in the suspension of your user account**
:::


# Resource Management

Your home directory which is associated with your username - **<uname\>** - is hosted on the **nfs-irhpc** NFS server 

**/users/home/<uname\>**

The disk space on the NFS server is a shared resource. It is not intended for the storage of large data. It is advisable to delete or periodically transfer files or data not being used for jobs from your home directory to another drive outside of the NFS server for storage, such as your personal computer. See here for more details and instructions.

:::note
IF you require disk space to store large amounts of data (more than **1 Tb**) for later jobs, or if your jobs generate a large amount of data that require further processing please contact [support](mailto:help@hi.is). Other solutions can be provided.
:::

# Scratch Disk

Each compute node has a dedicated **/scratch/** disk (see [here](docs/hardware/specs) for hardware specs). It is a local disk which is intended for the **temporary** storage of data to be processed, and writing of output. This disk facilitates fast **I/O** (input/output) when running jobs. Users have read/write privilages here

**/scratch/users/**

See here for instructions on how to make use of the **/scratch/** disks.

:::note
**IMPORTANT:** It is important to make efficient use of Elja and to not slow down the network traffic on the cluster. Hence, it is advisable to copy the data and input for your job over to the local scratch on the node (**/scratch/users/<uname\>**) and launch the program from the scratch directory. If this step is omitted then the program will run remotely on the compute node but will constanly read/write from the directory on the **NFS** server. This creates a lot of network traffic that slows down the use of Elja for everybody. It will also slow down the job itself.
:::

:::caution
**It is important to make sure you clean up after your job on the /scratch/ disk. IF your job crashes and leaves behind data which you think can be salvaged contact [support](mailto:help@hi.is) as soon as possible. System administrators will delete data on the /scratch/ disks not associated with a running job, without notice.**
:::
