# Erste Schritte

## Installation

Prism Launcher ist für Windows, Mac und Linux verfügbar und kann ganz einfach installiert werden bei [deren offiziellen Seite](https://prismlauncher.org/download/).

## Java

Java ist **nötig** um Minecraft starten und spielen zu können. Derzeit bei dem schreiben des Guides ist das automatische Runterladen von Java nicht implementiert und muss deshalb manuell installiert werden durch den Nutzer.

## Java auswählen

Prism Launcher geht automatisch nach installierten Java Versionen suchen und zeig sie an bei dem ersten mal Starten an.

Wenn du aber schon Prism Launcher gestartet hast, wirst du alle Java Versionen finden unter:

> Settings > Java > Java Runtime > Auto-Detect...

oder bei einem bestimmen Instanz:

> Right click an instance > Edit > Settings > Java > Java installation > Auto-Detect...

## Installation von Java bei Windows

**Als erstes, finde deine Prozessor Architektuer heraus.**

1. Öffne das **Start Menu**
2. Suche nach **Eingabeaufforderung** oder **Terminal** und öffne es
3. Schreibe `echo %PROCESSOR_ARCHITECTURE%` und drück Enter
4. Schaue nach dem Ergebnis.
   - Wenn `AMD64` steht, hast du einen 64-bit **x86-64** Prozessor. Auch manchmal genannt als **x64** oder **amd64**.
   - Wenn `X86` steht, hast du einen 32-bit **x86** Prozessor. Auch manchmal genannt als **x32** oder **x86-32**.
   - Wenn `ARM64` steht, hast du einen 64-bit **ARM** Prozessor. Auch manchmal genannt als **aarch64**.

Durch den Prozessor Architektur können wir jetzt die richtige Java Version herunterladen:

|              Minecraft               | CPU type | Download page                                                                                                                  | Viable alternatives             |
| :----------------------------------: | :------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
|   Minecraft **1.20.5** oder höher    |  x86-64  | [Microsoft OpenJDK 21 for Windows x64, `.msi` installer](https://aka.ms/download-jdk/microsoft-jdk-21-windows-x64.msi)         | Azul, Coretto, Temurin, GraalVM |
|                                      |   x86    | Nicht verfügbar                                                                                                                |                                 |
|                                      | aarch64  | [Microsoft OpenJDK 21 for Windows aarch64, `.msi` installer](https://aka.ms/download-jdk/microsoft-jdk-21-windows-aarch64.msi) | Azul                            |
| Minecraft **1.17** bis zu **1.20.4** |  x86-64  | [Microsoft OpenJDK 17 for Windows x64, `.msi` installer](https://aka.ms/download-jdk/microsoft-jdk-17-windows-x64.msi)         | Azul, Coretto, Temurin, GraalVM |
|                                      |   x86    | [Temurin OpenJDK 17 for Windows x32, `.msi` installer](https://adoptium.net/temurin/releases/?version=17&arch=x86&os=windows)  | Azul, Coretto                   |
|                                      | aarch64  | [Microsoft OpenJDK 17 for Windows aarch64, `.msi` installer](https://aka.ms/download-jdk/microsoft-jdk-17-windows-aarch64.msi) | Azul                            |
|  Minecraft **1.16** oder niedriger   |  x86-64  | [Temurin OpenJDK 8 for Windows x64, `.msi` installer](https://adoptium.net/temurin/releases/?version=8&arch=x64&os=windows)    | Azul, Coretto                   |
|                                      |   x86    | [Temurin OpenJDK 8 for Windows x64, `.msi` installer](https://adoptium.net/temurin/releases/?version=8&arch=x86&os=windows)    | Azul, Coretto                   |
|                                      | aarch64  | Nicht verfügbar                                                                                                                |                                 |

## Installation von Java bei macOS

**Als erstes, finde deine Prozessor Architektuer heraus.**

1. Öffne das **Apple Menu** in der oberen linken Ecke des Bildschirms
2. Klick auf "About This Mac"
3. Such nach "Processor" und schaue das danach steht.
   - Wenn `Intel` dabei ist, hast du einen 64-bit **x86-64** Prozessor. Auch manchmal genannt als **x64** oder **amd64**.
   - Wenn `Apple` dabei ist, hast du einen 64-bit **ARM** Prozessor. Auch manchmal genannt als **aarch64**.

Durch den Prozessor Architektur können wir jetzt die richtige Java Version herunterladen:

|              Minecraft               | CPU type | Download page                                                                                                                                         | Viable alternatives             |
| :----------------------------------: | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
|   Minecraft **1.20.5** oder höher    |  x86-64  | [Microsoft OpenJDK 21 for macOS x64, `.pkg` installer](https://learn.microsoft.com/en-us/java/openjdk/download)                                       | Azul, Coretto, Temurin, GraalVM |
|                                      | aarch64  | [Microsoft OpenJDK 21 for macOS aarch64, `.pkg` installer](https://learn.microsoft.com/en-us/java/openjdk/download)                                   | Azul, Coretto                   |
| Minecraft **1.17** bis zu **1.20.4** |  x86-64  | [Microsoft OpenJDK 17 for macOS x64, `.pkg` installer](https://learn.microsoft.com/en-us/java/openjdk/download)                                       | Azul, Coretto, Temurin, GraalVM |
|                                      | aarch64  | [Microsoft OpenJDK 17 for macOS aarch64, `.pkg` installer](https://learn.microsoft.com/en-us/java/openjdk/download)                                   | Azul, Coretto                   |
|  Minecraft **1.16** oder niedriger   |  x86-64  | [Temurin OpenJDK 8 for macOS x64, `.pkg` installer](https://adoptium.net/temurin/releases/?version=8)                                                 | Azul, Coretto                   |
|                                      | aarch64  | [Azul OpenJDK 8 for macOS aarch64, `.dmg` installer](https://www.azul.com/downloads/?version=java-8-lts&os=macos&architecture=arm-64-bit&package=jdk) | Coretto                         |

## Installation von Java bei Linux

Bei Linux ist es empfohlen, deinen Package Manager für das installieren von Java zu nutzen.

### Fedora, RHEL, CentOS, AlmaLinux oder RockyLinux

Bei dem COPR Package sollten alle benötigten Java Versionen schon installiert sein, dies ist der Kommand um es trotzdem zu installieren:

```bash
sudo dnf install java-1.8.0-openjdk java-17-openjdk java-21-openjdk
```

### Void Linux

```bash
sudo xbps-install openjdk17-jre openjdk8-jre openjdk21-jre
```

### Arch Linux, Manjaro, EndeavorOS, Garuda

```bash
sudo pacman -S jre17-openjdk jre8-openjdk jre21-openjdk
```

### Ubuntu, Pop!\_OS, Linux Mint, Zorin OS, or elementaryOS

```bash
sudo apt install openjdk-17-jre openjdk-8-jre openjdk-21-jre
```

### Debian, MX Linux

```bash
sudo apt install openjdk-17-jre openjdk-21-jre
```

Java 8 ist nicht verfügbar für Debian 10+ wegen wenig Sicherheitsunterstützung, aber du kannst die Adoptium Repository nutzen bis 2026:

```bash
wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public |
sudo apt-key add -
sudo add-apt-repository --yes https://packages.adoptium.net/artifactory/deb/
sudo apt-get update && sudo apt-get install temurin-8-jdk
```

### Alpine Linux

```bash
sudo apk add openjdk17 openjdk8
```

### Flatpak

Prism Launcher Flatpak hat bereits Java vorinstalliert.

### NixOS

Prism Launcher NixOS Package hat bereits Java vorinstalliert.
