---
title: VeloxOS Installation
description: Official step-by-step installation guide.
sidebar:
  order: 1
---

This guide describes the installation process using the VeloxOS Live-ISO.

## 1. Booting the ISO

When you boot from the USB drive, you will be greeted by the **GRUB boot menu** (Manjaro-style). Before starting the system, you can configure the following:

* **tz (Timezone):** Set your local time.
* **keytable:** Choose your keyboard layout.
* **lang:** Set the system language.
* **driver:** Choose between **free** (open-source) or **nonfree** (proprietary, recommended for NVIDIA users) drivers.

Select **"Boot with ..."** and press Enter.

## 2. Using the Installer

Once the desktop environment has loaded, the **Calamares Installer** will start automatically.

### Key Steps in Calamares:
1.  **Welcome:** Confirm your language.
2.  **Location & Keyboard:** These should be pre-set from your GRUB choices.
3.  **Partitions:** * Since VeloxOS uses **zRAM** for high-performance memory compression, a physical swap partition is often unnecessary.
    * Select **"Erase Disk"** and choose **"No Swap"** unless you specifically need Hibernation (Suspend-to-Disk).
4.  **Users:** Create your main user account and set a password.
5.  **Summary:** Double-check your settings before clicking **Install**.

## 3. Post-Installation

After the installation is complete, restart your computer and remove the USB drive.

:::tip[Performance Note]
VeloxOS automatically manages your zRAM configuration. No further manual setup for swap is required for optimal performance.
:::
