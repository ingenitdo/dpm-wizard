import { Model } from "../entities/Model";
import { CustomSymbolPosition } from "../entities/CustomSymbolPosition";

export const detailedBaseModel: Model = {
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
      id: "identity",
      dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNNDk1LDMzMi44SDMxMy44Yy05LjQsMC0xNyw3LjYtMTcsMTdzNy42LDE3LDE3LDE3SDQ5NWM5LjQsMCwxNy03LjYsMTctMTdTNTA0LjQsMzMyLjgsNDk1LDMzMi44eiIvPg0KPGc+DQoJPHBhdGggZD0iTTE0MC41LDI1MmM0MS4xLDAsNzQuNC00MC41LDc0LjQtOTAuNGMwLTQ5LjktMTAuOS05MC40LTc0LjQtOTAuNHMtNzQuNCw0MC41LTc0LjQsOTAuNEM2Ni4xLDIxMS41LDk5LjQsMjUyLDE0MC41LDI1MnoiDQoJCS8+DQoJPHBhdGggZD0iTTAsMzg5LjlDMCwzODYuOSwwLDM4OS4xLDAsMzg5LjlMMCwzODkuOXoiLz4NCgk8cGF0aCBkPSJNMjgxLDM5Mi4zQzI4MS4xLDM5MS41LDI4MS4xLDM4Ni41LDI4MSwzOTIuM0wyODEsMzkyLjN6Ii8+DQoJPHBhdGggZD0iTTI4MC45LDM4Ni4zYy0xLjQtODYuOS0xMi43LTExMS43LTk5LjYtMTI3LjRjMCwwLTEyLjIsMTUuNi00MC43LDE1LjZzLTQwLjctMTUuNi00MC43LTE1LjYNCgkJYy04NS45LDE1LjUtOTgsMzkuOS05OS42LDEyNC42Yy0wLjEsNi45LTAuMiw3LjMtMC4yLDYuNWMwLDEuNSwwLDQuMywwLDkuMWMwLDAsMjAuNyw0MS43LDE0MC41LDQxLjcNCgkJYzExOS44LDAsMTQwLjUtNDEuNywxNDAuNS00MS43YzAtMy4xLDAtNS4zLDAtNi44QzI4MSwzOTIuOCwyODEsMzkxLjgsMjgwLjksMzg2LjN6Ii8+DQo8L2c+DQo8cGF0aCBkPSJNMzEzLjgsNDM0LjhoNjhjOS40LDAsMTctNy42LDE3LTE3YzAtOS40LTcuNi0xNy0xNy0xN2gtNjhjLTkuNCwwLTE3LDcuNi0xNywxN0MyOTYuOCw0MjcuMiwzMDQuNCw0MzQuOCwzMTMuOCw0MzQuOHoiLz4NCjxwYXRoIGQ9Ik00OTUsMjY0LjlIMzEzLjhjLTkuNCwwLTE3LDcuNi0xNywxN3M3LjYsMTcsMTcsMTdINDk1YzkuNCwwLDE3LTcuNiwxNy0xN1M1MDQuNCwyNjQuOSw0OTUsMjY0Ljl6Ii8+DQo8L3N2Zz4NCg=="
    },
    purposeLabel: "Verwendungszweck",
    purposeIcon: {
      id: "analytic_chart",
      dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MDkuMDcsOTMuOTE2bC05MS05MC45ODdDNDE2LjE5NSwxLjA1NCw0MTMuNjUyLDAsNDExLDBIMTE0Qzk3LjQ1OCwwLDg0LDEzLjQ1OCw4NCwzMHYxOS4wNjQNCgkJCUMzNC44NzUsNjguMzM0LDAsMTE2LjIxNSwwLDE3Mi4wOTFjMCw1LjUyMiw0LjQ3OCwxMCwxMCwxMGgxMjIuMDkxYzUuNTIyLDAsMTAtNC40NzgsMTAtMTBWNTBjMC01LjUyMi00LjQ3OC0xMC0xMC0xMA0KCQkJYy05LjYzOCwwLTE5LjAzNCwxLjA0Ny0yOC4wOTEsMy4wMTdWMzBjMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGgyODd2NjFjMCwxNi41NDIsMTMuNDU4LDMwLDMwLDMwaDYxdjM3MWMwLDUuNTE0LTQuNDg2LDEwLTEwLDEwDQoJCQlIMTE0Yy01LjUxNCwwLTEwLTQuNDg2LTEwLTEwdi04NS42NjdjMC01LjUyMi00LjQ3OC0xMC0xMC0xMGMtNS41MjIsMC0xMCw0LjQ3OC0xMCwxMFY0ODJjMCwxNi41NDIsMTMuNDU4LDMwLDMwLDMwaDM2OA0KCQkJYzE2LjU0MiwwLDMwLTEzLjQ1OCwzMC0zMFYxMDAuOTg3QzUxMiw5OC4zMzUsNTEwLjk0Niw5NS43OTEsNTA5LjA3LDkzLjkxNnogTTEyMi4wOSw2MC40NDN2MTAxLjY0OEgyMC40NDINCgkJCUMyNS4yMjMsMTA4LjI0Myw2OC4yNDMsNjUuMjI0LDEyMi4wOSw2MC40NDN6IE00MzEsOTFjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBWMzQuMTRMNDc3Ljg2OCw5MUg0MzF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xMDEuMDY5LDM1Mi45M0M5OS4yMSwzNTEuMDY5LDk2LjYzLDM1MCw5NCwzNTBzLTUuMjEsMS4wNjktNy4wNywyLjkzQzg1LjA3LDM1NC43OSw4NCwzNTcuMzcsODQsMzYwDQoJCQlzMS4wNjksNS4yMSwyLjkzLDcuMDY5Qzg4Ljc5LDM2OC45Myw5MS4zNywzNzAsOTQsMzcwczUuMjEtMS4wNyw3LjA2OS0yLjkzMUMxMDIuOTMsMzY1LjIxLDEwNCwzNjIuNjMsMTA0LDM2MA0KCQkJUzEwMi45MywzNTQuNzksMTAxLjA2OSwzNTIuOTN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNjcuOTA5LDc1LjgxOWMtNS41MjIsMC0xMCw0LjQ3OC0xMCwxMHYxMTIuMDlINDUuODE5Yy01LjUyMiwwLTEwLDQuNDc4LTEwLDEwQzM1LjgxOSwyODAuNzQ0LDk1LjA3NCwzNDAsMTY3LjkwOSwzNDANCgkJCVMzMDAsMjgwLjc0NCwzMDAsMjA3LjkwOVMyNDAuNzQ0LDc1LjgxOSwxNjcuOTA5LDc1LjgxOXogTTE3Ny45MDksOTYuMjYyYzIzLjQxLDIuMDc4LDQ0Ljc3MSwxMS4zODgsNjEuODM2LDI1LjY3bC02MS44MzYsNjEuODM1DQoJCQlWOTYuMjYyeiBNMTY3LjkwOSwzMjBjLTU4LjQzNywwLTEwNi41NzQtNDQuOTQ5LTExMS42NDctMTAyLjA5MWgxMTEuNjQ3YzIuNzYsMCw1LjI1OC0xLjExOCw3LjA2OC0yLjkyNg0KCQkJYzAuMDAxLTAuMDAxLDAuMDAyLTAuMDAxLDAuMDA0LTAuMDAzbDc4LjkwOS03OC45MDhjMTYuMjkxLDE5LjQ2NywyNi4xMSw0NC41MjcsMjYuMTEsNzEuODM3DQoJCQlDMjgwLDI2OS43MTYsMjI5LjcxNiwzMjAsMTY3LjkwOSwzMjB6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzguMDczLDMxNS42MDVjLTE2LjU0MiwwLTMwLDEzLjQ1OC0zMCwzMGMwLDQuMTQ2LDAuODQ2LDguMDk3LDIuMzczLDExLjY5MmwtNTcuNjEzLDU3LjYxMw0KCQkJYy0zLjk1OS0xLjkyOS04LjQwMy0zLjAxNC0xMy4wOTUtMy4wMTRjLTQuNTgxLDAtOC45MjMsMS4wMzYtMTIuODEsMi44NzlsLTM4LjI1OC0zOC4yNThjMS4zMjYtMy4zODQsMi4wNjItNy4wNjMsMi4wNjItMTAuOTEzDQoJCQljMC0xNi41NDItMTMuNDU4LTMwLTMwLTMwcy0zMCwxMy40NTgtMzAsMzBjMCw0LjQ4MiwwLjk5NSw4LjczNCwyLjc2NSwxMi41NTdsLTM2LjY5NSwzNi42OTUNCgkJCWMtMy45MDktMS44Ny04LjI4My0yLjkxOS0xMi44OTctMi45MTljLTE2LjU0MiwwLTMwLDEzLjQ1OC0zMCwzMHMxMy40NTgsMzAsMzAsMzBzMzAtMTMuNDU4LDMwLTMwDQoJCQljMC00LjYzNy0xLjA1OC05LjAzMS0yLjk0NC0xMi45NTRsMzYuNDktMzYuNDljNC4wMDcsMS45ODgsOC41MTUsMy4xMTEsMTMuMjgzLDMuMTExYzUuMzg1LDAsMTAuNDM4LTEuNDMzLDE0LjgxMS0zLjkyNw0KCQkJbDM3LjE3OSwzNy4xNzljLTEuOTEyLDMuOTQ1LTIuOTg2LDguMzY5LTIuOTg2LDEzLjA0YzAsMTYuNTQyLDEzLjQ1OCwzMCwzMCwzMHMzMC0xMy40NTgsMzAtMzBjMC00LjU1OC0xLjAyNi04Ljg4LTIuODUzLTEyLjc1Mg0KCQkJbDU3LjA3NS01Ny4wNzVjNC4yMDksMi4yNTQsOS4wMTQsMy41MzYsMTQuMTEzLDMuNTM2YzE2LjU0MiwwLDMwLTEzLjQ1OCwzMC0zMFM0NTQuNjE1LDMxNS42MDUsNDM4LjA3MywzMTUuNjA1eg0KCQkJIE0xODMuOTA0LDQ1MS45MzhjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBjMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGMyLjY4NSwwLDUuMTIsMS4wNjksNi45MTgsMi43OTcNCgkJCWMwLjA0LDAuMDQyLDAuMDc1LDAuMDg3LDAuMTE2LDAuMTI4YzAuMDQ4LDAuMDQ4LDAuMSwwLjA4OCwwLjE0OSwwLjEzNGMxLjc0LDEuOCwyLjgxNyw0LjI0NiwyLjgxNyw2Ljk0MQ0KCQkJQzE5My45MDQsNDQ3LjQ1MSwxODkuNDE4LDQ1MS45MzgsMTgzLjkwNCw0NTEuOTM4eiBNMjYwLjczMiwzNzUuNjA0Yy01LjUxNCwwLTEwLTQuNDg2LTEwLTEwYzAtNS41MTQsNC40ODYtMTAsMTAtMTANCgkJCWM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwQzI3MC43MzIsMzcxLjExOCwyNjYuMjQ2LDM3NS42MDQsMjYwLjczMiwzNzUuNjA0eiBNMzM5LjczNiw0NTEuODk2Yy01LjUxNCwwLTEwLTQuNDg2LTEwLTEwDQoJCQljMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwQzM0OS43MzYsNDQ3LjQxLDM0NS4yNSw0NTEuODk2LDMzOS43MzYsNDUxLjg5NnogTTQzOC4wNzEsMzU1LjYwNA0KCQkJYy01LjUxNCwwLTEwLTQuNDg2LTEwLTEwYzAtNS41MTQsNC40ODctMTAsMTAtMTBjNS41MTQsMCwxMCw0LjQ4NiwxMCwxMEM0NDguMDcxLDM1MS4xMTgsNDQzLjU4NSwzNTUuNjA0LDQzOC4wNzEsMzU1LjYwNHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM4OC4wOSwyMzVoLTUyLjc3OWMtNS41MjIsMC0xMCw0LjQ3OC0xMCwxMGMwLDUuNTIyLDQuNDc3LDEwLDEwLDEwaDUyLjc3OWM1LjUyMiwwLDEwLTQuNDc4LDEwLTEwDQoJCQlDMzk4LjA5LDIzOS40NzgsMzkzLjYxMiwyMzUsMzg4LjA5LDIzNXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ0MC42ODksMjM3LjkzYy0xLjg1OS0xLjg2LTQuNDM5LTIuOTMtNy4wNjktMi45M3MtNS4yMSwxLjA2OS03LjA3LDIuOTNjLTEuODYsMS44Ni0yLjkzLDQuNDQtMi45Myw3LjA3DQoJCQlzMS4wNjksNS4yMSwyLjkzLDcuMDY5YzEuODYsMS44Niw0LjQzLDIuOTMxLDcuMDcsMi45MzFjMi42MywwLDUuMjEtMS4wNyw3LjA2OS0yLjkzMWMxLjg2LTEuODU5LDIuOTMxLTQuNDM5LDIuOTMxLTcuMDY5DQoJCQlTNDQyLjU1LDIzOS43OSw0NDAuNjg5LDIzNy45M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ1Ny40NjUsMTM5SDMzNS4zMTFjLTUuNTIyLDAtMTAsNC40NzgtMTAsMTBjMCw1LjUyMiw0LjQ3NywxMCwxMCwxMGgxMjIuMTU0YzUuNTIyLDAsMTAtNC40NzgsMTAtMTANCgkJCUM0NjcuNDY1LDE0My40NzgsNDYyLjk4NywxMzksNDU3LjQ2NSwxMzl6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NTcuNDY1LDE4N0gzMzUuMzExYy01LjUyMiwwLTEwLDQuNDc4LTEwLDEwYzAsNS41MjIsNC40NzcsMTAsMTAsMTBoMTIyLjE1NGM1LjUyMiwwLDEwLTQuNDc4LDEwLTEwDQoJCQlDNDY3LjQ2NSwxOTEuNDc4LDQ2Mi45ODcsMTg3LDQ1Ny40NjUsMTg3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
    }
  },
  participants: [
    {
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
      borderSize: 2,
      icon: {
        id: "man_user",
        dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDM1MCAzNTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1MCAzNTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0xNzUsMTcxLjE3M2MzOC45MTQsMCw3MC40NjMtMzguMzE4LDcwLjQ2My04NS41ODZDMjQ1LjQ2MywzOC4zMTgsMjM1LjEwNSwwLDE3NSwwcy03MC40NjUsMzguMzE4LTcwLjQ2NSw4NS41ODcNCgkJQzEwNC41MzUsMTMyLjg1NSwxMzYuMDg0LDE3MS4xNzMsMTc1LDE3MS4xNzN6Ii8+DQoJPHBhdGggZD0iTTQxLjkwOSwzMDEuODUzQzQxLjg5NywyOTguOTcxLDQxLjg4NSwzMDEuMDQxLDQxLjkwOSwzMDEuODUzTDQxLjkwOSwzMDEuODUzeiIvPg0KCTxwYXRoIGQ9Ik0zMDguMDg1LDMwNC4xMDRDMzA4LjEyMywzMDMuMzE1LDMwOC4wOTgsMjk4LjYzLDMwOC4wODUsMzA0LjEwNEwzMDguMDg1LDMwNC4xMDR6Ii8+DQoJPHBhdGggZD0iTTMwNy45MzUsMjk4LjM5N2MtMS4zMDUtODIuMzQyLTEyLjA1OS0xMDUuODA1LTk0LjM1Mi0xMjAuNjU3YzAsMC0xMS41ODQsMTQuNzYxLTM4LjU4NCwxNC43NjENCgkJcy0zOC41ODYtMTQuNzYxLTM4LjU4Ni0xNC43NjFjLTgxLjM5NSwxNC42OS05Mi44MDMsMzcuODA1LTk0LjMwMywxMTcuOTgyYy0wLjEyMyw2LjU0Ny0wLjE4LDYuODkxLTAuMjAyLDYuMTMxDQoJCWMwLjAwNSwxLjQyNCwwLjAxMSw0LjA1OCwwLjAxMSw4LjY1MWMwLDAsMTkuNTkyLDM5LjQ5NiwxMzMuMDgsMzkuNDk2YzExMy40ODYsMCwxMzMuMDgtMzkuNDk2LDEzMy4wOC0zOS40OTYNCgkJYzAtMi45NTEsMC4wMDItNS4wMDMsMC4wMDUtNi4zOTlDMzA4LjA2MiwzMDQuNTc1LDMwOC4wMTgsMzAzLjY2NCwzMDcuOTM1LDI5OC4zOTd6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
      }
    },
    {
      id: "2",
      label: [
        "weitere",
        "Prozessbeteiligte"
      ],
      labelSize: 1.0,
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
      }
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
      shortInfoLabelSize: 0.8,

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
        }
      ],
      dataPurposes: [
        {
          id: "1-dp1",
          typeId: "5775ec66-2aa5-4e44-97cc-a6a558f81a21",
          label: [
            "Eine Nutzung"
          ],
          shortInfo: [
            "kurze Info"
          ],
          position: {
            start: 0,
            end: 0
          }
        },
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
          },
          itemSymbols: [
            {
              customSymbolId: "b4a9c476-2d96-4f25-9354-a74b0901efde",
              title: "smartphone",
              text: "<p>smartphone</p>"
            }
          ]
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
          participantID: "2",
          position: {
            start: 0,
            end: 0
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
          id: "54307189-ec1a-4f6b-99df-7c57d5e672e9",
          typeId: "ct2",
          label: "",
          textEllipsis: true,
          source: "1-a1",
          destination: "1-a2",
          position: {
            start: 0,
            end: 0
          }
        },
        {
          id: "61a07189-ac1a-4f6b-99df-7c57d5e673e9",
          typeId: "ct2",
          label: "",
          textEllipsis: true,
          source: "1-a2",
          destination: "1-dp1",
          position: {
            start: 0,
            end: 0
          }
        }
      ],
      isOpen: true,
      itemSymbols: [
        { customSymbolId: "b4a9c476-2d96-4f25-9354-a74b0901efde", title: "asd", text: "<p>as</p>" }
      ]
    }
  ],
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

    modelModeLabel: "#ffffff",
    modelModeBackground: "#48AAE6",

    textEllipsisBackground: "#48AAE6",
    textEllipsisLabel: "#ffffff",

    overlayBackground: "#48AAE6",
    overlayLabel: "#ffffff",

    glossarKeyword: "#48AAE6",

    tutorialBackground: "#FFB136",
    tutorialLabel: "#000000"
  },
  dimensions: {
    caseLabelSize: 1.2,
    headerLabelSize: 1.2,
    tutorialLabelSize: 10
  },
  predefinedSymbols: [
    {
      id: "b4a9c476-2d96-4f25-9354-a74b0901efde",
      title: "Info",
      icon: {
        id: "info",
        dataUri: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjU0My4wNTlweCIgaGVpZ2h0PSI1NDMuMDU5cHgiIHZpZXdCb3g9IjAgMCA1NDMuMDU5IDU0My4wNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU0My4wNTkgNTQzLjA1OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNDYuNDM4LDQ2OC4xMzdoLTE4LjcyN1YxNzEuMDZjMC01LjA2Mi0xLjg1NS05LjQ1Ni01LjU1Ny0xMy4xN2MtMy43MDktMy43MDMtOC4wOTgtNS41NTctMTMuMTY0LTUuNTU3SDE5Ni42Mg0KCQkJYy01LjA3MywwLTkuNDYxLDEuODU0LTEzLjE3LDUuNTU3Yy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwMy01LjU2MywxMy4xN3YzNy40NTRjMCw1LjA3NCwxLjg1NCw5LjQ2Miw1LjU2MywxMy4xNw0KCQkJYzMuNzAzLDMuNzE1LDguMDkxLDUuNTY5LDEzLjE3LDUuNTY5aDE4LjcyN3YyNDAuODgzSDE5Ni42MmMtNS4wNzMsMC05LjQ2MSwxLjg1NS0xMy4xNyw1LjU1Nw0KCQkJYy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwNC01LjU2MywxMy4xN3YzNy40NTVjMCw1LjA3NCwxLjg1NCw5LjQ2MSw1LjU2MywxMy4xN2MzLjcwMywzLjcxNSw4LjA5MSw1LjU3LDEzLjE3LDUuNTdoMTQ5LjgxNw0KCQkJYzUuMDc0LDAsOS40NjEtMS44NTUsMTMuMTctNS41N2MzLjcwMy0zLjcwMSw1LjU2NC04LjA5LDUuNTY0LTEzLjE3di0zNy40NTVjMC01LjA2MS0xLjg1NS05LjQ1NS01LjU2NC0xMy4xNw0KCQkJQzM1NS44OTgsNDY5Ljk4NCwzNTEuNTA2LDQ2OC4xMzcsMzQ2LjQzOCw0NjguMTM3eiIvPg0KCQk8Y2lyY2xlIGN4PSIyNjcuNjczIiBjeT0iNjIuOTIiIHI9IjYyLjkyIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
      },
      position: CustomSymbolPosition.TOP_RIGHT,
      isDialog: true,
      legend: true,
      legendLabel: "Info"
    }
  ],
  customSymbols: [],
  tutorial: {
    id: "970c03d7-1194-46f8-be81-7ec56a74c20d",
    steps: [
      {
        id: "520c03d7-1194-46f8-be81-7ec56a74c20d",
        isActive: true,
        title: "Datenkategorie",
        text: "<p>Eine Datenkategorie</p>",
        itemId: "5-dp1"
      },
      {
        id: "520c03a7-1194-46f8-be81-7ec56a74c20d",
        isActive: true,
        title: "Verbindung",
        text: "<p>Eine Datenkategorie</p>",
        itemId: "490a64f9-6896-4973-b7f8-57eeb43d797f"
      },
      {
        id: "controls",
        isActive: true,
        title: "Steuerelemente",
        text: "<p>Zur Steuerung des Datenmodells</p>",
        itemId: "controls"
      },
      {
        id: "header",
        isActive: true,
        title: "Header",
        text: "<p>Header</p>",
        itemId: "header"
      },


      {
        id: "c73ae592-e291-4fa4-b389-de277dbaec98",
        isActive: true,
        title: "Prozessschritt",
        text: "<p>Eine Prozessschritt</p>",
        itemId: "1-a1"
      },
      {
        id: "f24623ec-2c4d-4ed0-83a4-acd66848325b",
        isActive: true,
        title: "Verwendungszweck",
        text: "<p>Eine Verwendungszweck</p>",
        itemId: "1-dp1"
      }
    ]
  }
}