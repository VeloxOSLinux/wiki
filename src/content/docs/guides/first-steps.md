---
title: First Steps & Package Management
description: The VeloxOS Cheat Sheet – How to install software, structure your configuration, and keep your system clean.
---

Welcome to VeloxOS! If you are coming from a traditional distribution like Arch Linux, Ubuntu, or Windows, the way VeloxOS operates will seem a bit unfamiliar at first. Don't worry – once you grasp the concept, you won't want to use anything else.

This cheat sheet shows you the most important steps to manage your system in daily use.

---

## 🛠️ How Do I Install Software?

Because VeloxOS is a declarative system, commands like `sudo pacman -S` or `apt install` do not exist. Manually installing packages into a running system would alter its state and make it unpredictable. Instead, we use two clean methods:

### Method 1: Testing Software Temporarily (Recommended)
Do you want to use a tool (e.g., a video downloader or a benchmarking utility) just once? With `nix-shell`, you can launch applications in an isolated environment without installing them permanently:

```bash
nix-shell -p yt-dlp
```

As soon as you close the tool or type `exit` in that terminal, the application vanishes without a trace. Your system remains absolutely pristine.

### Method 2: Installing Software Permanently (The VeloxOS Way)
Permanent software is declared as code within your system configuration. To keep the central `configuration.nix` neat and tidy, we highly recommend offloading your installed applications into their own dedicated file (e.g., under `/etc/nixos/custom/tools.nix`).

1. Create or edit your application list (e.g., inside `~/veloxos-config/custom/tools.nix`):
```bash
{ pkgs, ... }:

{
  environment.systemPackages = with pkgs; [
    discord
    gimp
    obs-studio
    mangohud
  ];
}
```
2. Import this file into your main configuration.nix:
```bash
imports = [
  ./hardware-configuration.nix
  ./custom/tools.nix  # <--- This is where you include your custom software list
];
```
3. Apply the changes to make the software available system-wide:
```bash
sudo nixos-rebuild switch --flake .#default
```

## 📂 The VeloxOS Directory Structure at a Glance
Your entire system configuration lives as a Git repository in your home directory. Here is an overview of where to find specific settings if you want to customize your system:
```bash
~/veloxos-config/
├── flake.nix            # The system hub (defines channels & versions)
├── configuration.nix    # Global system settings (users, networking)
├── hardware-configuration.nix # Automatically generated hardware drivers
└── modules/
    ├── performance.nix  # Zen kernel, zRAM & sysctl gaming tweaks
    └── desktop.nix      # Niri compositor & display manager settings
```

## 🧹 Automatic Garbage Collection
Every time you install software, remove it, or update your system, VeloxOS creates a new system generation. By default, older generations remain on your drive so you can easily roll back to them via the boot menu at any time.

### You don't have to do anything!
To prevent these generations from silently filling up your SSD, VeloxOS comes with automatic garbage collection pre-configured in the background. The system periodically and fully automatically purges old, no longer required system states.

### Manual Spring Cleaning (Optional)
If you ever want to free up storage space manually after an intensive week of testing, you can trigger the garbage collection yourself via the terminal at any time:
```bash
# Deletes old, unregistered packages
nix-collect-garbage -d
```
:::caution[Note on Deletion]
The -d (delete old) flag wipes all older system generations. After executing this command, you will no longer be able to roll back to system states created prior to today using the bootloader!
:::
