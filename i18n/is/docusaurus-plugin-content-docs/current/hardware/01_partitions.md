---
slug: parthardw
---

# Partitions & SLURM

Til að fá upplýsingar um lausa hnúða og skilrúm notaðu eftirfarandi skipun:

```bash
sinfo
```

Fyrir efnismeiri upplýsingar fyrir ákveðna skiptingu:


```bash
scontrol show partition <partition-name>
```

Innskráningar og stjórn hnútar Elju hýsa tvær reikniþyrpingar: 
HPC-Elja and HTC-Mimir. 
Skilrúm og hópar eru notaðir til að aðskilja þessa tvo.

# Skipting & SLURM

Til að skoða upplýsingar um tiltæka hnúta og skiptingu, notaðu
eftirfarandi skipanir

``` bash
sinfo
```

Fyrir ítarlegri upplýsingar fyrir tiltekna skiptingu

``` bash
scontrol sýna skipting <nafn skiptingar>
```

Innskráningar- og stjórnhnútar Elju
hýsa tvo tölvuklasa: HPC-Elja og HTC-Mimir. Skilrúm og hópar
eru notuð til að aðskilja þetta tvennt.

### HPC-Elja : Tiltæk skipting / Reiknihnútar

| Count |  Name | Cores/Node | Memory/Node (Gib) | Features        |
|-------|----------|------------|-------------------|-----------------|
| 28    | 48cpu_192mem  | 48 (2x24)     | 192 (188)      | Intl Gold 6248R                |
| 55    | 64cpu_256mem  | 64 (2x32)     | 256 (252)     | Intl Platinum 8358               |
| 4    | 128cpu_256mem  | 128 (2x64)     | 256 (252)     | AMD EPYC 7713                |
| 3     | gpu-1xA100    | 64 (2x32)     | 192 (188)   | Nvidia A100 Tesla GPU |
| 5     | gpu-2xA100    | 64 (2x32)     | 192 (188)   | Dual Nvidia A100 Tesla GPU |

Hlutfall kjarna og sanns (minni) jafngildir **3,9Gb** á hvern kjarna.

#### HPC-Elja: Keyrslu takmörk

Hver skipting hefur að hámarki sjö (**7**) daga tímamörk. Að auki eru biðraðirnar **any_cpu** og **long**:
- **any_cpu**, allir CPU hnútar, einn (**1**) dags tímamörk
- **langur**, tíu 48cpu og tíu 64cpu hnútar, fjórtán (**14**) daga tímamörk

### HTC-Mimir : Tiltæk skipting / Reiknihnútar
| Count |  Name | Cores/Node | Memory/Node (Gib) | Features        |
|-------|----------|------------|-------------------|-----------------|
| 9    | mimir  | 64 (2x32)       | 256 (252)     |                 |
| 1     | mimir-himem    | 64 (2x32)       | 2048 (2044)             |                 |

Hlutfall kjarna og sanns (minni) jafngildir **3,9Gb** á hvern kjarna á **mimir** skiptingunni og **31Gb** á mimir-himem skiptingunni.

#### HTC-Mimir : Keyrslu takmörk

Hvor skiptingin hefur fjórtán (**14**) daga tímamörk.

### SLURM Stillingar

SLURM er stillt þannig að **3,94**GB af minni er úthlutað á kjarna.

### Available Memory

### Tiltækt minni

Á hverjum hnút er 2-4 Gib vinnsluminni frátekið fyrir stýrikerfismyndirnar (þess vegna er hið sanna gildi í sviga).


