---
slug: Data_Management
---

# Data Management and Transfers on The NFS disk
Like mentioned in the [Scratch Disk section](./03_scratch.md) when causing network traffic to the NFS disk it will slow down processes on Elja, resulting in a sluggish behavior for all other Elja users working in their home directory. If you need to transfer data to or from the NFS disk then it is required to set the bandwidth to a **maximum 40000 Kbit/s (5 Megabytes)**. If the user does not set the bandwidth in that range then the system administrators will shut down the process and notify the individual.

Below are different methods on how to apply bandwidth restriction to [rsync](#rsync) and [scp](#scp)

### rsync
To restrict the bandwidth when using  ```rsync``` you will have to add the parameter ```--bwlimit=40000``` like the following:

```bash 
$ rsync -av --bwlimit=40000-e "ssh -i /path/to/your/ssh/keyfile" <uname>@elja.hi.is:/users/home/<uname>/../data /path/on/local/computer/ # -av Archive mode with verbose input
```

This command shows an example for a user who is transferring data that is located in the users home directory on Elja to the location "path/on/local/computer" on the local computer. 

### scp
To restrict the bandwidth when using ```scp``` you will need to add the parameter ```-l 40000```. An example of such a case is displayed here below

```bash
$ scp -l 40000 -p -r <uname>@elja.hi.is:/hpcapps/users/home/<uname>/ .
```
Here we are transferring data located in a users home directory on Elja to the location on the local machine that the user is currently working in. 
