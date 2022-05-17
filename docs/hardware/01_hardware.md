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

## Available Compute Nodes

| Count | CPU Name | Cores/Node | Memory/Node (Gib) | Features        |
|-------|----------|------------|-------------------|-----------------|
| 28    | Intel48  | 48         |                   |                 |
| 28    | Intel64  | 64         |                   |                 |
| 3     | SA100    | 64         |                   | Single A100 GPU |
| 1     | DA100    | 64         |                   | Double A100 GPU |

## Job Limits

## Storage
