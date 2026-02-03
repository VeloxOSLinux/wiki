---
title: Updates & Repository Management
description: How to keep VeloxOS up to date and use CachyOS optimizations correctly.
---

VeloxOS utilizes a hybrid structure. To ensure your system remains stable while still benefiting from the speed of CachyOS, the order of the repositories is crucial.

## 📦 Repository Logic

In VeloxOS, the `pacman.conf` is configured so that **Manjaro repositories have priority**. This ensures that core system components (such as `glibc` or `gcc`) maintain the tested stability of Manjaro.

The **CachyOS repositories** serve as a "performance boost" for specific applications and optimized kernels.



## 🔄 Updating the System

To update VeloxOS, we recommend the standard method via the terminal or the graphical package manager (Pamac).

### Via Terminal (Recommended)
Use the standard command to synchronize all repositories:

```bash
sudo pacman -Syu
```
:::tip[Note] 
If conflicts arise between Manjaro and CachyOS packages, the system will automatically prefer the Manjaro variant unless a package is not present in the Manjaro repositories. :::

## ⚡ Installing CachyOS Packages Specifically
If you know that a package in the CachyOS repo is specially optimized for your CPU architecture (x86-64-v3/v4), you can install it specifically from there.

Method 1: Explicit Installation
You can prefix the package name with the repository name:
```bash
# Example: Install VLC from the CachyOS repo
sudo pacman -S cachyos/vlc
```
Method 2: Searching for Optimized Packages
You can check which packages CachyOS offers:
```bash
pacman -Sl cachyos | grep [search_term]
```

## 🐧 The CachyOS Kernel
One of the main advantages of VeloxOS is the pre-installed CachyOS kernel. It is optimized for low latency and high performance.
* Updates: The kernel is automatically updated via pacman -Syu.
* Additional Kernels: You can easily install other kernel variants (e.g., linux-cachyos-bore):
```bash
sudo pacman -S linux-cachyos-bore linux-cachyos-bore-headers
```

## 🛠 Graphical Package Management (Pamac)
If you prefer using a mouse, you can use Pamac ("Add/Remove Software").
1. Open Pamac.
2. The repositories are already correctly configured in the settings.
3. CachyOS packages are often recognized in the search by their version number or specific description.

:::caution[Important] 
Never manually mix in repositories from other distributions (like direct Arch repos), as this can break the Manjaro base. Stick to the configuration provided by VeloxOS. :::
