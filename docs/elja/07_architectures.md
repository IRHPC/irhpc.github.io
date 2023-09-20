---
slug: architetures
---

# Architectures

Elja sports two types of central processing units(CPU): 
- Intel(R) 
    - Intel(R) processors use a "CISC" (Complex Instruction Set Computer) architecture
- AMD
  - AMD processors use a "RISC" (Reduced Instruction Set Computer) architecture.

Due to the difference in architectures some software requires to be built specifically for the type of processor.
Elja offers a module tree name `libsci-amd` to provide AMD-built software. 
The `libsci-amd` module tree can bee accsessed with the following command
```bash
$ ml use /hpcapps/libsci-amd/modules/all
```

## Partitions
### Intel
Most partitions on Elja are Intel(R) based and can use all available module trees except for `libsci-amd`.
### AMD
There are a total of 5 AMD based partitions these are as follows:
- 4x 128cpu_256mem 
  - Which sport AMD EPYC 7713
- 1x gpu-8xA100
  - Which sports AMD EPYC 7742 and a total of 8 Nvidia A100 Tesla GPU's

## Known software 
Here we wil list software that is known to need a different build depending on CPU architecture.
- Python

If you run into problems running software on these nodes, and receive errors like the following, please contact help@hi.is and let us know.

```bash
Illegal Instruction (core dumped)
```  
