---
title: VeloxOS Installation
description: Official step-by-step installation guide.
sidebar:
  order: 1
---

Since VeloxOS is built on a declarative NixOS foundation, we offer two ways to install the system: the streamlined **Graphical ISO** (recommended for most users) and the **Manual Flake Deployment** (for advanced users and testers).

---

## Method A: Using the VeloxOS Live ISO (Recommended)

This method uses the official VeloxOS installation media, featuring a graphical environment and a tailored installer.

### 1. Booting the ISO
When you boot from your installation media, you will be greeted by the system boot menu (**systemd-boot**). 

1. Select the VeloxOS Live Environment and press Enter.
2. The system will boot into a minimal graphical session and launch the installer automatically.

:::tip[Note]
If the live environment prompts you for a password or autologin fails, use `veloxos` as the credential.
:::

### 2. Using the Installer
The graphical installer will guide you through the process:

1. **Language & Region:** Confirm your local settings and keyboard layout.
2. **Partitions:** 
   * Since VeloxOS utilizes automated **zRAM configuration** for high-performance memory compression, a physical swap partition is completely optional.
   * Select **"Erase Disk"** and choose **"No Swap"** unless you explicitly require Hibernation (Suspend-to-Disk).
3. **Users:** Create your primary user account and set your secure password.
4. **Summary:** Review your configuration and click **Install**. The installer will now deploy the declarative VeloxOS environment to your drive.

---

## Method B: Manual Flake Deployment (Advanced / Alpha)

If you prefer to install from a stock NixOS minimal ISO, or if you are testing early developer builds, you can bootstrap VeloxOS directly from our GitHub repository.

### 1. Prepare Your Drive
Boot into any NixOS Live ISO, configure your internet connection, partition your drive, and mount it to `/mnt` (e.g., your root partition to `/mnt` and your EFI boot partition to `/mnt/boot`).

### 2. Generate Hardware Config
NixOS needs to detect your specific hardware layout before building the system:
```bash
nixos-generate-config --root /mnt
```

### 3. Install via VeloxOS Flake
Run the installation command pointing directly to our system Flake. The installer will fetch the configuration, apply our performance kernels, and build your Niri environment out-of-the-box:
```bash
nixos-install --flake github:VeloxOSLinux/veloxos-config#default
```

### Post-Installation
Once either installation method finishes successfully, reboot your computer and remove the installation media.

Upon first boot, you will be greeted by systemd-boot, leading you straight into your fresh, performance-optimized VeloxOS desktop. Your system generations are now managed safely and atomically!
