---
slug: terminology
---

# Hugtök

Nokkur hugtök sem notuð eru í skjölunum:

- **Innskráningarhnútur** :: Hnútur sem snýr út á netið sem gerir þér kleift að skrá þig og senda inn, fylgjast með og skoða niðurstöður úr þínum keyrslum. Þessu hnútur er ekki ætlaður fyrir útreikninga og aðrar þungar keyrslur. 
  
- **Starf** :: til þess að keyra útreikninga á `HPC` klasanum, sendir maður inn starf. Þetta starf samanstendur af keyrsluforritinu sem á að keyra sem og skipanalínuröksemdum sem stilla 'SLURM' tímaáætlunina.

- **Reiknunarhnútar** :: Vinnuhestarnir í `HPC` klasanum þar sem útreikningar eru gerðir. Flestir hnútarnir falla undir þennan flokk.

- **Skipting(e. partition)** :: Skipting skilgreinir mengi reiknihnúta sem falla undir sama flokk, sem endurspeglar til dæmis mismunandi vélbúnað.

- **Tímaáætlun(e. scheduler)** :: Hugbúnaður sem keyrir á innskráningarhnút sem sér um að úthluta auðlind til starfa í biðröðinni. Elja `HPC` notar `SLURM` tímaáætlun.

- **Biðröð** :: listi yfir störf sem bíða eftir að fá úthlutað auðlindum. Þeim tíma sem varið er í biðröðina fer eftir magni tilföngs og tíma sem óskað er eftir. Biðröðinni og forganginum í henni er stjórnað af `SLURM` tímaáætluninni.
