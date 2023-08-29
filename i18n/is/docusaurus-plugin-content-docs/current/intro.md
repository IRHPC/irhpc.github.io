---
sidebar_position: 1
---
# Að fá aðgang

Aðföngin sem Íslenska háafkasta tölvu miðstöðin(e. high performance computing centre) (IHPC/IREI) býður upp á eru tiltæk fyrir
Íslenska háskóla og ríkisrannsóknarstofnanir. Vísindamenn hjá óháðum rannsóknarstofnunum geta einnig fengið aðgang, gefið að rannsóknir þeirra séu styrktar með epinberum styrkjum.

Sérfræðinganefnd IHPC/IREI veitir aðgang og hann er veittur með tveimur mismunandi leiðum:

1. Með sammvinnu í gegnum innviðasjóð Rannís (Rannsóknarmiðstöð Íslands).
2. Eftir umsókn. Formlega umsókn má senda á [help@hi.is](mailto:help@hi.is)

Sjá nánari upplýsingar [hér](./files/rulesandreg-v1-2.pdf). 
Formleg umsókn ætti að innihalda lýsingu á verkefninu, áætlaðan tíma til að ljúka verkino og tegund hugbúnaðar og tilföngs sem þarf til að ljúka verkefninu.

# Innskráning

Eftir að hafa verið veittur aðgangur verðurðu beðinn um að búa til SSH lykil. Sjá kaflann [SSH lyklar og tengingar](./connecting/01_general.md). Þegar SSH lykillinn er virkur munu kerfisstjórar láta þig vita og þá geturðu skráð þig inn í kerfið.

## Að utan
Við skráum okkur inn á innskráningarhnút **Elju**:

```bash
$ ssh uname@elja.hi.is
# Eða ef þú ert að juggla með mörgum .ssh lyklum 
$ ssh -i ~/.ssh/id_elja uname@elja.hi.is
```

Til hamingju! Þú hefur nú skráð þig inn á innskráningarhnút **Elju**.

:::caution

**Ekki gera neitt** án þess að lesa [sameiginlega siðareglur](common/etiquette).

:::

# Viðurkenning

Við biðjum notendur vinsamlega að viðurkenna úrræði og notendastuðning sem IREI veitir í ritum. Dæmi er hér að neðan

:::note Viðurkenning
Tölvuauðlindir, gagnageymsla og notendastuðningur er veitt af upplýsingatæknisviði Háskóla Íslands í gegnum rafræna innviðaverkefni Íslandsrannsókna, styrkt af innviðasjóði Rannsóknamiðstöðvar Íslands.
:::

Að sama skapi mun það vera hagkvæmt fyrir alla hlutaðeigandi að okkur verði tilkynnt um hvaða bréf sem eru birt sem nýta auðlindirnar. Tilkynningu skal senda á „help@hi.is“ með titlinum „Elja útgáfa“.
