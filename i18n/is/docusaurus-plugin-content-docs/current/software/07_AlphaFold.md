---
slug : AlphaFold
---


# AlphaFold

Í þessum hluta verður farið í gegnum hvernig á að nota AlphaFold á **Elju**

## Introduction
Í stuttu máli er AlphaFold byltingarkennd gervigreindarkerfi sem gerir rannsóknir hraðari á sviði lífupplýsingafræði. Til að nota AlphaFold tekur kerfið fyrst inn röð af amínósýru og mun síðan spá fyrir um þrívíddarbyggingu próteins og gerir það á afar skilvirkan hátt.

Lestu meira um AlphaFold [hér](https://www.deepmind.com/research/highlighted-research/alphafold).


---

## Að byrja
:::note
Vegna *Nvidia* samhæfnisvandamála krefst **Elja** þess nú að þú keyrir AlphaFold í [Conda](./02_rcondapython.md) umhverfi.
:::

### Setting up the Conda environment

Við byrjum á því að frumstilla conda umhverfið, þetta eru sömu skrefin og sjást í [Conda](./02_rcondapython.md):

```bash
$ module use /hpcapps/lib-mimir/modules/all 
$ module load Anaconda3/2022.05
$ conda config --add channels defaults
$ conda config --add channels bioconda
$ conda config --add channels conda-forge
$ conda config --set auto_activate_base false
$ conda init
$ bash # You can also log out and in again.
```

## Hlaða inn AlphaFold

Þegar conda hefur verið frumstillt og tilbúið til notkunar getum við hlaðið AlphaFold einingu.

```bash
$ ml use /hpcapps/libbio-gpu/modules/all
$ ml load AlphaFold/2.3.1
```
## Keyrðu AlphaFold á Elju

Til að keyra AlphaFold á Elju geturðu annað hvort keyrt [gagnvirka lotu](../elja/interactive_session) eða keyrt [lotuvinnu](../elja/submit_jobs).

### Að hefja gagnvirka lotu

Þú getur hafið gagnvirka lotu með "srun" skipuninni á **GPU** hnút. Þú getur notað `screen` skipunina eða `tmux` til að búa til aukastöð þar sem gagnvirka lotan þín er í gangi í bakgrunni.

```bash
$ srun --job-name "AlphaFold" --partition gpu-1xA100 --time 01:00:00 --pty bash
$ conda activate $env_path
$ run_alphafold.sh -d /AlphaFoldData/AlphaFold/data -o /hpcapps/source/alphafold_non_docker/dummy_test/ -f /hpcapps/source/alphafold_non_docker/example/query.fasta -t 2020-05-14 
```

### Keyra AlphaFold sem lotuvinnu

Búðu til `submit.slurm` skrá sem lítur svona út:
```bash
 cat submit.slurm
#!/bin/bash
#SBATCH --mail-type=ALL
#SBATCH --mail-user=<MAIL>         # for example uname@hi.is
#SBATCH --nodes=1                  # number of nodes
#SBATCH --partition=gpu-1xA100
#SBATCH --time=1-00:00:00          # run for 1 day maximum
#SBATCH --output=slurm_job_output.log
#SBATCH --error=slurm_job_errors.log   # Logs if job crashes

module use /hpcapps/libbio-gpu/modules/all
module load AlphaFold/2.3.1
conda activate $env_path

# Run the command

run_alphafold.sh -d /AlphaFoldData/AlphaFold/data -o /hpcapps/source/alphafold_non_docker/dummy_test/ -f /hpcapps/source/alphafold_non_docker/example/query.fasta -t 2020-05-14 
```

Til þess að hefja keyrslu sláðu inn eftirfarandi:

```bash
$ sbatch submit.slurm
```