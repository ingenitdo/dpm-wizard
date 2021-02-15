## DPM-Viewer in Webseite integrieren
Um das Modell in eine Webseite zu integrieren, wird ein div mit dem Attribut `dpm-viewer` an der vorgesehenen Stelle im Quellcode eingefügt.
Hier muss auch der Pfad zur JSON-Datei des Modells angegeben werden.
Die Breite und Höhe des Divs ist standardmäßig auf 100% eingestellt, die Höhe kann jeodch je nach Bedarf angepasst werden.
```xhtml
<div dpm-viewer data-detailed-model-url="<path-to-mode-json>" canvasHeight="100%"/>
```

Für weitere Informationen besuchen Sie die [Github](https://github.com/ingenitdo/dpm-wizard) Seite des Projektes.

---

### Integrate DPM viewer into website
To integrate the model into a web page, a div with the attribute `dpm-viewer` is inserted at the designated place in the source code.
The path to the JSON file of the model must also be specified here.
The width and height of the div is set to 100% by default, but the height can be adjusted as needed.
```xhtml
<div dpm-viewer data-detailed-model-url="<path-to-mode-json>" canvasHeight="100%"/>
```

For more information visit the project on [Github](https://github.com/ingenitdo/dpm-wizard).
