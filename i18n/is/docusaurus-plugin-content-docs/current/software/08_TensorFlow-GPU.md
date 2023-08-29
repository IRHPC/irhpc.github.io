---
slug : TensorFlow-GPU
---

# TensorFlow

## Inngangur 

TensorFlow með skjákortsstuðning (TF2-gpu) er í boði til notkunar á **Elju**. Lestu meira um TensorFlow á [hér](https://www.tensorflow.org/).

---

## Getting started

TF2-gpu er pakkað í conda umhverfi. Til að nota conda umhverfið vinsamlegast fylgdu **uppsetningar** leiðbeiningunum sem gefnar eru [hér](./02_rcondapython.md). Þegar uppsetningu conda er lokið geturðu hlaðið inn í TF2-gpu umhverfið eins og hér:


```bash
[..]$ module use /hpcapps/libbio-gpu/modules/all/
[..]$ ml load tf2-gpu
[..]$ conda activate /hpcapps/conda_env/TF2-gpu/2.4.1
```

---

### Dæmi um lotu skrá

Það er nauðsynlegt að keyra TF2-gpu á GPU hnútunum. Dæmi um SBATCH prófunar skró er veitt
hér að neðan. Til að keyra prófið þarftu fyrst að klóna þessa [geymslu](https://github.com/PrincetonUniversity/slurm_mnist).

```bash
[..]$ cd $HOME
[..]$ git clone https://github.com/PrincetonUniversity/slurm_mnist.git
[..]$ cd slurm_mnist
```

Afritaðu eftirfarandi SBATCH skriftu inn í **slurm_mnist** möppuna

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
Nú getur þú sent lotuna af staf.

```bash
[..]$ sbatch submit.slurm
```

---

### Gagnvirk keyrsla

Í þessu prófunartilviki, vertu viss um að þú hafir klónað þessa [geymslu](https://github.com/PrincetonUniversity/slurm_mnist) (sjá kaflann hér að ofan).

```bash
[..]$ srun --job-name "TF2-gpu" --partition gpu-1xA100 --time 1-00:00:00 --pty bash
```
Hlaðið inn í einingarnar og virkjaðu TF2-gpu umhverfið

```bash
[..]$ module use /hpcapps/libbio-gpu/modules/all/
[..]$ ml load tf2-gpu
[..]$ conda activate /hpcapps/conda_env/TF2-gpu/2.4.1
```

Farðu inn í **slurm_mnist** möppuna

```bash 
[..]$ cd $HOME/slurm_mnist
```
Keyrðu prufu skriftuna

```bash
[..]$ python mnist_classify.py
```
