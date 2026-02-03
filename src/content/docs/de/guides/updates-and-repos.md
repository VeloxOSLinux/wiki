---
title: Updates & Repository Management
description: So hältst du VeloxOS aktuell und nutzt die CachyOS-Optimierungen richtig.
---

VeloxOS nutzt eine Hybrid-Struktur. Damit dein System stabil bleibt, aber dennoch von der Geschwindigkeit von CachyOS profitiert, ist die Reihenfolge der Repositories entscheidend.

## 📦 Die Repository-Logik

In VeloxOS ist die `pacman.conf` so konfiguriert, dass **Manjaro-Repositories Priorität** haben. Das sorgt dafür, dass System-Kernkomponenten (wie `glibc` oder `gcc`) die getestete Stabilität von Manjaro behalten.

Die **CachyOS-Repositories** dienen als "Performance-Boost" für spezifische Anwendungen und optimierte Kernel.

## 🔄 Das System aktualisieren

Um VeloxOS zu aktualisieren, empfehlen wir den Standard-Weg über das Terminal oder die grafische Paketverwaltung (Pamac).

### Per Terminal (Empfohlen)
Nutze den Standard-Befehl, um alle Repositories zu synchronisieren:

```bash
sudo pacman -Syu
```
:::tip[Hinweis] 
Sollten Konflikte zwischen Manjaro- und CachyOS-Paketen auftreten, bevorzugt das System automatisch die Manjaro-Variante, es sei denn, ein Paket ist in Manjaro nicht vorhanden. :::

## ⚡ CachyOS-Pakete gezielt installieren
Wenn du weißt, dass ein Paket im CachyOS-Repo speziell für deine CPU-Architektur (x86-64-v3/v4) optimiert ist, kannst du es gezielt von dort installieren.

Weg 1: Explizite Installation
Du kannst dem Paketnamen den Namen des Repositories voranstellen:

```bash
# Beispiel: VLC aus dem CachyOS Repo installieren
sudo pacman -S cachyos/vlc
```
Weg 2: Suche nach optimierten Paketen
Du kannst prüfen, welche Pakete CachyOS anbietet:
```bash
pacman -Sl cachyos | grep [Suchbegriff]
```

## 🐧 Der CachyOS Kernel
Einer der Hauptvorteile von VeloxOS ist der vorinstallierte CachyOS-Kernel. Dieser ist für geringe Latenz und hohe Performance optimiert.
* Updates: Der Kernel wird automatisch über pacman -Syu aktualisiert.
* Zusätzliche Kernel: Du kannst weitere Kernel-Varianten (z.B. linux-cachyos-bore) einfach nachinstallieren:
```bash
sudo pacman -S linux-cachyos-bore linux-cachyos-bore-headers
```

## 🛠 Grafische Paketverwaltung (Pamac)
Falls du lieber mit der Maus arbeitest, kannst du Pamac ("Software hinzufügen/entfernen") nutzen.
1. Öffne Pamac.
2. In den Einstellungen sind die Repositories bereits korrekt hinterlegt.
3. CachyOS-Pakete werden in der Suche oft durch ihre Versionsnummer oder spezifische Beschreibung erkannt.

:::caution[Wichtig] 
Mische niemals Repositories von anderen Distributionen (wie direktes Arch-Repo) manuell hinein, da dies die Manjaro-Basis beschädigen kann. Bleibe bei der von VeloxOS bereitgestellten Konfiguration. :::


