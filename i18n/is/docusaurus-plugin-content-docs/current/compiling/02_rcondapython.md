---
slug : rcondapython
---

# Conda, Python, R & Go

:::note
Það er mikilvægt að setja samann alla pakka á **innskráningarhnúti** áður en umhverfið er sett upp á **reiknihnúta**
:::

## Conda

```bash
[..]$ module load Anaconda3/2022.05
```

:::note
Eldri útgáfa af Anaconda3 (2021.11) er en í boði. Það er mælt með að skipta yfir í nýrr útgáfu sem allra fyrst. Það verður fjarlægt í Maí 2023.
:::

### Uppsetning í fyrsta skipti

```bash
[..]$ conda config --add channels defaults
[..]$ conda config --add channels bioconda
[..]$ conda config --add channels conda-forge
[..]$ conda init
```

Skráðu þig út og aftur inn á Elju. Conda umhverfið þitt er nú tilbúið.

Búðu til umhverfi (og settu upp pakka):

Til dæmis:
```bash 
[..]$ conda create -y -p /hpcdata/Mimir/<uname>/env_mimir bowtie2
```

Þetta mun búa til umhverfi sem kallast "env\_mimir" og setja upp bowie2 (og háða pakka).
Allar tvíundaskrár fara í **/hpcdata/Mimir/<uname\>/env\_mimir**

Þegar uppsetningin er búin getur þú virkjað umhverfið þitt:

```bash
[..]$ conda activate /hpcdata/Mimir/<uname>/env_mimir
```

Þetta umhverfi inniheldur bowtie2:

```bash
(../<uname>/env_mimir) [..]$ bowtie2 --version
/hpcdata/Mimir/<uname>/env_mimir/bin/bowtie2-align-s version 2.4.5
```
Þú getur sett upp aðra pakka í þetta umhverfi:

```bash
(../<uname>/env_mimir) [..]$ conda install -c bioconda macs2
```

Eftir uppsetninguna mun umhverfið innihalda macs2 ásamt bowtie2:

```bash
(../<uname>/env_mimir) [..]$ macs2 --version
macs2 2.2.7.1
```
Til að fara úr umhverfinu slærðu inn:

```bash
(../<uname>/env_mimir) [..]$ conda deactivate
```

þú getur alltaf byrjað á nýju umhverfi og sett upp aðra pakka ínn í það t.d.:

```bash
[..]$ conda create -y -p /hpcdata/Mimir/<uname>/env_mimir2
[..]$ conda activate /hpcdata/Mimir/<uname>/env_mimir2
(../<uname>/env_mimir2) [..]$ conda install -c bioconda trim-galore
(../<uname>/env_mimir2) [..]$ trim_galore --version

                        Quality-/Adapter-/RRBS-/Speciality-Trimming
                                [powered by Cutadapt]
                                  version 0.6.7

                               Last update: 11 05 2020
```

Þetta gerir þér kleift að aðskilja umhverfin eftir mismunandi verkefnum.

Ef þú ert ekki áð nota ákveðið umhverfi þá byðjum við þig vinsamlegast um að fjarlægja það svona:

```bash
[..]$ conda env remove --name env_name
```

Þetta fjarlægir allara uppsettar tvíundarskrár, og býr til pláss fyrir aðra notendur.

### Fara yfir í aðra Conda útgáfu. 
Conda frumstillingin skrifar lítinn kóðabút inn í **.basrhc** þinn sem lítur svona út

```bash
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/hpcapps/lib-mimir/software/Anaconda3/2021.11/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/hpcapps/lib-mimir/software/Anaconda3/2021.11/etc/profile.d/conda.sh" ]; then
        . "/hpcapps/lib-mimir/software/Anaconda3/2021.11/etc/profile.d/conda.sh"
    else
        export PATH="/hpcapps/lib-mimir/software/Anaconda3/2021.11/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

Til að skipta yfir í nýju útgáfuna **Anaconda3/2022.05** skaltu einfaldlega breyta þessum línum í **.bashrc** skránni þinni:
```bash
else
    if [ -f "/hpcapps/lib-mimir/software/Anaconda3/2022.05/etc/profile.d/conda.sh" ]; then
        . "/hpcapps/lib-mimir/software/Anaconda3/2022.05/etc/profile.d/conda.sh"
    else
        export PATH="/hpcapps/lib-mimir/software/Anaconda3/2022.05/bin:$PATH"
    fi
fi
```

Núna skaltu **skrá þig út** og **skrá þig inn** aftur til að virkja breytingarnar.

## Python

Sérhæfð útgáfa af Python - Biopython - er fáanleg til notkunar á Elju.
Grunnútgáfan af Python er 3.9.6. Það inniheldur pip 21.2.2.

```bash
[..]$ module load Biopython
[..]$ python --version
Python 3.9.6
[..]$ $ pip --version
pip 21.2.2
```
Til þess að setjua upp þína eigin Python pakka með pip þá þarftu að nota flaggið `--user` svo pakkarnir verði settir upp á þínu heimasvæði, til dæmis:

```bash
[..]$ pip install --user alfpy
```

Python pakkinn alfpy var nú settur upp, og er staðsettur í **/users/home/<uname\>/.local/lib/pytho3.9/site-packages/**:

```bash
[..]$ python
>>> import alfpy
>>> print(alfpy.__version__)
1.0.6
```

## R

:::note
**Mimir notendur!**
Það er mælt með að notendur búi til skrá sem heitir "./local/R/library" í /hpcdata/Mimir/<uname\> skránni sinni.
:::

```bash
[..]$ mkdir -p /hpcdata/Mimir/<uname>/.local/R/library
```
Notið þessa skrá til ád setja upp viðbótar R pakka með CRAN. Fyrir R pakka setta upp með útgáfu tvíundaskrám (.tar.gz skrár til dæmis), er búinn til önnur skrá:

```bash
[..]$ mkdir -p /hpcdata/Mimir/<uname>/.local/R_libs
```

Til þess að nota þessa skrá er einnig mælt með að búa til litla bash skriftu (til dæmis .bashrc\_R) sem inniheldur þessar línur:

```bash
[..]$ cat >> ~/.bashrc_R << EOF
# add these lines after '>' one-by-one:
> module load R
> if [ -n $R_LIBS ]; then
>   export R_LIBS=/hpcdata/Mimir/$USER/.local/R/library:/hpcdata/Mimir/$USER/.local/R_libs$R_LIBS
> else 
>   export R_LIBS=/hpcdata/Mimir/$USER/.local/R/library:/hpcdata/Mimir/$USER/.local/R_libs
> fi
> EOF
```
Þegar þessi bash skrifta er virkjuð hleður hún inn R einingunum og bætir staðbundinni skrá þinni í R-library listann.

```bash
[..]$ R --version
R version 4.1.2 (2021-11-01) -- "Bird Hippie"
Copyright (C) 2021 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)
[..]$ R
> .libPaths()
[1] "/hpcdata/Mimir/<uname>/.local/R/library"
[2] "/hpcdata/Mimir/<uname>/.local/R_libs"
[3] "/hpcapps/lib-mimir/software/R/4.1.2-foss-2021b/lib64/R/library"
```
Uppröðun skráarsafns leiðanna er mikilvæg, þar sem það mun first leita í staðbundnum skráarsöfnunum þínum þegar R pakka er hlaðið inn.

Til þess að setja upp pakka í gegnum CRAN í þetta safn sláðu þá inn, sem dæmi:

```bash
> install.packages("vioplot", repos="http://cran.r-project.org", lib="/hpcdata/Mimir/<uname>/.local/R/library")
```

Til að hlaða inn pakka slærðu inn:

```bash
> library("vioplot")
```

Til að setja upp R pakka úr upprunaskrá (útgáfu tvíundarskrám), sækjum við fyrst pakkann. Til dæmis:

```bash
[..]$ wget http://cran.r-project.org/src/contrib/Archive/ggplot2/ggplot2_2.0.0.tar.gz
```
Keyrðu skipunina hér að neðan til að setja upp pakkann í "R\_libs" möppuna þína.
Ef við tilgreinum ekki slóðina mun uppsetning mistakast þar sem sjálfgefi reynir R að setja pakkan upp í rótarskránni sem þú hefur ekki skrifréttindi í. 

```bash
[..]$ R CMD INSTALL --library=/hpcdata/Mimir/<uname>/.local/R_libs ggplot2_2.0.0.tar.gz
```

Opnaðu R stjórnborðið og hlaðið pakkanum með eftirfarandi skipun:

```bash
> library("ggplot2") 
```


## Go

### Hlaða inn Go
Núverandi útgáfa af Go á Elju er 1.20.2. Til að hlaða inn Go einingunni þarftu einfaldlega að slá in eftirfarandi:

```bash
[..] $ ml load Go
```
### Uppsetning á Go-vinnusvæði

Búðu til möppuuna 'goWorkspace' á heimasvæðinu þínu

```bash
[..] $ mkdir goWorkspace
```

Til þess að geta keyrt Go verkefnin þín þarftu að tilgreina þitt eigið `GOPATH` fyrir vinnsvæðið þitt

```bash
[..] $ export GOPATH=/users/home/$USER/goWorkspace/ 
```

Í 'goWorkspace' möppuni þinni býrðu til þrjár möppur 'bin', 'src' og 'pkg'

```bash
[..] $ cd goWorkspace
[..] $ mkdir bin src pkg
```
Nú er Go-vinnusvæðið þitt tilbúið í notkun!

### Fyrsta Go forritið þitt
Go verkefnin þín ættu að vera staðsett í **src** möppuni. Byrjum á að búa til Go einingu í **src** nefnda **'myProject'**

```bash
[..] $ cd src/
[..] $ mkdir myProject 
[..] $ cd myProject 
[..] $ go mod init myProject
```
**go.mod** skrá verður búin til fyrir eininguna. **go.mod** mun virka sem ávanastjórnunartæki fyrir Go verkefnið þitt

### farðu og fáðu (go get)

```bash
[..] $ go get $package_name
```
**go get** halar niður og setur upp pakka og allar þeirra þarfir frá ytri geymslu.  Pakkarnir sem hlaðið er niður eru geymdir í **pkg** og **src** möppum vinnusvæðisins.

Til að sækja möppur af github þarftu að slökkva á `GO111MODULE`. Þetta er hægt með eftirfarandi skipun:

```bash
[..] $ export GO111MODULE="off"
```
Til þess að láta Go leita af `go.mod` skrá í núverandi möppu, eða undirmöppum, þarftu að hafa kveikt á `GO111MODULE`:

```bash
[..] $ export GO111MODULE="on"
```

Einnig er hægt að hafa `GO111MODULE="auto"`. Þetta lætur Go virkja Go einingar sjálfvirkt ef að `go.mod` skrá er finnst í núverandi, eða ytri, möppum.

```bash
[..] $ export GO111MODULE="auto"
```

### go install

```bash
[..] $ go install $package_name
```
Með því að nota ***go install*** býrðu til tvíundarskrá í **bin** og pakka sem staðsettur er í **pkg/mod/**