---
slug: interactive_session
---

# Interactive Sessions

Sometimes it is necessary to run software - or a combination of software -
directly from the command line on a node (e.g. for data analysis and manipulation).
For example:

```bash
[..]$ srun --job-name "InteractiveJob" --partition 48cpu_192mem --cpus-per-task 24 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash
```

The SLURM scheduler will allocate the requested resource (if available), in this example 24 proccessors from a compute node in the **48cpu_192mem** partition, and 3900MB of RAM memory per processor. The run will last for 1 day (0-00:00:00 : D-HH:MM:SS). 

To see which paritions are available to you type:

```bash
[..]$ sinfo
```

A description of the partitions can be found in [Partitions & Hardware](/docs/hardware/parthardw).

:::note

It is important to always define --mem-per-cpu, and it is recommended to set it to minimum 3900MB per cpu-core. You can request more memory if needed.
 
:::

The `SLURM` queue rules and limits still apply here.

When the interactive session starts you will be logged into a compute node:

```bash
[<uname>@compute-xx]$
```

## Closing the Session

After you have completed your work in your interactive session, please end the session to make the resource available to other users:

```bash
[<uname>@compute-xx]$ exit
``` 

# Maintained Interactive Sessions

Interactive session are closed if the user looses connection or closes the terminal window. 
In order to maintain an interactive session you can make use of [tmux](https://www.howtogeek.com/671422/how-to-use-tmux-on-linux-and-why-its-better-than-screen/).

First activate **tmux**:

```bash              
[..]$ tmux                                          
``` 

and start an interactive session:

```bash                          
[..]$ srun --job-name “InteractiveJob” --partition <partition-name> --cpus-per-task 32 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash                                          
``` 

You interactive session is now attached to **tmux**. 
After starting your calculation you can close the terminal window. 
You can also **detach** from the **tmux** session and return 
to the log in node by pressing **ctrl+b** followed by **d**. 
Your job will still be running.

To activate the session again after logging in to Elja:

```bash
[..]$ tmux attach
```

When you are done working (and you have ended the interactive session) please remember to also end the tmux session like this:

```bash
[..]$ tmux kill-session
```

# Multiple Interactive Sessions

You can start new or multiple **tmux** sessions, and it is suggested to give each session a name.
Here we start a session called **inter-1**

```bash
[..]$ tmux new -s inter-1
``` 

followed by an interactive run. 
After closing or **detaching** you can connect to the named session again like this:
                                                                               
```bash                                                                             
[..]$ tmux attach-session -t inter-1                                                               
``` 

When you are done with the work (and ended the srun), you can end a named session like this:
```bash                                                                                     
[..]$ tmux kill-session -t inter-1                           
```

:::note
When you are finished with running your job interactively 
(whether using **tmux** or not) on a compute node it is important to end the interactive session:
```bash
[<uname>@compute-xx]$ exit
```

If you are unsure of how to connect back to the node you can 
always list your active jobs like this:
```bash
[..]$ squeue -u $USER
JOBID PARTITION     NAME    USER    ST  TIME  NODES NODELIST(REASON)
11729 48cpu_192 Interact   <uname>  R   2:10      1 compute-17
```
and end the job using the JOBID (in this example 11729)
```bash
[..]$ scancel 11729
```
:::


