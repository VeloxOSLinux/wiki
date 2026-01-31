---
title: VeloxOS Installation
description: Schritt-für-Schritt-Anleitung zur Installation von VeloxOS.
sidebar:
  order: 1
---

Willkommen zur offiziellen VeloxOS-Installationsanleitung. Diese Anleitung führt dich durch den gesamten Prozess – von der Vorbereitung bis zum ersten erfolgreichen Start.

:::tip[Hardware Recommendation]
Für das beste Erlebnis mit unseren x86-64-v3-Optimierungen empfehlen wir eine Intel-CPU der Haswell-Generation (ca. 2013) oder neuer, oder einen beliebigen AMD-Ryzen-Prozessor.
:::

## Vorbereitung

Bevor du beginnst, stelle sicher, dass du Folgendes bereit hast:
- Ein VeloxOS ISO image (von [veloxos.org](https://veloxos.org))
- Einen USB Stick mit mindestens 8GB Speicherplatz
- Eine stabile Internetverbindung

## 1. Installationsmedium erstellen

Verwende ein Tool wie **Ventoy**, **Etcher**, or **dd**, um das ISO auf deinen USB-Stick zu schreiben.

```bash
# Beispiel für Linux-Nutzer (achte darauf, den richtigen Laufwerkspfad zu prüfen!)
sudo dd bs=4M if=veloxos-latest.iso of=/dev/sdX status=progress oflag=sync
```

## 2. Der Installationsprozess

VeloxOS verwendet einen intuitiven grafischen Installer. Folge diesen Schritten:

1. **Boote** von deinem USB-Stick 
2. Wähle **"VeloxOS Live System"** im Boot-Menü aus.
3. Der **Installer** sich automatisch
4. Wähle deine Sprache, Tastaturbelegung und Zeitzone.
5. **Partitioning:** Wir empfehlen die Auswahl von „Festplatte löschen“ mit „Swap (mit Ruhezustand)“.

## 3. Nach der Installation

Nach dem ersten Neustart führt dich VeloxOS durch eine kurze Einrichtung, um dein System zu aktualisieren.

- [ ] System-Updates ausführen
- [ ] Grafikkarten-Treiber überprüfen
- [ ] Steam/Gaming-Tools einrichten (optional)

---

## Fehlerbehebung

Falls beim Start Probleme auftreten, sieh dir bitte unsere [Referenz](/reference/structure) an, um mehr über spezifische Kernel-Parameter zu erfahren.
