---
title: Erste Schritte & Paketverwaltung
description: Der VeloxOS Spickzettel – Wie du Software installierst, deine Konfiguration strukturierst und das System sauber hältst.
sidebar:
  order: 3
---

Willkommen bei VeloxOS! Wenn du von einer traditionellen Distribution wie Arch Linux, Ubuntu oder Windows kommst, wird dir die Funktionsweise von VeloxOS zuerst etwas ungewohnt vorkommen. Keine Sorge – sobald du das Prinzip verstanden hast, möchtest du nichts anderes mehr.

Dieses Cheat-Sheet zeigt dir die wichtigsten Handgriffe, um dein System im Alltag zu verwalten.

---

## 🛠️ Wie installiere ich Software?

Da VeloxOS ein deklaratives System ist, gibt es kein `sudo pacman -S` oder `apt install`. Das manuelle Installieren von Paketen in das laufende System hinein würde den Zustand verändern und das System unvorhersehbar machen. Stattdessen nutzen wir zwei saubere Methoden:

### Methode 1: Software temporär ausprobieren (Empfohlen)
Du möchtest ein Tool (z. B. einen Video-Downloader oder ein Benchmark-Werkzeug) nur einmalig benutzen? Mit `nix-shell` kannst du Anwendungen in einer isolierten Umgebung starten, ohne sie dauerhaft zu installieren:

```bash
nix-shell -p yt-dlp
```
Sobald du das Tool schließt oder `exit` in dem Terminal eingibst, ist die Anwendung rückstandslos wieder verschwunden. Dein System bleibt absolut sauber.

### Methode 2: Software dauerhaft installieren (Der VeloxOS-Weg)

Dauerhafte Software wird als Code in deine Systemkonfiguration eingetragen. Um die zentrale `configuration.nix` übersichtlich zu halten, empfehlen wir, deine installierten Anwendungen in eine eigene, dedizierte Datei auszulagern (z. B. unter `/etc/nixos/custom/tools.nix`).

1. Erstelle oder bearbeite deine Anwendungsliste (z. B. unter `~/veloxos-config/custom/tools.nix`):
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
2. Importiere diese Datei in deiner Haupt-`configuration.nix`:
```bash
imports = [
  ./hardware-configuration.nix
  ./custom/tools.nix  # <--- Hier bindest du deine Softwareliste ein
];
```
3. Wende die Änderungen an, um die Software systemweit verfügbar zu machen:
```bash
sudo nixos-rebuild switch --flake .#default
```

## 📂 Die VeloxOS Ordnerstruktur im Überblick
Deine gesamte Systemkonfiguration liegt als Git-Repository in deinem Heimatverzeichnis. Hier ist eine Übersicht, wo du welche Einstellungen findest, wenn du dein System anpassen möchtest:
```bash
~/veloxos-config/
├── flake.nix            # Die System-Zentrale (Kanäle & Versionen)
├── configuration.nix    # Globale Systemeinstellungen (User, Netzwerk)
├── hardware-configuration.nix # Automatisch generierte Hardware-Treiber
└── modules/
    ├── performance.nix  # Zen-Kernel, zRAM & sysctl-Gaming-Tweaks
    └── desktop.nix      # Niri-Compositor & Display-Manager-Einstellungen
```

## 🧹 Automatische Müllabfuhr (Garbage Collection)
Jedes Mal, wenn du Software installierst, entfernst oder dein System aktualisierst, erstellt VeloxOS eine neue System-Generation. Die alten Generationen verbleiben standardmäßig auf der Festplatte, damit du im Bootmenü jederzeit zu ihnen zurückspringen kannst.

### Du musst nichts tun!
Damit deine SSD durch diese Generationen nicht unbemerkt vollreitet, ist in VeloxOS bereits eine automatische Müllabfuhr im Hintergrund voreingestellt. Das System bereinigt regelmäßig alte, nicht mehr benötigte Systemzustände vollautomatisch.

### Manueller Frühjahrsputz (Optional)
Solltest du nach intensiven Testwochen manuell Speicherplatz freigeben wollen, kannst du die Müllabfuhr auch jederzeit selbst im Terminal anstoßen:

```bash
# Löscht alte, nicht mehr registrierte Pakete
nix-collect-garbage -d
```

:::caution[Hinweis zum Löschen]
Der Parameter -d (delete old) löscht alle älteren System-Generationen. Nach diesem Befehl kannst du im Bootloader nicht mehr zu den Zuständen vor dem heutigen Tag zurückspringen!
:::
