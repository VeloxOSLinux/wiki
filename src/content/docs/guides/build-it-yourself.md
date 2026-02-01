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