---
slug: hardwarespec
---

# Hardware Specifications

In total there are 4736 cores available, including 8 Nvidia A100 Tesla GPU cards.

28 x standard compute nodes:
- Partition : 48cpu_192mem
- 2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00 GHz
- 192 (12 x 16) GB DDR4 @ 2667 MHz
- Infiniband (4 x EDR) Mellanox, 100 Gb/s
- 3.5 TB /scratch/ disk

44 x standard compute nodes:
- Partition : 64cpu_256mem, mimir
- 2 x Intel(R) Xeon(R) Platinum 8358 CPU, 2 x 32 @ 2.60 GHz
- 256 (16 x 16) GB DDR4 @ 2667 MHz
- Infiniband (4 x EDR) Mellanox, 100 Gb/s
- 3.5 TB /scratch/ disk

1 x high-memory compute node:
- Partition : mimir-himem
- 2 x Intel(R) Xeon(R) Platinum 8358 CPU, 2 x 32 @ 2.60 GHz
- 2048 (32 x 64) GB DDR4 @ 2667 MHz
- Infiniband (4 x EDR) Mellanox, 100 Gb/s
- 3.5 TB /scratch/ disk

3 x single GPU card nodes:
- Partition : gpu-1xA100
- 2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz
- 1 x NVIDIA A100 Tensor Core GPU
- 192 (12 x 16) GB DDR4, 2667 MHz
- InfiniBand (4 x EDR) Mellanox, 100 Gb/s
- 3.5 Tb /scratch/ disk

5 x dual GPU card nodes:
- Partition : gpu-2xA100
- 2 x  Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz
- 2 x  NVIDIA A100 Tensor Core GPU
- 192 (12 x 16) GB DDR4, 2667 MHz
- InfiniBand (4 x EDR) Mellanox, 100 Gb/s
- 3.5 Tb /scratch/ disk

1 x login node:
- 2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz
- 192 (12 x 16) GB DDR4, 2667 MHz
- 100 Gb/s eth

1 x control node:
- 2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz
- 192 (12 x 16) GB DDR4, 2667 MHz
- 100 Gb/s eth
- 50 TB disk hosting /home/
