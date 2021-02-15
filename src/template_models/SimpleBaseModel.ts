import { Model } from "../entities/Model";

export const simpleBaseModel: Model = {
  version: "1.1.0",
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
  header: {
    sourceLabel: "Datenkategorie",
    sourceIcon: {
      id: "cloud_solid",
      dataUri: "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQzNC45MzEgMjI3LjA2OWMtNi43MjQtNDMuMDM3LTQ0LjAzNC03Ni4wNjktODguOTMxLTc2LjA2OS0xNi44OSAwLTMzLjEyIDQuNjczLTQ3LjE5NyAxMy4zODktMjEuNDE2LTM1Ljk5Mi01OS45NzEtNTguMzg5LTEwMi44MDMtNTguMzg5LTY2LjE2NyAwLTEyMCA1My44MzMtMTIwIDEyMCAwIC40MSAwIC44MzUuMDE1IDEuMjQ1LTQyLjUyNSA3LjE2My03Ni4wMTUgNDQuMjM4LTc2LjAxNSA4OC43NTUgMCA0OS42MjkgNDEuMzcxIDkwIDkxIDkwaDMzMGM0OS42MjkgMCA5MS00MC4zNzEgOTEtOTAgMC00NC44OTctMzQuMDMyLTgyLjIwNy03Ny4wNjktODguOTMxeiIvPjwvZz48L3N2Zz4="
    },
    purposeLabel: "Verwendungszweck",
    purposeIcon: {
      id: "analytic_chart",
      dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MDkuMDcsOTMuOTE2bC05MS05MC45ODdDNDE2LjE5NSwxLjA1NCw0MTMuNjUyLDAsNDExLDBIMTE0Qzk3LjQ1OCwwLDg0LDEzLjQ1OCw4NCwzMHYxOS4wNjQNCgkJCUMzNC44NzUsNjguMzM0LDAsMTE2LjIxNSwwLDE3Mi4wOTFjMCw1LjUyMiw0LjQ3OCwxMCwxMCwxMGgxMjIuMDkxYzUuNTIyLDAsMTAtNC40NzgsMTAtMTBWNTBjMC01LjUyMi00LjQ3OC0xMC0xMC0xMA0KCQkJYy05LjYzOCwwLTE5LjAzNCwxLjA0Ny0yOC4wOTEsMy4wMTdWMzBjMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGgyODd2NjFjMCwxNi41NDIsMTMuNDU4LDMwLDMwLDMwaDYxdjM3MWMwLDUuNTE0LTQuNDg2LDEwLTEwLDEwDQoJCQlIMTE0Yy01LjUxNCwwLTEwLTQuNDg2LTEwLTEwdi04NS42NjdjMC01LjUyMi00LjQ3OC0xMC0xMC0xMGMtNS41MjIsMC0xMCw0LjQ3OC0xMCwxMFY0ODJjMCwxNi41NDIsMTMuNDU4LDMwLDMwLDMwaDM2OA0KCQkJYzE2LjU0MiwwLDMwLTEzLjQ1OCwzMC0zMFYxMDAuOTg3QzUxMiw5OC4zMzUsNTEwLjk0Niw5NS43OTEsNTA5LjA3LDkzLjkxNnogTTEyMi4wOSw2MC40NDN2MTAxLjY0OEgyMC40NDINCgkJCUMyNS4yMjMsMTA4LjI0Myw2OC4yNDMsNjUuMjI0LDEyMi4wOSw2MC40NDN6IE00MzEsOTFjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBWMzQuMTRMNDc3Ljg2OCw5MUg0MzF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xMDEuMDY5LDM1Mi45M0M5OS4yMSwzNTEuMDY5LDk2LjYzLDM1MCw5NCwzNTBzLTUuMjEsMS4wNjktNy4wNywyLjkzQzg1LjA3LDM1NC43OSw4NCwzNTcuMzcsODQsMzYwDQoJCQlzMS4wNjksNS4yMSwyLjkzLDcuMDY5Qzg4Ljc5LDM2OC45Myw5MS4zNywzNzAsOTQsMzcwczUuMjEtMS4wNyw3LjA2OS0yLjkzMUMxMDIuOTMsMzY1LjIxLDEwNCwzNjIuNjMsMTA0LDM2MA0KCQkJUzEwMi45MywzNTQuNzksMTAxLjA2OSwzNTIuOTN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNjcuOTA5LDc1LjgxOWMtNS41MjIsMC0xMCw0LjQ3OC0xMCwxMHYxMTIuMDlINDUuODE5Yy01LjUyMiwwLTEwLDQuNDc4LTEwLDEwQzM1LjgxOSwyODAuNzQ0LDk1LjA3NCwzNDAsMTY3LjkwOSwzNDANCgkJCVMzMDAsMjgwLjc0NCwzMDAsMjA3LjkwOVMyNDAuNzQ0LDc1LjgxOSwxNjcuOTA5LDc1LjgxOXogTTE3Ny45MDksOTYuMjYyYzIzLjQxLDIuMDc4LDQ0Ljc3MSwxMS4zODgsNjEuODM2LDI1LjY3bC02MS44MzYsNjEuODM1DQoJCQlWOTYuMjYyeiBNMTY3LjkwOSwzMjBjLTU4LjQzNywwLTEwNi41NzQtNDQuOTQ5LTExMS42NDctMTAyLjA5MWgxMTEuNjQ3YzIuNzYsMCw1LjI1OC0xLjExOCw3LjA2OC0yLjkyNg0KCQkJYzAuMDAxLTAuMDAxLDAuMDAyLTAuMDAxLDAuMDA0LTAuMDAzbDc4LjkwOS03OC45MDhjMTYuMjkxLDE5LjQ2NywyNi4xMSw0NC41MjcsMjYuMTEsNzEuODM3DQoJCQlDMjgwLDI2OS43MTYsMjI5LjcxNiwzMjAsMTY3LjkwOSwzMjB6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzguMDczLDMxNS42MDVjLTE2LjU0MiwwLTMwLDEzLjQ1OC0zMCwzMGMwLDQuMTQ2LDAuODQ2LDguMDk3LDIuMzczLDExLjY5MmwtNTcuNjEzLDU3LjYxMw0KCQkJYy0zLjk1OS0xLjkyOS04LjQwMy0zLjAxNC0xMy4wOTUtMy4wMTRjLTQuNTgxLDAtOC45MjMsMS4wMzYtMTIuODEsMi44NzlsLTM4LjI1OC0zOC4yNThjMS4zMjYtMy4zODQsMi4wNjItNy4wNjMsMi4wNjItMTAuOTEzDQoJCQljMC0xNi41NDItMTMuNDU4LTMwLTMwLTMwcy0zMCwxMy40NTgtMzAsMzBjMCw0LjQ4MiwwLjk5NSw4LjczNCwyLjc2NSwxMi41NTdsLTM2LjY5NSwzNi42OTUNCgkJCWMtMy45MDktMS44Ny04LjI4My0yLjkxOS0xMi44OTctMi45MTljLTE2LjU0MiwwLTMwLDEzLjQ1OC0zMCwzMHMxMy40NTgsMzAsMzAsMzBzMzAtMTMuNDU4LDMwLTMwDQoJCQljMC00LjYzNy0xLjA1OC05LjAzMS0yLjk0NC0xMi45NTRsMzYuNDktMzYuNDljNC4wMDcsMS45ODgsOC41MTUsMy4xMTEsMTMuMjgzLDMuMTExYzUuMzg1LDAsMTAuNDM4LTEuNDMzLDE0LjgxMS0zLjkyNw0KCQkJbDM3LjE3OSwzNy4xNzljLTEuOTEyLDMuOTQ1LTIuOTg2LDguMzY5LTIuOTg2LDEzLjA0YzAsMTYuNTQyLDEzLjQ1OCwzMCwzMCwzMHMzMC0xMy40NTgsMzAtMzBjMC00LjU1OC0xLjAyNi04Ljg4LTIuODUzLTEyLjc1Mg0KCQkJbDU3LjA3NS01Ny4wNzVjNC4yMDksMi4yNTQsOS4wMTQsMy41MzYsMTQuMTEzLDMuNTM2YzE2LjU0MiwwLDMwLTEzLjQ1OCwzMC0zMFM0NTQuNjE1LDMxNS42MDUsNDM4LjA3MywzMTUuNjA1eg0KCQkJIE0xODMuOTA0LDQ1MS45MzhjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBjMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGMyLjY4NSwwLDUuMTIsMS4wNjksNi45MTgsMi43OTcNCgkJCWMwLjA0LDAuMDQyLDAuMDc1LDAuMDg3LDAuMTE2LDAuMTI4YzAuMDQ4LDAuMDQ4LDAuMSwwLjA4OCwwLjE0OSwwLjEzNGMxLjc0LDEuOCwyLjgxNyw0LjI0NiwyLjgxNyw2Ljk0MQ0KCQkJQzE5My45MDQsNDQ3LjQ1MSwxODkuNDE4LDQ1MS45MzgsMTgzLjkwNCw0NTEuOTM4eiBNMjYwLjczMiwzNzUuNjA0Yy01LjUxNCwwLTEwLTQuNDg2LTEwLTEwYzAtNS41MTQsNC40ODYtMTAsMTAtMTANCgkJCWM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwQzI3MC43MzIsMzcxLjExOCwyNjYuMjQ2LDM3NS42MDQsMjYwLjczMiwzNzUuNjA0eiBNMzM5LjczNiw0NTEuODk2Yy01LjUxNCwwLTEwLTQuNDg2LTEwLTEwDQoJCQljMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwQzM0OS43MzYsNDQ3LjQxLDM0NS4yNSw0NTEuODk2LDMzOS43MzYsNDUxLjg5NnogTTQzOC4wNzEsMzU1LjYwNA0KCQkJYy01LjUxNCwwLTEwLTQuNDg2LTEwLTEwYzAtNS41MTQsNC40ODctMTAsMTAtMTBjNS41MTQsMCwxMCw0LjQ4NiwxMCwxMEM0NDguMDcxLDM1MS4xMTgsNDQzLjU4NSwzNTUuNjA0LDQzOC4wNzEsMzU1LjYwNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM4OC4wOSwyMzVoLTUyLjc3OWMtNS41MjIsMC0xMCw0LjQ3OC0xMCwxMGMwLDUuNTIyLDQuNDc3LDEwLDEwLDEwaDUyLjc3OWM1LjUyMiwwLDEwLTQuNDc4LDEwLTEwDQoJCQlDMzk4LjA5LDIzOS40NzgsMzkzLjYxMiwyMzUsMzg4LjA5LDIzNXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ0MC42ODksMjM3LjkzYy0xLjg1OS0xLjg2LTQuNDM5LTIuOTMtNy4wNjktMi45M3MtNS4yMSwxLjA2OS03LjA3LDIuOTNjLTEuODYsMS44Ni0yLjkzLDQuNDQtMi45Myw3LjA3DQoJCQlzMS4wNjksNS4yMSwyLjkzLDcuMDY5YzEuODYsMS44Niw0LjQzLDIuOTMxLDcuMDcsMi45MzFjMi42MywwLDUuMjEtMS4wNyw3LjA2OS0yLjkzMWMxLjg2LTEuODU5LDIuOTMxLTQuNDM5LDIuOTMxLTcuMDY5DQoJCQlTNDQyLjU1LDIzOS43OSw0NDAuNjg5LDIzNy45M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ1Ny40NjUsMTM5SDMzNS4zMTFjLTUuNTIyLDAtMTAsNC40NzgtMTAsMTBjMCw1LjUyMiw0LjQ3NywxMCwxMCwxMGgxMjIuMTU0YzUuNTIyLDAsMTAtNC40NzgsMTAtMTANCgkJCUM0NjcuNDY1LDE0My40NzgsNDYyLjk4NywxMzksNDU3LjQ2NSwxMzl6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NTcuNDY1LDE4N0gzMzUuMzExYy01LjUyMiwwLTEwLDQuNDc4LTEwLDEwYzAsNS41MjIsNC40NzcsMTAsMTAsMTBoMTIyLjE1NGM1LjUyMiwwLDEwLTQuNDc4LDEwLTEwDQoJCQlDNDY3LjQ2NSwxOTEuNDc4LDQ2Mi45ODcsMTg3LDQ1Ny40NjUsMTg3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
    }
  },
  participants: [],
  connectionTypes: [
    {
      id: "ct1",
      color: "#7D7D7D",
      textColor: "white",
      legend: true,
      legendOrder: 1,
      legendLabel: "Beschreibung der Verbindung",
      default: true,
      labelSize: 1.0
    },
  ],
  boxTypes: [
    {
      id: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
      color: "#ffffff",
      textColor: "#ffffff",
      colorInactive: "#c8d1ff",
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

      shortInfoBackground: "#006ba2",
      shortInfoActiveBackground: "#ff00ff",
      infoIconBackground: "#006ba2",
      infoIconActiveBackground: "#ff00ff",
      policyIconBackground: "#ff00ff",
      policyIconActiveBackground: "#ff00ff"
    }
  ],
  cases: [
    {
      id: "65188745-addb-4c6d-af43-62d35921a7a5",
      label: "1. Kapitel",
      info: "",
      permissions: "",
      dataSources: [
        {
          id: "ds1",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "Eine Datenkategorie",
            "und mehr"
          ],
          shortInfo: [
            "kurze Info"
          ],
          info: "<div><p>Info zu Datenkategorie</p></div>",
          position: {
            "start": 0,
            "end": 0
          }
        },
        {
          id: "ds2",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "Eine Datenkategorie"
          ],
          shortInfo: [
            "kurze Info"
          ],
          info: "<div><p>Info zu Datenkategorie</p></div>",
          position: {
            "start": 2,
            "end": 2
          }
        },
        {
          id: "ds3",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "UND NOCH EINS"
          ],
          shortInfo: [
            "kurze Info"
          ],
          info: "<div><p>Info zu Datenkategorie</p></div>",
          position: {
            "start": 3,
            "end": 4
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
          info: "",
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
          info: "",
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
          info: "",
          position: {
            start: 2,
            end: 2
          }
        }
      ],
      actions: [
        {
          id: "s1-a1",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "1. Prozessschritt mit Beschreibung"
          ],
          shortInfo: null,
          info: "<div><p>Eine Info zu einer Prozessschritt</p></div>",
          position: {
            start: 0,
            end: 0
          }
        },
        {
          id: "s1-a2",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "2. Prozessschritt mit Beschreibung"
          ],
          shortInfo: null,
          info: "<div><p>Eine Info zu einer Prozessschritt</p></div>",
          position: {
            start: 1,
            end: 1
          }
        }
      ],
      connections: [
        {
          id: "c1",
          typeId: "ct1",
          label: "",
          textEllipsis: true,
          source: "ds1",
          destination: "s1-a1",
          position: {
            start: 0,
            end: 0
          }
        },
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
    canvasBackground: "transparent",
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
    participantBackgroundGradient: "#ffffff",

    caseActionIdentifierChecked: "#006ba2",
    caseActionIdentifierUnchecked: "#006ba2",

    controlsLabel: "#ffffff",
    controlsBackground: "#006ba2",
    controlsBackgroundHover: "#008FD6",

    modelModeLabel: "#ff00ff",
    modelModeBackground: "#ff00ff",

    textEllipsisBackground: "#ff00ff",
    textEllipsisLabel: "#ff00ff",

    overlayBackground: "#ff00ff",
    overlayLabel: "#ff00ff",

    glossarKeyword: "#ff00ff",

    tutorialBackground: '#FFFFFF',
    tutorialLabel: '#FFFFFF'
  },
  dimensions: {
    caseLabelSize: 1.2,
    headerLabelSize: 1.2,
    tutorialLabelSize: 10
  },
  tutorial: {
    id: "970c03d7-1194-46f8-be81-7ec56a74c20d",
    steps: [
      {
        id: "520c03d7-1194-46f8-be81-7ec56a74c20d",
        isActive: false,
        title: "a",
        text: "a",
        itemId: "5-dp1"
      }
    ]
  }
};