---
slug : easybuild
---

# Available Software Environments

This page outlines software stacks available to the users.

# EasyBuild stacks
The available EasyBuild stack dependancies are linked against the OS libraries using EasyBuild-4.5.4. A stack tree starts with a compiler environment (i.e. GCC-version). A step by step compilation process is available here (link to github). The stacks are managed with Lmod, and in general it is enough to load in the module to correctly append the necessary paths.

## libsci-gcc

The libsci-gcc tree provides a compilation of free and open source software providing commonly used numerical libraries for scientific software and applications. It starts with GCC-11.2.0, and is located in /hpcapps/libsci-gcc/ 

### Precompiled software

GCC/OpenMPI
 - OpenBLAS, Lapack
 - Scalapack, FFTW
 - Libxc
 - Python

Python includes Numpy and Scipy linked to OpenBLAS.

## libsci-intel

### Precompiled software

icc/intelmpi:
- intelmkl
- Libxc
- Python

The intelmkl provides blas, lapack, scalapack and fftw.
