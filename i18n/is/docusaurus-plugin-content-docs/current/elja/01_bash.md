---
slug: bash
---

# Bash

Þyrpinginn keyrir Linux stýrikerfi þar sem Bash skeljar skriptur og gagnvirkar skipanir eru studdar.
Grunn þekking af Bash skeljar (Linux) skipunum er nauðsynlegt til þess að eiga samskipti við þyrpinguna.

## Algengar Skipanir 

| Skipanir          | Lýsing                                                     |
|------------------|-----------------------------------------------------------------|
| `cp file1 file2` | Afritar `file1` og endurnefnir hann `file2`                           |
| `mv file1 file2` | Færir eða endurnefnir `file1` í `file2`                               |
| `rm file`        | Eyðir skrá                                                  |
| `rmdir dir/`     | Eyðir **tómri** möppu                                 |
| `-r`             | Valmöguleikin `-r` leyfir `cp` og `rm` að vinna á möppu  |

Til viðbótar er hægt að sjá gagnlegar skipanir hér [hér](https://www.educative.io/blog/bash-shell-command-cheat-sheet).

## Breyta skrám
**Elja** býður upp á alla helstu textaritla sem eru í boði fyrir linux.

### Vim 

Vim er mjög stillanlegur textaritill sem er smíðaður til að búa til og breyta hvers kyns texta mjög skilvirkt.

#### Notkun 
```bash
vim file.txt
```
[Vim/Vi svinlblað](https://devhints.io/vim)

### Vi
Vi er léttari útgáfa af Vim

#### Notkun 
```bash
vi file.txt
```

[Vim/Vi svindlblað](https://devhints.io/vim)

### Emacs
Emacs er textaritill hannaður fyrir POSIX stýrikerfi og fáanlegur á Linux, BSD, macOS, Windows og fleira. Notendur elska Emacs vegna þess að það inniheldur skilvirkar skipanir fyrir algengar en flóknar aðgerðir og fyrir viðbætur og stillingarárásir sem hafa þróast í kringum það í næstum 40 ár.
#### Notkun
```bash
emacs file.txt
```
[Emacs svindlblað](http://cs.hamilton.edu/misc/EmacsCheatSheet_iupui.pdf)

### Nano
Létt og einfalt, nano skilar einföldum, leiðandi ritstjóra án auka vesen.
### Notkun 
```bash
nano file.txt
```
[Nano cheat sheet](https://www.nano-editor.org/dist/latest/cheatsheet.html)

## bash_profile og bashrc

### bash_profile
.bash_profile er falin skrifta sem er keyrð aðeins einu sinni þegar þú skráir þig inn á reikninginn þinn. Þetta er notað til að stilla umhverfisbreytur og til að keyra skipanir sem þarf aðeins einu sinni í upphafi lotunnar. Það er almennt notað til að stilla PATH breytu.
### bashrc
Bashrc er stillingarskrá fyrir Bash skelina, sem er sjálfgefin skel á Elju. Það er keyrt í hvert skipti sem þú opnar nýtt tilvik af skipanaglugga, til dæmis þegar þú notar ```screen``` skipunina, og er notuð til að stilla umhverfisbreytur, skilgreina samnefni og sérsníða skipanalínuna þína.
