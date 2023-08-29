---
slug : singularity
---

# Singularity

:::note
Einstaka hugbúnaður mun virka betur í öðrum umhverfm, til dæmis [AlphaFold](AlphaFold)
:::

## Hvad er Singularity?
Singularity er gámapallur, svipað og Docker. Það gerir notendum okkar kleift að búa til og keyra gáma á þann hátt að hægt sé að afrita öll hugbúnaðarstykki pakkans.
Notendur geta smíðað gám á heimatölvunni sinni og síðan keyrt hann á Elju eða náð í umhverfi sem fyrir eru úr [Singularity Library](https://cloud.sylabs.io/library) eða [Docker Hub](https://hub. docker.com)

## Singularity grunnnotkun


Singularity býður upp á gámakerfi líkt og Docker.
Til að nota Singularity á **Elju** verður þú fyrst að hefja gagnvirka lotu:

```bash
$ srun --job-name "Singularity Job" --partition 48cpu_192mem --time 01:00:00 --pty bash 
```
Sjáðu [hér](../elja/interactive_session) til að læra meira um gagnvirkar lotur.

### Að sækja myndir

Þegar gagnvirk lota er virk getur þú notað ```singularity``` skipunina:

```bash
$ singularity --version
singularity-ce version 3.11.4-1.el8
```

Það eru bæði til innfæddar Singularity myndir, sem eru í boði á Singularity gáma safninu, skipunin ```pull``` hleðúr niður myndini í skráarkerfið þitt.

```bash
$ singularity pull library://sylabsed/linux/alpine
```

Þú getur einnig notað ```pull``` til að sækja Docker myndir frá [Docker Hub](https://hub.docker.com), í því tilfelli mun ```pull``` hlaða niður myndinni frá Docker og setja það saman í lög sem eru síðan samsett í nothæfa Singularity skrá.

```bash
$ singularity pull docker://godlovedc/lolcow
```
Að sækja Docker myndir minnkar líkurnar á að hægt sé að endurgera umhverfið. Sem dæmi; ef þú sækir Docker mynd í dag og svo aftur eftir sex mánuði eru ekki hægt að ábyrgjast að myndinn sé sú sama. Ef eitthvað af grunn lögunum hefur breyst í myndinni mun öll myndinn vera breytt. 
Ef mikil áhersla er lögð á að endurgera nákvæmlega sama umhverfið reyndu þá að byggja umhverfið þitt frá gámasafni Singularity. 

Þú getur einnig notað ```build``` skipunina til að hlaða niður forbyggðum myndum. Þegar build er notað verður þú að gefa gámnum nafn eins og sést hér:

```bash
$ singularity build ubuntu.sif library://ubuntu

$ singularity build lolcow.sif docker://godlovedc/lolcow
```

Ólíkt ```pull``` mun ```build``` breyta myndinni í nýjustu útgáfu af Singularity myndi eftir að henni hefur verið hlaðið niður.

### Samskipti við myndir 

Þé getur nota ```search``` skipunina til að staðsetja hópa, söfn og gáma sem þú hefur áhuga á af [Gámasafninu](https://cloud.sylabs.io/library).

```bash
$ singularity search metaerg
Found 1 container images for amd64 matching "metaerg":

        library://rbazile/default/metaerg:1.0.4,amd64,latest
```

Til að keyra gáminn getur þú anarsvegar keyrt hann gagnvirkt eða framkvæmt skipanir á hann.

```bash
$ singularity shell lolcow_latest.sif
Singularity> cowsay This is from a shell
 ______________________
< This is from a shell >
 ----------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```

Shell virkar líka með ```library://```, ```docker://``` og ```shub://``` slóðum. Þetta býr til tímabundinn gám sem hverfur þegar skelinni hefur verið lokað.


```bash
singularity shell library://sylabsed/examples/lolcow
INFO:    Using cached image
Singularity> cowsay This container will self destruct when it is exited
 ________________________________________
/ This container will self destruct when \
\ it is exited                           /
 ----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

### Framkvæma skipanir

`exec` skipunin  leyfir að framkvæma sérsniðnar skipanir innan gámsins með því að skilgreina ```.sif``` skrána. Sem dæmi:

```bash
 singularity exec lolcow_latest.sif cowsay i am cat
 __________
< i am cat >
 ----------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

```exec``` virkar einnig með  ```library://```, ```docker://``` og ```shub://``` slóðum. Þetta býr til tímabundinn gám sem eyðist eftir að skipunin hefur verið keyrð.

```bash
singularity exec library://sylabsed/examples/lolcow cowsay "THIS CONTAINER WILL BE DESTROYED"
INFO:    Using cached image
 __________________________________
< THIS CONTAINER WILL BE DESTROYED >
 ----------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

### Að keyra gáminn 

Singularity gámar innihalda [keyrsluskriftur](https://docs.sylabs.io/guides/3.0/user-guide/definition_files.html#runscript). Þetta er notendaskilgreind skrifta sem skilgrenir þær aðgerðir sem gámur ætti að framkvæma þegar hann er keyrður. Þessi skrifta fer í gangi með ```run``` skipuninin, eða með því að kalla á gámin eins og hann væri keyranleg skrá.

```bash
$ singularity run lolcow_latest.sif
 _____________________________________
/ You have been selected for a secret \
\ mission.                            /
 -------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

$ ./lolcow_latest.sif
 ____________________________________
/ Q: What is orange and goes "click, \
\ click?" A: A ball point carrot.    /
 ------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

```run``` virkar einnig með ```library://``` og ```docker:///``` slóðum. Þetta býr til tímabundinn gám sem eyðist eftir að hann klárar.

```bash
singularity run library://sylabsed/examples/lolcow
INFO:    Using cached image
 ______________________________________
/ April 1                              \
|                                      |
| This is the day upon which we are    |
| reminded of what we are on the other |
| three hundred and sixty-four.        |
|                                      |
| -- Mark Twain, "Pudd'nhead Wilson's  |
\ Calendar"                            /
 --------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Vinna með skrár

```bash
$ echo "Hello from inside the container" > $HOME/hostfile.txt

$ singularity exec lolcow_latest.sif cat $HOME/hostfile.txt

Hello from inside the container
```

Þetta virkar vegna þess að ```hostfile.txt``` er til á heimasvæði notandans. Singularity festi ```/home/$USER```, ```/tmp``` og ```$PWD``` inn í gáminn við keyrslu.

Þú getur tekið fram aðrara möppur og fest þær inn í þinn gám með ```--bind``` skipuninni, til dæmin ```/scratch/$USER/data```

```bash
$ echo "Do science!" > /scratch/$USER/data/text.txt
$ singularity exec --bind /scratch/$USER/data:/mnt lolcow_latest.sif cat /mnt/text.text
Do science!
```

Í þessu tilfelli er ```/scratch/$USER/data``` mappan bundinn við ```/mnt``` innann gámsins.

Pípur og áframsendingar virka líka með Singularity skipunninn eins og með öðrum Unix skipunum:

```bash
cat /scratch/$USER/data/text.txt | singularity exec lolcow_latest.sif cowsay
 _____________
< Do science! >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

```

## Að smíða þinn egin gám

Í þessum hluta munum við fara yfir hvernig þú getur smíðað glænýjan sérsniðinn gám.

:::note
Að byggja gáma krefst **sudo** réttinda og því er ekki hægt að keyra það á **Elja**.
Mælt er með því að smíða gámana á einkavélinni þinni og afrita þá yfir á **Elja**
:::

Til að búa til Singularity gám verður þú fyrst að hlaðá niðúr **Singularity** á þína vél þár sem sumar skipanir krefjast **sudo** réttinda, og nota síðan build skipuninna til að gera gámin meðfærilegan.
**Singularity** er í boðí fyrir Windows, MacOS og Linux, frekari upplýsingar er að finna [hér](https://docs.sylabs.io/guides/3.0/user-guide/installation.html).

Við byrjum á því að búa til skrifanlegan gám, einnig þekktur sem sandkassi. Við munu nota **shell** skipunina með valmöguleikanum ```-writable``` og gagnvirkt fikta við gámin.
Við munum síðan bæta við breytingunum okkar við skilgreiningar skrá (*.def*) og nota hana til að endurbyggja gámin.

```bash
$ mkdir lolcow
$ cd lolcow
$ touch lolcow.def
$ vim lolcow.def
```
Skilgreiningar skráinn (*.def*) mun innihalda eftirfarandi línur:

```bash
BootStrap: debootstrap
OSVersion: stable
MirrorURL: http://ftp.us.debian.org/debian/

%runscript
    echo "This is what happens when you run the container..."

%post
    echo "Hello from inside the container"
    apt-get -y --allow-unauthenticated install vim
```
Með þessari skilgreiningar skrá sem byrjunarpúnkt getum við byrjað að byggja okkar lolcow.img gám. ```build``` skipuninn þarfnast **sudo** réttinda!

```bash
$ sudo singularity build --sandbox lolcow lolcow.def
```

Singularity mun smíða gám að nafni *lolcow* með *lolcow.def* skilgreiningarskránni. Valmöguleikinn ```--sandbox``` segir Singularity að við viljum byggja sérstaka týpu af gám, sandkassa, í þróunarskyni.

Næst munum við nota ```shell --writable``` valmöguleikan til að gera breytingar á gámnum okkar.

```bash
$ sudo singularity shell --writable lolcow
```

Valmöguleikin ```--writable``` gerir okkur kleift að gera breytingar á gámnum. Þessar breytingar verða vistaðar innan gámsins og munu haldast óbréttar milli notkunar.

Nú skulum við setja upp hugbúnað innan gámsins.

```bash
Singularity> apt-get update

Singularity> apt-get install -y fortune cowsay lolcat
```


Næst skulum við sjá hvort við getum keyrt þennan hugbúnað.
```bash
Singularity> fortune | cowsay | lolcat
bash: lolcat: command not found
bash: cowsay: command not found
bash: fortune: command not found
```

Við sjáum að ekkert af þessum forritum er í ```$PATH``` við getum notað ```find``` til þess að finna hvar þessi forrit eru geymd og bæta þeirri möppu í ```$PATH```.

```bash
Singularity> find /usr -name cowsay
/usr/games/cowsay

Singularity> export PATH=$PATH:/usr/games
Singularity> fortune | cowsay | lolcat
 _______________________________
< Be careful! Is it classified? >
 -------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
Athugið: Ef þið fáið viðvaranir frá Perl um að 'locale' sé rangur geturðu lagað það með : ```export LC_ALL=C```.

Nú getum við smiðað loka SIF skrána. Til að kemba (e. debug) getum við notað ```shell``` til að keyra Singularity gáminn gagnvirkt, en til þess að gera breytingar á gámnum er mælt með að hafa þær allar í skilgreiningar skranni þinni. Méð því að halda breytingunum í skilgreiningarskránni verður gámurinn endurnýtanlegur.  

Uppfærum nú skilgreiningarskrána með þeim breytingum sem við höfum gert.
```bash
$ vim lolcow.def
```

Svona lítur uppfærða skilgreiningarskráin út:
```bash
BootStrap: debootstrap
OSVersion: stable
MirrorURL: http://ftp.us.debian.org/debian/

%runscript
    fortune | cowsay | lolcat

%post
    apt-get update
    apt-get -y install fortune cowsay lolcat

%environment
    export LC_ALL=C
    export PATH=$PATH:/usr/games
```

Nú getum við endurbyggt gámin með skilgreiningarskránni.

```bash
$ sudo singularity build lolcow.sif lolcow.def
```
Takið eftir að við höfum fjarlægt ```--sandbox``` valmöguleikan og bætt *.sif* framlenginguni á skrána. SIF skrá er þjöppuð og óbreytileg sem gerir það að góðum valkost fyrir umhverfi til útgáfu. 

Nú ættum við að geta keyrt útgáfu gáminn okkar.
```bash
$ singularity run lolcow.sif
 ______________________________________ 
/ A robin redbreast in a cage Puts all \
| Heaven in a rage.                    |
|                                      |
\ -- Blake                             /
 -------------------------------------- 
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

#### Færa gám yfir á Elju
Nú þegar við erum búin smíða gámin og viljum keyra hann á HPC þyrpinguni. Til þess að gera það þurfum við að nota `scp`

```bash
$ scp -i ~/.ssh/<Your private SSH key> /path/to/containers/lolcow.sif <username>@elja.hi.is:~/containers     
```
Gámurinn verður nú fluttur yfir á **Elju** og verðúr aðgengilegur á heimasvæðinu þinu. Nú ættir þú að geta keyrt gáminn á reiknihnútum með hjálp **SLURM**

## Keyra Singularity með SLURM

### GPU Dæmi
Fyrst þurfum við að hefja gagnvirka keyrslu og síðan getum við hlaðið niður þeim Singularity myndum sem okkur hentar. Í þessu dæmi er það hello-world.sif:
[Hvernig á áð hefja gagnvirkar keyrslur](/docs/elja/interactive_session)

```bash 
$ srun --job-name "InteractiveGPU" --partition gpu-1xA100 --time 0-01:00 --pty bash
$ singularity pull --name lolcow.sif library://sylabsed/examples/lolcow_latest
```
Til að fá aðgengi að Nvidia GPU driflinum innan Singularity gámsins þurfum við að nota valmöguleikan `--nv` þegar við keyrum gáminn. Til að staðfetsa að þú hafur aðgengi að umbeðnum skjákortum getur þú keyrt `nvidia-smi` innan gámsins:

```bash 
$ singularity exec --nv lolcow.sif /bin/bash
Singularity> nvidia-smi
 +-----------------------------------------------------------------------------+
| NVIDIA-SMI x96.26 Driver Version: 396.26 |
|-------------------------------+----------------------+----------------------+
| GPU Name Persistence-M| Bus-Id Disp.A | Volatile Uncorr. ECC |
| Fan Temp Perf Pwr:Usage/Cap| Memory-Usage | GPU-Util Compute M. |
|===============================+======================+======================|
| 0 Tesla K20Xm Off | 00000000:88:00.0 Off | 0 |
| N/A 37C P0 61W / 235W | 0MiB / 5700MiB | 65% Default |
+-------------------------------+----------------------+----------------------+
``` 

### Singularity gámar og SLURM verkefni

Þú getur notað Singularity myndir sem ógagnvirkar lotu skriftur eins og hver önnur skipun. Ef gámurinn inniheldir keyrslu-skriftu þá getur þú notað ```singularity run``` 
til að keyra Singularity keyrslu-skriftuna í lotuni. Þú getur einnig notað Singularity exec til að keyra handahófskenndar skipanir (eða skriftur) innan gámsins. 

Dæmi:

```bash
#!/bin/bash
#SBATCH -J singularity_job
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

# Singularity command line options
singularity pull library://sylabsed/examples/lolcow:latest
singularity run lolcow_latest.sif
```
Ef lotu-skriftan hér að ofan er nefnd `singularity_job.sbatch`, sem dæmi, er hægt að leggja fram lotu-keyrsluna eins og vanalega með `sbatch`.

```bash
$ sbatch singularity_job.sbatch
```
