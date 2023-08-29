---
slug: matlab
---

# MatLab
Nú er Matlab fáanlegt sem [Singularity](singularity) gámur.
Þú munt þurfa að gefa upp [MathWorks](https://Mathworks.com) aðgangs póstfangið sem þú notar fyrir þitt Matlab leyfi.

## Hlaða inn Matlab
Matlab er fáanlegt sem eining á **Elju**

```bash
$ ml load Matlab
```

## Keyra Matlab
Til að keyra Matlab notaðu `matlab` skipunina.

:::note
Þú þarft að vera í [Gagnvirkri Lotu](../elja/interactive_session) eða keyra [Lotuverkefni](../elja/submit_jobs) til að nota matlab.
:::

### Virka Matlab leyfið þitt á Elju

Ef þetta er fyrsta skiptið sem þú keyrir Matlab á **Elju** munt þú vera beðin um MatWorks aðgangs póstfangið þitt:

```bash
$ srun --job-name "Matlab Job" --partition any_cpu --cpus-per-task 24 --mem-per-cpu 3900 --time 02:00:00 --pty bash
$ matlab 
MATLAB is selecting SOFTWARE OPENGL rendering.
Please enter your MathWorks Account email address and press Enter:
```

Ef þú ert stafsmaður eða nemandi [HÍ](https://hi.is) getur þú notað `<uname>@hi.is` póstfangið þitt, annars verður þú að skaffa póstfangi með virku leyfi á.

Þegar þú hefur slegið inn póstfangið þitt munt þú fá einnota lykilorð sem þú nálgast [hér](https://www.mathworks.com/mwa/otp).

```bash
Single-Sign-On(SSO) is not available in this environment. You need a one-time password to sign in to MATLAB.
        Step 1. Visit https://www.mathworks.com/mwa/otp
        Step 2. Copy the password.
        Step 3. Return here, and input the password.
Please enter the one-time password:
```

Farðu inn á slóðina og sláðu síðan einnota lykilorðið inn í skipanagluggan.
Leyfið þitt ætti nú að vera virkt of þú getur notað Matlab á **Elju**

### Hello, Matlab!
Búðu til skrá nefnda `hello.m` og bættu við eftirfarandi línuam:

```bash
$ touch hello.m
$ echo "disp("Hello, Matlab!");" > hello.m
```

Nú getum við keyrt skrána okkar í gagnvirkri lotu: 

```bash
$ matlab -r "run('hello.m')"
Starting MATLAB with license: xxxxxxx - MATLAB (Individual)

                                                                                                          < M A T L A B (R) >
                                                                                                Copyright 1984-2023 The MathWorks, Inc.
                                                                                           R2023a Update 3 (9.14.0.2286388) 64-bit (glnxa64)
                                                                                                              May 25, 2023

 
To get started, type doc.
For product information, visit www.mathworks.com.
 
Hello, Matlab!
```