---
title: VeloxOS Installation
description: Offizielle Schritt-für-Schritt-Installationsanleitung für das deklarative, NixOS-basierte System.
sidebar:
  order: 1
---

Da VeloxOS auf eine vollständig deklarative NixOS-Architektur umgestellt wurde, bieten wir zwei Wege für die Installation an: die unkomplizierte **Grafische ISO** (empfohlen für die meisten Nutzer) und die **Manuelle Flake-Bereitstellung** (für fortgeschrittene Anwender und Alpha-Tester).

---

## Methode A: Installation über die VeloxOS Live-ISO (Empfohlen)

Diese Methode nutzt das offizielle VeloxOS-Installationsmedium inklusive grafischer Oberfläche und einem maßgeschneiderten Installer.

### 1. Booten der ISO
Wenn du vom USB-Stick startest, wirst du vom System-Bootmenü (**systemd-boot**) begrüßt.

1. Wähle die VeloxOS Live-Umgebung aus und drücke Enter.
2. Das System bootet in eine minimale grafische Sitzung und startet den Installer automatisch.

:::tip[Hinweis]
Falls die Live-Umgebung nach einem Passwort fragt oder der Autologin fehlschlägt, verwende `veloxos` als Zugangsdaten.
:::

### 2. Der Installer
Der grafische Installer führt dich Schritt für Schritt durch den Prozess:

1. **Sprache & Region:** Bestätige deine lokalen Einstellungen und dein Tastaturlayout.
2. **Partitionierung:** * Da VeloxOS eine automatisierte **zRAM-Konfiguration** für Hochleistungs-Arbeitsspeicherkomprimierung nutzt, ist eine physische Swap-Partition optional.
   * Wähle **"Festplatte löschen"** und entscheide dich für **"Kein Swap"**, es sei denn, du benötigst explizit den Ruhezustand (Suspend-to-Disk / Hibernate).
3. **Benutzer:** Erstelle dein Hauptbenutzerkonto und vergebe ein sicheres Passwort.
4. **Zusammenfassung:** Überprüfe deine Einstellungen und klicke auf **Installieren**. Der Installer spielt nun die deklarative VeloxOS-Umgebung auf deine Festplatte.

---

## Methode B: Manuelle Flake-Bereitstellung (Erweitert / Alpha)

Wenn du das System lieber von einer minimalen Standard-NixOS-ISO aus installieren möchtest oder frühe Entwickler-Builds testest, kannst du VeloxOS direkt aus unserem GitHub-Repository bootstrappen.

### 1. Festplatte vorbereiten
Boote in eine beliebige NixOS-Live-ISO, richte deine Internetverbindung ein, partitioniere deine Festplatte und mounte die Partitionen nach `/mnt` (z. B. deine Root-Partition nach `/mnt` und deine EFI-Boot-Partition nach `/mnt/boot`).

### 2. Hardware-Konfiguration generieren
NixOS muss deine spezifische Hardware-Konfiguration erkennen, bevor es das System bauen kann:
```bash
nixos-generate-config --root /mnt
```

### 3. Installation via VeloxOS-Flake starten
Führe den Installationsbefehl aus und verweise dabei direkt auf unseren System-Flake. Der Installer lädt die Konfiguration herunter, wendet unsere Kernel-Tweaks an und baut deine Niri-Umgebung out-of-the-box zusammen:
```bash
nixos-install --flake github:VeloxOSLinux/veloxos-config#default
```

## Nach der Installation
Sobald der Installationsprozess (egal über welche Methode) erfolgreich abgeschlossen wurde, starte deinen Computer neu und entferne das Installationsmedium.

Beim ersten Start wirst du von systemd-boot begrüßt, das dich direkt in dein frisches, performance-optimiertes VeloxOS führt. Deine System-Generationen sind ab jetzt absolut sicher und atomar geschützt!
