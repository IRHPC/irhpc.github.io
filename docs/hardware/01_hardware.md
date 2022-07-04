---
slug: Hardware
---

## Partitions and Hardware

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
| 28    | Intel24  | 2x24 (48)        | 188 (192)      |                 |
| 35    | Intel32  | 2x32 (64)        | 252 (256)     |                 |
| 3     | gpu-1xA100    | 2x32 (64)        | 188 (192)   | Nvidia A100 Tesla GPU |
| 5     | gpu-2xA100    | 2x32 (64)        | 188 (192)   | Dual Nvidia A100 Tesla GPU |

### HTC-Mimir : Available Partitions / Compute Nodes
| Count |  Name | Cores/Node | Memory/Node (Gib) | Features        |
|-------|----------|------------|-------------------|-----------------|
| 9    | mimir  | 2x32 (64)        | 252 (256)     |                 |
| 1     | mimir-himem    | 2x32 (64)        | 2044 (2048)             |                 |

On each node 4 Gib RAM are reserved for the operating system images.

### Job Limits

Each partition is limited to max five (5) day timelimit for a job.

### Storage
