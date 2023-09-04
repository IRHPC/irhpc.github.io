---
slug : Metaerg
---

# Metaerg

## 0. Introduction
***Metaerg*** is a automated pipeline that uses third-party softwares aswell as a large database to annotate genomes or sets of bins from microbial ecosystems. Example of such annotations tasks are feature prediction with ***HMM***, ***BLAST*** and ***DIAMOND***.


learn more about ***Metaerg*** by reading from their [github repository](https://github.com/xiaoli-dong/metaerg)  and the following [article](https://www.frontiersin.org/articles/10.3389/fgene.2019.00999/full) in [frontiersin](https://www.frontiersin.org/) which was written by the same people who made ***Metaerg***.

---

## 1. Getting Started


### 1.1 Installation
There are many possibilites when it comes to install ***Metaerg***. One way is using [Docker](https://www.docker.com/) which was not used since Elja does not currently provide any container support. Another possibility was to use [Easybuild](https://docs.easybuild.io/) which does not provide the latest version (only provides verison [1.2.3](https://docs.easybuild.io/version-specific/supported-software/#metaerg)) of ***Metaerg***. 
The third option that was chosen was to mannually install ***Metaerg*** and its other helper programs, starting by cloning [this](https://docs.easybuild.io/version-specific/supported-software/#metaerg) git repository and following its installation instructions and the requirements in the README.md file.

### 1.2 Required Tools and libraries



<center>

**Perl Modules** 

|  Dependencies                        |
| ------------------------------------ |
|        Archive::Extract              |
|           Bio::Perl                  |                              
|       Bio::DB::EUtilities            |                    
|           DBD::SQLite                |                            
|               DBI                    |                                    
|       File::Copy::Recursive          |                 
|          HTML::Entities              |                         
|       LWP::Protocol::https           |                   
|           SWISS::Entry               |



*Table 1. This table displays all required Perl modules that are required to run Metaerg*

</center>

<center>


|  Dependencies                        | Req. version    |      Version on Elja     |
| ------------------------------------ | --------------- |------------------------- |
| antismash                            |      ≥6.0.0     |          7.0.0           |
| ARAGORN                              |        x        | 1.2.41                   |
|minced                                |        x        |             0.4.2        |
|BLAST+ executeables                   |        x        |          2.13.0          |
|DIAMOND                               | 2.0.13          |          2.0.13          |
| GenomeTools                          |        x        |          1.6.2           |
| HMMER                                |       3.x.x     |          3.3.2           |
| Infernal                             |        x        |          1.1.4           |
|prodigal                              |        x        |      2.6.3               |
|pyarrow                               |        x        |          12.0.0          |
|Python                                |        x        |3.10.4                    |
|RepeatMasker                          |        x        |      4.1.4               |
|RepeatScout                           |        x        |      1.0.6               |
| signalp                              |        x        |          0.5b            |
|tmhmm                                 |        x        |          2.0c            |
|Tandem Repeats Finder                 |        x        |          4.09.1          |


*Table 2. This table displays all main dependencies that are required to install MetaErg*

</center>

## 2 Run Metaerg on Elja

### 2.1 Loading Metaerg
Before being able to run ***Metaerg*** on Elja, you will have to load the ***Metaerg*** module. To do this you type these following commands in the terminal:

```bash
[..]$ ml use /hpcapps/lib-mimir/modules/all
[..]$ ml load Metaerg
```

### 2.2 Running Metaerg 
To run ***Metaerg*** you will have to type ```metaerg``` with parameters which you can find [here](https://github.com/kinestetika/MetaErg#usage). An example of a ***Metaerg*** run would look like this:

```bash
[..] $ metaerg --contig_file dir-with contig-files --database_dir /AlphaFoldData/MetaergData/
```

Note that **--database_dir /AlphaFoldData/MetaergData/** is always necessary as this is the location of the ***Metaerg*** database which the machine learned code is based on.