---
slug : singularity
---

# Singularity

:::note
Some software will work better in other environments for example [AlphaFold](./04_AlphaFold.md)
:::

## What is Singularity?
Singularity is a container platform, similar to Docker. It allows our users to create and run containers in a way that all the software pieces of the package can be reproduced. 
Users can build a container on their local computer and then run it on Elja or pull existing images from the [Singularity Library](https://cloud.sylabs.io/library) or [Docker Hub](https://hub.docker.com)

## Singularity basic usage

Singularity offers a docker like container system. 
To use singularity on **Elja** you must first start an interactive session:

```bash
$ srun --job-name "Singularity Job" --partition 48cpu_192mem --time 01:00:00 --pty bash 
```
To learn more about interactive sessions see [here](../elja/04_interactive.md).

### Getting images

Once you are in an interactive session you can use the ```singularity``` command:
```bash
$ singularity --version
singularity-ce version 3.11.4-1.el8
```
There are both native Singularity images, those are provided on Singularities Container Library, ```pull``` simply downloads the image file to your system.

```bash
$ singularity pull library://sylabsed/linux/alpine
```

You can also ```pull``` docker images, from the [Docker Hub](https://hub.docker.com/) in that case ```pull``` downloads the image file from docker and combines them in layers which are combined into a usabale Singularity file

```bash
$ singularity pull docker://godlovedc/lolcow
```

Pulling docker images reduces reproducibility. If you were to pull a docker image today and then wait six months and pull again, your are not guaranteed to get the same image. If any of the source layers has changed the image will be altered. If reproducibility is a priority for you, try building your images from the Container Library.

You can also use the ```build``` command to domwnload pre-built images from an external resource. When using build you must specify a name for your container like so:

```bash
$ singularity build ubuntu.sif library://ubuntu

$ singularity build lolcow.sif docker://godlovedc/lolcow
```

unlike ```pull```, ```build``` will convert your image to the latest Singularity image format after downloading it.

### Interact with images

You can use the ```search``` command to locate groups, collections, and containers of interest on the [Container Library](https://cloud.sylabs.io/library).

```bash
$ singularity search metaerg
Found 1 container images for amd64 matching "metaerg":

        library://rbazile/default/metaerg:1.0.4,amd64,latest
```

To run the container you can either run it in interactive mode or execute commands on it

```bash
$ singularity shell lolcow_latest.sif
Singularity> cowsay This is from a shell
 ______________________
< This is from a shell >
 ----------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```

Shell also works with the ```library://```, ```docker://``` and ```shub://``` URI's.  This creates a temporary container that dissapears when the shell is exited

```bash
singularity shell library://sylabsed/examples/lolcow
INFO:    Using cached image
Singularity> cowsay This container will self destruct when it is exited
 ________________________________________
/ This container will self destruct when \
\ it is exited                           /
 ----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

### Executing commands

The exec commands allows you to execute a custom command within the container by specifing the ```.sif``` file. For instance:

```bash
 singularity exec lolcow_latest.sif cowsay i am cat
 __________
< i am cat >
 ----------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

```exec``` also works with the ```library://```, ```docker://``` and ```shub://``` URIs. THis creates a temporary container that executes a command and destructs.

```bash
singularity exec library://sylabsed/examples/lolcow cowsay "THIS CONTAINER WILL BE DESTROYED"
INFO:    Using cached image
 __________________________________
< THIS CONTAINER WILL BE DESTROYED >
 ----------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

### Running a container

Singularity containers contain [runscripts](https://docs.sylabs.io/guides/3.0/user-guide/definition_files.html#runscript). These are user defined scripts that define the actions a container should perform when somone runs it. This can be triggered with the run command, or by calling the container as though it were an executable.

```bash
$ singularity run lolcow_latest.sif
 _____________________________________
/ You have been selected for a secret \
\ mission.                            /
 -------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

$ ./lolcow_latest.sif
 ____________________________________
/ Q: What is orange and goes "click, \
\ click?" A: A ball point carrot.    /
 ------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

```run``` also works with the ```library://``` and ```docker://``` URIs. This creates a temporary container that destructs when it finishes.

```bash
singularity run library://sylabsed/examples/lolcow
INFO:    Using cached image
 ______________________________________
/ April 1                              \
|                                      |
| This is the day upon which we are    |
| reminded of what we are on the other |
| three hundred and sixty-four.        |
|                                      |
| -- Mark Twain, "Pudd'nhead Wilson's  |
\ Calendar"                            /
 --------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Working with files

```bash
$ echo "Hello from inside the container" > $HOME/hostfile.txt

$ singularity exec lolcow_latest.sif cat $HOME/hostfile.txt

Hello from inside the container
```

This works because ```hostfile.txt``` exists in the user's home directory. Singularity mounts ```/home/$USER```, ```/tmp``` and ```$PWD``` into your container at runtime.

You can specify additinoal directories to bind mount into your container with the --bind option for example ```/scratch/$USER/data``` 

```bash
$ echo "Do science!" > /scratch/$USER/data/text.txt
$ singularity exec --bind /scratch/$USER/data:/mnt lolcow_latest.sif cat /mnt/text.text
Do science!
```

In this case the ```/scratch/$USER/data``` directori is bind mounted to ```/mnt``` inside the container.

Pipes and redirects also work with Singularity commands just like they do with normal Linux commands:

```bash
cat /scratch/$USER/data/text.txt | singularity exec lolcow_latest.sif cowsay
 _____________
< Do science! >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```

## Building custom images

In this section, we will go over on how you can build a brand new custom container.

:::note
Building containers requires **sudo** privileges and therefore you cannot run it on **Elja**. 
It is recommended to build the containers on your local machine and copy them over to **Elja**
:::

To build a singularity container, you must first download **Singularity** on to your local machine since some of the commands require sudo privileges, and then use the build command.
**Singularity** is available for Windows, MacOS and Linux, more information can be found [here](https://docs.sylabs.io/guides/3.0/user-guide/installation.html)

We will begin by creating a writable container, also known as a sandbox, and shell into that contaiver with the ```--writable``` option and tinker with it interactively.
We will then add our changes to our definition(*.def*) file and use that to rebuild the container. 

```bash
$ mkdir lolcow
$ cd lolcow
$ touch lolcow.def
$ vim lolcow.def
```

The *.def* file should contain the following lines:
```bash
BootStrap: debootstrap
OSVersion: stable
MirrorURL: http://ftp.us.debian.org/debian/

%runscript
    echo "This is what happens when you run the container..."

%post
    echo "Hello from inside the container"
    apt-get -y --allow-unauthenticated install vim
```

Using this definition file as as starting point, we can start to build our lolcow.img container. The build command requires ```sudo``` privileges.

```bash
$ sudo singularity build --sandbox lolcow lolcow.def
```

Singularity will build a container called *lolcow* from the *lolcow.def* definition file. The ```--sandbox``` option tells Singularity that wewant to build a special type of container, called a sandbox, for development purposes.

Next we will use the ```shell --writable``` option to modify our container.
```bash
$ sudo singularity shell --writable lolcow
```

The ```--writable``` option will allow us to modify the container. The changes will be saved into the contain and presist across uses.

Now lets install some software.
```bash
Singularity> apt-get update

Singularity> apt-get install -y fortune cowsay lolcat
```

Now we should be able to run these programs.
```bash
Singularity> fortune | cowsay | lolcat
bash: lolcat: command not found
bash: cowsay: command not found
bash: fortune: command not found
```

The programs were not added to our ```$PATH```. Let's fix that and try again.

```bash
Singularity> find /usr -name cowsay
/usr/games/cowsay

Singularity> export PATH=$PATH:/usr/games
Singularity> fortune | cowsay | lolcat
 _______________________________
< Be careful! Is it classified? >
 -------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
Note: If you receive warnings from Perl language about locale being incorrect, you can fix them with ```export LC_ALL=C```.

Now we can build the final SIF file. For debugging shelling into you Singularity container and amking changes is fine, but in the end you want all these changes to be in your definition file. Keeping the changes in the definition file wil make the container reproducable.

Let's update the definition file with the changes we made.
```bash
$ vim lolcow.def
```

Here is the what the updated definition file should look like:
```bash
BootStrap: debootstrap
OSVersion: stable
MirrorURL: http://ftp.us.debian.org/debian/

%runscript
    fortune | cowsay | lolcat

%post
    apt-get update
    apt-get -y install fortune cowsay lolcat

%environment
    export LC_ALL=C
    export PATH=$PATH:/usr/games
```

Now we can rebuild the container with the new definition file.

```bash
$ sudo singularity build lolcow.sif lolcow.def
```

We have ommitted the ```--sandbox``` option and added the *.sif* extension to the container. A SIF file is compressed and immutable making it a good choice for a production environment.

Now you should be able to run your production container
```bash
$ singularity run lolcow.sif
 ______________________________________ 
/ A robin redbreast in a cage Puts all \
| Heaven in a rage.                    |
|                                      |
\ -- Blake                             /
 -------------------------------------- 
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

#### Moving containers to Elja
We have our working container and want to start running it on the HPC cluster. To do this we will have to use SCP

```bash
$ scp -i ~/.ssh/<Your private SSH key> /path/to/containers/lolcow.sif <username>@elja.hi.is:~/containers     
```
The container will now be available in your home directory on **Elja** and you can now run it on the compute/gpu nodes with **SLURM**

## Running singularity with SLURM

### GPU example
First, start an interactive GPU job and then download the Singularity image hello-world.sif:
[How to start an interactive job](/docs/elja/interactive_session)

```bash 
$ srun --job-name "InteractiveGPU" --partition gpu-1xA100 --time 0-01:00 --pty bash
$ singularity pull --name lolcow.sif library://sylabsed/examples/lolcow_latest
```

To access Nvidia GPU card driver installed inside of Singularity container you need to use --nv option while executing the container. To verify that you have access to the requested GPUs, run nvidia-smi inside the container:

```bash 
$ singularity exec --nv lolcow.sif /bin/bash
Singularity> nvidia-smi
 +-----------------------------------------------------------------------------+
| NVIDIA-SMI x96.26 Driver Version: 396.26 |
|-------------------------------+----------------------+----------------------+
| GPU Name Persistence-M| Bus-Id Disp.A | Volatile Uncorr. ECC |
| Fan Temp Perf Pwr:Usage/Cap| Memory-Usage | GPU-Util Compute M. |
|===============================+======================+======================|
| 0 Tesla K20Xm Off | 00000000:88:00.0 Off | 0 |
| N/A 37C P0 61W / 235W | 0MiB / 5700MiB | 65% Default |
+-------------------------------+----------------------+----------------------+
``` 

### Singularity containers as SLURM jobs
You can use singularity images as a non-interactive batch script as you would any other command. If your image contains a run-script then you can use ```singularity run```
to execute the run-script in the job. You can also use singularity exec to execute arbritary commands (or scripts) within the image.
Example:
```bash
#!/bin/bash
#SBATCH -J singularity_job
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

# Singularity command line options
singularity exec lolcow_latest.sif cowsay
# or use run instead of exec.
```

If the above batch-job script is named singularity_job.sbatch, for instance, the job is submitted as usual with sbatch.
```bash
$ sbatch singularity_job.sbatch
```
