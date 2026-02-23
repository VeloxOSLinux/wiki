---
title: Updates & Repository Management
description: How to keep VeloxOS up to date using the unified VeloxOS repository.
---

VeloxOS utilizes a unified repository structure. To ensure maximum stability and performance, we curate and test all packages—including core system components and specialized optimizations—before they are released to your system.

## 📦 Repository Strategy

Unlike standard distributions, VeloxOS provides a **single, verified source**. This approach prevents version conflicts and ensures that every update has been verified for the VeloxOS ecosystem. Our repository combines:

1.  **VeloxOS Core:** Custom fixes, themes, and OS-specific configurations.
2.  **Tested Base:** Stable system components derived from Manjaro.
3.  **Performance:** CPU-optimized applications and kernels (x86-64-v3/v4) from CachyOS.

---

## 🔐 Security & Verification

All packages in the VeloxOS repository are digitally signed for your security.

### GPG Key Management
The official VeloxOS signing key is **pre-installed** on all systems. No manual action is required for a fresh installation.

:::tip[Manual Key Import]
If you are migrating from an older version of VeloxOS or need to restore your keys, run:
```bash
# Download and add the key to pacman
curl https://downloads.veloxos.org/repos/key/veloxos.gpg | sudo pacman-key -a -

# Locally sign the key to trust it
sudo pacman-key --lsign-key DE75DA0BF7DFECA3A588D82DF5DA023C16E45341
```
:::

### Repository Configuration
The repository is pre-configured. For manual verification, ensure your /etc/pacman.conf contains the following entry at the top of the repositories section:
```bash
[veloxos]
SigLevel = Required DatabaseOptional
Server = https://downloads.veloxos.org/repos/stable/$arch
```
(Note: $arch automatically resolves to v3 or v4 depending on your CPU support.)

## 🔄 Updating the System
Updates are released in cycles after successful testing. We recommend using the terminal for the best transparency during the update process.

Via Terminal (Recommended)
Use the standard command to synchronize your system with the VeloxOS repository:
```bash
sudo pacman -Syu
```
### Graphical Management (Pamac)
If you prefer using "Add/Remove Software" (Pamac):

Unified Updates: All updates are served via the veloxos repository.

Automatic Verification: Signatures are verified automatically before any installation.

## ⚡ Optimized Packages & Kernels
Since VeloxOS merges optimized CachyOS builds into its own repository, you get the best performance out of the box.

Performance Search
You can check which optimized packages are currently available in the repo:
```bash
pacman -Sl veloxos | grep [search_term]
```
## The CachyOS Kernel 🐧
VeloxOS comes with a pre-installed CachyOS kernel, optimized for low latency and gaming.

Automatic Updates: The kernel is updated seamlessly via pacman -Syu.

Variants: You can install additional variants (e.g., linux-cachyos-bore) directly from the VeloxOS repo.

:::caution[Important]
Never manually add official Arch Linux or Manjaro mirrors to your pacman.conf. This would bypass the VeloxOS testing cycle and will lead to severe system instability due to "Partial Upgrades". Stick to the curated VeloxOS repository for a stable experience.
:::
