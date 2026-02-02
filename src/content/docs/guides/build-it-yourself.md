---
title: Build VeloxOS from Source
description: A comprehensive guide on how to build your own VeloxOS ISO using our official profiles and CachyOS repositories.
---

import { Steps } from '@astrojs/starlight/components';

This guide explains how to build a fresh VeloxOS ISO. Since VeloxOS leverages the performance of **CachyOS** on top of a Manjaro base, your host system must be prepared accordingly.

:::caution[System Requirements]
- **Storage:** 20-30 GB free disk space.
- **Host OS:** Manjaro or Arch-based.
- **Repositories:** CachyOS repositories **must** be enabled on the host system to fetch optimized packages and kernels.
:::

## 📋 Step 1: Prepare the Host System

Before building, you must add the CachyOS repositories and build tools to your system.

### 1. Add CachyOS Repositories
Follow the [official CachyOS Wiki](https://wiki.cachyos.org/configuration/general_settings/) or use their helper script:

```bash
wget https://mirror.cachyos.org/cachyos-repo.tar.xz
tar xvf cachyos-repo.tar.xz && cd cachyos-repo
sudo ./cachyos-repo.sh
```

### 2. Prerequisites

First, you need to install the official build tools provided by Manjaro. Open your terminal and run:

```bash
sudo pacman -S manjaro-tools-iso-git git
```

## 🏗 Step 2: Setup Procedure
Follow these steps to prepare your build environment.
<Steps>
1. Clone the Profiles
Clone the official VeloxOS profiles repository to your local machine:
```bash
git clone https://github.com/VeloxOSLinux/iso-profiles.git ~/velox-profiles
```
2. Configure Manjaro Tools
VeloxOS requires specific build settings. Copy our optimized configuration:
```bash
mkdir -p ~/.config/manjaro-tools
cp ~/velox-profiles/.config/manjaro-tools.conf ~/.config/manjaro-tools/
```
3. Prepare the Build Tree
To build the ISO, we merge the base profile with our VeloxOS overlays:
```bash
# Create a working directory
mkdir -p ~/iso-build/gnome
mkdir -p ~/iso-build/custom/gnome/

# Copy the base profile
cp -r ~/velox-profiles/base/gnome/* ~/iso-build/gnome/

# Apply VeloxOS overlays & shared assets
cp -r ~/velox-profiles/gnome/* ~/iso-build/custom/gnome/
cp -r ~/velox-profiles/shared/* ~/iso-build/custom/gnome/
```
</steps>

## 🚀 Step 3: Starting the Build
Once your environment is set up, you can start the automated build process. Use the buildiso command and point it to your prepared profile:
```bash
buildiso -p ~/iso-build/gnome -b stable
```

:::info[How it works] The manjaro-tools.conf you copied earlier contains the pacman configuration that tells the build-bot to use the CachyOS mirrors in addition to the Manjaro ones. :::

## 📂 Locating the ISO
After the process finishes successfully, your brand-new VeloxOS ISO will be waiting for you in the output directory:
```bash
# Default output path
/var/cache/manjaro-tools/iso/
```

## 🛠 Troubleshooting
* Signature is unknown trust: If the build fails due to GPG errors, ensure you have imported the CachyOS keys: `sudo pacman -S cachyos-keyring cachyos-mirrorlist`.
* Missing packages: Double-check that your host's `/etc/pacman.conf` actually includes the `[cachyos]` sections.
