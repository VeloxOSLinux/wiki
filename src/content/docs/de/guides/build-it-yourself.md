---
title: VeloxOS aus Quellcodes bauen
description: Eine umfassende Anleitung, wie du deine eigene VeloxOS ISO mit unseren offiziellen Profilen und den CachyOS-Repositories erstellst.
---

import { Steps } from '@astrojs/starlight/components';

Diese Anleitung erklärt, wie du eine frische VeloxOS ISO generierst. Da VeloxOS die Performance von **CachyOS** auf einer Manjaro-Basis nutzt, muss dein Host-System entsprechend vorbereitet sein.

:::caution[Systemanforderungen]
- **Speicherplatz:** 20-30 GB freier Festplattenspeicher.
- **Host-Betriebssystem:** Manjaro oder Arch-basiert.
- **Repositories:** Die CachyOS-Repositories **müssen** auf dem Host-System aktiviert sein, um die optimierten Pakete und Kernel abzurufen.
:::

## 📋 Schritt 1: Host-System vorbereiten

Bevor du mit dem Bauen beginnst, musst du die CachyOS-Repositories und die Build-Tools zu deinem System hinzufügen.

### 1. CachyOS Repositories hinzufügen
Folge dem [offiziellen CachyOS Wiki](https://wiki.cachyos.org/configuration/general_settings/) oder nutze das Helper-Skript:

```bash
wget [https://mirror.cachyos.org/cachyos-repo.tar.xz](https://mirror.cachyos.org/cachyos-repo.tar.xz)
tar xvf cachyos-repo.tar.xz && cd cachyos-repo
sudo ./cachyos-repo.sh
```
### 2. Voraussetzungen
Als Nächstes installierst du die offiziellen Build-Tools von Manjaro. Öffne dein Terminal und führe aus:
```bash
sudo pacman -S manjaro-tools-iso-git git
```
## 🏗 Schritt 2: Einrichtung der Build-Umgebung
Folge diesen Schritten, um deine Build-Umgebung vorzubereiten.

<Steps>

1. Profile klonen Klone das offizielle VeloxOS-Repository mit den ISO-Profilen auf deinen Rechner:
```bash
git clone [https://github.com/VeloxOSLinux/iso-profiles.git](https://github.com/VeloxOSLinux/iso-profiles.git) ~/velox-profiles
```
2. Manjaro-Tools konfigurieren VeloxOS benötigt spezifische Build-Einstellungen. Kopiere unsere optimierte Konfiguration:

```Bash
mkdir -p ~/.config/manjaro-tools
cp ~/velox-profiles/.config/manjaro-tools.conf ~/.config/manjaro-tools/
```
3. Build-Struktur vorbereiten Um die ISO zu bauen, führen wir das Basis-Profil mit unseren VeloxOS-Anpassungen (Overlays) zusammen:
```bash
# Arbeitsverzeichnisse erstellen
mkdir -p ~/iso-build/gnome
mkdir -p ~/iso-build/custom/gnome/

# Basis-Profil kopieren
cp -r ~/velox-profiles/base/gnome/* ~/iso-build/gnome/

# VeloxOS Overlays & Shared Assets anwenden
cp -r ~/velox-profiles/gnome/* ~/iso-build/custom/gnome/
cp -r ~/velox-profiles/shared/* ~/iso-build/custom/gnome/
```
</Steps>

## 🚀 Schritt 3: Den Build-Prozess starten
Sobald die Umgebung eingerichtet ist, kannst du den automatisierten Build-Prozess starten. Nutze den Befehl buildiso und verweise auf dein vorbereitetes Profil:
```bash
buildiso -p ~/iso-build/gnome -b stable
```
:::info[Hintergrund] Die Datei manjaro-tools.conf, die du kopiert hast, enthält die Pacman-Konfiguration, die dem Build-Bot mitteilt, dass er die CachyOS-Spiegelserver zusätzlich zu den Manjaro-Servern nutzen soll. :::

## 📂 ISO-Datei finden
Nachdem der Prozess erfolgreich abgeschlossen wurde, findest du deine brandneue VeloxOS ISO im Ausgabe-Verzeichnis:
```bash
# Standard-Ausgabepfad
/var/cache/manjaro-tools/iso/
```
## 🛠 Fehlerbehebung
* Signatur ist unbekannt (unknown trust): Falls der Build wegen GPG-Fehlern fehlschlägt, stelle sicher, dass du die CachyOS-Keys importiert hast: `sudo pacman -S cachyos-keyring cachyos-mirrorlist`.
* Fehlende Pakete: Überprüfe doppelt, ob die `/etc/pacman.conf` deines Host-Systems die `[cachyos]` Sektionen wirklich enthält.
