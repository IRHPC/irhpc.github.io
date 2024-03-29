---
slug : Metaerg
---

# Metaerg

## 0. Inngangur
***Metaerg*** er sjálfvirk leiðsla sem notar hugbúnað frá þriðja aðila ásamt stórum gagnagrunni til að gera athugasemdir við erfðamengi eða sett af hólfum frá örveruvistkerfum. Dæmi um slík skýringarverkefni eru eiginleikaspá með ***HMM***, ***BLAST*** og ***DIAMOND***.


fáðu frekari upplýsingar um ***Metaerg*** með því að lesa úr [github geymslunni](https://github.com/xiaoli-dong/metaerg) og eftirfarandi [grein](https://www.frontiersin.org/ articles/10.3389/fgene.2019.00999/full) í [frontiersin](https://www.frontiersin.org/) sem var skrifað af sömu aðilum og gerðu ***Metaerg***.

---

## 1. Að byrja


### 1.1 Uppsetning
Það eru margir möguleikar þegar kemur að uppsetningu ***Metaerg***. Ein leiðin er að nota [Docker](https://www.docker.com/) sem var ekki notað þar sem Elja veitir ekki gámastuðning eins og er. Annar möguleiki var að nota [Easybuild](https://docs.easybuild.io/) sem veitir ekki nýjustu útgáfuna (veitir aðeins útgáfu [1.2.3](https://docs.easybuild.io/version-specific /studd-software/#metaerg)) af ***Metaerg***.
Þriðji kosturinn sem var valinn var að setja upp ***Metaerg*** og önnur hjálparforrit þess handvirkt, byrja á því að klóna [þetta](https://docs.easybuild.io/version-specific/supported-software/#metaerg ) git repository og fylgja uppsetningarleiðbeiningum og kröfum í README.md skránni.

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

## 2 Keyra Metaerg á Elja

### 2.1 Loading Metaerg
Áður en það er hægt að keyra ***Metaerg*** á Elju, þú þarftu að hlaða in ***Metaerg*** módulnum. Til þess að gera það þá þarftu að skrifa eftirfarandi línum í terminal:

```bash
[..]$ ml use /hpcapps/lib-mimir/modules/all
[..]$ ml load Metaerg
```

### 2.2 Running Metaerg
Til þess að keyra ***Metaerg***  þá þarft þú að skrifa ```metaerg``` með ðarametrum sem þú getur fundið [hér](https://github.com/kinestetika/MetaErg#usage). Dæmi á ***Metaerg*** keyrslu myndi líta eftirfarandi út:

```bash
[..] $ metaerg --contig_file dir-with contig-files --database_dir /AlphaFoldData/MetaergData/db/ 
```

Taktu eftir að **--database_dir /AlphaFoldData/MetaergData/** er alltaf nauðsynlegt að hafa þegar það er keyrt **Metaerg** og er vísun á staðsetningu á gagnasafninu sem ***Metaerg*** notar.