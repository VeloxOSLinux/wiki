---
title: Updates & Repository-Verwaltung
description: So hältst du VeloxOS aktuell und nutzt das offizielle VeloxOS-Repository.
---

VeloxOS nutzt eine zentrale Repository-Struktur. Um maximale Stabilität bei gleichzeitiger Höchstleistung zu garantieren, kuratieren und testen wir alle Pakete – von System-Kernkomponenten bis hin zu Performance-Optimierungen – bevor sie auf dein System gelangen.

## 📦 Die Repository-Strategie

Im Gegensatz zu Standard-Distributionen bietet VeloxOS eine **einzige, verifizierte Quelle**. Dieser Ansatz verhindert Versionskonflikte und stellt sicher, dass jedes Update für das VeloxOS-Ökosystem geprüft wurde. Unser Repository vereint:

1.  **VeloxOS Core:** Eigene Fixes, Themes und OS-spezifische Konfigurationen.
2.  **Geprüfte Basis:** Stabile Systemkomponenten auf Basis von Manjaro.
3.  **Performance:** CPU-optimierte Anwendungen und Kernel (x86-64-v3/v4) von CachyOS.

---

## 🔐 Sicherheit & Verifizierung

Alle Pakete im VeloxOS-Repository sind digital signiert, um deine Sicherheit zu gewährleisten.

### GPG-Schlüsselverwaltung
Der offizielle VeloxOS-Signaturschlüssel ist auf allen Systemen **vorinstalliert**. Bei einer Neuinstallation ist kein manuelles Eingreifen erforderlich.

:::tip[Manueller Schlüssel-Import]
Falls du von einer älteren Version migrierst oder deine Schlüssel wiederherstellen musst, nutze folgende Befehle:
```bash
# Schlüssel herunterladen und zu pacman hinzufügen
curl https://downloads.veloxos.org/repos/key/veloxos.gpg | sudo pacman-key -a -

# Schlüssel lokal signieren, um ihm zu vertrauen
sudo pacman-key --lsign-key DE75DA0BF7DFECA3A588D82DF5DA023C16E45341
```
:::

### Repository-Konfiguration
Das Repository ist standardmäßig vorkonfiguriert. Zur manuellen Überprüfung stelle sicher, dass deine /etc/pacman.conf den folgenden Eintrag am Anfang der Repository-Sektion enthält:
```bash
[veloxos]
SigLevel = Required DatabaseOptional
Server = https://downloads.veloxos.org/repos/stable/$arch
```
(Hinweis: $arch wird je nach CPU-Unterstützung automatisch zu v3 oder v4 aufgelöst.)

## 🔄 Das System aktualisieren
Updates werden nach erfolgreichen Tests in Zyklen veröffentlicht. Wir empfehlen die Nutzung des Terminals für maximale Transparenz während des Update-Vorgangs.

Per Terminal (Empfohlen)
Nutze den Standard-Befehl, um dein System mit dem VeloxOS-Repository zu synchronisieren:
```bash
sudo pacman -Syu
```
### Grafische Paketverwaltung (Pamac)
Wenn du lieber "Software hinzufügen/entfernen" (Pamac) nutzt:

Einheitliche Updates: Alle Updates werden über das veloxos Repository bereitgestellt.

Automatische Prüfung: Signaturen werden vor jeder Installation automatisch verifiziert.

## 🔄 Das System aktualisieren
Updates werden nach erfolgreichen Tests in Zyklen veröffentlicht. Wir empfehlen die Nutzung des Terminals für maximale Transparenz während des Update-Vorgangs.

Per Terminal (Empfohlen)
Nutze den Standard-Befehl, um dein System mit dem VeloxOS-Repository zu synchronisieren:
```bash
sudo pacman -Syu
```
### Grafische Paketverwaltung (Pamac)
Wenn du lieber "Software hinzufügen/entfernen" (Pamac) nutzt:

Einheitliche Updates: Alle Updates werden über das veloxos Repository bereitgestellt.

Automatische Prüfung: Signaturen werden vor jeder Installation automatisch verifiziert.

## ⚡ Optimierte Pakete & Kernel
Da VeloxOS die optimierten CachyOS-Builds direkt in das eigene Repository integriert, erhältst du die beste Performance ohne zusätzliche Quellen.

Suche nach optimierten Paketen
Du kannst prüfen, welche optimierten Pakete aktuell im Repo verfügbar sind:
```bash
pacman -Sl veloxos | grep [Suchbegriff]
```
## Der CachyOS Kernel 🐧
VeloxOS wird mit einem vorinstallierten CachyOS-Kernel ausgeliefert, der für geringe Latenzen und Gaming optimiert ist.

Automatische Updates: Der Kernel wird nahtlos über pacman -Syu aktualisiert.

Kernel-Varianten: Du kannst weitere Varianten (z. B. linux-cachyos-bore) direkt aus dem VeloxOS-Repo installieren.

:::caution[Wichtig]
Füge niemals manuell offizielle Arch Linux- oder Manjaro-Mirror zu deiner pacman.conf hinzu. Dies würde den Testzyklus von VeloxOS umgehen und kann durch "Partial Upgrades" zu schweren Systeminstabilitäten führen. Verlasse dich auf das kuratierte VeloxOS-Repository für ein stabiles Erlebnis.
:::
