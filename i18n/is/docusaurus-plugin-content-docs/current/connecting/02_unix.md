---
slug: unixconnecting
---
# UNIX

## Terminal


Til að búa til SSH lyklapar:

``` bash
[..]$ ssh-keygen -f ~/.ssh/id_name -t rsa -b 4096
```

Hér er lyklaparið nefnt "id\_name" sem dæmi.

:::note
Það er í lagi að skilja lykilorðið eftir tómt þegar beðið er um það (þ.e. ekkert lykilorð). Verið meðvituð um að ef þið veljið lykilorð gæti SSH-lyklaaðgangurinn þinn ekki virka með SFTP hugbúnaði eins og FileZilla.
:::

Opinberi hluti lykilsins er að finna hér "~/.ssh/id\_name.pub", og það er auðveldast að skoða efnið á þennan hátt:
```bash
[..]$ cat ~/.ssh/id_name.pub
```

Afritaðu innihaldið og sendu það til stjórnenda.

Eftir að almenni lykillinn hefur verið hlaðið upp á innskráningarhnútinn af stjórnandanum geturðu skráð þig inn í kerfið á þennan hátt

```bash                                                                                             
[..]$ ssh <uname>@elja.hi.is
# or if you are juggling many SSH keys
[..]$ ssh -i ~/.ssh/id_name <uname>@elja.hi.is
``` 

Terminal gluggin þinn ætti að birta innskráningarskilaboð, fylgt eftir með skipanalínu eins og þessari:

```bash
[<uname>@elja-ihpc ~]$
```
Til að fá skjótan aðgang er mælt með því að búa til "alias" í "~/.bashrc" á einkavélinni þinni:

```bash
[..]$ cat >> ~/.bashrc << EOF
> alias elja="ssh -i ~/.ssh/id_name <uname>@elja.hi.is
EOF
```

Eftir að nýju "~/.bashrc" skráini hefur verið hlaðið getur þú skráð þig inn á þennan hátt:

```bash                                                 
[..]$ elja                          
``` 
Að öðrum kosti geturðu bætt við **config** skrá í **.ssh** möppuna þína

```bash                                                               
[..]$ touch ~/.ssh/config
[..]$ chmod 600 ~/.ssh/config
``` 
bættu svo upplýsingum um **Elju** við stillingarskrána

```bash                                                               
[..]$ cat >> ~/.ssh/config << EOF
> Host Elja
>    HostName elja.hi.is
>    User <uname>
>    Port 22
>    IdentityFile ~/.ssh/id_elja
EOF
``` 
Þú getur nú skráð þig inn með:

```bash
[..]$ ssh Elja
```

:::note
**Þessar leiðbeiningar virka ekki fyrir Windows skipanalínuna**
:::

## Villur

### Leyfi hafnað

Ef þú færð ```permission denied``` villu þegar þú reynir að tengjast Elju geturðu gert eftirfarandi til að leysa vandamálið þitt:


***.ssh*** skráin þín er í $HOME skránni þinni. Farðu í $HOME og skrifaðu:
```bash
$ cd $HOME
$ ls -la .ssh
```

Þetta mun birta heimildir fyrir **.ssh** möppunni og skrár í möppunni. Algengar skrár þínar (t.d. þekktir_hýsingar) og opinber lykilskrár verða að hafa eftirfarandi heimildir: **-rw-r--r--**

Til að breyta í rétta tegund leyfis:

```bash
$ chmod 644 .ssh/known_hosts
$ chmod 644 .ssh/*.pub
```


Þínir einkalyklar verða að hafa leyfi: **-rw-------**

Til að breyta í rétta tegund leyfis:

```bash
$ chmod 600 .ssh/nameofkey
```

Að lokum verður **.ssh** mappan að hafa eftirfarandi leyfi: **drwx------**

Til að breyta í rétta tegund leyfis:


```bash
$ chmod 700 .ssh/
```
