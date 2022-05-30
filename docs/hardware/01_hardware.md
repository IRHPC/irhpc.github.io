---
slug: hardware
---

# Partitions and Hardware

To view information of the available nodes and partitions use the
following commands

```bash
sinfo
```

For more detailed information for a specific partition

```bash
scontrol show partition <partition-name>
```

## Available Partitions / Compute Nodes

| Count |  Name | Cores/Node | Memory/Node (Gib) | Features        |
|-------|----------|------------|-------------------|-----------------|
| 28    | Intel48  | 48         | 192      |                 |
| 44    | Intel64  | 64         | 256      |                 |
| 1     | Himem    | 64         | 2048              |                 |
| 3     | gpu-1xA100    | 64         | 192                  | Nvidia A100 Tesla GPU |
| 5     | gpu-2xA100    | 64         | 192                  | Dual Nvidia A100 Tesla GPU |

## Job Limits

Each partition is limited to max five (5) day timelimit for a job.

## Storage
