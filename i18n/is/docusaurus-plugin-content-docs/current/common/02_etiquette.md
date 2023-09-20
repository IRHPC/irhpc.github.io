---
slug: etiquette
---

# Siðareglur 

Til hamingju með að hafa fengið reikning á einum af IRHPC þyrpingunum. Skjölin hér eiga við um allar vélarnar. Vinsamlegast lestu þessa síðu vandlega og ef þú ert í einhverjum vafa um hvernig eigi að framkvæma verkefnin þín í klasanum skaltu ekki hika við að hafa samband við [support](mailto:help@hi.is).

- Aldrei gefa neinum öðrum aðgangsorðið þitt eða SSH lykil

- Aldrei tengjast Elju í gegnum óöruggt almenningsnet (sjá [hér](../connecting/01_general.md))

## Login Node

## Innskráningarhnútur

Innskráningarhnúturinn er sameiginleg auðlind. Þetta er þar sem allir notendur framkvæma verkefni til að undirbúa og senda inn störf sín.

Þess vegna ætti það aðeins að nota fyrir eftirfarandi einföld verkefni:
- Sendu inn störf
- Breyttu forskriftum og skrám
- Undirbúa / eyða gögnum (scp, cp, mv, rm osfrv.)
- Keyra áreynslulaus skriftur (engar útreikningar)
- Settu saman litla hugbúnaðarpakka (t.d. innbyggðan kóða)

**Kerfisstjórar munu drepa ferla sem eru auðlindafrekir.**

:::caution
**Endurtekin brot mun leiða til þess að notandareikningur þinn verður lokaður**
:::


## Auðlindastjórnun

Heimaskráin þín sem er tengd notendanafninu þínu - **<uname\>** - er hýst á **nfs-irhpc** NFS þjóninum

**/users/home/<uname\>**

Plássið á NFS þjóninum er sameiginleg auðlind. Það er ekki ætlað til geymslu stórra gagna. Það er ráðlagt að eyða eða flytja reglulega skrár eða gögn sem eru ekki notuð fyrir störf úr heimaskránni þinni yfir á annað drif utan NFS netþjónsins til geymslu, svo sem einkatölvuna þína. Sjá hér fyrir frekari upplýsingar og leiðbeiningar.

:::note
***EF*** þú þarft pláss til að geyma mikið magn af gögnum (meira en **1 Tb**) fyrir framtíðar störf, eða ef störf þín búa til mikið magn af gögnum sem krefjast frekari vinnslu skaltu hafa samband við [support](mailto:help@hi.is)
:::

## Scratch Diskar

Hver tölvuhnútur er með sérstakan **/scratch/** disk (sjá [hér](../hardware/02_specs.md) fyrir upplýsingar um vélbúnað). Það er staðbundinn diskur sem er ætlaður til **tímabundinnar** geymslu gagna sem á að vinna úr eða skrifa í. Þessi diskur auðveldar hratt **I/O** (inntak/úttak) þegar verk eru keyrð. Notendur hafa les-/skrifréttindi hér

**/scratch/users/**

Sjá hér fyrir leiðbeiningar um hvernig á að nota **/scratch/** diskana.

:::note
**MIKILVÆGT:** Mikilvægt er að nýta Elju á skilvirkan hátt og hægja ekki á netumferð um þyrpinguna. Þess vegna er ráðlegt að afrita gögnin og inntakið fyrir starfið þitt yfir á staðbundna grunninn á hnútnum (**/scratch/users/<uname\>**) og ræsa forritið úr scratch skránni. Ef þessu skrefi er sleppt mun forritið keyra fjarstýrt á compute hnútnum en mun stöðugt lesa/skrifa úr möppunni á **NFS** þjóninum. Þetta skapar mikla netumferð sem hægir á notkun Elju fyrir alla. Það mun einnig hægja á verkinu sjálfu.
:::

:::caution
**Það er mikilvægt að ganga úr skugga um að þú hreinsir til eftir keyrsluna þína á /scratch/ disknum. EF keyrslan þín hrynur og skilur eftir sig gögn sem þú telur að sé hægt að bjarga hafðu þá samband við [support](mailto:help@hi.is) eins fljótt og auðið er. Kerfisstjórar munu eyða gögnum á /scratch/ diskunum sem ekki eru tengd núverandi keyrslum, án fyrirvara.**
:::



## Gagnastjórnun og flutningur á NFS disknum
Eins og er nefnt í [Scratch Disk hlutanum](#Scratch-Diskar) að valda netumferð á NFS disknum hægir á notkuninni á Elju og þar með einnig fyrir alla notendur.  Ef slík tilvik eiga sér til staðar að notandi þarf að færa gögnin sín frá heimasvæðinu sínu yfir á local tölvuna sína þá þarf notandinn að breyta bandvíddinni í hámark **5000 Kbit/s**. Ef notandinn fylgir því ekki eftir þá munu kerfisstjórar loka keyrslunni og láta einstaklinginn vita. 

Hér fyrir neðann eru mismunandi leiðir hvernig er hægt að stilla bandvíddina með [rsync](#rsync) and [scp](#scp)


### rsync
Til þess að takamarka bandvíddina með ```rsync``` þá þarf bæta við parametrinum ```--bwlimit=5000``` eins og eftirfarandi:

```bash 
$ rsync -av --bwlimit=5000 -e "ssh -i /path/to/your/ssh/keyfile" <uname>@elja.hi.is:/users/home/<uname>/../data /path/on/local/computer/ # -av Archive mode with verbose input
```

Þessi skipun sýnir dæmi um að notandi er að færa gögn frá heimasvæði sínu inná Elju yfir á ```/path/on/local/computer/ ``` tölvunni sem notandi er á

### scp
To restrict the bandwidth when using ```scp``` you will need to add the parameter ```-l 5000```. An example of such a case is displayed here below

Til þess að takmarka bandvíddina þegar notað er ```scp``` þá þarftu að bæta við parametranum ```-l 5000```. Dæmi hvernig á að setja þetta upp er sett hér fyrir neðan

```bash
$ scp -l 5000 -p -r <uname>@elja.hi.is:/hpcapps/users/home/<uname>/ .
```

Hérna er verið að færa gögn sem er staðsett á heimasvæði notandans á Elju og fært gögnin á sama svæði og notandi skrifaði þessa skipun inn á tölvunni sem notandi er á. 
