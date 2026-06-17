---
title: VeloxOS aus Quellcodes bauen
description: Eine umfassende Anleitung, wie du deine eigene, maßgeschneiderte VeloxOS Live-ISO aus unserer deklarativen Flake-Konfiguration erstellst.
---

Da VeloxOS auf NixOS basiert, erfordert das Erstellen einer eigenen Live-ISO keine komplexen Spiegelserver, Chroots oder distributionsspezifischen Build-Tools mehr. Dank der Mächtigkeit von **Nix Flakes** kannst du ein voll funktionsfähiges VeloxOS-Installationsmedium mit einem einzigen Befehl auf jedem Linux-System generieren, auf dem der Nix-Paketmanager installiert und Flakes aktiviert sind.

:::caution[Systemanforderungen]
- **Speicherplatz:** ~20 GB freier Festplattenspeicher (hauptsächlich zum Zwischenspeichern/Cachen von Paketen).
- **Host-Betriebssystem:** Jede Linux-Distribution mit installiertem **Nix** und aktivierten Flakes.
:::

## 🚀 Den Build-Prozess starten

Wir nutzen die nativen Werkzeuge von Nix, um die ISO-Datei direkt aus unserem Konfigurations-Blueprint zusammenzubauen.

### 1. Das Konfigurations-Repository klonen
Hole dir als Erstes den offiziellen Konfigurationsbaum von VeloxOS auf deinen lokalen Rechner:

```bash
git clone [https://github.com/VeloxOSLinux/veloxos-config.git](https://github.com/VeloxOSLinux/veloxos-config.git) ~/veloxos-config
cd ~/veloxos-config
```
### 2. Den Build-Befehl ausführen
Um die ISO-Generierung anzustoßen, führst du einfach den nix build-Befehl aus. Dieser verweist auf das in unserem Flake definierte ISO-Profil-Target:

```bash
nix build .#nixosConfigurations.isoImage.config.system.build.isoImage
```
:::tip[Note]
Je nach deiner Internetgeschwindigkeit und CPU-Leistung kann dieser Vorgang einige Minuten dauern, da Nix die Basis-Pakete, unsere Zen-Kernel-Konfiguration und die vorbereitete Niri-Umgebung herunterlädt bzw. zusammenbaut.
:::

## 📂 ISO-Datei finden
Nachdem der Prozess erfolgreich abgeschlossen wurde, erstellt Nix einen Symlink namens `result` in deinem aktuellen Verzeichnis. Dieser Link verweist direkt in den sicheren Nix-Store, wo deine fertige ISO-Datei liegt.

Um den exakten Pfad zu deiner frisch gebackenen `.iso`-Datei anzuzeigen, führe Folgendes aus:

```bash
ls -l result/iso/
```
Du kannst dieses Image nun mit `dd` oder Tools wie Ventoy/Etcher auf einen USB-Stick flashen und direkt in dein angepasstes VeloxOS booten!

## 🛠 Fortgeschritten: Vor dem Bauen Anpassungen vornehmen
Der größte Vorteil des deklarativen Wechsels: Wenn du eigene Pakete, Dotfiles oder spezifische Kernel-Optionen direkt in die Live-ISO einbacken möchtest, musst du keine komplexen Overlays mehr pflegen.

Bearbeite einfach vor dem Ausführen des `nix build`-Befehls die Datei `iso/configuration.nix` (oder die entsprechende Modul-Datei) innerhalb des geklonten Repositories. Deine Änderungen werden beim Kompilieren sauber und direkt in das fertige Image integriert.
