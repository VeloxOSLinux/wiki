---
title: Updates & Repository Management
description: How to keep VeloxOS up to date and use the official VeloxOS repository.
---

VeloxOS utilizes a hybrid structure. To ensure your system remains stable while still benefiting from the speed of CachyOS and our own optimized builds, the order of the repositories is crucial.

## 📦 Repository Logic

In VeloxOS, the `pacman.conf` is configured so that **VeloxOS and Manjaro repositories have priority**. This ensures that core system components maintain the tested stability of Manjaro, while VeloxOS-specific fixes and optimizations are applied first.

1. **VeloxOS:** Custom packages, fixes, and curated optimizations.
2. **Manjaro:** The stable system base.
3. **CachyOS:** Performance boost for specific apps and kernels.

---

## 🔐 The VeloxOS Repository

We maintain our own signed repository to provide you with optimized packages and seamless updates. To use it securely, you must import our official GPG signing key.

### 1. Install the Signing Key
Run these commands to trust the VeloxOS repository:

```bash
# Download and add the key to pacman
curl https://downloads.veloxos.org/repos/key/veloxos.gpg | sudo pacman-key -a -

# Locally sign the key to trust it
sudo pacman-key --lsign-key DE75DA0BF7DFECA3A588D82DF5DA023C16E45341
```
### 2. Repository Configuration
The repository is typically pre-configured. If you need to add it manually, ensure it is placed at the top of your /etc/pacman.conf:
```bash
[veloxos]
SigLevel = Required DatabaseOptional
Server = https://downloads.veloxos.org/repos/stable/$arch
```
(Note: $arch will automatically resolve to v3 or v4 depending on your CPU support.)

## 🔄 Updating the System
To update VeloxOS, we recommend the standard method via the terminal or the graphical package manager (Pamac).

Via Terminal (Recommended)
Use the standard command to synchronize all repositories:
```bash
sudo pacman -Syu
```
:::tip[Note]
If conflicts arise, the system will automatically prefer the VeloxOS or Manjaro variant over CachyOS to ensure maximum system compatibility.
:::

##⚡ Installing Optimized Packages

If you know that a package in the CachyOS or VeloxOS repo is specially optimized for your CPU architecture (x86-64-v3/v4), you can install it specifically.

Method 1: Explicit Installation
```bash
# Example: Install VLC from the VeloxOS repo
sudo pacman -S veloxos/vlc
```
Method 2: Searching for Optimized Packages
```bash
pacman -Sl veloxos | grep [search_term]
```

##🐧 The CachyOS Kernel
One of the main advantages of VeloxOS is the pre-installed CachyOS kernel.

Updates: The kernel is automatically updated via pacman -Syu.

Variants: You can install other variants like linux-cachyos-bore via pacman.

## 🛠 Graphical Package Management (Pamac)
If you prefer using a GUI, open "Add/Remove Software":

The repositories are already correctly configured.

Signed packages from VeloxOS will be verified automatically.

Use the search to find optimized software versions.

:::caution[Important]
Never manually mix in repositories from other distributions (like direct Arch repos), as this can break the Manjaro base. Stick to the configuration provided by VeloxOS.
:::
