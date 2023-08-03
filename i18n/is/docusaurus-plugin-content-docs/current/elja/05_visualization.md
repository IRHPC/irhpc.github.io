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
