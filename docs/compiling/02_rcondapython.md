---
slug : rcondapython
---

# Conda, Python, R & Go

:::note
It is important to run all package compilations on the **log-in node** before deploying these environments on the **compute nodes**.
:::

## Conda

```bash
[..]$ module load Anaconda3/2022.05
```

:::note
An older version of Anaconda3 (2021.11) is still available. It is recommended to switch to the newer version as soon as possible. It will be removed in May 2023.
:::

### One time setup

```bash
[..]$ conda config --add channels defaults
[..]$ conda config --add channels bioconda
[..]$ conda config --add channels conda-forge
[..]$ conda init
```

Log out and log in to Elja again. Your conda is now ready.

Create environments (and install packages):

For example:

```bash 
[..]$ conda create -y -p /hpcdata/Mimir/<uname>/env_mimir bowtie2
```

This will create an environment called “env\_mimir” and install 
bowtie2 (and some dependencies). 
All binaries go into **/hpcdata/Mimir/<uname\>/env\_mimir**

When installation is complete activate your environment:

```bash
[..]$ conda activate /hpcdata/Mimir/<uname>/env_mimir
```

This environment contains bowtie2:

```bash
(../<uname>/env_mimir) [..]$ bowtie2 --version
/hpcdata/Mimir/<uname>/env_mimir/bin/bowtie2-align-s version 2.4.5
```

You can install additional packages into this environment:

```bash
(../<uname>/env_mimir) [..]$ conda install -c bioconda macs2
```

After the installation the environment contains macs2 in addition to bowtie2:

```bash
(../<uname>/env_mimir) [..]$ macs2 --version
macs2 2.2.7.1
```

To leave the environment type:

```bash
(../<uname>/env_mimir) [..]$ conda deactivate
```

You can always start a new environment and install different packages into it, e.g.:

```bash
[..]$ conda create -y -p /hpcdata/Mimir/<uname>/env_mimir2
[..]$ conda activate /hpcdata/Mimir/<uname>/env_mimir2
(../<uname>/env_mimir2) [..]$ conda install -c bioconda trim-galore
(../<uname>/env_mimir2) [..]$ trim_galore --version

                        Quality-/Adapter-/RRBS-/Speciality-Trimming
                                [powered by Cutadapt]
                                  version 0.6.7

                               Last update: 11 05 2020
```

This allows you to have separate environments for different tasks. 

If you are not using a particular environment anymore please remove it like this:

```bash
[..]$ conda env remove --name env_name
```

This removes the installed binaries, and saves up space for other users.

### Switching to a new Conda Version

The conda initialization writes a small snippet of code into your **.basrhc** which looks like this
```bash
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/hpcapps/lib-mimir/software/Anaconda3/2021.11/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/hpcapps/lib-mimir/software/Anaconda3/2021.11/etc/profile.d/conda.sh" ]; then
        . "/hpcapps/lib-mimir/software/Anaconda3/2021.11/etc/profile.d/conda.sh"
    else
        export PATH="/hpcapps/lib-mimir/software/Anaconda3/2021.11/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

To switch to the new version **Anaconda3/2022.05** simply change these lines in your **.basrhc** to
```bash
else
    if [ -f "/hpcapps/lib-mimir/software/Anaconda3/2022.05/etc/profile.d/conda.sh" ]; then
        . "/hpcapps/lib-mimir/software/Anaconda3/2022.05/etc/profile.d/conda.sh"
    else
        export PATH="/hpcapps/lib-mimir/software/Anaconda3/2022.05/bin:$PATH"
    fi
fi
```

Now **log out** and **log in** again to implement the changes.

## Python

A specialized version of Python - Biopython - is available for use on Elja. 
The base version of Python is 3.9.6. It includes pip 21.2.2.

```bash
[..]$ module load Biopython
[..]$ python --version
Python 3.9.6
[..]$ $ pip --version
pip 21.2.2
```

In order to install your own Python packages with pip the flag --user must be included to install the packages locally (in your homespace), for example:

```bash
[..]$ pip install --user alfpy
```

The Python package alfpy is installed, and is located in **/users/home/<uname\>/.local/lib/python3.9/site-packages/**:

```bash
[..]$ python
>>> import alfpy
>>> print(alfpy.__version__)
1.0.6
```

## R

:::note
**Mimir users!**
It is recommended that the user creates a directory called “.local/R/library” in their /hpcdata/Mimir/<uname\> directory. 
:::

```bash
[..]$ mkdir -p /hpcdata/Mimir/<uname>/.local/R/library
```

and uses this directory to install additional R packages via CRAN. For R packages installed with release binaries (.tar.gz files for example), another directory is created:

```bash
[..]$ mkdir -p /hpcdata/Mimir/<uname>/.local/R_libs
```

To make use of these directory it is further recommented to create 
a small bash script (for example .bashrc\_R) which includes these lines:

```bash
[..]$ cat >> ~/.bashrc_R << EOF
# add these lines after '>' one-by-one:
> module load R
> if [ -n $R_LIBS ]; then
>   export R_LIBS=/hpcdata/Mimir/$USER/.local/R/library:/hpcdata/Mimir/$USER/.local/R_libs$R_LIBS
> else 
>   export R_LIBS=/hpcdata/Mimir/$USER/.local/R/library:/hpcdata/Mimir/$USER/.local/R_libs
> fi
> EOF
```

Sourcing this bash script loads in the R module, 
and appends your local directory to the R-library list.

```bash
[..]$ R --version
R version 4.1.2 (2021-11-01) -- "Bird Hippie"
Copyright (C) 2021 The R Foundation for Statistical Computing
Platform: x86_64-pc-linux-gnu (64-bit)
[..]$ R
> .libPaths()
[1] "/hpcdata/Mimir/<uname>/.local/R/library"
[2] "/hpcdata/Mimir/<uname>/.local/R_libs"
[3] "/hpcapps/lib-mimir/software/R/4.1.2-foss-2021b/lib64/R/library"
```

The ordering of the library paths is important, since it will first look in your local libraries when loading an R packages.

To install a package via CRAN to this library type, for example :

```bash
> install.packages("vioplot", repos="http://cran.r-project.org", lib="/hpcdata/Mimir/<uname>/.local/R/library")
```

To load the package type:

```bash
> library("vioplot")
```

To install R packages from a source directory (release binaries), we first download the package. For example:

```bash
[..]$ wget http://cran.r-project.org/src/contrib/Archive/ggplot2/ggplot2_2.0.0.tar.gz
```

Run the command below to install the package to your “R\_libs” directory. 
If we do not specify the path, installation will fail since by default the 
package will be installed in root directory which you do not have write priviliges to.

```bash
[..]$ R CMD INSTALL --library=/hpcdata/Mimir/<uname>/.local/R_libs ggplot2_2.0.0.tar.gz
```

Open the R console and load the package with the following command:

```bash
> library("ggplot2") 
```


## Go

### Loading Go
The current version of Go on Elja is 1.20.2. To load the Go module you will simply have to type in the following in the command line

```bash
[..] $ ml load Go
```
### Setting up your Go-workspace

Create a 'goWorkspace' in your home directory

```bash
[..] $ mkdir goWorkspace
```

To be able to run your go project you will need to specify your own GOPATH to your 'goWorkspace'

```bash
[..] $ export GOPATH=/users/home/$USER/goWorkspace/ 
```

In your goWorkspace directory create three directories "bin", "src" and "pkg"

```bash
[..] $ cd goWorkspace
[..] $ mkdir bin src pkg
```
Now you have setup your own Go-workspace!

### Creating your first Go Program
Your go projects should be located in your **src** directory. Lets start creating a go module in **src** called "**myProject**".

```bash
[..] $ cd src/
[..] $ mkdir myProject 
[..] $ cd myProject 
[..] $ go mod init myProject
```
a **go.mod** will be created for your module. The **go.mod** will work as a dependency managment tool for your go project.


### go get

```bash
[..] $ go get $package_name
```
***go get*** downloads and installs packages and their dependencies from remote repositories. The downloaded packages are stored in the workspace's **pkg** and **src** directories.

:::note
You will have to be in a project directory to use **go get**
:::
### go install

```bash
[..] $ go install $package_name
```
By using ***go install*** you create a binary file in **bin** and package located in **pkg/mod/**