---
title: Updates & Konfigurations-Management
description: So hältst du VeloxOS aktuell und nutzt die deklarative System-Aktualisierung über Nix Flakes.
---

VeloxOS bricht komplett mit dem traditionellen, imperativen Paket-Repository-Modell (wie `pacman` oder `apt`). Stattdessen werden der Systemzustand, die installierten Anwendungen und alle Updates vollständig über **Nix Flakes** verwaltet.

Dieser deklarative Ansatz garantiert, dass deine System-Updates atomar ablaufen. Sollte ein Update jemals fehlschlagen oder einen Fehler verursachen, kannst du beim Systemstart im Bootloader sofort zu deiner vorherigen, funktionierenden Konfiguration zurückkehren.

---

## ❄️ Das Flake-basierte Update-Modell

Das gesamte VeloxOS-Ökosystem – einschließlich unserer Zen-Kernel-Konfiguration, der vorbereiteten Niri-Compositor-Umgebung und den Gaming-Optimierungen – ist sauber als Code definiert. Um Systemkomponenten und Anwendungen zu aktualisieren, bringst du einfach die Inputs deines Flakes auf den neuesten Stand.

### Aktualisierung via Terminal (Empfohlen)
Um die neuesten Paketdefinitionen aus den offiziellen Upstream-NixOS-Kanälen abzurufen, wechsle in dein Konfigurationsverzeichnis und aktualisiere die Flake-Locks:

```bash
cd ~/veloxos-config
nix flake update
```

Sobald die Datei `flake.lock` aktualisiert wurde, wendest du die Änderungen an und baust deine VeloxOS-Umgebung in einem einzigen Schritt neu:
```bash
sudo nixos-rebuild switch --flake .#default
```
:::tip[Sorgenfreie Updates]
Falls während oder nach dem Rebuild etwas schiefgeht: Starte deinen Rechner einfach neu und wähle im systemd-boot-Menü deine vorherige System-Generation aus, um den Desktop im exakt funktionierenden Zustand wiederherzustellen.
:::

## 🐧 Der Zen-Kernel & Gaming-Performance
VeloxOS wird standardmäßig mit dem Linux-Zen-Kernel ausgeliefert. Dieser ist speziell auf extrem niedrige Latenzen, hohe Reaktionsgeschwindigkeit und optimiertes Prozess-Scheduling bei anspruchsvollen Gaming-Sessions ausgelegt.

Da VeloxOS direkt auf den riesigen, offiziellen Paket-Repositories von NixOS aufbaut, werden Kernkomponenten und Kernel-Updates vorkompiliert aus dem offiziellen Nix-Cache geladen. Das garantiert dir ein topaktuelles System, ohne dass deine CPU Pakete stundenlang selbst aus dem Quellcode kompilieren muss.

:::note[Keine unvollständigen Updates mehr]
Unter VeloxOS gehört ein zerschossenes System durch sogenannte "Partial Upgrades" (Teil-Aktualisierungen) der Vergangenheit an. Jeder `nixos-rebuild`-Vorgang erstellt eine komplett isolierte, unveränderliche Systemumgebung. Du kannst deine Konfigurationen jederzeit anpassen oder erweitern, ohne die Stabilität des Kernsystems zu gefährden.
:::
