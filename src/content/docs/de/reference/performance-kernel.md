---
title: Performance & Tuning
description: Erfahre mehr über den Linux-Zen-Kernel, die automatisierte zRAM-Konfiguration und maßgeschneiderte System-Tweaks in VeloxOS.
sidebar:
  order: 2
---

VeloxOS ist von Grund auf auf maximale Reaktionsgeschwindigkeit des Desktops und eine hervorragende Out-of-the-box-Gaming-Performance ausgelegt. Anstatt auf komplexe, hardwarespezifische Repositories angewiesen zu sein, erreichen wir maximale Geschwindigkeit durch einen handverlesenen Performance-Kernel, intelligentes Speicher-Tuning und deklarative Optimierungen auf Systemebene.

---

## 🐧 Der Linux-Zen-Kernel

Das Herzstück von VeloxOS ist der **Linux-Zen-Kernel** – das Ergebnis einer gemeinschaftlichen Entwicklung von Kernel-Hackern, um den bestmöglichen Linux-Kernel für den alltäglichen Desktop-Einsatz, Multimedia-Anwendungen und Gaming bereitzustellen.

### Die wichtigsten Performance-Vorteile:
* **Low-Latency-Scheduling:** Optimiert für extrem niedrige Latenzen. Das sorgt dafür, dass dein Desktop und deine Eingaben (Maus/Tastatur) selbst bei intensiven CPU- oder Render-Workloads im Hintergrund absolut flüssig reagieren.
* **Optimiertes BBR Congestion Control:** Eine feingetunte Netzwerk-Steuerung, die deine Download-Stabilität verbessert und den Ping in Online-Multiplayer-Spielen minimiert.
* **Preemption-Modell:** Nutzt ein aggressiveres präemptives Modell (`PREEMPT`), das speziell darauf ausgelegt ist, Mikroruckler (1% Lows) in anspruchsvollen Spielen zu verhindern.

---

## 🧠 Automatische zRAM-Konfiguration

Klassische Swap-Partitionen oder Swap-Dateien auf physischen Festplatten sind langsam und führen zu massiven System-Rucklern, sobald der Arbeitsspeicher vollzulaufen droht. VeloxOS umgeht diesen Flaschenhals komplett durch den standardmäßigen Einsatz von automatisiertem **zRAM**.

### Wie es funktioniert:
Anstatt temporäre Daten träge auf deine SSD oder HDD auszulagern, erstellt VeloxOS ein komprimiertes Block-Gerät direkt im RAM.

* **Hohe Komprimierungsrate:** Daten, die in den Swap verschoben werden, werden on-the-fly mit ultraschnellen Algorithmen (wie `zstd`) komprimiert.
* **Keine Festplatten-Engpässe:** Da alles mit der Geschwindigkeit deines Arbeitsspeichers geschieht, bleibt dein System beim Multitasking oder bei speicherintensiven Spielen perfekt bedienbar.
* **Schonung der SSD:** Durch das Vermeiden ständiger Schreibzyklen auf ein physisches Laufwerk verlängert zRAM die Lebensdauer deiner Hardware.

---

## 🛠 Integrierte System- & Kernel-Tweaks

Wir haben die effektivsten Systemoptimierungen bekannter Performance-Distributionen analysiert und sie direkt als Code in die VeloxOS-Konfiguration integriert. Diese Tweaks werden bei jedem Systemstart automatisch über unsere Nix-Module angewendet:

* **Optimierte `sysctl`-Parameter:** Das Speicher-Management wurde optimiert (z. B. ist `vm.max_map_count` standardmäßig extrem hoch angesetzt, um eine reibungslose Kompatibilität mit speicherhungrigen Steam/Proton-Titeln wie *Star Citizen* oder *Cyberpunk 2077* zu garantieren).
* **Erhöhte Datei-Descriptor-Limits:** Mehr zugewiesene Systemressourcen für Wine- und Proton-Präfixe verhindern plötzliche Spielabstürze bei langen Gaming-Sessions.
* **Deaktivierte Split-Lock-Mitigations:** Standardmäßig abgeschaltet, um plötzliche Performance-Einbrüche und Stottern in bestimmten modernen Spiele-Engines zu verhindern.

:::tip[Deklaratives Feintuning]
Du möchtest eigene Kernel-Parameter hinzufügen oder einen bestimmten sysctl-Wert anpassen? Da VeloxOS deklarativ ist, musst du keine versteckten Konfigurationsdateien im System suchen. Füge deine Werte einfach deiner `modules/performance.nix` hinzu und baue das System neu!
:::
