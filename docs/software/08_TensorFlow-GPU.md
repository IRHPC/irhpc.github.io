---
slug : TensorFlow-GPU
---

# TensorFlow

## Introduction

TensorFlow with GPU support (TF2-gpu) is available for use on Elja. Read more about TensorFlow on the official [website](https://www.tensorflow.org/).

---

## Getting started

TF2-gpu is packaged in a conda environment. In order to use the conda environment please follow the **One time setup** instructions provided [here](./02_rcondapython.md). Once your conda setup is complete you can load in the TF2-gpu environment like this

```bash
[..]$ module use /hpcapps/libbio-gpu/modules/all/
[..]$ ml load tf2-gpu
[..]$ conda activate /hpcapps/conda_env/TF2-gpu/2.4.1
```

---

### Example submit script

It is require to run TF2-gpu on the GPU nodes. A sample SBATCH test script is provided 
below. In order to run the test you first need to clone this [repository](https://github.com/PrincetonUniversity/slurm_mnist). 

```bash
[..]$ cd $HOME
[..]$ git clone https://github.com/PrincetonUniversity/slurm_mnist.git
[..]$ cd slurm_mnist
```

Copy the flollowing SBATCH script into the **slurm_mnist** directory

```bash
[..]$ cat submit.slurm
#!/bin/bash
#SBATCH --mail-type=ALL
#SBATCH --mail-user=<MAIL>         # for example uname@hi.is
#SBATCH --nodes=1                  # number of nodes
#SBATCH --partition=gpu-1xA100
#SBATCH --time=1-00:00:00          # run for 1 day maximum
#SBATCH --output=slurm_job_output.log
#SBATCH --error=slurm_job_errors.log   # Logs if job crashes

module use /hpcapps/libbio-gpu/modules/all
module load tf2-gpu
conda activate /hpcapps/conda_env/TF2-gpu/2.4.1

scratchlocation=/scratch/users

# Create a user scratch directory on the compute node
if [ ! -d $scratchlocation/$USER ]; then
    mkdir -p $scratchlocation/$USER
fi

# Create a temporary directory
tdir=$(mktemp -d $scratchlocation/$USER/$SLURM_JOB_ID-XXXX)

# Go to the temporary directory
cd $tdir

# Exit if tdir does not exist
if [ ! -d $tdir ]; then
    echo "Temporary scratch directory does not exist ..."
    echo "Something is wrong, contact support."
    exit
fi

# Copy the necessary run file
cp $SLURM_SUBMIT_DIR/mnist_classify.py $tdir/

# If the program needs more input files you can add a separate line for each file.

# If your job requires a directory of input/data files
# cp -r $SLURM_SUBMIT_DIR/myinputdir $tdir/

# Now the run the job from the temporary directory e.g.
python mnist_classify.py

# Copy the output (if any) to your submit directory.
cp $tdir/* $SLURM_SUBMIT_DIR/

# If the program produces many output files you can add a separate line for each file.
# Please try to only copy the files that you need.

# IMPORTANT. Delete the temporary directory and all of its content
rm -rf $tdir
```

Now submit the job
```bash
[..]$ sbatch submit.slurm
```

---

### Interactive run

For this test case make sure you have cloned this [repository](https://github.com/PrincetonUniversity/slurm_mnist) (see the section above).

Start an interactive session on a GPU node.

```bash
[..]$ srun --job-name "TF2-gpu" --partition gpu-1xA100 --time 1-00:00:00 --pty bash
```

Load in the modules and activate the TF2-gpu environment

```bash
[..]$ module use /hpcapps/libbio-gpu/modules/all/
[..]$ ml load tf2-gpu
[..]$ conda activate /hpcapps/conda_env/TF2-gpu/2.4.1
```

Navigate into the **slurm_mnist** directory

```bash 
[..]$ cd $HOME/slurm_mnist
```

Run the test script
```bash
[..]$ python mnist_classify.py
```
