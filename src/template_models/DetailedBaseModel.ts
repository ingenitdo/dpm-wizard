import { Model } from "../entities/Model";

export const detailedBaseModel: Model = {
  version: "1.1.0",
  masterData: {
    title: "Daten Prozess", author: "", version: "1.0", description: "", viewerMode: "both",
    controlOptions: {
      showTitle: true,
      showSubTitle: true,
      showModeToggle: false,
      showLegend: true,
      showFullscreen: true,
      showZoom: true,
      showTutorial: true
    }
  },
  language: "de",
  title: "Ein exemplarischer Titel",
  subtitle: "Dies ist ein Untertitel",
  header: {
    sourceLabel: "Datenkategorie",
    sourceIcon: {
      id: "database_solid",
      dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzcxLjAwNSAzNzEuMDA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNzEuMDA1IDM3MS4wMDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjgxLjAxNiwxNC4yNDFDMjU1LjYyNyw1LjA1OCwyMjEuNzAzLDAsMTg1LjUwMywwUzExNS4zNzksNS4wNjEsODkuOTksMTQuMjQ4Yy0yMi4xNzQsOC4wMjYtMzUuNDEyLDE4LjUtMzUuNDEyLDI4LjAyOQ0KCQkJYzAsOS41MjksMTMuMjM4LDIwLjAwMSwzNS40MTMsMjguMDIzaDBjMjUuMzg4LDkuMTg4LDU5LjMwOSwxNC4yNDksOTUuNTEyLDE0LjI0OXM3MC4xMjQtNS4wNjEsOTUuNTEzLTE0LjI0OQ0KCQkJYzIyLjE3NC04LjAyNiwzNS40MTItMTguNSwzNS40MTItMjguMDNDMzE2LjQyOCwzMi43NCwzMDMuMTksMjIuMjcsMjgxLjAxNiwxNC4yNDF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xODUuNTAzLDI5MS4wNzhjLTUxLjMxNCwwLTEwNS0xMC42MDItMTMxLTMwLjY4NHY2OC4zMzJjMCw5LjUzMiwxMy4yODMsMjAuMDEyLDM1LjQ1NCwyOC4wMzUNCgkJCWMyNS4zODIsOS4xODQsNTkuMzUxLDE0LjI0Miw5NS41NjUsMTQuMjQyYzIxLjMwNSwwLjA3OSw0Mi41NzEtMS44MjUsNjMuNTIzLTUuNjg2YzM5LjY5Ny03LjYxNyw2Ny40NTgtMjIuNjYzLDY3LjQ1OC0zNi41OTENCgkJCXYtNjguMzMyQzI5MC41MDMsMjgwLjQ3NiwyMzYuODE3LDI5MS4wNzgsMTg1LjUwMywyOTEuMDc4eiBNMjA4LjUwMywzMzcuNWgtNDZjLTQuNDE4LDAtOC0zLjU4Mi04LThzMy41ODItOCw4LThoNDYNCgkJCWM0LjQxOCwwLDgsMy41ODIsOCw4UzIxMi45MjEsMzM3LjUsMjA4LjUwMywzMzcuNXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE4NS41MDMsMTk1LjgxNGMtNTEuMzE0LDAtMTA1LTEwLjYwMS0xMzEtMzAuNjgzVjIzMi44YzAsOS41MzIsMTMuMjgzLDIwLjAxMiwzNS40NTQsMjguMDM1DQoJCQljMjUuMzgyLDkuMTg1LDU5LjM1MSwxNC4yNDIsOTUuNTY1LDE0LjI0MnM3MC4xNTQtNS4wNTcsOTUuNTM2LTE0LjI0MmMyMi4xNzEtOC4wMjIsMzUuNDQ1LTE4LjUwMiwzNS40NDUtMjguMDM1di02Ny42Nw0KCQkJQzI5MC41MDMsMTg1LjIxMiwyMzYuODE3LDE5NS44MTQsMTg1LjUwMywxOTUuODE0eiBNMjA4LjUwMywyNDAuNWgtNDZjLTQuNDE4LDAtOC0zLjU4Mi04LThzMy41ODItOCw4LThoNDZjNC40MTgsMCw4LDMuNTgyLDgsOA0KCQkJUzIxMi45MjEsMjQwLjUsMjA4LjUwMywyNDAuNXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE4NS41MDMsMTAwLjU1M2MtNTEuMzE0LDAtMTA1LTEwLjYwMy0xMzEtMzAuNjg1djY3LjY3YzAsOS41MzIsMTMuMjgzLDIwLjAxMywzNS40NTQsMjguMDM1DQoJCQljMjUuMzgyLDkuMTg1LDU5LjM1MSwxNC4yNDIsOTUuNTY1LDE0LjI0MnM3MC4xNTQtNS4wNTcsOTUuNTM2LTE0LjI0MmMyMi4xNzEtOC4wMjIsMzUuNDQ1LTE4LjUwMywzNS40NDUtMjguMDM1di02Ny42Nw0KCQkJQzI5MC41MDMsODkuOTUsMjM2LjgxNywxMDAuNTUzLDE4NS41MDMsMTAwLjU1M3ogTTIwOC41MDMsMTQ2LjVoLTQ2Yy00LjQxOCwwLTgtMy41ODItOC04czMuNTgyLTgsOC04aDQ2YzQuNDE4LDAsOCwzLjU4Miw4LDgNCgkJCVMyMTIuOTIxLDE0Ni41LDIwOC41MDMsMTQ2LjV6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
    },
    purposeLabel: "Verwendungszweck",
    purposeIcon: {
      id: "c567ca64-3a9a-4045-b264-19facc9f6408",
      dataUri: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiAgdmlld0JveD0iMCAwIDk2IDk2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iSWNvbnNfQnVsbHNleWUiIG92ZXJmbG93PSJoaWRkZW4iPjxwYXRoIGQ9Ik03OC41IDE3LjUgNzcuNSA4LjUgNjYuNSAxOS41IDY3LjEgMjQuNyA1MS4xIDQwLjdDNDkuNyA0MCA0OC4xIDM5LjUgNDYuNCAzOS41IDQwLjkgMzkuNSAzNi40IDQ0IDM2LjQgNDkuNSAzNi40IDU1IDQwLjkgNTkuNSA0Ni40IDU5LjUgNTEuOSA1OS41IDU2LjQgNTUgNTYuNCA0OS41IDU2LjQgNDcuOCA1NiA0Ni4zIDU1LjMgNDQuOUw3MS4zIDI4LjkgNzYuNSAyOS41IDg3LjUgMTguNSA3OC41IDE3LjVaIi8+PHBhdGggZD0iTTc5LjMgMzIuMyA3OCAzMy43IDc2LjEgMzMuNSA3NCAzMy4yQzc2LjggMzggNzguNSA0My41IDc4LjUgNDkuNSA3OC41IDY3LjEgNjQuMSA4MS41IDQ2LjUgODEuNSAyOC45IDgxLjUgMTQuNSA2Ny4xIDE0LjUgNDkuNSAxNC41IDMxLjkgMjguOSAxNy41IDQ2LjUgMTcuNSA1Mi40IDE3LjUgNTggMTkuMSA2Mi44IDIyTDYyLjYgMjAgNjIuMyAxOCA2My43IDE2LjYgNjQuNCAxNS45QzU5IDEzLjEgNTMgMTEuNSA0Ni41IDExLjUgMjUuNSAxMS41IDguNSAyOC41IDguNSA0OS41IDguNSA3MC41IDI1LjUgODcuNSA0Ni41IDg3LjUgNjcuNSA4Ny41IDg0LjUgNzAuNSA4NC41IDQ5LjUgODQuNSA0MyA4Mi45IDM3IDgwIDMxLjdMNzkuMyAzMi4zWiIvPjxwYXRoIGQ9Ik02My4yIDQyLjdDNjQuMSA0NC44IDY0LjUgNDcuMSA2NC41IDQ5LjUgNjQuNSA1OS40IDU2LjQgNjcuNSA0Ni41IDY3LjUgMzYuNiA2Ny41IDI4LjUgNTkuNCAyOC41IDQ5LjUgMjguNSAzOS42IDM2LjYgMzEuNSA0Ni41IDMxLjUgNDguOSAzMS41IDUxLjIgMzIgNTMuMyAzMi44TDU3LjggMjguM0M1NC40IDI2LjUgNTAuNiAyNS41IDQ2LjUgMjUuNSAzMy4zIDI1LjUgMjIuNSAzNi4zIDIyLjUgNDkuNSAyMi41IDYyLjcgMzMuMyA3My41IDQ2LjUgNzMuNSA1OS43IDczLjUgNzAuNSA2Mi43IDcwLjUgNDkuNSA3MC41IDQ1LjQgNjkuNSA0MS42IDY3LjcgMzguMkw2My4yIDQyLjdaIi8+PC9zdmc+"
    }
  },
  participants: [{
    id: "1",
    label: ["Nutzer:in"],
    labelSize: 1.3,
    hasActionLabel: "Die Akteure in der Überschrift dieser Spalte verarbeiten Daten",
    hasNoActionLabel: "Die Akteure in der Überschrift dieser Spalte verarbeiten keine Daten",
    backgroundColor: "#ffffff",
    labelColor: "#48AAE6",
    iconColor: "#006ba2",
    borderColor: "#48AAE6",
    borderSize: 2,
    icon: {
      id: "man_user",
      dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM1MCAzNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1MCAzNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xNzUsMTcxLjE3M2MzOC45MTQsMCw3MC40NjMtMzguMzE4LDcwLjQ2My04NS41ODZDMjQ1LjQ2MywzOC4zMTgsMjM1LjEwNSwwLDE3NSwwcy03MC40NjUsMzguMzE4LTcwLjQ2NSw4NS41ODcNCgkJQzEwNC41MzUsMTMyLjg1NSwxMzYuMDg0LDE3MS4xNzMsMTc1LDE3MS4xNzN6Ii8+DQoJPHBhdGggZD0iTTQxLjkwOSwzMDEuODUzQzQxLjg5NywyOTguOTcxLDQxLjg4NSwzMDEuMDQxLDQxLjkwOSwzMDEuODUzTDQxLjkwOSwzMDEuODUzeiIvPg0KCTxwYXRoIGQ9Ik0zMDguMDg1LDMwNC4xMDRDMzA4LjEyMywzMDMuMzE1LDMwOC4wOTgsMjk4LjYzLDMwOC4wODUsMzA0LjEwNEwzMDguMDg1LDMwNC4xMDR6Ii8+DQoJPHBhdGggZD0iTTMwNy45MzUsMjk4LjM5N2MtMS4zMDUtODIuMzQyLTEyLjA1OS0xMDUuODA1LTk0LjM1Mi0xMjAuNjU3YzAsMC0xMS41ODQsMTQuNzYxLTM4LjU4NCwxNC43NjENCgkJcy0zOC41ODYtMTQuNzYxLTM4LjU4Ni0xNC43NjFjLTgxLjM5NSwxNC42OS05Mi44MDMsMzcuODA1LTk0LjMwMywxMTcuOTgyYy0wLjEyMyw2LjU0Ny0wLjE4LDYuODkxLTAuMjAyLDYuMTMxDQoJCWMwLjAwNSwxLjQyNCwwLjAxMSw0LjA1OCwwLjAxMSw4LjY1MWMwLDAsMTkuNTkyLDM5LjQ5NiwxMzMuMDgsMzkuNDk2YzExMy40ODYsMCwxMzMuMDgtMzkuNDk2LDEzMy4wOC0zOS40OTYNCgkJYzAtMi45NTEsMC4wMDItNS4wMDMsMC4wMDUtNi4zOTlDMzA4LjA2MiwzMDQuNTc1LDMwOC4wMTgsMzAzLjY2NCwzMDcuOTM1LDI5OC4zOTd6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
    },
    itemSymbols: []
  }, {
    id: "2",
    label: ["weitere Prozessbeteiligte"],
    labelSize: 1.3,
    hasActionLabel: "Die Akteure in der Überschrift dieser Spalte verarbeiten Daten",
    hasNoActionLabel: "Die Akteure in der Überschrift dieser Spalte verarbeiten keine Daten",
    backgroundColor: "#ffffff",
    labelColor: "#48AAE6",
    iconColor: "#006ba2",
    borderColor: "#48AAE6",
    borderSize: 2,
    icon: {
      id: "users_group",
      dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUzNi4wNzFweCIgaGVpZ2h0PSI1MzYuMDdweCIgdmlld0JveD0iMCAwIDUzNi4wNzEgNTM2LjA3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MzYuMDcxIDUzNi4wNzsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTE0Ny4xMjgsOTEuMDc2YzAtMzcuOTUsMzAuNzY2LTY4LjcxNiw2OC43MjEtNjguNzE2YzM3Ljk1LDAsNjguNzE5LDMwLjc2Niw2OC43MTksNjguNzE2cy0zMC43NjksNjguNzE1LTY4LjcxOSw2OC43MTUNCgkJQzE3Ny44OTQsMTU5Ljc5MiwxNDcuMTI4LDEyOS4wMjYsMTQ3LjEyOCw5MS4wNzZ6IE0yNDguODczLDIwNi42MDdjMC42ODktMTQuOTYzLDUuODQtMjguODEyLDE0LjEyNy00MC4yNjENCgkJYy01LjgxNi0xLjIxOC0xMS44MjctMS44NjUtMTcuOTk1LTEuODY1aC01OC4zMDRjLTYuMTUsMC0xMi4xNTMsMC42NDItMTcuOTM5LDEuODQ1YzguODE5LDEyLjIzMiwxNC4wOTQsMjcuMTcxLDE0LjE4LDQzLjM0Mw0KCQljMTAuNzItNS44OTYsMjMuMDItOS4yNTMsMzYuMDg1LTkuMjUzQzIyOS42MjUsMjAwLjQxNiwyMzkuNzE0LDIwMi42MjQsMjQ4Ljg3MywyMDYuNjA3eiBNMjYwLjUwNSwyMTIuNzc1DQoJCWMxOS45NiwxMi41MTcsMzMuOTU3LDMzLjY4OCwzNi41MTcsNTguMjc0YzguMTMzLDMuODAxLDE3LjE3MSw1Ljk5NCwyNi43NDYsNS45OTRjMzQuOTY4LDAsNjMuMzExLTI4LjM0Niw2My4zMTEtNjMuMzEzDQoJCWMwLTM0Ljk3MS0yOC4zNDMtNjMuMzExLTYzLjMxMS02My4zMTFDMjg5LjEyLDE1MC40MiwyNjEuMDMxLDE3OC4yNTcsMjYwLjUwNSwyMTIuNzc1eiBNMjE5LjAyNiwzNDIuNDExDQoJCWMzNC45NjIsMCw2My4zMDctMjguMzU0LDYzLjMwNy02My4zMTFjMC0zNC45NjItMjguMzQ1LTYzLjMxMS02My4zMDctNjMuMzExYy0zNC45NjUsMC02My4zMjIsMjguMzQ4LTYzLjMyMiw2My4zMTENCgkJQzE1NS43MDUsMzE0LjA1NywxODQuMDYxLDM0Mi40MTEsMjE5LjAyNiwzNDIuNDExeiBNMjQ1Ljg4MiwzNDYuNzJoLTUzLjcxN2MtNDQuNjk3LDAtODEuMDY5LDM2LjM2OS04MS4wNjksODEuMDcydjY1LjcwMw0KCQlsMC4xNzEsMS4wMjlsNC41MjIsMS40MDZjNDIuNjU4LDEzLjMyMyw3OS43MTgsMTcuNzc5LDExMC4yMjQsMTcuNzc5YzU5LjU3MSwwLDk0LjExNC0xNi45ODcsOTYuMjQyLTE4LjA3NGw0LjIzMS0yLjE0MWgwLjQ0OQ0KCQl2LTY1LjcwM0MzMjYuOTM2LDM4My4wODksMjkwLjU4NSwzNDYuNzIsMjQ1Ljg4MiwzNDYuNzJ6IE0zNTAuNjM4LDI4MS4zNjRoLTUzLjMxNGMtMC41NzksMjEuMzMyLTkuNjgzLDQwLjU0Mi0yNC4wODEsNTQuMzUNCgkJYzM5LjczMiwxMS44MTUsNjguODAyLDQ4LjY1Nyw2OC44MDIsOTIuMTc4djIwLjI0NWM1Mi42MjktMS45MzgsODIuOTYzLTE2Ljg0Niw4NC45NjEtMTcuODUxbDQuMjMyLTIuMTUyaDAuNDQ5di02NS43MTUNCgkJQzQzMS42OTMsMzE3LjcyOCwzOTUuMzI0LDI4MS4zNjQsMzUwLjYzOCwyODEuMzY0eiBNMzY0Ljg4OSwxNDkuMDY5YzE5Ljk2MSwxMi41MTksMzMuOTU3LDMzLjY5MSwzNi41MTEsNTguMjc3DQoJCWM4LjEzNCwzLjgwMSwxNy4xNzEsNS45OSwyNi43NDYsNS45OWMzNC45NzUsMCw2My4zMTYtMjguMzQyLDYzLjMxNi02My4zMDRjMC0zNC45NzItMjguMzQyLTYzLjMxMS02My4zMTYtNjMuMzExDQoJCUMzOTMuNTAzLDg2LjcxNywzNjUuNDE2LDExNC41NiwzNjQuODg5LDE0OS4wNjl6IE00NTUuMDEsMjE3LjY1OGgtNTMuMzAzYy0wLjU3OSwyMS4zMzItOS42ODIsNDAuNTQyLTI0LjA4LDU0LjM0OQ0KCQljMzkuNzMxLDExLjgxMSw2OC44MDEsNDguNjU4LDY4LjgwMSw5Mi4xNzl2MjAuMjQ1YzUyLjYyNC0xLjkzNCw4Mi45NjQtMTYuODQsODQuOTYyLTE3Ljg1Mmw0LjIyNi0yLjE0NWgwLjQ1NXYtNjUuNzIzDQoJCUM1MzYuMDc3LDI1NC4wMjQsNDk5LjcwOCwyMTcuNjU4LDQ1NS4wMSwyMTcuNjU4eiBNMTA3LjkzNywyNzcuMDQ0YzEyLjM4NiwwLDIzLjkwMy0zLjYxOCwzMy42Ny05Ljc3Nw0KCQljMy4xMDYtMjAuMjQxLDEzLjk1OC0zNy45MzIsMjkuNDU0LTQ5Ljk3NWMwLjA2NS0xLjE4OCwwLjE3NC0yLjM2MSwwLjE3NC0zLjU2MWMwLTM0Ljk3MS0yOC4zNTEtNjMuMzExLTYzLjI5OC02My4zMTENCgkJYy0zNC45NzcsMC02My4zMTYsMjguMzM5LTYzLjMxNiw2My4zMTFDNDQuNjIxLDI0OC43MDQsNzIuOTU5LDI3Ny4wNDQsMTA3LjkzNywyNzcuMDQ0eiBNMTY0Ljc5NSwzMzUuNzE0DQoJCWMtMTQuMzMxLTEzLjc0Mi0yMy40MDQtMzIuODQ3LTI0LjA3Mi01NC4wNTVjLTEuOTcxLTAuMTQ3LTMuOTI4LTAuMjk1LTUuOTQzLTAuMjk1SDgxLjA2OUMzNi4zNjYsMjgxLjM2NCwwLDMxNy43MjgsMCwzNjIuNDI1DQoJCXY2NS43MDlsMC4xNjYsMS4wMjNsNC41MjgsMS40MTJjMzQuMjE0LDEwLjY5OSw2NC43NjEsMTUuNjE2LDkxLjI5MiwxNy4xNTN2LTE5LjgzNw0KCQlDOTUuOTkxLDM4NC4zNzEsMTI1LjA1NCwzNDcuNTIzLDE2NC43OTUsMzM1LjcxNHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
    },
    itemSymbols: []
  }],
  connectionTypes: [{
    id: "ct1",
    title: "Default",
    color: "#7D7D7D",
    textColor: "black",
    legend: true,
    legendOrder: 1,
    legendLabel: "Beschreibung der Verbindung",
    default: true,
    labelSize: 1
  }, {
    id: "ct2",
    title: "Anonym",
    color: "#7D7D7D",
    textColor: "black",
    legend: true,
    legendOrder: 1,
    legendLabel: "Beschreibung der Verbindung",
    default: true,
    strokeDasharray: "10, 10",
    labelSize: 1
  }],
  boxTypes: [{
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
    labelSize: 1.3,
    shortInfoLabelSize: 1,
    shortInfoBackground: "#FFA335",
    shortInfoActiveBackground: "#FF9134",
    infoIconBackground: "#FEE970",
    infoIconActiveBackground: "#FEE970",
    policyIconBackground: "#FEE970",
    policyIconActiveBackground: "#FEE970"
  }, {
    id: "55c28565-7967-4131-867b-21c77e61f178",
    title: "Neue Box",
    color: "#005279",
    textColor: "#ffffff",
    colorInactive: "#006aa2",
    textColorInactive: "#ffffff",
    borderColor: "#ffffff",
    borderWidth: 0,
    borderStrokeDasharray: "#ffffff",
    legend: true,
    legendOrder: 0,
    legendLabel: "#ffffff",
    sourceDefault: true,
    purposeDefault: true,
    actionDefault: true,
    labelSize: 1.3,
    shortInfoLabelSize: 1,
    shortInfoBackground: "#ffa335",
    shortInfoActiveBackground: "#fb8a00",
    infoIconBackground: "#666666",
    infoIconActiveBackground: "#666666",
    policyIconBackground: "#666666",
    policyIconActiveBackground: "#666666"
  }],
  cases: [{
    id: "77188745-addb-4c6d-af43-62d35921a7a5",
    label: "1. Kapitel",
    info: "",
    permissions: "",
    dataSources: [{
      id: "5-dp1",
      typeId: "55c28565-7967-4131-867b-21c77e61f178",
      label: ["Datenfeld oder Datenkategorie"],
      shortInfo: null,
      info: "<div><p>Info zu Datenkategorie</p></div>",
      position: { "start": 0, "end": 0 },
      itemSymbols: []
    }],
    dataPurposes: [{
      id: "1-dp1",
      typeId: "55c28565-7967-4131-867b-21c77e61f178",
      label: ["Verwendungszweck"],
      shortInfo: null,
      position: { "start": 0, "end": 0 },
      itemSymbols: []
    }],
    actions: [{
      id: "1-a1",
      typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
      label: ["1. Prozessschritt"],
      info: "<div><p>Prozessschritt Info</p></div>",
      erasurePolicy: "Dauerhaft gespeichert",
      storagePolicy: "Eigenes Smartphone",
      participantID: "1",
      position: { "start": 0, "end": 0 },
      itemSymbols: [{
        customSymbolId: "b4a9c476-2d96-4f25-9354-a74b0901efde",
        title: "Muster Infotext Prozessschritt",
        text: "<p><em>Beispieltext</em></p>"
      }],
      shortInfo: null
    }, {
      id: "1-a2",
      typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
      label: ["2. Prozessschritt"],
      info: "<div><p>Prozessschritt Info</p></div>",
      shortInfo: ["kurze Info"],
      erasurePolicy: "14 Tage",
      storagePolicy: "Server",
      participantID: "2",
      position: { start: 0, end: 0 }
    }],
    connections: [{
      id: "54307189-ec1a-4f6b-99df-7c57d5e672e9",
      typeId: "ct1",
      label: "",
      textEllipsis: true,
      source: "1-a1",
      destination: "1-a2",
      position: { start: 0, end: 0 }
    }],
    isOpen: true,
    itemSymbols: [{
      customSymbolId: "b4a9c476-2d96-4f25-9354-a74b0901efde",
      title: "Muster Kapitelinformation",
      text: "<p><em>Beispieltext</em></p>"
    }]
  }],
  glossar: [{
    id: "g1",
    keywords: ["smartphone", "handy"],
    title: "Smartphone",
    content: "<p>Ist ein mobiles Telefon</p>"
  }],
  isDialogFullsize: true,
  isDetailedIcons: false,
  fixedLabels: { headerSource: "Datenkategorie", headerPurpose: "Verwendungszweck" },
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
    caseHeaderBackground: "#b11044",
    caseHeaderBackgroundGradient: null,
    caseBodyBackground: "#eeeeee",
    caseBorder: "#b11044",
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
    modelModeLabel: "#ffffff",
    modelModeBackground: "#48AAE6",
    textEllipsisBackground: "#48AAE6",
    textEllipsisLabel: "#ffffff",
    overlayBackground: "#48aae6",
    overlayLabel: "#ffffff",
    glossarKeyword: "#48AAE6",
    tutorialBackground: "#FFB136",
    tutorialLabel: "#000000"
  },
  dimensions: { "caseLabelSize": 1.2, "headerLabelSize": 1.5, "tutorialLabelSize": 10 },
  predefinedSymbols: [{
    id: "b4a9c476-2d96-4f25-9354-a74b0901efde",
    title: "Info",
    icon: {
      id: "info",
      dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjU0My4wNTlweCIgaGVpZ2h0PSI1NDMuMDU5cHgiIHZpZXdCb3g9IjAgMCA1NDMuMDU5IDU0My4wNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU0My4wNTkgNTQzLjA1OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNDYuNDM4LDQ2OC4xMzdoLTE4LjcyN1YxNzEuMDZjMC01LjA2Mi0xLjg1NS05LjQ1Ni01LjU1Ny0xMy4xN2MtMy43MDktMy43MDMtOC4wOTgtNS41NTctMTMuMTY0LTUuNTU3SDE5Ni42Mg0KCQkJYy01LjA3MywwLTkuNDYxLDEuODU0LTEzLjE3LDUuNTU3Yy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwMy01LjU2MywxMy4xN3YzNy40NTRjMCw1LjA3NCwxLjg1NCw5LjQ2Miw1LjU2MywxMy4xNw0KCQkJYzMuNzAzLDMuNzE1LDguMDkxLDUuNTY5LDEzLjE3LDUuNTY5aDE4LjcyN3YyNDAuODgzSDE5Ni42MmMtNS4wNzMsMC05LjQ2MSwxLjg1NS0xMy4xNyw1LjU1Nw0KCQkJYy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwNC01LjU2MywxMy4xN3YzNy40NTVjMCw1LjA3NCwxLjg1NCw5LjQ2MSw1LjU2MywxMy4xN2MzLjcwMywzLjcxNSw4LjA5MSw1LjU3LDEzLjE3LDUuNTdoMTQ5LjgxNw0KCQkJYzUuMDc0LDAsOS40NjEtMS44NTUsMTMuMTctNS41N2MzLjcwMy0zLjcwMSw1LjU2NC04LjA5LDUuNTY0LTEzLjE3di0zNy40NTVjMC01LjA2MS0xLjg1NS05LjQ1NS01LjU2NC0xMy4xNw0KCQkJQzM1NS44OTgsNDY5Ljk4NCwzNTEuNTA2LDQ2OC4xMzcsMzQ2LjQzOCw0NjguMTM3eiIvPg0KCQk8Y2lyY2xlIGN4PSIyNjcuNjczIiBjeT0iNjIuOTIiIHI9IjYyLjkyIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
    },
    position: 0,
    isDialog: true,
    legend: true,
    legendLabel: "Info"
  }, {
    id: "ce976938-6cff-423f-980c-c7368239e7b9",
    title: "Dauer der Speicherung",
    icon: {
      id: "clock",
      dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNDcuMjE2LDMwMS4yMTFsLTcxLjM4Ny01My41NFYxMzguNjA5YzAtMTAuOTY2LTguODY0LTE5LjgzLTE5LjgzLTE5LjgzYy0xMC45NjYsMC0xOS44Myw4Ljg2NC0xOS44MywxOS44M3YxMTguOTc4DQoJCQljMCw2LjI0NiwyLjkzNSwxMi4xMzYsNy45MzIsMTUuODY0bDc5LjMxOCw1OS40ODljMy41NjksMi42NzcsNy43MzQsMy45NjYsMTEuODc4LDMuOTY2YzYuMDQ4LDAsMTEuOTk3LTIuNzE3LDE1Ljg4NC03Ljk1Mg0KCQkJQzM1Ny43NjYsMzIwLjIwOCwzNTUuOTgxLDMwNy43NzUsMzQ3LjIxNiwzMDEuMjExeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDBDMTE0LjgzMywwLDAsMTE0LjgzMywwLDI1NnMxMTQuODMzLDI1NiwyNTYsMjU2czI1Ni0xMTQuODMzLDI1Ni0yNTZTMzk3LjE2NywwLDI1NiwweiBNMjU2LDQ3Mi4zNDENCgkJCWMtMTE5LjI3NSwwLTIxNi4zNDEtOTcuMDY2LTIxNi4zNDEtMjE2LjM0MVMxMzYuNzI1LDM5LjY1OSwyNTYsMzkuNjU5YzExOS4yOTUsMCwyMTYuMzQxLDk3LjA2NiwyMTYuMzQxLDIxNi4zNDENCgkJCVMzNzUuMjc1LDQ3Mi4zNDEsMjU2LDQ3Mi4zNDF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
    },
    position: 3,
    isDialog: false,
    legend: true,
    legendLabel: "Dauer der Speicherung"
  }, {
    id: "270c03d7-1194-46f8-be81-7ec56a74c20d",
    title: "Ort der Speicherung",
    icon: {
      id: "database_outlined",
      dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDA3LjAwNSA0MDcuMDA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDcuMDA1IDQwNy4wMDU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzA1LjE3OCwxNS4zMkMyNzcuODc2LDUuNDM5LDI0MS43NjEsMCwyMDMuNTIyLDBTMTI5LjE0LDUuNDM5LDEwMS44MzcsMTUuMzJDNjIuNzU0LDI5LjQ2NCw1NC41MDMsNDcuNTc0LDU0LjUwMyw2MC4yNzUNCgkJCXYyODYuNDVjMCwxMi43MDcsOC4yNCwzMC44MjEsNDcuMzIsNDQuOTYyYzI3LjMsOS44NzYsNjMuNDEyLDE1LjMxNiwxMDEuNjYxLDE1LjMxNmMyMi40NTMsMC4wNzcsNDQuODY0LTEuOTM1LDY2Ljk0NS02LjAwOA0KCQkJYzUyLjEyOS0xMCw4Mi4wNzQtMjkuNzgzLDgyLjA3NC01NC4yN1Y2MC4yNzVDMzUyLjUwMyw0Ny41NzQsMzQ0LjI2MSwyOS40NjQsMzA1LjE3OCwxNS4zMnogTTEwOC42NzEsMzQuMTI1DQoJCQlDMTMzLjg0NywyNS4wMTUsMTY3LjUyNiwyMCwyMDMuNTAzLDIwYzM1Ljk3NywwLDY5LjY1Niw1LjAxOCw5NC44MzIsMTQuMTI5YzI1LjEzNyw5LjEsMzQuMDkzLDE5LjQ3MywzNC4wOTMsMjYuMTQ5DQoJCQljMCw2LjY3Ni04Ljk1NiwxNy4wNDgtMzQuMDkzLDI2LjE0NXYtMC4wMDFjLTI1LjE3Niw5LjExMi01OC44NTQsMTQuMTI5LTk0LjgzMiwxNC4xMjljLTM1Ljk3OCwwLTY5LjY1Ni01LjAxNy05NC44MzItMTQuMTI5DQoJCQljLTI1LjEzNy05LjEtMzQuMDkzLTE5LjQ3Mi0zNC4wOTMtMjYuMTQ4UzgzLjUzNCw0My4yMjMsMTA4LjY3MSwzNC4xMjV6IE0zMzIuNTAzLDM0Ni43MjVjMCw1LjQxNC01LjcsMTEuODU2LTE1LjU4MSwxNy42NzUNCgkJCWMtMTIuMDQsNy4wOTMtMjkuNDM2LDEyLjk1NS01MC4yNzIsMTYuOTUzYy0yMC44MjUsMy44MzctNDEuOTYyLDUuNzI5LTYzLjEzOCw1LjY1Yy0zNS45ODcsMC02OS43MS01LjAxNi05NC44NzktMTQuMTIzDQoJCQljLTI1LjEzLTkuMDk0LTM0LjEzLTE5LjQ3NC0zNC4xMy0yNi4xNTV2LTY0LjQwOGM4LjUyNCw1LjU3OSwxNy42OTksMTAuMDk0LDI3LjMyLDEzLjQ0Ng0KCQkJYzI3LjMsOS44NzYsNjMuNDEyLDE1LjMxNiwxMDEuNjYxLDE1LjMxNmMzOC4yNDksMCw3NC4zOTQtNS40NCwxMDEuNjktMTUuMzE2YzkuNjIzLTMuMzUyLDE4LjgwMS03Ljg2NywyNy4zMjktMTMuNDQ2VjM0Ni43MjV6DQoJCQkgTTMzMi41MDMsMjUwLjhjMCw2LjY4MS04Ljk5MywxNy4wNjEtMzQuMTI1LDI2LjE1NWMtMjUuMTY5LDkuMTA3LTU4Ljg2OSwxNC4xMjMtOTQuODU2LDE0LjEyM3MtNjkuNzE1LTUuMDE2LTk0Ljg4NC0xNC4xMjMNCgkJCWMtMjUuMTM1LTkuMDkzLTM0LjEzNS0xOS40NzMtMzQuMTM1LTI2LjE1NXYtNjMuNzQ2YzguNTI0LDUuNTc5LDE3LjY5OSwxMC4wOTQsMjcuMzIsMTMuNDQ2DQoJCQljMjcuMyw5Ljg3Niw2My40MTIsMTUuMzE1LDEwMS42NjEsMTUuMzE1YzM4LjI0OSwwLDc0LjM5NC01LjQzOSwxMDEuNjktMTUuMzE1YzkuNjIzLTMuMzUyLDE4LjgwMS03Ljg2NywyNy4zMjktMTMuNDQ2VjI1MC44eg0KCQkJIE0zMzIuNTAzLDE1NS41MzhjMCw2LjY4MS04Ljk5MywxNy4wNjItMzQuMTI1LDI2LjE1NXYtMC4wMDFjLTI1LjE2OSw5LjEwNy01OC44NjksMTQuMTIyLTk0Ljg1NiwxNC4xMjINCgkJCXMtNjkuNzE5LTUuMDE0LTk0Ljg4NC0xNC4xMjJjLTI1LjEzNS05LjA5Mi0zNC4xMzUtMTkuNDczLTM0LjEzNS0yNi4xNTRWOTEuNzgyYzguNTI2LDUuNTc5LDE3LjcwMiwxMC4wOTUsMjcuMzI0LDEzLjQ0Nw0KCQkJYzI3LjMsOS44ODEsNjMuNDE4LDE1LjMyMywxMDEuNjU3LDE1LjMyM2MzOC4yMzksMCw3NC4zODItNS40NDIsMTAxLjY4NS0xNS4zMjNjOS42MjUtMy4zNTIsMTguODA0LTcuODY4LDI3LjMzNC0xMy40NDdWMTU1LjUzOHoNCgkJCSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjI2LjUwMywxNDYuNWgtNDZjLTUuNTIzLDAtMTAsNC40NzctMTAsMTBzNC40NzcsMTAsMTAsMTBoNDZjNS41MjMsMCwxMC00LjQ3NywxMC0xMFMyMzIuMDI1LDE0Ni41LDIyNi41MDMsMTQ2LjV6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMjYuNTAzLDI0MC41aC00NmMtNS41MjMsMC0xMCw0LjQ3Ny0xMCwxMGMwLDUuNTIzLDQuNDc3LDEwLDEwLDEwaDQ2YzUuNTIzLDAsMTAtNC40NzcsMTAtMTANCgkJCUMyMzYuNTAzLDI0NC45NzcsMjMyLjAyNSwyNDAuNSwyMjYuNTAzLDI0MC41eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjI2LjUwMywzMzcuNWgtNDZjLTUuNTIzLDAtMTAsNC40NzctMTAsMTBjMCw1LjUyMyw0LjQ3NywxMCwxMCwxMGg0NmM1LjUyMywwLDEwLTQuNDc3LDEwLTEwDQoJCQlDMjM2LjUwMywzNDEuOTc3LDIzMi4wMjUsMzM3LjUsMjI2LjUwMywzMzcuNXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
    },
    position: 3,
    isDialog: false,
    legend: true,
    legendLabel: "Ort der Speicherung"
  }],
  customSymbols: [{
    id: "9488e9d5-7a80-4d9c-b053-66669e4f791e",
    title: "Neues Symbol",
    icon: {
      id: "info",
      dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjU0My4wNTlweCIgaGVpZ2h0PSI1NDMuMDU5cHgiIHZpZXdCb3g9IjAgMCA1NDMuMDU5IDU0My4wNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU0My4wNTkgNTQzLjA1OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNDYuNDM4LDQ2OC4xMzdoLTE4LjcyN1YxNzEuMDZjMC01LjA2Mi0xLjg1NS05LjQ1Ni01LjU1Ny0xMy4xN2MtMy43MDktMy43MDMtOC4wOTgtNS41NTctMTMuMTY0LTUuNTU3SDE5Ni42Mg0KCQkJYy01LjA3MywwLTkuNDYxLDEuODU0LTEzLjE3LDUuNTU3Yy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwMy01LjU2MywxMy4xN3YzNy40NTRjMCw1LjA3NCwxLjg1NCw5LjQ2Miw1LjU2MywxMy4xNw0KCQkJYzMuNzAzLDMuNzE1LDguMDkxLDUuNTY5LDEzLjE3LDUuNTY5aDE4LjcyN3YyNDAuODgzSDE5Ni42MmMtNS4wNzMsMC05LjQ2MSwxLjg1NS0xMy4xNyw1LjU1Nw0KCQkJYy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwNC01LjU2MywxMy4xN3YzNy40NTVjMCw1LjA3NCwxLjg1NCw5LjQ2MSw1LjU2MywxMy4xN2MzLjcwMywzLjcxNSw4LjA5MSw1LjU3LDEzLjE3LDUuNTdoMTQ5LjgxNw0KCQkJYzUuMDc0LDAsOS40NjEtMS44NTUsMTMuMTctNS41N2MzLjcwMy0zLjcwMSw1LjU2NC04LjA5LDUuNTY0LTEzLjE3di0zNy40NTVjMC01LjA2MS0xLjg1NS05LjQ1NS01LjU2NC0xMy4xNw0KCQkJQzM1NS44OTgsNDY5Ljk4NCwzNTEuNTA2LDQ2OC4xMzcsMzQ2LjQzOCw0NjguMTM3eiIvPg0KCQk8Y2lyY2xlIGN4PSIyNjcuNjczIiBjeT0iNjIuOTIiIHI9IjYyLjkyIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
    },
    position: 0,
    isDialog: true,
    legend: false,
    legendLabel: ""
  }],
  tutorial: {
    id: "970c03d7-1194-46f8-be81-7ec56a74c20d",
    steps: [{
      id: "controls",
      isActive: true,
      title: "Steuerelemente",
      text: "<p>Zur Steuerung des Datenmodells: Eine Legende erklärt die Symbole, Farbwahl, Pfeiltypen etc., die Ansicht kann vergrößert oder verkleinert werden</p>",
      itemId: "controls"
    }, {
      id: "header",
      isActive: true,
      title: "Kopfzeile",
      text: "<p>Hier findet der Nutzer die wesentlichen Überschriften zur Orientierung in dem Modell</p>",
      itemId: "header"
    }, {
      id: "520c03d7-1194-46f8-be81-7ec56a74c20d",
      isActive: true,
      title: "Datenkategorie",
      text: "<p>Hier werden die jeweiligen Datenfelder oder Datenkategorien, die in den rechts aufgeführten Prozessschritten verarbeitet werden, angegeben</p>",
      itemId: "5-dp1"
    }, {
      id: "c73ae592-e291-4fa4-b389-de277dbaec98",
      isActive: true,
      title: "Prozessschritt",
      text: "<p>Hier werden die jeweiligen Prozessschritte der Verarbeitung angegeben</p>",
      itemId: "1-a1"
    }, {
      id: "f24623ec-2c4d-4ed0-83a4-acd66848325b",
      isActive: true,
      title: "Verwendungszweck",
      text: "<p>Hier werden die Verwendungszwecke der Datenverarbeitung, spezifisch für die links stehenden Prozessschritte, angegeben</p>",
      itemId: "1-dp1"
    }]
  }
}