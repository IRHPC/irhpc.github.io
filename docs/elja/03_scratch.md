---
slug: scratch_disk
---

# Scratch Disks

Fast **I/O** (input/output) is facilitated with use of the local scratch disks available on the compute nodes.

:::note
**IMPORTANT:** It is important to make efficient use of Elja and to not slow down the network traffic on the cluster. Hence, it is advisable to copy the data and input for your job over to the local scratch disk on the compute nodes (**/scratch/users/**) and launch the program from there. If this step is omitted then the program will run remotely on the compute nodes but will constantly read/write from/to the submit directory on the **NFS** server. This creates a lot of network traffic and slows down the use of Elja for everybody. It will also slow down the job itself.
:::

## Using /scratch/users/ with SBATCH

The example here assumes the user is working with **SBATCH** scripts and in some work directory in the users home folder. For example

```bash
[..]$ pwd
[..]$ /users/home/<uname>/myjob
```

and your **SBATCH** submit script is in the same directory

```bash
[..]$ /users/home/<uname>/myjob/submit.sh
```

Example of bash lines for **/scratch/users/** are provided below. The following lines should be added to your **SBATCH** script. An example **SBATCH** script is provided at the end.

```bash
[..]$ cat submit.sh
..
# Location of scratch directory on the compute nodes
scratchlocation=/scratch/users

# Create a user directory if it does not exist
if [ ! -d $scratchlocation/$USER ]; then
    mkdir -p $scratchlocation/$USER
fi

# Create a temporary directory with a unique identifier associated with your jobid
tdir=$(mktemp -d $scratchlocation/$USER/$SLURM_JOB_ID-XXXX)

# Go to the temporary directory
cd $tdir

# Exit if tdir does not exist
if [ ! -d $tdir ]; then
    echo "Temporary scratch directory does not exist ..."
    echo "Something is wrong, contact support."
    exit
fi

# Copy the necessary input files to run your job
cp $SLURM_SUBMIT_DIR/myinput $tdir/

# If the program needs many input files you can add a separate line for each file.

# If your job requires a directory of input files
# cp -r $SLURM_SUBMIT_DIR/myinputdir $tdir/

# Now the run the job from the temporary directory e.g.
myprogram myinput

# After the job is completed make sure to copy the output to your submit directory.
cp $tdir/myoutputfiles $SLURM_SUBMIT_DIR/

# If the program produces many output files you can add a separate line for each file.
# Please try to only copy the files that you need.

# IMPORTANT. Delete the temporary directory and all of its content
rm -rf $tdir

```
An example **SBATCH** script for a typical Python job is provided [here](../files/py_submit.txt). Similar commands can be used when the user is in an [interactive session](interactive_session).



## Using /scratch/users/ on an interactive session
The example here assumes the user is working on an **interactive session** and in some work directory in the users home folder. For example

```bash
[..]$ pwd
[..]$ /users/home/<uname>/myjob
```


Example of bash lines for **/scratch/users/** are provided below while on an **Interactive Session**. An example on how to connect to an interactive session  can be found [here](interactive_session)

```bash
$ export scratchlocation=/scratch/users 

# Create a user directory if it does not exist
$ [ ! -d "$scratchlocation/$USER" ] && mkdir "$scratchlocation/$USER"


# Create a temporary directory with a unique identifier associated with your jobid
$ tdir=$(mktemp -d "$scratchlocation/$USER/temp_dir.XXXXXX")


# Go to the temporary directory
$ cd $tdir

# Copy the necessary input files to run your job
$ cp submit_to_scratch_dir $tdir/

# Run the program from your temporary directory
myprogram myinput

# After the job is completed make sure to copy the output to your submit directory.
$ cp $tdir/myoutputfiles submit_to_scratch_dir/

# If the program produces many output files you can add a separate line for each file.
# Please try to only copy the files that you need.


# IMPORTANT. Delete the temporary directory and all of its content
$ rm -rf $tdir
```

An example **SBATCH** script for a typical Python job is provided [here](../files/py_submit.txt). Similar commands can be used when the user is in an [interactive session](interactive_session).