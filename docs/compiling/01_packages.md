---
slug : easybuild
---

# Available Software Environments

This page outlines the software stacks available to the users and the module manager used to load in the desired software.

# EasyBuild Stacks
The available EasyBuild stack dependancies are linked against the OS libraries and drivers using [EasyBuild](https://docs.easybuild.io/en/latest/). A stack tree starts with a compiler environment (i.e. GCC-version). 
The stacks are managed with the module manager [Lmod](https://docs.easybuild.io/en/latest/). In general it is enough to load a software module to make the software ready for use. Loading in the module correctly append the necessary binary paths and loads all dependencies.

In order to make user of a compiler environment to compile your own software several modules may have to be loaded at once. 
See [here](./03_devenvironment.md) for compiling / development instructions.

## Using Lmod

The main command for using the manager is **module** (or **ml** for short).
A list of options is available by typing:

```bash 
[..]$ module --help
```

To see a list of avalable modules type:

```bash
[..]$ module avail
```

For a complete list, which includes dependencies of all of the software, type:

```bash
[..]$ module --show-hidden avail
```

This command can also be used to list specific sofwtare and all available versions, for example:

```bash
[..]$ module avail Anaconda3
   Anaconda3/2021.11 (D)	Anaconda3/2022.05
```

### Loading Modules

To load a module type:

```bash               
[..]$ module load Anaconda3
```

In this particular case it will load the (D)efault module.
To list the currently loaded modules type:

```bash
[..]$ module list
Currently Loaded Modules:
  1) Anaconda3/2021.11
```

You can load in as many modules at any time as you please. Note that some modules may conflict with each other.

If you wish to switch from one particular version to another type:

```bash
[..]$ module switch Anaconda3/2021.11 Anaconda3/2022.05
```

To unload a module type:

```bash
[..]$ module unload Anaconda3
```

If you wish to clear your the whole list of currently loaded modules type:

```bash
[..]$ module purge
```

### Storing Module Environments

When you have loaded in a set of modules which you frequently use for your work it can be a good idea to store the set, for example:

```bash                                                                                             
[..]$ module save env1                                                   
``` 

where **env1** is just an example name. 
In a later session you can reload the desired set of modules by typing:

```bash
[..]$ module restore env1
```

To see a list of stored module sets type:

```bash
[..]$ module savelist
Named collection list :
  1) default  2) env1
```

## libsci-gcc

The libsci-gcc tree provides a compilation of free and open source software providing commonly used numerical libraries for scientific software and applications. It starts with GCC-11.2.0, and is located in /hpcapps/libsci-gcc/ 

### Precompiled software

GCC/OpenMPI
 - OpenBLAS, Lapack
 - Scalapack, FFTW
 - Libxc
 - Python

Python includes Numpy and Scipy linked to OpenBLAS and FFTW.
