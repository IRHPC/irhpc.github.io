---
slug: etiquette
---

# Siðareglur 

Til hamingju með að hafa fengið reikning á einum af IRHPC þyrpingunum. Skjölin hér eiga við um allar vélarnar. Vinsamlegast lestu þessa síðu vandlega og ef þú ert í einhverjum vafa um hvernig eigi að framkvæma verkefnin þín í klasanum skaltu ekki hika við að hafa samband við [support](mailto:help@hi.is).

- Aldrei gefa neinum öðrum aðgangsorðið þitt eða SSH lykil

- Aldrei tengjast Elju í gegnum óöruggt almenningsnet (sjá [hér](../connecting/01_general.md))

# Login Node

# Innskráningarhnútur

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


# Auðlindastjórnun

Heimaskráin þín sem er tengd notendanafninu þínu - **<uname\>** - er hýst á **nfs-irhpc** NFS þjóninum

**/users/home/<uname\>**

Plássið á NFS þjóninum er sameiginleg auðlind. Það er ekki ætlað til geymslu stórra gagna. Það er ráðlagt að eyða eða flytja reglulega skrár eða gögn sem eru ekki notuð fyrir störf úr heimaskránni þinni yfir á annað drif utan NFS netþjónsins til geymslu, svo sem einkatölvuna þína. Sjá hér fyrir frekari upplýsingar og leiðbeiningar.

:::note
***EF*** þú þarft pláss til að geyma mikið magn af gögnum (meira en **1 Tb**) fyrir framtíðar störf, eða ef störf þín búa til mikið magn af gögnum sem krefjast frekari vinnslu skaltu hafa samband við [support](mailto:help@hi.is)
:::

# Scratch Diskar

Hver tölvuhnútur er með sérstakan **/scratch/** disk (sjá [hér](../hardware/02_specs.md) fyrir upplýsingar um vélbúnað). Það er staðbundinn diskur sem er ætlaður til **tímabundinnar** geymslu gagna sem á að vinna úr eða skrifa í. Þessi diskur auðveldar hratt **I/O** (inntak/úttak) þegar verk eru keyrð. Notendur hafa les-/skrifréttindi hér

**/scratch/users/**

Sjá hér fyrir leiðbeiningar um hvernig á að nota **/scratch/** diskana.

:::note
**MIKILVÆGT:** Mikilvægt er að nýta Elju á skilvirkan hátt og hægja ekki á netumferð um þyrpinguna. Þess vegna er ráðlegt að afrita gögnin og inntakið fyrir starfið þitt yfir á staðbundna grunninn á hnútnum (**/scratch/users/<uname\>**) og ræsa forritið úr scratch skránni. Ef þessu skrefi er sleppt mun forritið keyra fjarstýrt á compute hnútnum en mun stöðugt lesa/skrifa úr möppunni á **NFS** þjóninum. Þetta skapar mikla netumferð sem hægir á notkun Elju fyrir alla. Það mun einnig hægja á verkinu sjálfu.
:::

:::caution
**Það er mikilvægt að ganga úr skugga um að þú hreinsir til eftir keyrsluna þína á /scratch/ disknum. EF keyrslan þín hrynur og skilur eftir sig gögn sem þú telur að sé hægt að bjarga hafðu þá samband við [support](mailto:help@hi.is) eins fljótt og auðið er. Kerfisstjórar munu eyða gögnum á /scratch/ diskunum sem ekki eru tengd núverandi keyrslum, án fyrirvara.**
:::
