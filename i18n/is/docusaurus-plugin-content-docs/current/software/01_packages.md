---
slug : easybuild
---

# Tiltækt hugbúnaðarumhverfi

Þessi síða útlistar þá hugbúnaðarstafla sem eru tiltækir notendum og einingu stjórnanda sem notaður er til að hlaða inn viðkomandi hugbúnaði.

# EasyBuild staflar
Tiltækar EasyBuild-stafla  eru tengdar við stýrikerfissöfn og rekla(e. drivers) með því að nota [EasyBuild](https://docs.easybuild.io/en/latest/). Staflatréið byrjar með þýðandaumhverfi (þ.e. GCC-útgáfa).
Stöflunum er stjórnað með einingastjóranum [Lmod](https://docs.easybuild.io/en/latest/). Almennt séð er nóg að hlaða hugbúnaðareiningu til að gera hugbúnaðinn tilbúinn til notkunar. Þegar einingu er rétt hlaðið inn bætir hún við nauðsynlegum tvíundaslóðum(e. binary paths) og hleður inn öllum háðum pökkum.

Til þess að nota þýðandaumhverfi til að setja saman þinn eigin hugbúnað gæti þurft að hlaða inn nokkrum einingum í einu.
Sjá [hér](./02_devenvironment.md) til að setja saman / þróunarleiðbeiningar.

## Notkun Lmod

Aðalskipunin til að nota eininga stjórnandann er **module** (eða **ml** í stuttu máli).
Listi yfir valkosti er fáanlegur með því að slá inn:

```bash 
[..]$ module --help
```

Til að sjá lista yfir aðgengilegar einingar skrifaðu þá:

```bash
[..]$ module avail
```

Til að fá fullan lista, sem inniheldur háða pakka fyrir allan hugbúnaðin, skrifaðu þá:

```bash
[..]$ module --show-hidden avail
```
Þessi skipun getur líka gefið upplýsingar um ákveðin hugbúnað og allar þær útgáfur sem eru í boði, til dæmis:

```bash
[..]$ module avail Anaconda3
   Anaconda3/2021.11 (D)	Anaconda3/2022.05
```

### Hlaða inn eniningu

Til að hlaða inn einingu skrifaðu þá:

```bash               
[..]$ module load Anaconda3
```

Í þessu tilfelli mun stjórnandin hlaða inn sjálfgefinni(e. default) einingu (D).
Til að fá lista af þeim einingum sem þú hefur hlaðið inn skrifaðu:

```bash
[..]$ module list
Currently Loaded Modules:
  1) Anaconda3/2021.11
```
Þú getur hlaðið inn eins mörgum einingum hvenær sem er eftir þinni hentisemi. Athugið að sumar einingar geta stangast við hvor aðrara. 

Ef þú vilt skipta úr einni tiltekinni útgáfu yfir í aðra skrifaðu:

```bash
[..]$ module switch Anaconda3/2021.11 Anaconda3/2022.05
```

Til að afferma einingu skrifaðu:
```bash
[..]$ module unload Anaconda3
```

Ef þú vilt hreinsa burt allar einingar:

```bash
[..]$ module purge
```

### Geymsla Eininga Umhverfis

Þegar þú hefur hlaðið inn því mengi eininga sem þú notar reglulega getur verið gott að vist mengið, til dæmis:

```bash                                                                                             
[..]$ module save env1                                                   
``` 

þar sem **env1** er bara dæmi um nafn.
Í framtíðar lotu geturðu endurhlaðið viðéigandi umhverfi með því að skrifa:

```bash
[..]$ module restore env1
```

Til að sjá lista af vistuðum einingum skrifaðu þá:

```bash
[..]$ module savelist
Named collection list :
  1) default  2) env1
```

### Forsmíðuð umhverfi
Sum pakkaumhverfi eru sjálfgefið hlaðin inn, önnur þarf að hlaða inn handvirkt. Sjá lista yfir forsmíðuð pakkaumhverfi sem lýst er hér að neðan. 

## libsci-gcc

ibsci-gcc tréð býður upp á samansafn af ókeypis og opnum hugbúnaði sem býður upp á almennt notuð töluleg söfn fyrir vísindahugbúnað og forrit. Það byrjar á GCC-11.2.0 og er staðsett í ```/hpcapps/libsci-gcc/```.

### Forsmíðaður hugbúnaður

GCC/OpenMPI

<center>

|  Modules                             | Version         | Toolchain                |
| ------------------------------------ | --------------- |------------------------- |
|ASE                                   |    3.2.2        | system                   |
|ASE                                   |3.23.0b1         |  dev                     |
|Autotools                             |20210726         | GCCcore-11.2.0           |
|Brotli                                |1.0.9            | GCCcore-11.2.0           |
| DBus                                 |1.13.18          | GCCcore-11.2.0           |
| EasyBuild                            |4.5.4            |                          |
|Eigen                                 |    3.4.0        | GCCcore-11.2.0           |
|FFTW                                  |    3.3.10       | gompi-2021b              |
| FLTK                                 |1.3.7            |  GCCcore-11.2.0          |
|GCC                                   |11.2.0           |                          |
| GCCcore                              |11.2.0           |                          |
| GPAW                                 |22.8.0           |    foss-2021b            |
|Go                                    |    1.20.2       |system                    |
| Gurobi                               |10.0.0           |                          |
|OpenBLAS                              |    0.3.18       |GCC-11.2.0                |
|OpenMPI                               |4.1.1            |GCC-11.2.0                |
|PISM                                  |     2.0.6       |System                    |
|Python                                |    3.9.6        |GCCcore-11.2.0            |
|SQLite                                |    3.36         |GCCcore-11.2.0            |
|ScaLAPACK                             |    2.1.0        |gompi-2021-fb             |
|VASP                                  |    6.3.2        |foss-2021b                |
|VASP                                  |    6.3.2        |nvhpc                     |
|VaspBeef                              |    6.3.2        |foss-2021b                |
|Xauth                                 |    1.0.9        |                          |
|foss                                  |2021b            |                          |
|gompi                                 |2021b            |                          |
| intltool                             |0.51.0           |GCCcore-11.2.0            |
|libbeef                               |    6.3.2        | system                   |
|libxc                                 |    5.1.6        |GCC-11.2.0                |
| nodejs                               |14.17.6          |GCCcore-11.2.0            |
|petsc                                 |    3.18         |system                    |
|pkgconf                               |    1.8.0        |GCCcore-11.2.0            |
|udunits                               |    2.2.28       | system                   |
| util-linux                           |2.37             |            GCCcore-11.2.0|
| xprop                                |1.2.5            |GCCcore-11.2.0            |
|zstd                                  |    1.5.0        |GCCcore-11.2.0            |

</center>

Python inniheldur Numpy og Scipy tengt við OpenBLAS og FFTW.


## libbio-gpu
Þetta tré býður upp á samansafn af ókeypis og opnum hugbúnaði sem býdur upp á almennt notuð tölug söfn fyrir vísindahugbúnað og forrit, það byrjar á GCC-11.3.0 og er staðsett í ```/hpcapps/libbio-gpu```.

Til að hlaða inn þessu pakkaumhverfi skrifaru:

```bash 
[..]$ module use /hpcapps/libbio-gpu/modules/all
```

Einingarnar eru nú fáanlegar og hægt er að skoða þær með því að slá inn

```bash 
[..]$ module avail
```

### Forsmíðaður hugbúnaður 
GCC/OpenMPI

<center>

|  Modules                             | Version         | Toolchain                   |
| ------------------------------------ | --------------- |--------------------------   |
| AlphaFold                             |2.3.0            |                     system |
| aria2                                 |1.36.0           |                     system |
| BLIS                                  |0.9.0            |                 GCC-11.3.0 |
| Bazel                                 |5.1.1            |             GCCcore-11.3.0 |
| Biopython                             |1.80             |                 foss-2022a |
| BLIS                                  |0.9.0            |                 GCC-11.3.0 |
| CMake                                 |3.23.1           |             GCCcore-11.3.0 |
| CUDA                                  |11.7.0           |                            |
| Doxygen                               |1.9.1            |             GCCcore-11.3.0 |
| EasyBuild                             |4.6.2            |                            |
| FFTW.MPI                              |3.3.10           |                gompi-2022a |
| FFTW                                  |3.3.10           |             GCCcore-11.3.0 |
| FFmpeg                                |4.4.2            |             GCCcore-11.3.0 |
| FLEXIBLAS                             |3.2.0            |             GCCcore-11.3.0 |
| FriBidi                               |1.0.12           |             GCCcore-11.3.0 |
| GCC                                   |11.3.0           |                            | 
| GCCcore                               |11.3.0           |                            | 
| Kalign                                |3.3.2            |             GCCcore-11.3.0 |
| NCCL                                  |2.12.12          | GCCcore-11.3.0-CUDA-11.7.0 |
| NVHPC                                 |22.5             |                            |
| ORCA                                  |5.0.3            |                            |
| OpenBLAS                              |0.3.20           |                 GCC-11.3.0 |
| OpenMM                                |7.7.0            |                  CUDA-11.7 |
| OpenMPI                               |4.1.4            |                GCC-11.3.0  |
| PyTorch                               |1.12.0           |     foss-2022a-CUDA-11.7.0 |
| Python                                |3.10.4           |             GCCcore-11.3.0 |
| QuantumEspresso                       |7.1              |                 foss-2022a |
| SWIG                                  |4.0.2            |             GCCcore-11.3.0 |
| ScaLAPACK                             |2.2.0            |             gompi-2022a-fb |
| TensorRT                              |8.4.3.1          |                  CUDA-11.7 |
| Tkinter                               |3.10.4           |             GCCcore-11.3.0 |
| X11                                   |20220504         |             GCCcore-11.3.0 |
| aria2                                 |1.36.0           |                            |
| crest                                 |2.12             |                 foss-2022a |
| cuDNN                                 |8.4.1.50         |                CUDA-11.7.0 |
| foss                                  |2022a            |                            |
| gettext                               |0.21             |             GCCcore-11.3.0 |
| gompi                                 |2022a            |                            |
| hh-suite                              |3.3.0            |              GCCcore-11.3.0| 
| hmmer                                 |3.3.2            |              GCCcore-11.3.0|
| libiconv                              |1.17             |              GCCcore-11.3.0|
| libtool                               |2.4.7            |              GCCcore-11.3.0|
| ncurses                               |6.3              |              GCCcore-11.3.0|
| protobuf                              |3.22             |                         dev|
| rpmrebuild                            |2.11             |                            |
| xtb                                   |6.5.1            |                  foss-2022a|

</center>

## lib-mimir
libsci-mimir tréið býður upp á samansafn af ókeypis og opnum hugbúnaði sem býður upp á almennt notuð töluleg söfn fyrir vísindahugbúnað og forrit. Það byrjar á GCC-11.2.0 og er staðsett í ```/hpcapps/lib-mimir/```. 

### Forsmíðaður hugbúnaður

<center>

|  Modules                             | Version         | Toolchain                   |
| ------------------------------------ | --------------- |--------------------------   |
|Anaconda3                             |2021.11          |                             |
| Anaconda3                            |2022.05          |                             |
| BCFtools                             |1.14             |GCC-11.2.0                   |
|BEDTools                              |2.30.0           |GCC-11.2.0                   |
|BamTools                              |2.5.2            |GCC-11.2.0                   |
| Biopython                            |1.79             |                   foss-2021b|
| Bowtie2                              |2.4.4            |GCC-11.2.0                   |
|CMake                                 |3.22.1           |GCCcore-11.2.0               |
| CellRanger                           |7.0.0            |                             |
| Dorado                               |0.1.1            |                             |
| EasyBuild                            |4.6.0            |                             |
| FastQC                               |0.11.9           |Java-11                      |
| GNU-parallel                         |20221022         |                             |
| HISAT2                               |2.2.1            |gompi-2021b                  |
| HTSlib                               |1.14             |GCC-11.2.0                   |
| Java                                 |11.0.2           |                             |
| Java                                 |15.0.1           |                             |
| MACS2                                |2.2.7.1          |foss-2021b                   |
| MIB                                  |glnx64           |                             |
| Perl                                 |5.34.0           |GCCcore-11.2.0               |
| R                                    |4.1.2            |foss-2021b                   |
| SAMtools                             |1.15             |GCC-11.2.0                   |
| SEACR                                |1.3              |                             |
| SRA-Toolkit                          |3.0.0            |                             |
| TrimGalore                           |0.6.7            |                             |
|  VCFtools                            |0.1.16           |GCC-11.2.0                   |
| bcl-convert                          |3.6.3            |                             |
| bcl2fastq2                           |2.20.0           |GCC-11.2.0                   |
| bzip2                                |1.0.8            |GCCcore-11.2.0               |
|cutadapt                              |4.1              |                             |
|deepTools                             |3.5.1            |foss-2021b                   |
| file                                 |5.41             |GCCcore-11.2.0               |
| kallisto                             |0.48.0           |                             |
| matplotlib                           |3.4.3            |foss-2021b                   |
|  megalodon                           |2.3.0            |                             |
| minimap2                             |2.24             |GCCcore-11.2.0               |
| modbam2bed                           |0.6.2            |                             |
|nanopolish                            |0.14.0           |                             |
|ont-guppy                             |6.2.1            |                             |
| picard                               |2.26.10          |Java-15                      |
| remora                               |1.1.1            |                             |
| stacks                               |2.62             |                             |
| subread-featureCounts                |2.0.3            |                             |
|wigToBigWig                           |4                |                             |

</center>

## libsci-intel
Þetta tré býður upp á samansafn af ókeypis og opnum hugbúnaði sem býður upp á almennt notuð töluleg söfn fyrir vísindahugbúnað og forrit. Það byrjar á GCC-11.2.0, og er staðsett í ```/hpcapps/libsci-intel/```. 

Til að hlaða inn pakkaumhverfinu slærð þú inn

```bash 
[..]$ module use /hpcapps/libsci-intel/modules/all
```
Einingarnar eru nú fáanlegar og hægt er að skoða þær með því að slá inn
```bash 
[..]$ module avail
```

### Forsmíðaður hugbúnaður

<center>

|  Modules                             | Version         | Toolchain                   |
| ------------------------------------ | --------------- |--------------------------   |
| Automake                             |1.16.5           |               GCCcore-12.2.0|
| Autotools                            |20220317         |               GCCcore-12.2.0|
| EasyBuild                            |4.7.0            |                             |
| GCCcore                              |12.2.0           |                             |
| Perl                                 |5.36.0           |               GCCcore-12.2.0|
| expat                                |2.4.9            |               GCCcore-12.2.0|
| groff                                |1.22.4           |               GCCcore-12.2.0|
| iimpi                                |2022b            |                             |
| imkl                                 |2022.2.1         |                             |
| impi                                 |2021.7.1         |     intel-compilers-2022.2.1|
| intel-compilers                      |2022.2.1         |                             |
| libreadline                          |8.2              |               GCCcore-12.2.0|
| libtool                              |2.4.7            |               GCCcore-12.2.0|
| ncurses                              |6.3              |               GCCcore-12.2.0|
| numactl                              |2.0.16           |               GCCcore-12.2.0|
| pkgconf                              |1.9.3            |               GCCcore-12.2.0|
|zlib                                  |1.2.12           |               GCCcore-12.2.0|

</center>

## libsci-amd
Þetta tré býður upp á samansafn af ókeypis og opnum hugbúnaði sem býður upp á almennt notuð töluleg söfn fyrir vísindahugbúnað og forrit. Það byrjar á GCC-11.2.0, og er staðsett í ```/hpcapps/libsci-amd/```. 

### Forsmíðaður hugbúnaður 

<center>

|  Modules                             | Version         | Toolchain                   |
| ------------------------------------ | --------------- |--------------------------   |
|EasyBuild                             |4.6.2            |                             |

</center>


## libsci-nvhpc
Þetta tré býður upp á samansafn af ókeypis og opnum hugbúnaði sem býður upp á almennt notuð töluleg söfn fyrir vísindahugbúnað og forrit, það byrjar á GCC-11.2.0 og er staðsett í ```/hpcapps/libsci-nvhpc/```. 

### Forsmíðaður hugbúnaður 

<center>


|  Modules                             | Version         | Toolchain                   |
| ------------------------------------ | --------------- |--------------------------   |
|VASP                                  |6.3.2            |                        nvhpc|

</center>
