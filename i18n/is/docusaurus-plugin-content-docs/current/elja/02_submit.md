---
slug: submit_jobs
---

# Senda inn lotuverkefni

## SLURM

Elja notar `SLURM` sem lotuáætlun og tilfangastjóra.
Algengar grunnskipanir eru teknar saman hér að neðan.

| Skipun                      | Lýsing                           |
|-----------------------------|--------------------------------------|
| `sbatch`                    | Senda inn lotuskriftu           |
| `srun`                      | Keyrir samhliða lotu                   |
| `squeue` (-a, -u $USER) | sýnur stöðu SLURM biðraðrinnar                    |
| `sinfo`                     | Sýnir upplýsingar um hnúta og sneiðar |
| `scancel` **JOBID**         | Hætta við keyrslu                         |

### Fairshare
TölvuKlasinn veitir Slurm Fairshare Algrím. Hann skipuleggur hvaða vinnslur í slurm biðröðinni ætti að keyrast á undan og metur það útfrá sanngjörnum hlutdeildarstuðli milli vinnsla sem er reiknað út með ákvðenari jöfnu.

Þessi jafna tekur tillit til margra þátta eins og fjölda hnúta sem notandi óskar eftir. Nánari upplýsingar um þessa jöfnu er að hægt að finna [hér](https://slurm.schedmd.com/fair_tree.html#fairshare). 

Varðandi meiri hvar er hægt að finna fleiri upplýsingar um Fairshare þá er hægt að finna það á  opinberu vefsíðunni þeirra [hér](https://slurm.schedmd.com/fair_tree.html) og [hér](https://slurm.schedmd.com/SLUG19/Priority_and_Fair_Trees.pdf). 

### Job Array
Það geta komið tilfelli þegar notandi notar margar nóður sem keyra sama hlutinn nema með öðrum parametrum. Þetta getur valdið því að margir reiknihnútar verða uppteknir og hefur það að verkum að aðrir notendur geti ekki notað nóðurnar sem eru í notkun út af þessari stórri vinnslu. *Job Array* biður upp á að geta bæði keyrt og haldið utan um safn af svipuðum vinnslum. Þessar vinnslur geta ver settar inn í biðraðakerfið mjög fljótlega. Eina sem þarf að hafa í huga er að vinnslurnar þurfa að hafa sömu kröfur áður en þær eru keyrðar.  

Til þess að setja þetta upp þá þarf að bæta línunni  yfir í ```#SBATCH --array=... #example --array=1-5 ``` sbatch script-una og einnig að auki þarf að bæta við  ```$SLURM_ARRAY_TASK_ID```  sem parametri í forritið sem notandi ætlar að keyra dæmi um slíka úitfærslu:

```bash
mpirun python job.py $SLURM_ARRAY_TASK_ID
```

Hvernig á að setja upp sbatch skript-u er hægt að finna í [þessum](#lotustörf) kafla

### Lotustörf

Skipunin `sbatch` er notuð til áð senda verk í `SLURM` biðröðina

```bash
[..]$ sbatch submit_script
```
Lotu skrifta byrjar vanalega svona

```bash
#!/bin/bash
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

. ~/.program_env_bash

mpirun python job.py
```

Hér er beðið um tvo hnúta úr `48mem_192mem` skiptingunni, sem notar 48 örgjörva á hvern hnút fyrir samtals 96 örgjörva. Minnið á hvern kjarna er stillt á 3900MB vinnsluminni. Sjá [Skilrúm og búnaður](../hardware/01_partitions.md) fyrir upplýsingar um tiltækar skiptingarnar.

Þegar `SLURM` áætlarinn hefur úthlutað tilföngum eru næstu línur keyrðar í röð. Fyrst er forritunar umhverfið hlaðið inn (sjá [Forritunar Umhverfi](../software/01_packages.md)), og `mpirun` tilvik af Python skriftu er keyrt.

Ofðráðun (e. Hyper-threading) er sjálfgefið á Intel örgjörvum, og er mælt með því að bæla það niður í lotu (eðá .bashrc) skriftunni þinni (Nema hugbúnaðurinn þinn styðji og sé rétt settur saman með openmp)

Fyrir .basrhc

```bash                                                                 
export OMP_NUM_THREADS=1
export MKL_NUM_THREADS=1
```
Eftir að skila inn lotustarfi getur þú séð stöðu og starfsauðkenni á þennan hátt:

```bash
[..]$ squeue -u $USER
JOBID PARTITION     NAME    USER    ST  TIME  NODES NODELIST(REASON)
11729 48cpu_192 Interact   <uname>  R   2:10      1 compute-17
```

Þú getur hætt við lotustarf með starfsauðkennis númerinu eins og í þessu dæmi:

```bash
[..]$ scancel 11729
```

**EF** lotustarfið þitt þarf mikið af inntaks gögnum, eða ef það framkallar mikið úttak, er mælt með því að nota **/scratch/** disk sem er í boði á öllum reiknihnútum. Sjá næsta [lið](03_scratch.md).
