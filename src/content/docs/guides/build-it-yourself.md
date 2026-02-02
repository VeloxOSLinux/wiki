---
title: Build VeloxOS from Source
description: A comprehensive guide on how to build your own VeloxOS ISO using our official profiles.
---

import { Steps } from '@astrojs/starlight/components';

This guide is intended for developers and advanced users who want to build a fresh VeloxOS ISO directly from our source profiles. By building it yourself, you ensure 100% transparency and can even apply your own further customizations.

:::caution[System Requirements]
Building a Linux ISO is resource-intensive. Ensure you have:
- At least **20-30 GB** of free disk space.
- A fast and stable internet connection.
- A Manjaro or Arch-based host system.
:::

## 📋 Prerequisites

First, you need to install the official build tools provided by Manjaro. Open your terminal and run:

```bash
sudo pacman -S manjaro-tools-iso-git git
```

## 🏗 Setup Procedure
Follow these steps to prepare your build environment.
<Steps>
1. Clone the Profiles
Clone the official VeloxOS profiles repository to your local machine:
```bash
git clone [https://github.com/VeloxOSLinux/iso-profiles.git](https://github.com/VeloxOSLinux/iso-profiles.git) ~/velox-profiles
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

# Copy the base profile
cp -r ~/velox-profiles/base/gnome/* ~/iso-build/gnome/

# Apply VeloxOS overlays & shared assets
cp -r ~/velox-profiles/gnome/* ~/iso-build/gnome/
cp -r ~/velox-profiles/shared/* ~/iso-build/gnome/
```
</steps>

## 🚀 Starting the Build
Once your environment is set up, you can start the automated build process. Use the buildiso command and point it to your prepared profile:
```bash
buildiso -p ~/iso-build/gnome -b stable
```

:::tip[Pro Tip]
If you have a powerful CPU, you can speed up the compression phase by adjusting the max_jobs settings in your manjaro-tools.conf.
:::

## 📂 Locating the ISO
After the process finishes successfully, your brand-new VeloxOS ISO will be waiting for you in the output directory:
```bash
# Default output path
/var/cache/manjaro-tools/iso/
```