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

In total there are 4736 cores available, including 8 Nvidia A100 Tesla GPU cards. Elja
hosts two compute clusters: HPC and HTC-Mimir.

### HPC : Available Partitions / Compute Nodes

| Count |  Name | Cores/Node | Memory/Node (Gib) | Features        |
|-------|----------|------------|-------------------|-----------------|
| 28    | 48cpu_192mem  | 48 (2x24)     | 192 (188)      |                 |
| 35    | 64cpu_256mem  | 64 (2x32)     | 256 (252)     |                 |
| 3     | gpu-1xA100    | 64 (2x32)     | 192 (188)   | Nvidia A100 Tesla GPU |
| 5     | gpu-2xA100    | 64 (2x32)     | 192 (188)   | Dual Nvidia A100 Tesla GPU |

#### HPC : Job Limits

Each partition has a max seven (**7**) day timelimit. Additionally, the queues **any_cpu** and **long** are provided, which have a one (**1**) and fourteen (**14**) day timelimits. 

### HPC : SLURM Configuration

### HTC-Mimir : Available Partitions / Compute Nodes
| Count |  Name | Cores/Node | Memory/Node (Gib) | Features        |
|-------|----------|------------|-------------------|-----------------|
| 9    | mimir  | 64 (2x32)       | 256 (252)     |                 |
| 1     | mimir-himem    | 64 (2x32)       | 2048 (2044)             |                 |

#### HTC-Mimir : Job Limits

Either partition has a max fifteen (**15**) day timelimit. 

### HTC-Mimir : SLURM Configuration

### Available Memory

On each node 2-4 Gib RAM are reserved for the operating system images (hence the true value is in the paranthesis).
