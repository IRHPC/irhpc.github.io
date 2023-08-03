---
slug: datatransfer
---
# Gagnastjórnun og flutningur fyrir Mimir-II 

Öll stór gagnasöfn - þ.e gögnin sem þú munt vinna með - ættu að fara í þína persónulegu Mimir skrá:

**/hpcdata/Mimir/$USER** 

Hér og hér á eftir vísar **<uname\>** til notendareiknings/innskráningarnafns. Þú getur einnig notað `$USER` til þess að auðvelda innsláttinn. 

Þú getur einnig flutt gögn inn i sameiginlega skrá ef það eru fleiri en einn notandi sem vinna með sömu gögnin:

**/hpcdata/Mimir/shared/**

Allir Mimir-II notendur tilheyra sama hóp HTC_MIMR, sem hefu aðgang að sameiginlegu möppuni. 
Eftir að gögnin hafa verið flutt í sameiginlegu möppuna þarf að breyta eignahaldi og leyfi:

```bash
[..]$ chown -R <uname>:HTC-Mimir /hpcdata/Mimir/shared/data
```
og þar á eftir:

```bash
[..]$ chmod -R 771  /hpcdata/Mimir/shared/data
```

sem gerir skrána/skrárnar les- skrif- og keyranlegar fyrir alla í hópnum HTC-Mimir.

:::note
Hafðu samband við kerfisstjóra ef þú þarft að deila gögnum á öruggan hátt milli tiltekinna notenda.
:::

:::caution
**Elja er ekki gagnageymslutæki! Það er takmarkað magn af diskplássi.**
Til að sýna öðrum notendum Elju kurteisi vinsamlegast fjarlægið stór gagnasöfn eftir að þau hafa verið notuð. Stórum gögnum sem standa ósnert í **TBD** mánuði verður eytt. 
:::

## Flutningur gagna frá Mimir-I til Mimir-II

Þegar aðgangur þinn er virkur og þú hefur skráð þíg inn á Elju (sem hýsir Mimir-II) getur þú notað **scp** skipunina til að flytja skrár frá Mimir-I.

Fyrir einstakar skrár:

```bash
[..]$ scp -p <mimir1username>@mimir.cs.hi.is:/nfs/bigdata/../data /hpcdata/Mimir/<uname>/.
```
og fyrir möppur með margar skrár skaltu bæta við -r (endurkvæmt):

```bash
[..]$ scp -p -r <mimir1username>@mimir.cs.hi.is:/nfs/bigdata/../data/ /hpcdata/Mimir/<uname>/.
```

## Flutningur staðbundinna gagna til og frá Mimir-II

Í unix kerfi eru skinarnirnar nokkurvegin þær sömu og hér að ofan og gerast í skipanaglugga á staðbundinni tölvu.

Frá staðbundnu til Elju:

```bash
[..]$ scp -p -r localdata/ <uname>@elja.hi.is:/hpcdata/Mimir/<uname>/.
```

Frá Elju til staðbuninna:

```bash
[..]$ scp -p -r <uname>@elja.hi.is:/hpcdata/Mimir/<uname>/data/ .
```

Fyrir Windows er mælt með því að nota FileZilla eða Cyberuck.
Sjá kaflann um tengingu og SSH lykla fyrir leiðbeiningar um hvernig á að setja upp SFTP tenginguna.

:::caution
**ÖLL gagnastjórnun ætti að fara fram í persónulegu eða sameiginlegu Mimir möppuni.**
Ekki reyna að geyma stórar skrár í heimamöppunni **/users/home/<uname\>**.
Kerfisstjórinn áskilur sér rétt til að fjarlægja stórar skrár af **/users/home/<uname\>** svæðinu án fyrirvara.
:::