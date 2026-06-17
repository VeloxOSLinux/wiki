---
title: Performance & Tuning
description: Understanding the Linux Zen Kernel, automated zRAM, and custom system tweaks in VeloxOS.
sidebar:
  order: 2
---

VeloxOS is engineered for desktop responsiveness and out-of-the-box gaming performance. Instead of relying on complex hardware-specific repositories, we achieve maximum speed through a hand-picked performance kernel, automated memory tuning, and declarative system-level tweaks.

---

## 🐧 The Linux Zen Kernel

At the core of VeloxOS is the **Linux Zen Kernel**, a collaborative effort of kernel hackers to provide the best possible Linux kernel for everyday desktop usage, multimedia, and gaming.

### Key Performance Benefits:
* **Low-Latency Scheduling:** Tuned for high responsiveness, ensuring your desktop and inputs stay buttery smooth even under heavy CPU or background render loads.
* **Optimized BBR Congestion Control:** Pre-configured network scheduling to improve download stability and reduce latency in online multiplayer games.
* **Preemption Model:** Uses a fine-tuned preemptive model (`PREEMPT`) designed specifically to minimize micro-stutters (1% lows) in gaming workloads.

---

## 🧠 Automated zRAM Configuration

Traditional swap partitions on physical drives are slow and can cause massive system stutters when your RAM fills up. VeloxOS completely bypasses this by implementing automated **zRAM** out-of-the-box.

### How it works:
Instead of writing temporary data to your SSD or HDD, VeloxOS creates a compressed block device directly inside your RAM. 

* **High Compression Ratio:** Data moved to swap is compressed on-the-fly using ultra-fast algorithms (like `zstd`).
* **Zero Disk Bottlenecks:** Because everything happens at RAM speeds, your system remains perfectly responsive even when multi-tasking heavily or running memory-intensive games.
* **SSD Longevity:** By avoiding constant write cycles to a physical drive, zRAM extends the lifespan of your storage hardware.

---

## 🛠 Custom Built-in Kernel Tweaks

We have analyzed popular performance distributions and integrated their best system-level optimizations directly into the VeloxOS configuration. These are applied automatically at boot via our central Nix modules:

* **Optimized `sysctl` Parameters:** Fine-tuned memory management (`vm.max_map_count` is set high by default to ensure perfect compatibility with heavy Steam/Proton titles like *Star Citizen* or *Cyberpunk 2077*).
* **Improved File Descriptor Limits:** Increased system resources for wine/proton prefixes, preventing random game crashes during long sessions.
* **Split Lock Mitigations:** Disabled by default to prevent sudden performance drops and stuttering in specific modern gaming engines.

:::tip[Declarative Tuning]
Want to add your own custom kernel parameters or tweak a specific sysctl value? Since VeloxOS is declarative, you don't hunt down obscure configuration files. Simply append them to your `modules/performance.nix` file and rebuild your system!
:::
