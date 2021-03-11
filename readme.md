# Process Modeler
Der Data Process Modeler ist ein Projekt der Themenplattform Verbraucherbelange des [Zentrum Digitalisierung.Bayern der Bayern Innovativ GmbH](https://www.bayern-innovativ.de/). Die Entwicklung der Software wird vom [Bayerischen Staatsministerium für Umwelt und Verbraucherschutz](https://www.stmuv.bayern.de/) finanziert. Umgesetzt wird das Projekt von der [concern GmbH](https://concern.de/) and [ingenit GmbH](https://www.ingenit.com/).

Der Data Process Modeler soll Unternehmen dabei unterstützen, verbraucherfreundlicher zu werden: Sie können mit der Software auf einfache Weise anschaulich darstellen, welche Daten sie zu welchen Zwecken verarbeiten. Das erlaubt Verbraucher:innen, besser nachzuvollziehen, was mit ihren Daten geschieht und zu entscheiden, ob sie dieser Verwendung und dem damit verbundenen Geschäftsmodell zustimmen. Ein transparenter und vertrauenswürdiger Umgang mit Daten wird so zu einem Wettbewerbsvorteil für Unternehmen. Transparenz bei der Verarbeitung von Verbraucherdaten ist eine wichtige Dimension von Corporate Digital Responsibility, einem der Schwerpunkte der Themenplattform Verbraucherbelange.

Disclaimer: Über das Projekt wird nur die zur Darstellung nötige Software entwickelt. Die mit der Software visualisierten Inhalte werden vom Verwender der Software erstellt und sind den hier aufgeführten Organisationen weder bekannt noch durch diese geprüft. Die hier aufgeführten Organisationen übernehmen keinerlei Verantwortung für die Rechtmäßigkeit der Verwendung der Software.




  
## Entwicklung

### Projektstruktur
Um einen einfachen Einstieg in das Projekt zu ermöglichen, wird im Folgenden kurz der Aufbau und die Organisation des Projekts erläutert.
Der Process Modeler ist ein reines Webprojekt ohne Backend, das React verwendet. 
Es beinhaltet den DPM-Wizard, um ein Datenprozessmodell zu erstellen und den DPM-Viewer, um dieses darzustellen.

Der DPM-Viewer, der das Datenprozessmodell anzeigt, befindet sich im Verzeichnis modelviewer.

Das DPM-Wizard-Projekt besteht aus zwei Seiten, dem Dashboard und der Wizard-Seite, wobei die Wizard-Seite den Kern der Anwendung darstellt.
Die wizard page enthält das canvas, in dem das Modell gezeichnet wird.
Das Modell wird vom ModelViewer gezeichnet, darüber liegt der ModelEditor, der die Elemente zur Bearbeitung des Modells enthält.

### Vorraussetzungen

* NodeJS 12.x
  * https://nodejs.org/en/download/

### Initiales Setup
Um alle benötigten Bibliotheken zu installieren führen Sie folgenden Befehl aus:
```bash
npm install
```

### Entwicklungsserver
Um den Development Server zu starten führen Sie folgenden Befehl aus:
```bash
npm run start
```
Der Server ist dann auf `localhost:9000` verfügbar. 
Das Root-Directory zeigt auf den DPM-Wizard. 
Auf `localhost:9000/viewer.html` kann der DPM-Viewer zu Entwicklungszwecken eingesehen werden. 

### Production
Um den DPM-Wizard in Produktion zu nutzen, wird folgender Befehl ausgeführt:
```bash
npm run build
```
Alle benötigten Dateien um den DPM-Wizard zu hosten werden dabei generiert und liegen im Verzeichnis `build` vor.

## DPM-Viewer in Webseite integrieren
Um das Modell in eine Webseite zu integrieren, wird ein div mit dem Attribut `dpm-viewer` an der vorgesehenen Stelle im Quellcode eingefügt.
Hier muss auch der Pfad zur JSON-Datei des Modells angegeben werden.
Die Breite und Höhe des Divs ist standardmäßig auf 100% eingestellt, die Höhe kann jeodch je nach Bedarf angepasst werden.
```xhtml
<div dpm-viewer class="dpm-viewer" data-detailed-model-url="<path-to-mode-json>" canvasHeight="100%"/>
```



# Process Modeler (engl.)
The Data Process Modeler is a project of the thematic platform Consumer Affairs of the [Zentrum Digitalisierung.Bayern of Bayern Innovativ GmbH](https://www.bayern-innovativ.de/). The development of the software is funded by the [Bavarian State Ministry of the Environment and Consumer Protection](https://www.stmuv.bayern.de/). The project is implemented by [concern GmbH](https://concern.de/) and [ingenit GmbH](https://www.ingenit.com/).

The Data Process Modeler is intended to help companies become more consumer-friendly: With the software, they can easily visualize which data they process and for which purposes. This allows consumers to better understand what happens to their data and to decide whether they consent to this use and the associated business model. Transparent and trustworthy handling of data thus becomes a competitive advantage for companies. Transparency in the processing of consumer data is an important dimension of Corporate Digital Responsibility, one of the focal points of the Consumer Affairs thematic platform.

Disclaimer: Only the software required for visualization is being developed via the project. The content visualized with the software is created by the user of the software and is neither known to nor verified by the organizations listed here. The organizations listed here do not assume any responsibility for the legality of the use of the software.


## Development

### Requirements

* NodeJS 12.x
  * https://nodejs.org/en/download/
  
### Initial Setup
Run this to install all required dependencies:
```bash
npm install
```

### Developmentserver
To start the Development Server execute the following command:
```bash
npm run start
```
The server is then available on `localhost:9000`. 
The root directory points to the DPM wizard. 
On `localhost:9000/viewer.html` the DPM viewer can be viewed for development purposes. 

### Pruduction
To use the DPM Wizard in production, the following command is executed:
```bash
npm run build
```
All necessary files to host the DPM-Wizard are generated and are located in the directory `build`.

### Project Structure
In order to provide an easy introduction to the project, the following is a brief explanation of the structure and organization of the project.
The Process Modeler is a pure web project without a backend, which uses React. 
It includes DPM-Wizard, to create a data process model and the DPM-Viewer to display the same.

The DPM-Viewer that draws the dataprocess model is located in the modelviewer directory.

The DPM-Wizard project consists of two pages, the dashboard and the wizard page, with the wizard page being the core of the application.
The wizard page holds the canvas in which the model is drawn.
The model is drawn by the ModelViewer, overlying is the ModelEditor, which contains the elements for editing the model.

### Integrate DPM viewer into website
To integrate the model into a web page, a div with the attribute `dpm-viewer` is inserted at the designated place in the source code.
The path to the JSON file of the model must also be specified here.
The width and height of the div is set to 100% by default, but the height can be adjusted as needed.
```xhtml
<div dpm-viewer class="dpm-viewer" data-detailed-model-url="<path-to-mode-json>" canvasHeight="100%"/>
```

