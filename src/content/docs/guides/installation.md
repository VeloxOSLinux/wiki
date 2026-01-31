---
title: VeloxOS Installation
description: Step-by-step guide to installing VeloxOS.
sidebar:
  order: 1
---

Welcome to the official VeloxOS installation guide. This guide will walk you through the process from preparation to your first successful boot.

:::tip[Hardware Recommendation]
For the best experience with our x86-64-v3 optimizations, we recommend an Intel Haswell generation CPU (ca. 2013) or newer, or any AMD Ryzen processor.
:::

## Preparation

Before you begin, make sure you have the following ready:
- A VeloxOS ISO image (from [veloxos.org](https://veloxos.org))
- A USB flash drive with at least 8GB of storage
- A stable internet connection

## 1. Create Installation Media

Use a tool like **Ventoy**, **Etcher**, or **dd** to flash the ISO onto your USB drive.

```bash
# Example for Linux users (make sure to check your drive path!)
sudo dd bs=4M if=veloxos-latest.iso of=/dev/sdX status=progress oflag=sync
```

## 2. The Installation Process

VeloxOS uses an intuitive graphical installer. Follow these steps:

1. **Boot** from your USB drive.
2. Select **"VeloxOS Live System"** from the boot menu.
3. Start the **Installer** from the desktop icon.
4. Choose your language, keyboard layout, and timezone.
5. **Partitioning:** We recommend selecting "Erase disk" with "Swap (with Hibernate)".

## 3. Post-Installation

After the first reboot, VeloxOS will guide you through a quick setup to update your system.

- [ ] Run system updates
- [ ] Check graphics drivers
- [ ] Set up Steam/Gaming tools (optional)

---

## Troubleshooting

If you encounter any issues during boot, please check our [Reference](/reference/structure) to learn more about specific kernel parameters.
