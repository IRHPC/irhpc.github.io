---
slug: Gagnastjórnun 
---

# Gagnastjórnun og flutningur á NFS disknum
Eins og er nefnt í [Scratch Disk hlutanum](./03_scratch.md) að valda netumferð á NFS disknum hægir á notkuninni á Elju og þar með einnig fyrir alla notendur.  Ef slík tilvik eiga sér til staðar að notandi þarf að færa gögnin sín frá heimasvæðinu sínu yfir á local tölvuna sína þá þarf notandinn að breyta bandvíddinni í hámark **40000 Kbit/s (5 Megabyte)**. Ef notandinn fylgir því ekki eftir þá munu kerfisstjórar loka keyrslunni og láta einstaklinginn vita. 

Hér fyrir neðann eru mismunandi leiðir hvernig er hægt að stilla bandvíddina með [rsync](#rsync) and [scp](#scp)


### rsync
Til þess að takamarka bandvíddina með ```rsync``` þá þarf bæta við parametrinum ```--bwlimit=40000``` eins og eftirfarandi:

```bash 
$ rsync -av --bwlimit=40000 -e "ssh -i /path/to/your/ssh/keyfile" <uname>@elja.hi.is:/users/home/<uname>/../data /path/on/local/computer/ # -av Archive mode with verbose input
```

Þessi skipun sýnir dæmi um að notandi er að færa gögn frá heimasvæði sínu inná Elju yfir á ```/path/on/local/computer/ ``` tölvunni sem notandi er á

### scp
To restrict the bandwidth when using ```scp``` you will need to add the parameter ```-l 40000```. An example of such a case is displayed here below

Til þess að takmarka bandvíddina þegar notað er ```scp``` þá þarftu að bæta við parametranum ```-l 40000```. Dæmi hvernig á að setja þetta upp er sett hér fyrir neðan

```bash
$ scp -l 40000 -p -r <uname>@elja.hi.is:/hpcapps/users/home/<uname>/ .
```

Hérna er verið að færa gögn sem er staðsett á heimasvæði notandans á Elju og fært gögnin á sama svæði og notandi skrifaði þessa skipun inn á tölvunni sem notandi er á. 
sers home directory on Elja to the location on the local machine that the user is currently working in. 
