---
title: VeloxOS Installation
description: Offizielle Schritt-für-Schritt Installationsanleitung.
sidebar:
  order: 1
---

Diese Anleitung beschreibt den Installationsprozess mit der VeloxOS Live-ISO.

## 1. Booten der ISO

Nach dem Start vom USB-Stick erscheint das **GRUB-Bootmenü**. Hier kannst du wichtige Voreinstellungen treffen:

* **tz (Zeitzone):** Wähle deine lokale Zeitregion.
* **keytable:** Wähle dein Tastaturlayout.
* **lang:** Wähle die Systemsprache.

Wähle danach **"Boot ..."** und drücke Enter.

:::tip[Note]
Wenn der Autologin nicht klappt, verwende veloxoslive als Kennwort.
:::

## 2. Der Installer

Sobald die Desktop-Oberfläche geladen ist, startet der **Calamares-Installer** automatisch.

### Wichtige Schritte:
1.  **Partitionierung:** * Da VeloxOS **zRAM** zur Hochleistungs-Komprimierung nutzt, ist eine physische Swap-Partition meist unnötig.
    * Wähle **"Festplatte löschen"** und bei Swap die Option **"Kein Swap"**, es sei denn, du benötigst den Ruhezustand (Hibernate).
2.  **Benutzer:** Erstelle dein Benutzerkonto.

:::tip[Hinweis zu zRAM]
VeloxOS konfiguriert zRAM automatisch. Du musst nach der Installation nichts weiter tun, um von der verbesserten Performance zu profitieren.
:::
