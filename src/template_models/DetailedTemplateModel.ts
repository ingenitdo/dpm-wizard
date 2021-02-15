import { Model } from "../entities/Model";

export const detailedBaseModel: Model = {
  masterData: {
    title: "Datenprozess",
    author: "",
    version: "1.0",
    description: "",
    viewerMode: "both",
    controlOptions: {
      showTitle: true,
      showSubTitle: true,
      showModeToggle: true,
      showLegend: true,
      showFullscreen: true,
      showZoom: true,
      showTutorial: true
    }
  },
  language: "de",
  title: "Titel",
  subtitle: "Subtitel",
  participants: [{
    id: "1",
    label: [
      "Nutzer"
    ],
    labelSize: 1.0,
    hasActionLabel: "Die Akteure in der Überschrift dieser Spalte verarbeiten Daten",
    hasNoActionLabel: "Die Akteure in der Überschrift dieser Spalte verarbeiten keine Daten",
    backgroundColor: "#ffffff",
    labelColor: "#48AAE6",
    iconColor: "#006ba2",
    borderColor: "#48AAE6",
    borderSize: 1
  },
    {
      id: "2",
      label: [
        "Nutzer"
      ],
      labelSize: 1.0,
      hasActionLabel: "Die Akteure in der Überschrift dieser Spalte verarbeiten Daten",
      hasNoActionLabel: "Die Akteure in der Überschrift dieser Spalte verarbeiten keine Daten",
      backgroundColor: "#ffffff",
      labelColor: "#48AAE6",
      iconColor: "#006ba2",
      borderColor: "#48AAE6",
      borderSize: 1
    },
    {
      id: "3",
      label: [
        "Nutzer"
      ],
      labelSize: 1.0,
      hasActionLabel: "Die Akteure in der Überschrift dieser Spalte verarbeiten Daten",
      hasNoActionLabel: "Die Akteure in der Überschrift dieser Spalte verarbeiten keine Daten",
      backgroundColor: "#ffffff",
      labelColor: "#48AAE6",
      iconColor: "#006ba2",
      borderColor: "#48AAE6",
      borderSize: 1
    }
  ],
  connectionTypes: [
    {
      id: "ct1",
      title: "Default",
      color: "#7D7D7D",
      textColor: "black",
      legend: true,
      legendOrder: 1,
      legendLabel: "Beschreibung der Verbindung",
      default: true,
      labelSize: 1.0
    },
    {
      id: "ct2",
      title: "Anonym",
      color: "#7D7D7D",
      textColor: "black",
      legend: true,
      legendOrder: 1,
      legendLabel: "Beschreibung der Verbindung",
      default: true,
      strokeDasharray: "10, 10",
      labelSize: 1.0
    }
  ],
  boxTypes: [
    {
      id: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
      title: "Default",
      color: "#777777",
      textColor: "#ffffff",
      colorInactive: "#48AAE6",
      textColorInactive: "#ffffff",
      borderColor: "#ff00ff",
      borderWidth: 0,
      borderStrokeDasharray: "#ff00ff",
      legend: true,
      legendOrder: 0,
      legendLabel: "#ff00ff",
      sourceDefault: true,
      purposeDefault: true,
      actionDefault: true,

      labelSize: 1.0,
      shortInfoLabelSize: 1.0,

      shortInfoBackground: "#FFA335",
      shortInfoActiveBackground: "#FF9134",
      infoIconBackground: "#FEE970",
      infoIconActiveBackground: "#FEE970",
      policyIconBackground: "#FEE970",
      policyIconActiveBackground: "#FEE970"
    }
  ],
  cases: [
    {
      id: "77188745-addb-4c6d-af43-62d35921a7a5",
      label: "1. Kapitel",
      info: "",
      permissions: "",
      dataSources: [
        {
          id: "5-dp1",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "Eine Datenkategorie"
          ],
          shortInfo: [
            "kurze Info"
          ],
          info: "<div><p>Info zu Datenkategorie</p></div>",
          position: {
            "start": 0,
            "end": 0
          },
        },
        {
          id: "5-dp2",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "Eine zweite Datenkategorie"
          ],
          shortInfo: [
            "kurze Info"
          ],
          info: "<div><p>Info zu Datenkategorie</p></div>",
          position: {
            "start": 1,
            "end": 2
          }
        }
      ],
      dataPurposes: [
        {
          id: "1-dp1",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "Eine Nutzung"
          ],
          position: {
            start: 0,
            end: 0
          }
        },
        {
          id: "1-dp2",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "Eine zweite Nutzung"
          ],
          position: {
            start: 1,
            end: 1
          }
        },
        {
          id: "1-dp3",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "Eine weitere Nutzung"
          ],
          position: {
            start: 2,
            end: 2
          }
        }
      ],
      actions: [
        {
          id: "1-a1",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "1. Prozessschritt"
          ],
          info: "<div><p>Prozessschritt Info</p></div>",
          erasurePolicy: "Dauerhaft gespeichert",
          storagePolicy: "Eigenes Smartphone",
          participantID: "1",
          position: {
            start: 0,
            end: 0
          }
        },
        {
          id: "1-a2",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "2. Prozessschritt"
          ],
          info: "<div><p>Prozessschritt Info</p></div>",
          shortInfo: [
            "kurze Info"
          ],
          erasurePolicy: "14 Tage",
          storagePolicy: "Server",
          participantID: "1",
          position: {
            start: 1,
            end: 1
          }
        },
        {
          id: "1-a3",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "3. Prozessschritt"
          ],
          info: "<div><p>Prozessschritt Info</p></div>",
          shortInfo: [
            "kurze Info"
          ],
          erasurePolicy: "keine Speicherung",
          storagePolicy: "",
          participantID: "1",
          position: {
            start: 2,
            end: 2
          }
        },
        {
          id: "1-a4",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "4. Prozessschritt"
          ],
          info: "<div><p>Prozessschritt Info</p></div>",
          erasurePolicy: "14 Tage",
          storagePolicy: "Server",
          participantID: "2",
          position: {
            start: 2,
            end: 2
          }
        }
      ],
      connections: [
        {
          id: "490a64f9-6896-4973-b7f8-57eeb43d797f",
          typeId: "ct1",
          label: "",
          textEllipsis: true,
          source: "5-dp1",
          destination: "1-a1",
          position: {
            start: 0,
            end: 0
          }
        },
        {
          id: "61a07189-ec1a-4f6b-99df-7c57d5e673e9",
          typeId: "ct2",
          label: "",
          textEllipsis: true,
          source: "1-a1",
          destination: "1-dp1",
          position: {
            start: 0,
            end: 0
          }
        }
      ],
      isOpen: true
    },
    {
      id: "d191e4c4-d76a-4a6e-af3b-eebdcc8d899e \n",
      label: "2. Kapitel",
      info: "",
      permissions: "",
      dataSources: [],
      dataPurposes: [],
      actions: [],
      connections: [],
      isOpen: false
    },
    {
      id: "d191e4c4-d86a-4a6e-af3b-eebdcc8d899e \n",
      label: "3. Kapitel",
      info: "",
      permissions: "",
      dataSources: [],
      dataPurposes: [],
      actions: [],
      connections: [],
      isOpen: false
    }
  ],
  sourceInformation: {
    id: "si-1",
    info: "<div><table><tr><tr><td>Eine Quelle</td></tr></tr></table></div>"
  },
  revisionHistory: {
    id: "rh-1",
    info: "<div><p><ul><li>Initiale Version 1.0</li></ul></p></div>"
  },
  glossar: [
    {
      id: "g1",
      keywords: [
        "smartphone",
        "handy"
      ],
      title: "Smartphone",
      content: "<div><p>Ist ein mobiles Telefon</p></div>"
    }
  ],
  isDialogFullsize: true,
  isDetailedIcons: false,
  fixedLabels: {
    headerSource: "Datenkategorie",
    headerPurpose: "Verwendungszweck"
  },
  colors: {
    canvasBackground: "#ffffff",
    headerSourceLabel: "#ffffff",
    headerSourceIcon: "#ffffff",
    headerSourceBackground: "#006ba2",
    headerSourceArrowBackground: "#006ba2",

    headerProcessLabel: "#ffffff",
    headerProcessIcon: "#ffffff",
    headerProcessBackground: "#006ba2",
    headerProcessArrowLeftBackground: "#006ba2",
    headerProcessArrowRightBackground: "#006ba2",

    headerPurposeLabel: "#ffffff",
    headerPurposeIcon: "#ffffff",
    headerPurposeBackground: "#006ba2",
    headerPurposeArrowBackground: "#006ba2",

    caseHeaderLabel: "#ffffff",
    caseHeaderIcon: "#ffffff",
    caseHeaderBackground: "#333333",
    caseHeaderBackgroundGradient: null,
    caseBodyBackground: "#eeeeee",
    caseBorder: "#333333",

    participantLabel: "#006ba2",
    participantIcon: "#006ba2",
    participantBorder: "#006ba2",
    participantBackground: "#ffffff",
    participantBackgroundGradient: "url(#white_gradient_2)",

    caseActionIdentifierChecked: "#006ba2",
    caseActionIdentifierUnchecked: "#006ba2",

    controlsLabel: "#ffffff",
    controlsBackground: "#006ba2",
    controlsBackgroundHover: "#008FD6",

    modelModeLabel: "#ff00ff",
    modelModeBackground: "#ff00ff",

    textEllipsisBackground: "#48AAE6",
    textEllipsisLabel: "#ffffff",

    overlayBackground: "#ff00ff",
    overlayLabel: "#ff00ff",

    glossarKeyword: "#ff00ff",

    tutorialBackground: "#006ba2",
    tutorialLabel: "#ffffff"
  }
};