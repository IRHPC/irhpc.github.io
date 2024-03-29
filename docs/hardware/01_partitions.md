---
slug: parthardw
---

# Partitions & SLURM

To view information of the available nodes and partitions use the
following commands

```bash
sinfo
```

For more detailed information for a specific partition

```bash
scontrol show partition <partition-name>
```

The login and control nodes of Elja
host two compute clusters: HPC-Elja and HTC-Mimir. Partitions and groups
are used to separate the two.

### HPC-Elja : Available Partitions / Compute Nodes

| Count |  Name | Cores/Node | Memory/Node (Gib) | Features        |
|-------|----------|------------|-------------------|-----------------|
| 28    | 48cpu_192mem  | 48 (2x24)     | 192 (188)      | Intl Gold 6248R                |
| 55    | 64cpu_256mem  | 64 (2x32)     | 256 (252)     | Intl Platinum 8358               |
| 4    | 128cpu_256mem  | 128 (2x64)     | 256 (252)     | AMD EPYC 7713                |
| 3     | gpu-1xA100    | 64 (2x32)     | 192 (188)   | Nvidia A100 Tesla GPU |
| 5     | gpu-2xA100    | 64 (2x32)     | 192 (188)   | Dual Nvidia A100 Tesla GPU |

Core to true (memory) ratio equates to **3.9Gb** per core.

#### HPC-Elja : Job Limits

Each partition has a max seven (**7**) day timelimit. Additionally, the queues **any_cpu** and **long** are provided: 
- **any_cpu**, all cpu nodes, one (**1**) day timelimit 
- **long**, ten 48cpu and ten 64cpu nodes, fourteen (**14**) day timelimit

### HTC-Mimir : Available Partitions / Compute Nodes
| Count |  Name | Cores/Node | Memory/Node (Gib) | Features        |
|-------|----------|------------|-------------------|-----------------|
| 9    | mimir  | 64 (2x32)       | 256 (252)     |                 |
| 1     | mimir-himem    | 64 (2x32)       | 2048 (2044)             |                 |

Core to true (memory) ratio equates to **3.9Gb** per core on the **mimir** partition, and **31Gb** on the mimir-himem partition.

#### HTC-Mimir : Job Limits

Either partition has a fourteen (**14**) day timelimit. 

### SLURM Configuration

SLURM is configured such that **3.94**GB of memory is allocated per core.

### Available Memory

On each node 2-4 Gib RAM are reserved for the operating system images (hence the true value is in the paranthesis).


