---
slug: hardwarespec
---
# Vélbúnaðarforskriftir

Alls eru 6528 kjarnar í boði, þar á meðal 13 Nvidia A100 Tesla GPU kort. Að svo stöddu stendur það í **628 TFLOPS**

28 x venjulegir reiknihnútar:
- Partition : 48cpu_192mem
- 2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00 GHz
- 192 (12 x 16) GB DDR4 @ 2667 MHz
- Infiniband (4 x EDR) Mellanox, 100 Gb/s
- 3.5 TB /scratch/ disk

64 x venjulegir reiknihnútar:
- Partition : 64cpu_256mem, mimir
- 2 x Intel(R) Xeon(R) Platinum 8358 CPU, 2 x 32 @ 2.60 GHz
- 256 (16 x 16) GB DDR4 @ 2667 MHz
- Infiniband (4 x EDR) Mellanox, 100 Gb/s
- 3.5 TB /scratch/ disk

4 x AMD reiknihnútar:
- Partition : 128cpu_256mem
- 2 x AMD EPYC<sup>TM</sup> 7713 CPU, 2 x 64 @ 2.00 GHz
- 256 (16 x 16) GB DDR4, 2933 MHz
- Infiniband (4 x EDR) Mellanox, 100 GB/s
- 3.5 TB /scratch/ disk

1 x hátt-minni reiknihnútur:
- Partition : mimir-himem
- 2 x Intel(R) Xeon(R) Platinum 8358 CPU, 2 x 32 @ 2.60 GHz
- 2048 (32 x 64) GB DDR4 @ 2667 MHz
- Infiniband (4 x EDR) Mellanox, 100 Gb/s
- 3.5 TB /scratch/ disk

3 x einfaldir Skjákortshnútar:
- Partition : gpu-1xA100
- 2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz
- 1 x NVIDIA A100 Tensor Core GPU
- 192 (12 x 16) GB DDR4, 2667 MHz
- InfiniBand (4 x EDR) Mellanox, 100 Gb/s
- 3.5 Tb /scratch/ disk

5 x tvöfaldir Skjákortshnútar:
- Partition : gpu-2xA100
- 2 x  Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz
- 2 x  NVIDIA A100 Tensor Core GPU
- 192 (12 x 16) GB DDR4, 2667 MHz
- InfiniBand (4 x EDR) Mellanox, 100 Gb/s
- 3.5 Tb /scratch/ disk

1 x innskráningarhnútur:
- 2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz
- 192 (12 x 16) GB DDR4, 2667 MHz
- 100 Gb/s eth

1 x stjórnunarhnútur:
- 2 x Intel(R) Xeon(R) Gold 6248R CPU, 2 x 24 @ 3.00GHz
- 192 (12 x 16) GB DDR4, 2667 MHz
- 100 Gb/s eth
- 50 TB disk hosting /home/
