---
title: Performance & Kernel
description: Erfahre mehr über den CachyOS-Kernel und x86-64-v3 Optimierungen.
sidebar:
  order: 1
---

VeloxOS ist auf Geschwindigkeit ausgelegt. Dies erreichen wir durch modernste Kernel-Technologie und optimierte Befehlssätze.

## Der CachyOS-Kernel

Das Herzstück von VeloxOS ist der **CachyOS-Kernel**. Dieser Kernel ist speziell darauf getunt, die Reaktionszeit des Desktops zu minimieren und die Gaming-Performance zu maximieren.

### Hauptmerkmale:
* **Bore Scheduler:** Der *Burst-Oriented Response Encoder* sorgt dafür, dass das System auch unter extrem großer CPU-Last flüssig bedienbar bleibt.
* **Optimierte Kompilierung:** Erstellt mit speziellen Flags, die das Letzte aus der Hardware herausholen.
* **Latency-Patches:** Minimiert Verzögerungen bei der Eingabe und verbessert den Datendurchsatz.

## x86-64-v3 & v4 Optimierungen

Die meisten Linux-Distributionen werden für **x86-64 (v1)** kompiliert, um kompatibel mit 20 Jahre alten CPUs zu sein. VeloxOS nutzt hingegen moderne Standards.

* **v3 (Haswell/Ryzen):** Nutzt Befehlssätze wie AVX2, was zu einem spürbaren Performance-Schub von ca. 10-15% führt.
* **v4:** Nutzt AVX-512 für maximale Rechenpower auf High-End-Systemen.

:::tip[Automatisierung]
Du musst nichts manuell einstellen. VeloxOS erkennt deine CPU automatisch und nutzt die effizientesten verfügbaren Pakete.
:::
