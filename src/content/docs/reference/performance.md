---
title: Performance & Kernel
description: Understanding the CachyOS Kernel and x86-64-v3 optimizations in VeloxOS.
sidebar:
  order: 1
---

VeloxOS is built for speed. We achieve this by using cutting-edge kernel technology and modern instruction sets.

## The CachyOS Kernel

At the core of VeloxOS is the **CachyOS Kernel**, a heavily tuned version of the Linux kernel designed for desktop responsiveness and gaming performance.

### Key Features:
* **Bore Scheduler:** The *Burst-Oriented Response Encoder* (BORE) is designed to reduce latencies and keep the desktop fluid, even under high CPU load.
* **Custom Toolchain:** Compiled with optimized flags and the latest LLVM/Clang or GCC.
* **Performance Patches:** Includes upstreamed and experimental patches for improved filesystem speed and memory management.

## x86-64-v3 & v4 Optimizations

Standard Linux distributions are usually compiled for **x86-64 (v1)**, which ensures compatibility with CPUs from 20 years ago. VeloxOS targets modern hardware.

| Level | Requirement (approx.) | Performance Benefit |
| :--- | :--- | :--- |
| **v1** | Anything 64-bit (Generic) | Baseline |
| **v3** | Intel Haswell (2013+) / AMD Ryzen | **10-15% uplift** in complex tasks |
| **v4** | Intel AVX-512 (Xeon/High-end) | Maximum throughput for data & AVX tasks |

### Why it matters:
By using **AVX, AVX2, and BMI2** instructions natively, the CPU can process more data per clock cycle. This results in faster app launches, smoother video encoding, and higher 1% lows in gaming.

:::note
VeloxOS automatically detects your hardware and utilizes the best possible instruction set available for your CPU.
:::
