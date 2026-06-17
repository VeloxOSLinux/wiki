---
title: Updates & Configuration Management
description: How to keep VeloxOS up to date and apply declarative system upgrades using Nix Flakes.
---

VeloxOS completely abandons the traditional, imperative package repository model (like `pacman` or `apt`). Instead, the system state, package choices, and updates are handled entirely through **Nix Flakes**. 

This declarative approach guarantees that your system updates are atomic. If an update ever fails or introduces a bug, you can instantly roll back to your previous working configuration directly from the bootloader.

---

## ❄️ The Flake-Based Update Model

The entire VeloxOS ecosystem—including our Zen-Kernel configuration, the pre-configured Niri compositor environment, and gaming-ready defaults—is defined cleanly as code. To update your system components and applications, you simply update the Flake inputs.

### Updating via Terminal (Recommended)
To pull the latest curated package definitions from the upstream NixOS channels and upgrade your system, navigate to your configuration directory and update the Flake locks:

```bash
cd ~/veloxos-config
nix flake update
```
:::tip[Fearless Updates]
If anything goes wrong during or after the rebuild, simply reboot your machine and select your previous System Generation in the systemd-boot menu to restore your desktop to its exact previous, working state.
:::

## 🐧 The Zen Kernel & Gaming Performance
VeloxOS ships with the Linux Zen Kernel configured by default, ensuring low-latency responsiveness and optimized scheduling for demanding gaming sessions out-of-the-box.

Because VeloxOS builds directly on top of the massive official NixOS package repositories, core components and kernel updates are pulled pre-compiled from the official Nix cache. This gives you bleeding-edge performance without forcing your CPU to compile packages from source.

:::note[No More Partial Upgrades]
Under VeloxOS, the concept of a broken system due to "partial upgrades" is a thing of the past. Every nixos-rebuild creates a completely isolated, immutable environment. You can update your configurations at any time without compromising core system stability.
:::
