---
slug: scratch_disk
---

# Skrapdiskar

Hratt **I/O** (inntak/úttak) er auðveldað með notkun staðbundinna skrapdiska sem til eru á tölvuhnútunum

:::note
**MIKILVÆGT:** Mikilvægt er að nýta **Elju** á skilvirkan hátt og hægja eki á netumferð um þyrpinguna. Þess vegna er ráðlagt að afrita gögnin og inntakið fyrir starfið þitt yfir á staðbundinn skrapdisk á reiknihnútunum (**/scratch/users**) og ræsa forritið þaðán. Ef þessu skrefi er sleppt mun forritið
keyra fjarstýrti á reiknihnútunum en mun stöðugt lesa/skrifa frá/í heima skrána á **NFS** þjóninum. Þetta skapar mikla netumferð og hægir á notkun **Elju** fyrir alla. Það mun einnig hægja á verkinu sjálfu.
:::

## Notkun /scratch/users/ með SBATCH

Dæmið hér gerir ráð fyrir að notandinn sé að vinna með **SBATCH** lotu skriftu og í einhverri vinnuskrá í heimamöppu notenda. Til dæmis:

```bash
[..]$ pwd
[..]$ /users/home/<uname>/myjob
```

og **SBATCH** sendingar skriftan er í sömu möppu

```bash
[..]$ /users/home/<uname>/myjob/submit.sh
```

Dæmi um bash línur fyrir **/scratch/users/** eru að neðán. 
Eftirfarandi línum ætti að bæta við **SBATCH** skriftuna þína.
Dæmi um **SBATCH** skriftu er veitt í lokin.


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
scp -l 40000 $SLURM_SUBMIT_DIR/myinput $tdir/

# If the program needs many input files you can add a separate line for each file.

# If your job requires a directory of input files
# cp -r $SLURM_SUBMIT_DIR/myinputdir $tdir/

# Now the run the job from the temporary directory e.g.
myprogram myinput

# After the job is completed make sure to copy the output to your submit directory.
scp -l 40000 $tdir/myoutputfiles $SLURM_SUBMIT_DIR/

# If the program produces many output files you can add a separate line for each file.
# Please try to only copy the files that you need.

# IMPORTANT. Delete the temporary directory and all of its content
rm -rf $tdir

```
An example **SBATCH** script for a typical Python job is provided [here](../files/py_submit.txt). Similar commands can be used when the user is in an [interactive session](04_interactive.md).




## Notkun /scratch/users/ á gagnvirkri lotu
Dæmið hér gerir ráð fyrir að notandinn sé að vinna í **gagnvirkri lotu** og í einhverri vinnuskrá í heimamöppu notenda. Til dæmis

```bash
[..]$ pwd
[..]$ /users/home/<uname>/myjob
```

Dæmi um bash línur fyrir **/scratch/users/** er að finna hér að neðan á meðan **gagnvirkr lotu** stendur. Dæmu um hvernig á að tengjast gagnvirkr lotu er að finna [hér](04_interactive.md).

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

Dæmi um **SBATCH** skriftu fyrir týpískt Python verkefni er að finna [hér](../../../../../docs/files/py_submit.txt). Samskonar skipanir er hægt að nota í [gagnvirkri lotu](04_interactive.md).
