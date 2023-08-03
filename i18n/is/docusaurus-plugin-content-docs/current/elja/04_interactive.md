---
slug: interactive_session
---
# Gagnvirkar lotur

Stundum er nauðsynlegt að keyra hugbúnað - eða samsetningu hugbúnaðar - beint frá skipanalínunni á hnút (t.d. fyrir gagnagreiningu og meðferð).

Til dæmis:

```bash
[..]$ srun --job-name "InteractiveJob" --partition 48cpu_192mem --cpus-per-task 24 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash
```
SLURM tímaáætlarinn mun úthluta umbeðnu tilfangi (ef það er tiltækt), í þessu dæmi 24 örgjörvum frá reiknihnút í **48cpu_192mem** skiptingunni og 3900MB af vinnsluminni á hvern kjarna.
Keyrslan mun standa í 1 dag (0-00:00:00 : D:HH:MM:SS)

Til að sjá hvaða skiptingar eru í boði skaltu slá inn:

```bash
[..]$ sinfo
```

Lýsingu á skiptingunum er að finna í [Skilrúm og búnaður](/docs/hardwar/parthardw).

:::note

Það er mikilvægt að taka alltaf fram `--mem-per-cpu`, og það er mælt með að hafa það minnst 3900MB á hvern kjarna. Þú getur beðið um meira minni ef þess er þörf.
 
:::

`SLURM` biðröðin og mörk eru í gildi hér.

Þegar gagnvirka lotan er hafin munt þú vera skráður inn á reiknihnútin:

```bash
[<uname>@compute-xx]$
```

## Loka lotunni.

Eftir að þú hefur klárað verkefni þín í gagnvirku lotuni skalt þú vinsamlegast loka lotunni til að gera auðlindina aðgengilega öðrum notendum:

```bash
[<uname>@compute-xx]$ exit
``` 
# Geymd Gagnvirk lota

Ef notandi missir tengingu, eða lokar skipana glugganum, mun gagnvirka lotan hætta og öll ógeymd vinna mun eyðast. 
Til að koma í veg fyrir þetta er hægt nota [tmux](https://www.howtogeek.com/671422/how-to-use-tmux-on-linux-and-why-its-better-than-screen/) til að geyma 
gagnvirku lotuna í aðskyldum skipanaglugga. 

Fyrst virkjum við **tmux**:

```bash              
[..]$ tmux                                          
``` 

og byrjum gagnvirka lotu:

```bash                          
[..]$ srun --job-name “InteractiveJob” --partition <partition-name> --cpus-per-task 32 --mem-per-cpu 3900 --time 1-00:00:00 --pty bash                                          
``` 
Gagnvirka lotan keyrir nú á **tmux**. 
Eftir að keyrslan er farin af stað getur þú lokað skipanaglugganum.
Þú getur einnig **losað** þig frá **tmux** lotunni og farið til baka á innskráningarhnútin
með því að ýta á **ctrl+b** og þar á eftir **d**.
Verkið þitt mun halda áfram að keyra. 

Til að virkja lotuna aftur eftir innskráningu á Elju:

```bash
[..]$ tmux attach
```

Þegar verki þínu er lokið (og þú hefur lokað gagnvirku lotuni þinni) munið þá að loka einnig **tmux** lotuinni svona:

```bash
[..]$ tmux kill-session
```

#  Margar Gagnvirkar Lotur


Þú getur byrjað nýjar eða margar **tmux** lotur og mælt er með því að gefa hverri lotu nafn.
Hér byrjum við lotu sem heitir **inter-1**

```bash
[..]$ tmux new -s inter-1
``` 
fylgt eftir með gagnvirkri keyrslu.
Eftir lokun eða **losun** geturðu tengst nefndri lotu aftur svona:
                                                                               
```bash                                                                             
[..]$ tmux attach-session -t inter-1                                                               
``` 
Þegar þú ert búinn með verkið (og endað gagnvirku lotuna), geturðu endað nafngreinda lotu svona:

```bash                                                                                     
[..]$ tmux kill-session -t inter-1                           
```

:::note
Þegar þú hefu
Þegar gagnvirku keyrsluni er lokið
(hvort sem þú notar **tmux** eða ekki) á tölvuhnút er mikilvægt að ljúka gagnvirku lotunni:

```bash

[<uname>@compute-xx]$ exit
```

Ef þú ert ekki viss um hvernig á að tengjast aftur við hnútinn geturðu alltaf fengið lista af þínum lotum svona: 

```bash
[..]$ squeue -u $USER
JOBID PARTITION     NAME    USER    ST  TIME  NODES NODELIST(REASON)
11729 48cpu_192 Interact   <uname>  R   2:10      1 compute-17
```
og stöðvað lotuna með því að nota starfsauðkennið (í þessu dæmi 11729)

```bash
[..]$ scancel 11729
```
:::


