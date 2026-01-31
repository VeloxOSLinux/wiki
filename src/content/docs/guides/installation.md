---
title: VeloxOS Installation
description: Schritt-für-Schritt Anleitung zur Installation von VeloxOS.
sidebar:
  order: 1
---

Willkommen zur offiziellen Installationsanleitung von VeloxOS. Diese Anleitung führt dich durch den Prozess von der Vorbereitung bis zum ersten Systemstart.

:::tip[Hardware-Empfehlung]
Für das beste Erlebnis mit den x86-64-v3 Optimierungen empfehlen wir eine CPU ab der Intel Haswell-Generation (ca. 2013) oder AMD Ryzen.
:::

## Vorbereitung

Bevor du beginnst, stelle sicher, dass du folgende Dinge bereit hast:
- Ein VeloxOS ISO-Image (von [veloxos.org](https://veloxos.org))
- Einen USB-Stick mit mindestens 8GB Speicher
- Eine stabile Internetverbindung

## 1. Installationsmedium erstellen

Verwende ein Tool wie **Ventoy** oder **Etcher**, um das ISO auf deinen USB-Stick zu flashen.

```bash
# Beispiel für Linux-User (bitte Laufwerkspfad prüfen!)
sudo dd bs=4M if=veloxos-latest.iso of=/dev/sdX status=progress oflag=sync

## 2. Der Installationsprozess
VeloxOS nutzt einen intuitiven grafischen Installer. Folge diesen Schritten:
1. Boote vom USB-Stick.
2. Wähle im Boot-Menü "VeloxOS Live-System" aus.
3. Starte den Installer auf dem Desktop.
4. Wähle deine Sprache, Tastaturlayout und Zeitzone.
5. Partitionierung: Wir empfehlen "Festplatte löschen" mit Swap (Hibernate).

## Fehlerbehebung
Solltest du Probleme beim Booten haben, schaue in unsere Referenz, um mehr über die Kernel-Parameter zu erfahren.


