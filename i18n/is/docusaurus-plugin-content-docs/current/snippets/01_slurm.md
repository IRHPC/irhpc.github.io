---
slug: slurm
---
# Slurm

## Gagnvirkar lotur

### Farðu í hnútinn

Við getum beðið um starf með tveimur reiknihnútum og 48 verkefnum yfir í þrjátíu mínútur.

``` bash
❯ srun -N 2 -n 48 -t 30 --pty /bin/bash
# Þetta færir þig beint að hnútnum
```

Mundu að við höfum meiri upplýsingar með `srun --help`, ásamt handsíðum `man srun` sem [hægt er að nálgast hér](http://manpages.org/srun/1).

### Biðja um hnúta

Með `salloc` erum við ekki færð yfir á hnútinn, þetta er gagnlegt fyrir `callbacks`.