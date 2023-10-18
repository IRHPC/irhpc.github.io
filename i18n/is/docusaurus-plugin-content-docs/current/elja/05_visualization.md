---
slug: visualization
---

# Myndrænt

Sum stór gagnasöfn er oft gott að geta séð myndrænt. Fyrir þessar aðstæður hafa notendur nokkra möguleika sem útskýrðir eru hér að neðan. 

## SSH
Algengasta nálgunin við myndrænni keyrslu er með því að tengjast zjóninum med fána sem stillir `X11` áframsendingar. Algengast er:

```bash
ssh -X someone@something.ip.address # ForwardX11
ssh -Y someone@something.ip.address # ForwardX11Trusted
```

Hins vegar er hagnýtari aðferð að breyta "ssh" stillingarskránni sjálfri. Hægt er að bæta við eftirfarandi broti:

```conf
Host *
  ForwardAgent yes
  ForwardX11 yes
  ForwardX11Trusted yes
  XAuthLocation /opt/X11/bin/xauth # For a Mac with XQuartz
```

Fyrir Linux (og Windows meD WSL2) vélar mun `which xauth` gefa slóðina fyrir `XAuthLocation` breytuna. Nú er natnda frjálst að tengjast beint:

```bash
ssh someone@something.ip.address # Reads the ssh configuration
```

Fljótlegt próf til að sjá hvort X-framsending virkar er ad slá inn:
```bash                                       
xclock
```
Sem ætti að opna litla klukku sem sýnir staðartíma.

## Með PuTTy
PuTTy bíður einnig uppá birta forrit myndrænt inná elju. Þetta er gert með tveimur forritum, PuTTy og Xming sem er hægt að sækja [hér](https://sourceforge.net/projects/xming/files/Xming/6.9.0.31/Xming-6-9-0-31-setup.exe/download), þó það er hægt að nota önnur forrit sem gera sama hlutinn en í þessu tilfelli verður notað Xming.


### Nota XLaunch
Þegar þú ert búinn að setja upp Xming leitaðu þá að forritinu  'XLaunch' og  keyrðu það. Þegar þú ert búinn að því þá ætti efitrfarandi gluggi að birtast.

![display_settings](../../../../../docs/assets/x11_display_settings.png)


Veldu **Multiple windows** og smelltu á **Next >** og nýj síða mun birtast sem fer í gegnum ***Session Type**.

![client_startup](../../../../../docs/assets/x11_client_startup.png)


á **Session Type** veldu **start no client** og smelltu á **Next** og þér ætti að verða beint á síðuna **Additional parameters**

![extra_setting](../../../../../docs/assets/x11_extra_setting.png)


Á þeirri síðu hakaðu aðeins við **Clipboard** og smelltu á **Next >** og það mun að lokum færa þig á **Finish Configuration** sem ætti að líta eftirfarandi út.

![finish_config](../../../../../docs/assets/x11_finish_config.png)


á þessari síðu þá þarftu aðeins að smella á **Finish**

### Setja upp stillingar í PuTTY fyrir X11
Fyrsta skrefið er að opna PuTTy og hlaða inn **Session**. Til þess að gera það þá þarftu klikka á *Session* í **Session** flipanum  og smella á **Load** hnappinn.

![puTTy_config](../../../../../docs/assets/putty_configuration.png)


Fara yfir **Connection** -> **SSH** -> **X11** og veldu **Enable X11 Forwarding**,setja **X display location** í **localhost:0.0** og að auki velja **MIT-Magic-Cookie-1** í **Remote X11 authentiucation protocol**. Ef þú hefur gert allt á rétt þá ætti þetta að líta eins og má sjá á myndinni hér fyrir neðan.

![puTTy_x11_settings](../../../../../docs/assets/x11_puTTy_settings.png)

### Check for Result
Þegar þú hefur sett upp X11 og tengst elju þá væri næsta skrefið að athuga hvort að þessi uppsetning hafi tekist. Til þess að gera það þá einfaldlega skrifaðu inn í command línuna á elju ```xclock```. Þessi skipun ætti að birta klukku sem birtir local tímann eins og má sjá á meðflygjandi mynd 

![xclock](../../../../../docs/assets/x11_xclock.png)


## Xforwarding með VScode
Margir notendur nota VScode til þess að tengjast Elju en það getur verið erfitt ferli að heimila xforwarding í gegnum VScode. Hér eru leiðbeiningar til þess að setja það upp.

### Skref 1
Fyrsta skrefið  er að keyra XLaunch til þess að heimila xforwarding. Til þess að setja það upp þá er best að fylgja leiðbeinungunum í þessum kafla [hér](#Nota-XLaunch)


### Skref 2
Byrjaðu á að opna VScode of smella á ```F1``` hnappinn á lyklaborðinu og skrifaðu ```Preferences: Open Settings (UI)```  

![pressF1](../../../../../docs/assets/PressF1.png)

### Skref 3
Leitaðu núna eftir ```terminal.integrated.env.windows``` og smelltu á ```Edit in settings.json``` eins og er sýnt á myndinni hér fyrir neðan  

![pressF1](../../../../../docs/assets/temrinal.integrated.env.windows_step%20-%20Copy.png)

### Skref 4
Eftir skref 3 þá ætti vscode að opna skjal sem heitir ```settings.json``` og þar bættu við eftirfarandi línu:

```bash
    "terminal.integrated.env.windows": {    
        "DISPLAY": "127.0.0.1:0.0"
    },
```
Vistaðu og lokaðu síðan glugganum

### Skref 5
Í SSH config skjalinu, staðsetning á því skjali er breytanleg en á oftast til að vera staðsett ```~/.ssh/config``` og bættu eftirfarandi við í skjalið.

```bash
Host TestX11 #breytilegt
  HostName elja.hi.is
  User <Notendanafnið þitt>
  ForwardAgent yes
  ForwardX11 yes
  ForwardX11Trusted yes
  IdentityFile <location of private key>
```
### Skref 6
***Þetta skref krefst þess að notandi þarf að bæta við "remote-ssh" extenstion***

Tengdu þig við Elju með því að smella á græna hnappinn sem er staðsett í vinstra horninu á skjánum  og smelltu á *connect to Host...* eins og má sjá í með fylgjandi skjali.

![Alt text](../../../../../docs/assets/Connecting%20to%20Elja.jpg)

og eins og má sjá á næstu mynd smelltu á nafnið á 'HOST', í þessu tilfelli ```TestX11```, sem þú villt tengjast við.

![Alt text](../../../../../docs/assets/SelectHost.jpg)

### Skref 7
Þegar þú ert tegnajst við Elja athugaðu ef xforwarding er að virka með því að skrifa ```xclock``` í terminal-ið hjá þér eins meðfylgjandi mynd sýnir: 
![Alt text](../../../../../docs/assets/vscode_xclock.jpg)