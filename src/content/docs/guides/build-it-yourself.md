---
title: Build VeloxOS from Source
description: Learn how to build your own custom VeloxOS Live ISO from our declarative Flake configuration.
---

Because VeloxOS is built on NixOS, building a custom Live ISO from source no longer requires complex host mirroring, chroots, or distribution-specific build tools. Using the power of **Nix Flakes**, you can compile and generate a fully functional VeloxOS installation media with a single command from any system running the Nix package manager.

:::info[System Requirements]
- **Storage:** ~20 GB free disk space (mostly for caching packages).
- **Host OS:** Any Linux distribution with **Nix** installed and Flakes enabled.
:::

## 🚀 Building the ISO

We utilize `nixos-generators` or native Nix commands to assemble the ISO directly from our configuration blueprint.

### 1. Clone the Configuration Repository
First, grab the official VeloxOS configuration tree:

```bash
git clone [https://github.com/VeloxOSLinux/veloxos-config.git](https://github.com/VeloxOSLinux/veloxos-config.git) ~/veloxos-config
cd ~/veloxos-config
```
### 2. Run the Build Command
To trigger the ISO generation, use the native `nix build` command pointing to our ISO profile target defined in the flake:

```bash
nix build .#nixosConfigurations.isoImage.config.system.build.isoImage
```
:::tip[Note]
Depending on your internet speed and CPU, this might take a few minutes as Nix fetches the base packages, our performance kernel configs, and the pre-configured Niri environment.
:::

## 📂 Locating your ISO
Once the build finishes successfully, Nix places a symlink named `result` in your current directory. This link points directly to the secure Nix store where your fresh ISO is located.

To find the exact path to your newly baked `.iso` file, run:
```bash
ls -l result/iso/
```
You can now flash this image onto a USB drive using `dd` or tools like Ventoy/Etcher and boot straight into your custom VeloxOS installer!

## 🛠 Advanced: Customizing before building
The ultimate advantage of the declarative shift: If you want to bake your own packages, dotfiles, or kernel tweaks directly into the Live ISO, you don't need to rebuild complex overlays.

Simply edit the `iso/configuration.nix` (or your corresponding module file) inside the repository before running the `nix build` command. Your changes will be compiled cleanly into the resulting image.
