---
slug : AlphaFold
---

# AlphaFold

## Introduction
In short AlphaFold is groundbreaking AI system that is making research faster in the field of bioinformatics. To use AlphaFold the system first takes in a sequence of an amino acid and will then predict three dimensional structure of a protein and does so extremely efficiently.

Read more on the AlphaFold official [website](https://www.deepmind.com/research/highlighted-research/alphafold).

This section on AlphaFold will go through how to use AlphaFold on Elja.

---

## 1. Getting started

There are many ways to get AlphaFold installed. The installation method that was used to install AlphaFold on Elja was cloning the following github [repository](https://github.com/deepmind/alphafold.git) developed by Deepmind (creators of AlphaFold).

In that repository is a [**Docker**](https://Docker.com) file but [**Docker**](https://Docker.com) will not be implemented on the HPC environment due to **security issues**. What was then decided was to add another git repository into the system called **alphafold_non_docker** which can be cloned from the following github [repository](https://github.com/kalininalab/alphafold_non_docker). 

---


### 1.2 Required Tools and libraries
Table that lists all the  main dependencies required by AlphaFold to run 

<center>

|  Dependencies                        | Req. version         | Version on Elja            |
| ------------------------------------ | --------------- |------------------------- |
|Python                                |    ≥3.6         |3.10.4                    |
|Biopython                             |    1.79         |1.79                      |
|absl-py	                           |    1.0.0        |1.3.0                     |
|chex                                  |    0.0.7        |0.1.5                     |
|dm-haiku                              |    0.0.9        |0.0.10.dev                |
|dm-tree                               |    0.1.6        |0.1.8                     |
|immutabledict                         |    2.0.0        |2.2.3                     |
|jax/jaxlib         |    0.3.25       |0.4.1.CUDA                     |
|ml-collections                        |    0.1.0        |0.1.1                     |
|numpy                                 |    1.21.6       |1.24.1                    |
|scipy                                 |    1.7.0        |1.11.0dev                 |
|pandas                                |    1.3.4        |1.3.4                     |
|protobuf                              |    3.19.6       |3.19.6                    |
|tensorflow-cpu                        |    2.9.0        |2.11.0                    |
|OpenMM-7.7.0                          |    7.5.1        |7.7.0.CUDA                     |


*Table 1. This table displays all main dependencies that are required to install AlphaFold*

</center>

---
## 2 Run AlphaFold on Elja

:::note
**Required:** It is recommended to run AlphaFold on the open-source terminal server tmux to maintain an interactive session. To know how to tmux check on the following page about  [Interactive Sessions](/docs/elja/interactive_session#maintained-interactive-sessions) on Elja.

Alternatively AlphaFold can be run using sbatch and batch sumbission scripts. To submit it as a job to the SLURM queue using sbatch see the following section: [Submitting Batch Jobs](/docs/elja/submit_jobs).

AlphaFold will only run efficinetly on the gpu compute nodes!!!
:::

### 2.1 Loading AlphaFold
Before being able to run AlphaFold on Elja, you will have to load the AlphaFold module. To do this you type these following commands in the terminal:

```bash
[..]$ ml use /hpcapps/libbio-gpu/modules/all/
[..]$ ml load AlphaFold
```

---


### 2.2 Running AlphaFold 
To run AlphaFold you will have to type ```run_alphaFold.sh``` with parameters which you can find [here](https://github.com/kalininalab/alphafold_non_docker#running-alphafold-v231). An example of an AlphaFold run would look like this: 

```bash
[..] $ run_alphafold.sh -d /AlphaFoldData/AlphaFold/data -o /hpcapps/source/alphafold_non_docker/dummy_test/ -f /hpcapps/source/alphafold_non_docker/example/query.fasta -t 2020-05-14
```
Note that **-d /AlphaFoldData/AlphaFold/data** is always necessary as this is the location of the AlpaFold database which the machine learned code is based on.
-->