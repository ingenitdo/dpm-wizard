import { Model } from "../entities/Model";

export const detailedBaseModel: Model = {
  version: '1.1.0',
  masterData: {
    title: 'Datenprozess',
    author: '',
    version: '1.0',
    description: '',
    viewerMode: 'both',
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
  language: 'de',
  title: 'Ein exemplarischer Titel',
  subtitle: 'Dies ist ein Untertitel',
  header: {
    sourceLabel: 'Datenkategorie',
    sourceIcon: {
      id: 'identity_card',
      dataUri: 'data:image/svg+xml;base64,PHN2ZyBpZD0ibGlnaHQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im0yMS41IDIyaC0xOWMtMS4zNzggMC0yLjUtMS4xMjItMi41LTIuNXYtMTNjMC0xLjM3OCAxLjEyMi0yLjUgMi41LTIuNWg2Yy4yNzYgMCAuNS4yMjQuNS41cy0uMjI0LjUtLjUuNWgtNmMtLjgyNyAwLTEuNS42NzMtMS41IDEuNXYxM2MwIC44MjcuNjczIDEuNSAxLjUgMS41aDE5Yy44MjcgMCAxLjUtLjY3MyAxLjUtMS41di0xM2MwLS44MjctLjY3My0xLjUtMS41LTEuNWgtNmMtLjI3NiAwLS41LS4yMjQtLjUtLjVzLjIyNC0uNS41LS41aDZjMS4zNzggMCAyLjUgMS4xMjIgMi41IDIuNXYxM2MwIDEuMzc4LTEuMTIyIDIuNS0yLjUgMi41eiIvPjwvZz48Zz48cGF0aCBkPSJtNy41IDE0Yy0xLjM3OCAwLTIuNS0xLjEyMi0yLjUtMi41czEuMTIyLTIuNSAyLjUtMi41IDIuNSAxLjEyMiAyLjUgMi41LTEuMTIyIDIuNS0yLjUgMi41em0wLTRjLS44MjcgMC0xLjUuNjczLTEuNSAxLjVzLjY3MyAxLjUgMS41IDEuNSAxLjUtLjY3MyAxLjUtMS41LS42NzMtMS41LTEuNS0xLjV6Ii8+PC9nPjxnPjxwYXRoIGQ9Im0xMS41IDE5Yy0uMjc2IDAtLjUtLjIyNC0uNS0uNXYtMWMwLS44MjctLjY3My0xLjUtMS41LTEuNWgtNGMtLjgyNyAwLTEuNS42NzMtMS41IDEuNXYxYzAgLjI3Ni0uMjI0LjUtLjUuNXMtLjUtLjIyNC0uNS0uNXYtMWMwLTEuMzc4IDEuMTIyLTIuNSAyLjUtMi41aDRjMS4zNzggMCAyLjUgMS4xMjIgMi41IDIuNXYxYzAgLjI3Ni0uMjI0LjUtLjUuNXoiLz48L2c+PGc+PHBhdGggZD0ibTIwLjUgMTFoLTZjLS4yNzYgMC0uNS0uMjI0LS41LS41cy4yMjQtLjUuNS0uNWg2Yy4yNzYgMCAuNS4yMjQuNS41cy0uMjI0LjUtLjUuNXoiLz48L2c+PGc+PHBhdGggZD0ibTIwLjUgMTVoLTZjLS4yNzYgMC0uNS0uMjI0LS41LS41cy4yMjQtLjUuNS0uNWg2Yy4yNzYgMCAuNS4yMjQuNS41cy0uMjI0LjUtLjUuNXoiLz48L2c+PGc+PHBhdGggZD0ibTIwLjUgMTloLTZjLS4yNzYgMC0uNS0uMjI0LS41LS41cy4yMjQtLjUuNS0uNWg2Yy4yNzYgMCAuNS4yMjQuNS41cy0uMjI0LjUtLjUuNXoiLz48L2c+PGc+PHBhdGggZD0ibTE0LjUgN2gtNWMtLjgyNyAwLTEuNS0uNjczLTEuNS0xLjV2LTJjMC0uODI3LjY3My0xLjUgMS41LTEuNWg1Yy44MjcgMCAxLjUuNjczIDEuNSAxLjV2MmMwIC44MjctLjY3MyAxLjUtMS41IDEuNXptLTUtNGMtLjI3NiAwLS41LjIyNC0uNS41djJjMCAuMjc2LjIyNC41LjUuNWg1Yy4yNzYgMCAuNS0uMjI0LjUtLjV2LTJjMC0uMjc2LS4yMjQtLjUtLjUtLjV6Ii8+PC9nPjwvc3ZnPg=='
    },
    purposeLabel: 'Verwendungszweck',
    purposeIcon: {
      id: 'med_docs',
      dataUri: 'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMjQyIDUxMi4yNDIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyLjI0MiA1MTIuMjQyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxnPjxwYXRoIGQ9Im00MjMuNjc3IDM0Ljc3N2gtMTAuMzF2LTEwLjMxYy4wMDEtMTMuNDktMTAuOTc2LTI0LjQ2Ny0yNC40NjgtMjQuNDY3aC0yNjMuMzJjLTEuOTUxIDAtMy44MjUuNzYtNS4yMjUgMi4xMTlsLTUzLjk4MiA1Mi40MTdjLTEuNDU1IDEuNDEyLTIuMjc1IDMuMzU0LTIuMjc1IDUuMzgxdjI4Ny4xMzhjMCA0LjE0MyAzLjM1OCA3LjUgNy41IDcuNXM3LjUtMy4zNTcgNy41LTcuNXYtMjc5LjYxOGwzOS43NTkuMTA2aC4wMzljMy43NDEgMCA3LjI2LTEuNDUyIDkuOTE0LTQuMDkxIDIuNjYzLTIuNjQ4IDQuMTM1LTYuMTc2IDQuMTQ1LTkuOTMxbC4xMDQtMzguNTIxaDE3OS45MzJ2NzcuODE1YzAgMTIuNTExIDEwLjE3OSAyMi42ODkgMjIuNjkgMjIuNjg5czIyLjY4OS0xMC4xNzkgMjIuNjg5LTIyLjY4OXYtMzguNjQ3YzAtNC4xNDMtMy4zNTgtNy41LTcuNS03LjVzLTcuNSAzLjM1Ny03LjUgNy41djM4LjY0N2MwIDQuMjQtMy40NSA3LjY4OS03LjY4OSA3LjY4OS00LjI0IDAtNy42OS0zLjQ0OS03LjY5LTcuNjg5di03Ny44MTVoNjAuOTFjNS4yMjEgMCA5LjQ2OCA0LjI0NyA5LjQ2OCA5LjQ2OHYxMTEuMDgzYzAgNC4xNDMgMy4zNTggNy41IDcuNSA3LjVzNy41LTMuMzU3IDcuNS03LjV2LTg1Ljc3NGgxMC4zMWM1LjIyMSAwIDkuNDY5IDQuMjQ4IDkuNDY5IDkuNDY5djQyOC41MjhjMCA1LjIyMS00LjI0OCA5LjQ2OC05LjQ2OSA5LjQ2OGgtMzAwLjMzNWMtNS4yMjEgMC05LjQ2OC00LjI0Ny05LjQ2OC05LjQ2OHYtMTAuMzFoMjc1LjAyNWMxMy40OTIgMCAyNC40NjgtMTAuOTc3IDI0LjQ2OC0yNC40Njl2LTI4Mi43NjZjMC00LjE0My0zLjM1OC03LjUtNy41LTcuNXMtNy41IDMuMzU3LTcuNSA3LjV2MjgyLjc2OGMwIDUuMjIxLTQuMjQ4IDkuNDY5LTkuNDY4IDkuNDY5aC0zMDAuMzM1Yy01LjIyMSAwLTkuNDY5LTQuMjQ4LTkuNDY5LTkuNDY5di03MS4wMjdjMC00LjE0My0zLjM1OC03LjUtNy41LTcuNXMtNy41IDMuMzU3LTcuNSA3LjV2NzEuMDI2YzAgMTMuNDkyIDEwLjk3NyAyNC40NjkgMjQuNDY5IDI0LjQ2OWgxMC4zMXYxMC4zMWMwIDEzLjQ5MSAxMC45NzcgMjQuNDY4IDI0LjQ2OCAyNC40NjhoMzAwLjMzNGMxMy40OTIgMCAyNC40NjktMTAuOTc3IDI0LjQ2OS0yNC40Njh2LTQyOC41MjljMC0xMy40OTItMTAuOTc3LTI0LjQ2OS0yNC40NjktMjQuNDY5em0tMzA1LjcyMiAxNy43NjMtMjcuOTE5LS4wNzQgMTguNTU3LTE4LjAyIDkuNDM2LTkuMTYyeiIvPjxwYXRoIGQ9Im0yNDguNzk3IDEwNS4yMzJoLTIwLjEzYy04LjU1NyAwLTE1LjUxOSA2Ljk2Mi0xNS41MTkgMTUuNTE5djIyLjQ5OWMwIC4yODYtLjIzMy41MTktLjUxOS41MTloLTIyLjQ5OWMtOC41NTcgMC0xNS41MTkgNi45NjItMTUuNTE5IDE1LjUxOXYyMC4xM2MwIDguNTU4IDYuOTYyIDE1LjUyIDE1LjUxOSAxNS41MmgyMi40OTljLjI4NiAwIC41MTkuMjMyLjUxOS41MTl2MjIuNDk5YzAgOC41NTcgNi45NjEgMTUuNTE5IDE1LjUxOSAxNS41MTloMjAuMTNjOC41NTcgMCAxNS41MTktNi45NjIgMTUuNTE5LTE1LjUxOXYtMjIuNDk5YzAtLjI4Ni4yMzMtLjUxOS41MTktLjUxOWgyMi40OTljOC41NTcgMCAxNS41MTktNi45NjIgMTUuNTE5LTE1LjUydi0yMC4xM2MwLTguNTU3LTYuOTYyLTE1LjUxOS0xNS41MTktMTUuNTE5aC0yMi40OTljLS4yODYgMC0uNTE5LS4yMzItLjUxOS0uNTE5di0yMi40OTljMC04LjU1Ny02Ljk2Mi0xNS41MTktMTUuNTE5LTE1LjUxOXptMTYuMDM4IDUzLjUzN2gyMi40OTljLjI4NiAwIC41MTkuMjMyLjUxOS41MTl2MjAuMTNjMCAuMjg2LS4yMzMuNTItLjUxOS41MmgtMjIuNDk5Yy04LjU1NyAwLTE1LjUxOSA2Ljk2Mi0xNS41MTkgMTUuNTE5djIyLjQ5OWMwIC4yODYtLjIzMy41MTktLjUxOS41MTloLTIwLjEzYy0uMjg2IDAtLjUxOS0uMjMyLS41MTktLjUxOXYtMjIuNDk5YzAtOC41NTctNi45NjItMTUuNTE5LTE1LjUxOS0xNS41MTloLTIyLjQ5OWMtLjI4NiAwLS41MTktLjIzMy0uNTE5LS41MnYtMjAuMTNjMC0uMjg2LjIzMy0uNTE5LjUxOS0uNTE5aDIyLjQ5OWM4LjU1NyAwIDE1LjUxOS02Ljk2MiAxNS41MTktMTUuNTE5di0yMi40OTljMC0uMjg2LjIzMi0uNTE5LjUxOS0uNTE5aDIwLjEzYy4yODYgMCAuNTE5LjIzMi41MTkuNTE5djIyLjQ5OWMwIDguNTU3IDYuOTYyIDE1LjUxOSAxNS41MTkgMTUuNTE5eiIvPjxnPjxwYXRoIGQ9Im0yMTEuNDMgMjY2LjY2NGgtODYuODIyYy00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy41czMuMzU4IDcuNSA3LjUgNy41aDg2LjgyMmM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXoiLz48cGF0aCBkPSJtMjU2LjEyMSAyODEuNjY0aDk2LjczNWM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNWgtOTYuNzM1Yy00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy41czMuMzU4IDcuNSA3LjUgNy41eiIvPjxwYXRoIGQ9Im0yMTEuNDMgMzA3LjE1MmgtODYuODIyYy00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy41czMuMzU4IDcuNSA3LjUgNy41aDg2LjgyMmM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXoiLz48cGF0aCBkPSJtMzUyLjg1NiAzMDcuMTUyaC05Ni43MzVjLTQuMTQyIDAtNy41IDMuMzU3LTcuNSA3LjVzMy4zNTggNy41IDcuNSA3LjVoOTYuNzM1YzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41eiIvPjxwYXRoIGQ9Im0yMTEuNDMgMzQ3LjY0MmgtODYuODIyYy00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy41czMuMzU4IDcuNSA3LjUgNy41aDg2LjgyMmM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXoiLz48cGF0aCBkPSJtMzUyLjg1NiAzNDcuNjQyaC05Ni43MzVjLTQuMTQyIDAtNy41IDMuMzU3LTcuNSA3LjVzMy4zNTggNy41IDcuNSA3LjVoOTYuNzM1YzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41eiIvPjxwYXRoIGQ9Im0yMTEuNDMgMzg4LjEzaC04Ni44MjJjLTQuMTQyIDAtNy41IDMuMzU3LTcuNSA3LjVzMy4zNTggNy41IDcuNSA3LjVoODYuODIyYzQuMTQyIDAgNy41LTMuMzU3IDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41eiIvPjxwYXRoIGQ9Im0zNTIuODU2IDM4OC4xM2gtOTYuNzM1Yy00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy41czMuMzU4IDcuNSA3LjUgNy41aDk2LjczNWM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNXoiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+'
    }
  },
  participants: [
    {
      id: '1',
      label: [
        'Sie'
      ],
      labelSize: 1,
      hasActionLabel: 'Die Akteure in der Überschrift dieser Spalte verarbeiten Daten',
      hasNoActionLabel: 'Die Akteure in der Überschrift dieser Spalte verarbeiten keine Daten',
      backgroundColor: '#ffffff',
      labelColor: '#e94c89',
      iconColor: '#e94c89',
      borderColor: '#28b4e6',
      borderSize: 2,
      icon: {
        id: 'woman',
        dataUri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MTguMTg2LDM2Ni44MDdjLTYuNzQ5LTMzLjgwNS0zOC40NjEtMzkuNTU5LTM4LjU2MS0zOS42MDV2MC4wMDFjLTAuMzQxLTAuMSwyLjkwOSwwLjcxNS03Ny4zNDEtMTkuMTc3di0yLjcyM2g1OS4wNzUNCgkJCWMxMi4xNzcsMCwyMi4wODMtOS45MDcsMjIuMDgzLTIyLjA4M1YxNzAuNTU0YzAuOTkzLTQuMTg5LDAuOTk1LTguNTQ0LDAtMTIuNzQydi00MS4xMTljMC00LjE0NC0zLjM1OS03LjUwMS03LjUwMS03LjUwMQ0KCQkJYy00LjE0NCwwLTcuNTAxLDMuMzU3LTcuNTAxLDcuNTAxdjIxLjUyN2MtMy45Ni0yLjM2NC04LjQ4My00LjA1OS0xMy4zNTctNC44OThjLTEuNzYtNy44MTctOC4yNTItMTMuOTk3LTE2LjQ4NS0xNS4wNzgNCgkJCWMtOC41ODItMS4xMjgtMTUuMDg2LTYuMTMxLTE5LjMzMS0xNC44NjljLTEuOTg3LTQuMDkxLTUuODc5LTYuNzc4LTEwLjQwOS03LjE5Yy00LjUzNC0wLjQxLTguODI3LDEuNTI3LTExLjUxNCw1LjE4NQ0KCQkJYy0xMi44OTQsMTcuNTQ4LTQ4LjczOSw1Ni45MDctMTEwLjYzNiw1Ni45MDVjLTQuNzA5LDAtNy45MDItMC4yMjMtOS4wMTQtMC4yNzNjLTExLjM3NC0wLjY4NS0yMC45OTEsOC40MDMtMjAuOTkxLDE5Ljh2MTcuMjM1DQoJCQljMCwyNy41NDcsMTEuNDI4LDU0LjI1MywzMS4zNTIsNzMuMjY5YzYuNjA4LDYuMzA3LDEzLjg5NywxMS41NjgsMjEuNjcsMTUuNzYzdjYuMjM0SDE1MC45MmMtMy45MDUsMC03LjA4Mi0zLjE3Ny03LjA4Mi03LjA4MQ0KCQkJdi0xNjguNTVjMC01NC42NDMsNDQuNTUzLTk5LjY2OSw5OC4zNzEtOTkuNjY5YzAuMTc0LDAsMC4zNDgsMC4wMDEsMC41MjEsMC4wMDJjMTkuMjgyLDAuMTAzLDQxLjU0NSw1LjU4LDU2LjcxNiwxMy45NDkNCgkJCWM5LjYxNSw1LjMwNywxNS41NTQsMS4wODksMjUuMDQ5LDEuMDg5YzIzLjE3NSwwLDQxLjc0NywyMy44Myw0My45NzMsNDUuMjYzYzAuMDE0LDAuMzE0LDAuMDQ3LDEuNTcxLDAuMDUxLDYuMzg3DQoJCQljMC4wMDUsNy4yNDEsOC4xODMsNy43OTcsNy41MDcsNy40OTVjNC4xNDQtMC4wMDMsNy40OTgtMy4zNjUsNy40OTUtNy41MDdjLTAuMDAxLTEuMzMyLDAuMDEtNi41NTUtMC4xMTUtNy43NjcNCgkJCWMtMy4wMTYtMjkuODM3LTI4LjQ2Ny01OC44NzMtNTguOTEtNTguODczYy0xMS44OSwwLTEzLjc0MywzLjAxNC0xNy44MDIsMC43NzhjLTE3LjIwMy05LjQ5MS00Mi4yNzktMTUuNy02My44ODMtMTUuODE2DQoJCQlDMTgwLjUzOS0wLjQsMTI4LjgzNSw1MS40NzcsMTI4LjgzNSwxMTQuNjcxdjE2OC41NWMwLDEyLjE3Nyw5LjkwNywyMi4wODMsMjIuMDg0LDIyLjA4M2g1OC44MDZ2Mi43MjNsLTc3LjAzOCwxOS4wOTMNCgkJCWMtMC4xMDIsMC4wMjUtMC4yMDIsMC4wNTQtMC4zMDMsMC4wODNsLTUuNjI4LDEuNjZjLTAuMTY5LDAuMDUtMC4zMzUsMC4xMDUtMC41LDAuMTY2Yy0xMC4wNDQsMy43NDgtMjcuNjEzLDEzLjYzOS0zMi40MzQsMzcuNzgyDQoJCQljLTIyLjgzLDExNC42ODItMjEuODY5LDEwOS43ODUtMjEuOTI0LDExMC4xNzhjLTIuNzUsMTkuNDUxLDYuOTg3LDM1LjAxLDMwLjQxLDM1LjAxaDgxLjExNWM0LjE0NCwwLDcuNTAxLTMuMzU4LDcuNTAxLTcuNTAxDQoJCQljMC00LjE0NC0zLjM1OC03LjUwMS03LjUwMS03LjUwMWgtMjguMjI3di03MC43NWMwLTQuMTQ0LTMuMzU4LTcuNTAxLTcuNTAxLTcuNTAxcy03LjUwMSwzLjM1OC03LjUwMSw3LjUwMXY3MC43NWgtMzcuODg2DQoJCQljLTkuOTY0LDAtMTUuNzUtMy4yMDgtMTUuODQ2LTEzLjY3NWMtMC4wNDItNS4xMDYtMC4yNDMtMC4xMjksMjIuMDczLTExMy41NzhjMy4zNTktMTYuODIzLDE1LjU3NS0yMy44NSwyMi43MzItMjYuNTcxDQoJCQlsNS4yMDItMS41MzRsNDQuMjQtMTAuOTY1YzQ5LjIxMyw1Ny45NzYsNDYuMjk5LDU0LjkwNCw0OS4xNDMsNTcuNjc4YzE2LjQyNiwxNi4wMjMsMzkuODY0LDE0Ljg5Miw1NS4yOS0zLjIyNGw0Ni4zMjUtNTQuNDEzDQoJCQlsNDQuMDcxLDEwLjkyM2MxLjI3NSwwLjU4NiwyMy4yMTMsNC40NDUsMjcuOTM2LDI4LjEwM2MyMi4xMjQsMTEyLjQ2NywyMi4xMTYsMTA4LjQ1MSwyMi4wNzQsMTEzLjU3NQ0KCQkJYy0wLjA3NiwxMC4yNTItNS42MjIsMTMuNjgyLTE1Ljg0NiwxMy42ODJoLTM3LjYxN3YtNzAuNzUxYzAtNC4xNDQtMy4zNTctNy41MDEtNy41MDEtNy41MDFzLTcuNTAxLDMuMzU4LTcuNTAxLDcuNTAxdjcwLjc1DQoJCQlIMjE4LjQyOGMtNC4xNDQsMC03LjUwMSwzLjM1OC03LjUwMSw3LjUwMWMwLDQuMTQ0LDMuMzU4LDcuNTAxLDcuNTAxLDcuNTAxaDE5MS4yNzVjMTguNTMyLDAsMzAuNjc3LTEwLjE5NywzMC44NDgtMjguNTYzDQoJCQlDNDQwLjYxNCw0NzQuODU5LDQ0MC4xMDMsNDc4Ljk1Nyw0MTguMTg2LDM2Ni44MDd6IE0zNTUuNTc0LDE0OC43OTdjNi4yNjQsMS44NjMsMTEuMDk1LDUuOTkxLDEyLjg2NywxMS4wODl2OC41OTQNCgkJCWMtMS43NzIsNS4wOTktNi42MDMsOS4yMjctMTIuODY3LDExLjA4OVYxNDguNzk3eiBNMzU1LjU3NCwxOTYuMzQzdi0xLjM4NWM0LjY4OC0wLjg2Niw5LjA0MS0yLjUyNiwxMi44NjctNC44MTF2OTMuMDc0DQoJCQljMCwzLjkwNS0zLjE3Nyw3LjA4LTcuMDgxLDcuMDhoLTU5LjA3NnYtNS43OTdDMzM0LjA4OCwyNjcuODc3LDM1NS41NzQsMjM0LjU4NiwzNTUuNTc0LDE5Ni4zNDN6IE0xOTguNDE0LDI1Ny40NTINCgkJCWMtMTYuOTczLTE2LjIwMS0yNi43MDctMzguOTUtMjYuNzA3LTYyLjQxN2MwLjQ0Ni0xNi4zMzItMS4wODEtMTguMzExLDEuNTI1LTIwLjc2NWMwLjkyMy0wLjg3LDIuMTY0LTEuMzc1LDMuNTYxLTEuMjk1DQoJCQljNTMuNzg0LDMuMjM4LDEwMC4wNDQtMjAuNDA2LDEzMC41ODYtNTkuOTk0YzguMjM1LDE0LjQ2LDIwLjMxMiwxOC45NjIsMjkuMjY2LDIwLjEzOWMyLjIzOCwwLjI5NCwzLjkyNywyLjIwNCwzLjkyNyw0LjQ0NQ0KCQkJYzAsMjAuNzUxLDAsMzguMTc3LDAsNTguNzc5QzM0MC41NzIsMjcwLjk4LDI1MS4yMiwzMDcuODUxLDE5OC40MTQsMjU3LjQ1MnogTTI3My43MTcsMzc1LjQwMg0KCQkJYy0xMC40NTEsMTIuMjc3LTI1LjA4MSwxMi4yNDQtMzUuNTA3LTAuMDYybC0xNS42NTEtMTguNDczaDY2LjkzOEwyNzMuNzE3LDM3NS40MDJ6IE0zMDIuMjcxLDM0MS44NjRIMjA5Ljg1bC0xMi44OTEtMTUuMjE2DQoJCQlsMjIuMDc0LTUuNDcyYzMuMzQ4LTAuODI5LDUuNjk2LTMuOTA3LDUuNjk2LTcuMzU1bDAuMDAxLTIzLjIwNmMyMC42NCw2Ljg4LDQyLjQzNyw2LjgwNSw2Mi41NTIsMC4yMTQNCgkJCWMwLjE0MSwyMy45NzUtMC4zMjIsMjMuNDI2LDAuNDE4LDI1LjU0MWMwLjgxOCwyLjMzOCwyLjc2Nyw0LjE4Myw1LjI3Nyw0LjgwNWwyMi4yMTksNS41MDdMMzAyLjI3MSwzNDEuODY0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'
      }
    },
    {
      id: '2',
      label: [
        'myoncare',
        ''
      ],
      labelSize: 1,
      hasActionLabel: '',
      hasNoActionLabel: 'Die Akteure in der Überschrift dieser Spalte verarbeiten keine Daten',
      backgroundColor: '#ffffff',
      labelColor: '#e94c89',
      iconColor: '#e94c89',
      borderColor: '#28b4e6',
      borderSize: 2,
      icon: {
        id: 'myoncare',
        dataUri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQo8L3N0eWxlPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNTYiIHkxPSItMTEyOC43NTk4IiB4Mj0iMjU2IiB5Mj0iLTYxOS4zNjg5IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgLTUzNy45MTQ0KSI+DQoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0YwQjQyOCIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNTEiIHN0eWxlPSJzdG9wLWNvbG9yOiNFOTY0NjQiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRTcyMjgyIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1MS4yLDkuMmMtMzUuMSwwLTY5LDEyLjMtOTUuNSwzNC41Yy0yNy4xLTIyLjItNjEtMzQuNS05NS41LTM0LjVDNzAuOSw5LjIsMCw4Ni44LDAsMTgyLjMNCgljMCwzOS40LDEyLjksNzcuNiwzNywxMDkuN2MxMi45LDE3LjMsNzAuOSw4MS4zLDE3NS42LDE5Mi4ybDIuNSwyLjVjMjMuNCwyMi4yLDYwLjQsMjEuNiw4Mi42LTEuOGwwLDBsMC42LTAuNg0KCUM0MDMuNSwzNzIuMSw0NjIuMSwzMDguNiw0NzUsMjkyYzI0LjYtMzEuNCwzNy42LTY5LjYsMzctMTA5LjdDNTExLjQsODcuNCw0NDAuNSw5LjIsMzUxLjIsOS4yeiBNMjU1LjcsMTAxDQoJYzE2LDIzLjQsMjUuMyw1MS44LDI1LjMsODAuMWMwLDE2LjYtMTEuNywyOS0yNS4zLDI5cy0yNS4zLTEyLjktMjUuMy0yOUMyMzEsMTUyLjcsMjM5LjcsMTI1LDI1NS43LDEwMXogTTQ0NC4yLDI2Ny45DQoJYy0xMS43LDE0LjgtNzAuMiw3OC45LTE3NC40LDE4OC41Yy03LjQsOC0xOS4xLDgtMjcuMSwxLjJsLTAuNi0wLjZsLTEuMi0xLjJDMTM3LjQsMzQ2LjgsNzkuNSwyODIuNyw2Ny44LDI2Ny45DQoJYy0xOC41LTI1LjMtMjguMy01NS40LTI4LjMtODYuM2MwLTc1LjIsNTQuMi0xMzQuMywxMjAuOC0xMzQuM2MyNC42LDAsNDkuMyw4LjYsNjguNCwyNGMtMjQuNiwzMS40LTM3LjYsNjkuNi0zNywxMDkuNw0KCWMwLDM3LjYsMjguMyw2OC40LDY0LjEsNjguNHM2NC4xLTMwLjgsNjQuMS02OC40YzAtMzkuNC0xMi45LTc4LjItMzctMTA5LjdjMTkuNy0xNC44LDQzLjctMjIuOCw2OC40LTIyLjgNCgljNjYuNSwwLDEyMC44LDU5LjEsMTIwLjgsMTMyLjVDNDcyLjUsMjEyLjUsNDYyLjcsMjQzLjMsNDQ0LjIsMjY3Ljl6Ii8+DQo8L3N2Zz4NCg=='
      }
    },
    {
      id: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
      label: [
        'Behandlungsteam',
        ''
      ],
      labelSize: 1,
      hasActionLabel: '',
      hasNoActionLabel: '',
      backgroundColor: '#ffffff',
      labelColor: '#e94c89',
      iconColor: '#e94c89',
      borderColor: '#28b4e6',
      borderSize: 2,
      icon: {
        id: 'med_team',
        dataUri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDUxLjcyLDIzNy4yNmMtMTcuNDIyLTguNzEtNTAuMDg3LTguODExLTUxLjQ2OS04LjgxMWMtNC4xNDIsMC03LjUsMy4zNTgtNy41LDcuNWMwLDQuMTQyLDMuMzU4LDcuNSw3LjUsNy41DQoJCQljOC40MjksMC4wMDEsMzIuOTAyLDEuMjk5LDQ0Ljc2MSw3LjIyOGMxLjA3NywwLjUzOSwyLjIyMSwwLjc5MywzLjM0OCwwLjc5M2MyLjc1MSwwLDUuNC0xLjUyLDYuNzE0LTQuMTQ3DQoJCQlDNDU2LjkyNywyNDMuNjE4LDQ1NS40MjUsMjM5LjExMyw0NTEuNzIsMjM3LjI2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDg5LjExMiwzNDQuMDQxbC0zMC45NzUtOC44NWMtMS4zMzctMC4zODItMi4yNzEtMS42Mi0yLjI3MS0zLjAxMXYtMTAuMzM5YzIuNTItMS43NDYsNC45MjQtMy43LDcuMTcxLTUuODgxDQoJCQljMTAuODktMTAuNTY4LDE2Ljg4Ny0yNC43NDMsMTYuODg3LTM5LjkxNXYtMTQuMjY3bDIuOTk1LTUuOTg5YzMuMjg3LTYuNTc1LDUuMDI0LTEzLjkzNiw1LjAyNC0yMS4yODZ2LTM4LjY1DQoJCQljMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNUg0MDguMjdjLTI2LjI0NCwwLTQ3LjU5NiwyMS4zNTItNDcuNTk2LDQ3LjU5NnYwLjQ0N2MwLDYuMTEyLDEuNDQ1LDEyLjIzMyw0LjE3OCwxNy42OTlsMy44NDEsNy42ODINCgkJCXYxMi4yNWMwLDE5LjQxNCw5LjU2NywzNi44MzMsMjQuMDU4LDQ3LjMxNWwwLjAwMiwxMC44MzZjMCwxLjY3MSwwLDIuMzYzLTYuMTkzLDQuMTMzbC0xNS4xMTQsNC4zMThsLTQzLjcyMS0xNS44OTgNCgkJCWMwLjE1Ny0yLjA2My0wLjUzOS00LjE2MS0yLjA0NC01Ljc0MmwtMTMuOTcxLTE0LjY3OHYtMjQuNjRjMS40NzctMS4yMTcsMi45MzMtMi40NjcsNC4zNDQtMy43ODkNCgkJCWMxNy42MjUtMTYuNTIsMjcuNzMzLTM5Ljg0NCwyNy43MzMtNjMuOTkxdi0xOS42NzhjNS4zMjItMTEuNTgxLDguMDE5LTIzLjgzNiw4LjAxOS0zNi40NTd2LTgwLjE5YzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjUNCgkJCUgyMzIuMDM3Yy0zOS41MSwwLTcxLjY1MywzMi4xNDQtNzEuNjUzLDcxLjY1M3YxNi4wMzljMCwxMi42MjEsMi42OTcsMjQuODc2LDguMDE5LDM2LjQ1N3YxNi45MzENCgkJCWMwLDI4LjAzNiwxMi40NjYsNTMuMjk0LDMyLjA3Nyw2OS45NDZ2MjUuMjJsLTEzLjk3MSwxNC42NzhjLTEuNTA1LDEuNTgxLTIuMjAxLDMuNjc5LTIuMDQ0LDUuNzQybC00Ni4xNDUsMTYuNzc5DQoJCQljLTMuMzQ0LDEuMjE2LTYuNDUxLDIuODYzLTkuMjcyLDQuODU4bC03LjI0Ni0zLjYyM2MyMS41Ny05LjM4OSwyOC40MDMtMjIuNTk0LDI4LjczMS0yMy4yNWMxLjA1Ni0yLjExMSwxLjA1Ni00LjU5NywwLTYuNzA4DQoJCQljLTUuNDA3LTEwLjgxNC02LjA2Mi0zMC42MzUtNi41ODgtNDYuNTYxYy0wLjE3NS01LjMwMi0wLjM0MS0xMC4zMTEtMC42NTgtMTQuNzcxYy0yLjU1Ny0zNS45NzQtMjkuOTA1LTYzLjEwMy02My42MTUtNjMuMTAzDQoJCQlzLTYxLjA1OSwyNy4xMjgtNjMuNjE1LDYzLjEwM2MtMC4zMTcsNC40NjEtMC40ODMsOS40Ny0wLjY1OCwxNC43NzNjLTAuNTI2LDE1LjkyNS0xLjE4MiwzNS43NDQtNi41ODgsNDYuNTU4DQoJCQljLTEuMDU2LDIuMTExLTEuMDU2LDQuNTk3LDAsNi43MDhjMC4zMjgsMC42NTYsNy4xNDcsMTMuODM0LDI4Ljc2LDIzLjIzNGwtMjAuMTI3LDEwLjA2M0M2LjY4NCwzNTguMTc2LDAsMzY4Ljk5MSwwLDM4MS4wMg0KCQkJdjU1LjQwOWMwLDQuMTQyLDMuMzU4LDcuNSw3LjUsNy41czcuNS0zLjM1OCw3LjUtNy41VjM4MS4wMmMwLTYuMzEyLDMuNTA3LTExLjk4Nyw5LjE1Mi0xNC44MWwyNS4wNjMtMTIuNTMxbDguNzE4LDguMjg1DQoJCQljNi4wOTYsNS43OTMsMTMuOTE2LDguNjg4LDIxLjczOSw4LjY4OGM3LjgyMSwwLDE1LjY0NS0yLjg5NywyMS43MzktOC42ODhsOC43MTctOC4yODRsOC4xNzIsNC4wODYNCgkJCWMtMy44NDgsNi4xNTctNi4wMzIsMTMuMzc3LTYuMDMyLDIwLjk0djU3LjcyNWMwLDQuMTQyLDMuMzU4LDcuNSw3LjUsNy41YzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjV2LTU3LjcyNQ0KCQkJYzAtMTAuMjk2LDYuNTAxLTE5LjU3OCwxNi4xNzgtMjMuMDk3bDQ4LjY1Mi0xNy42OTFsMjAuMjUzLDMwLjM4MWMyLjU4OSwzLjg4NCw2LjczOCw2LjM3NSwxMS4zODMsNi44MzUNCgkJCWMwLjUxOCwwLjA1MSwxLjAzMywwLjA3NiwxLjU0NywwLjA3NmM0LjA5OCwwLDguMDIzLTEuNjEzLDEwLjk1Ny00LjU0NmwxMi4zNTYtMTIuMzU2djc4LjEyNGMwLDQuMTQyLDMuMzU4LDcuNSw3LjUsNy41DQoJCQljNC4xNDIsMCw3LjUtMy4zNTgsNy41LTcuNXYtNzguMTI0bDEyLjM1NiwxMi4zNTZjMi45MzMsMi45MzQsNi44NTgsNC41NDcsMTAuOTU3LDQuNTQ3YzAuNTEzLDAsMS4wMjktMC4wMjUsMS41NDYtMC4wNzYNCgkJCWM0LjY0Ni0wLjQ2LDguNzk1LTIuOTUxLDExLjM4NC02LjgzNWwyMC4yNTQtMzAuMzhsNDguNjUxLDE3LjY5MWM5LjY3NiwzLjUxOSwxNi4xNzgsMTIuODAxLDE2LjE3OCwyMy4wOTd2NTcuNzI1DQoJCQljMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNWM0LjE0MiwwLDcuNS0zLjM1OCw3LjUtNy41di01Ny43MjVjMC0xMC40MjgtNC4xNDMtMjAuMjA4LTExLjA5My0yNy40NDFsMS44NTMtMC41MjkNCgkJCWMxLjg2OS0wLjUzNCw0LjQxOS0xLjI2NSw2Ljk3OS0yLjUybDE5LjE0OSwxOS4xNDl2NjkuMDY2YzAsNC4xNDIsMy4zNTgsNy41LDcuNSw3LjVjNC4xNDIsMCw3LjUtMy4zNTgsNy41LTcuNXYtNjkuMDY2DQoJCQlsMTkuMDE2LTE5LjAxNmMxLjAxMSwwLjUxNCwyLjA3MywwLjk0OCwzLjE5MSwxLjI2N2wzMC45NzYsOC44NWM3LjA3LDIuMDIsMTIuMDA5LDguNTY3LDEyLjAwOSwxNS45MjF2NjIuMDQ0DQoJCQljMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNWM0LjE0MiwwLDcuNS0zLjM1OCw3LjUtNy41di02Mi4wNDRDNTEyLDM2MC4zNzEsNTAyLjU4OCwzNDcuODkyLDQ4OS4xMTIsMzQ0LjA0MXogTTQ4LjExNSwzMzAuNzk0DQoJCQljLTE0LjAyOS01LjA0OC0yMS4wNjYtMTEuNzc4LTI0LjA3LTE1LjQ1M2MyLjA0OC01LjM1NCwzLjM3Ni0xMS40ODYsNC4yNzUtMTcuOTU5YzQuMTM2LDkuOTE3LDExLjA2MywxOC4zODMsMTkuNzk1LDI0LjQyMw0KCQkJVjMzMC43OTR6IE05MS4wOCwzNTEuMDkyYy02LjM5Nyw2LjA3OC0xNi40MTgsNi4wNzctMjIuODEzLTAuMDAxbC02Ljk3NS02LjYyOGMxLjE3Ny0yLjIwNSwxLjgyNC00LjcwNSwxLjgyNC03LjMyNHYtNy45OTQNCgkJCWM1LjIzMiwxLjYzNSwxMC43OTQsMi41MTcsMTYuNTU4LDIuNTE3YzUuNzU3LDAsMTEuMzE2LTAuODg2LDE2LjU1Ny0yLjUxMmwtMC4wMDEsNy45ODhjMCwyLjYyLDAuNjQ2LDUuMTIxLDEuODI0LDcuMzI3DQoJCQlMOTEuMDgsMzUxLjA5MnogTTc5LjY3NiwzMTYuNjYyYy0yMi4zOTYsMC00MC42MTUtMTguMjItNDAuNjE1LTQwLjYxNWMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41Yy0wLjQyLDAtMC44MywwLjA0My0xLjIzMSwwLjExDQoJCQljMC4wMjItMC42NDUsMC4wNDMtMS4yOTEsMC4wNjUtMS45M2MwLjE2Ny01LjE1NywwLjMyOC0xMC4wMjgsMC42MjUtMTQuMjA2YzAuOTU4LTEzLjQ3Niw2LjM0My0yNS44OTQsMTUuMTYzLTM0Ljk2OA0KCQkJYzguODk5LTkuMTU2LDIwLjc5My0xNC4xOTgsMzMuNDkxLTE0LjE5OHMyNC41OTEsNS4wNDIsMzMuNDkxLDE0LjE5OGM4LjgyLDkuMDc0LDE0LjIwNSwyMS40OTIsMTUuMTYzLDM0Ljk2OA0KCQkJYzAuMjk2LDQuMTc3LDAuNDU4LDkuMDQ3LDAuNjI4LDE0LjIwM2MwLjAxNSwwLjQ0MywwLjAzLDAuODkyLDAuMDQ1LDEuMzM4Yy04LjE2LTEyLjU3Mi0yMC43NjItMjEuODM3LTM3LjA0NS0yNy4wNjkNCgkJCWMtMTUuMDQzLTQuODMzLTI3Ljk4MS00LjUzNC0yOC41MjctNC41MmMtMS45NjQsMC4wNTUtMy44MjgsMC44NzctNS4xOTEsMi4yOTFsLTEzLjUzMiwxNC4wMzQNCgkJCWMtMi44NzUsMi45ODItMi43ODksNy43MywwLjE5MywxMC42MDVzNy43MywyLjc4OCwxMC42MDUtMC4xOTNsMTEuMjYtMTEuNjc3YzkuNjk3LDAuNDc0LDQwLjg5NCw0LjEwMiw1My4wMjcsMzAuODE5DQoJCQlDMTE2LjczOCwzMDIuMDQsOTkuODE2LDMxNi42NjIsNzkuNjc2LDMxNi42NjJ6IE0xMTEuMjI5LDMzMC44MTlsMC4wMDEtOC45NDVjOC43MjUtNi4wMDcsMTUuNjYyLTE0LjQ1NywxOS44MDEtMjQuNDQ5DQoJCQljMC44OTksNi40NTgsMi4yMjYsMTIuNTc2LDQuMjcsMTcuOTE4QzEzMi4zMTQsMzE4Ljk4MywxMjUuMjQ0LDMyNS43NzMsMTExLjIyOSwzMzAuODE5eiBNMTgzLjQwMywyMDkuMTQ1di0xOC42MDgNCgkJCWMwLTEuMTI5LTAuMjU1LTIuMjQ0LTAuNzQ2LTMuMjYxYy00LjgyNi05Ljk5NC03LjI3My0yMC41OTgtNy4yNzMtMzEuNTE4VjEzOS43MmMwLTMxLjIzOSwyNS40MTUtNTYuNjUzLDU2LjY1My01Ni42NTNoMTA0Ljc2OQ0KCQkJdjcyLjY5MmMwLDEwLjkyLTIuNDQ3LDIxLjUyNC03LjI3MywzMS41MThjLTAuNDkxLDEuMDE3LTAuNzQ2LDIuMTMyLTAuNzQ2LDMuMjYxdjIxLjM1NWMwLDIwLjMxMS04LjE2NSwzOS4xNS0yMi45OTEsNTMuMDQ3DQoJCQljLTEuODUxLDEuNzM0LTMuNzcyLDMuMzYtNS43NTgsNC44NzVjLTAuMDQ0LDAuMDMtMC4wODYsMC4wNjMtMC4xMjksMC4wOTRjLTEzLjg4OSwxMC41NDUtMzAuOTAxLDE1LjY3LTQ4LjY2NywxNC41MTkNCgkJCUMyMTMuMjAxLDI4MS45NjUsMTgzLjQwMywyNDguODk3LDE4My40MDMsMjA5LjE0NXogTTIyNS42MzIsMzYwLjA1NmMtMC4wNTIsMC4wNTItMC4xNzMsMC4xNzUtMC40MTgsMC4xNDkNCgkJCWMtMC4yNDQtMC4wMjQtMC4zNC0wLjE2Ny0wLjM4MS0wLjIyOWwtMjMuMzI1LTM0Ljk4OGw3LjUwNi03Ljg4N2wzNS4zODUsMjQuMTg3TDIyNS42MzIsMzYwLjA1NnogTTI1Ni4wOTUsMzMxLjExMw0KCQkJbC00MC42MTUtMjcuNzYydi0xNGMxMC41MDksNS42ODEsMjIuMjc2LDkuMjM0LDM0Ljc5MSwxMC4wNDRjMS45NzcsMC4xMjgsMy45NDIsMC4xOTEsNS45MDEsMC4xOTENCgkJCWMxNC4zNDEsMCwyOC4xNDMtMy40MjgsNDAuNTM4LTkuOTM1djEzLjdMMjU2LjA5NSwzMzEuMTEzeiBNMjg3LjM1NywzNTkuOTc4Yy0wLjA0MSwwLjA2Mi0wLjEzNywwLjIwNS0wLjM4MSwwLjIyOQ0KCQkJYy0wLjI0NSwwLjAzMS0wLjM2NS0wLjA5OC0wLjQxOC0wLjE0OWwtMTguNzY3LTE4Ljc2N2wzNS4zODUtMjQuMTg4bDcuNTA3LDcuODg3TDI4Ny4zNTcsMzU5Ljk3OHogTTQyNC4zMDgsMzUzLjY1bC0xNy4wMi0xNy4wMTkNCgkJCWMwLjI5Ny0xLjM0OSwwLjQ2NS0yLjgyNiwwLjQ2NC00LjQ1NWwtMC4wMDEtMy4xNjVjNC43MjMsMS41NSw5LjcwMSwyLjQ3LDE0Ljg1MiwyLjYyNGMwLjU3OCwwLjAxOCwxLjE1MSwwLjAyNiwxLjcyNywwLjAyNg0KCQkJYzUuNjkyLDAsMTEuMjQ4LTAuODYsMTYuNTM2LTIuNTAxdjMuMDJjMCwxLjQ5NiwwLjE4OCwyLjk2MiwwLjU0Miw0LjM3MUw0MjQuMzA4LDM1My42NXogTTQ1Mi41OTEsMzA1LjE5Ng0KCQkJYy03Ljk0OSw3LjcxNC0xOC40NSwxMS43ODgtMjkuNTM3LDExLjQ0NmMtMjEuNzA0LTAuNjUxLTM5LjM2MS0xOS43NjgtMzkuMzYxLTQyLjYxM3YtMTQuMDIxYzAtMS4xNjUtMC4yNzEtMi4zMTMtMC43OTItMy4zNTQNCgkJCWwtNC42MzMtOS4yNjZjLTEuNjk3LTMuMzk1LTIuNTk0LTcuMTk1LTIuNTk0LTEwLjk5MXYtMC40NDdjMC0xNy45NzQsMTQuNjIzLTMyLjU5NiwzMi41OTYtMzIuNTk2aDY0LjY3M3YzMS4xNQ0KCQkJYzAsNS4wMzQtMS4xOSwxMC4wNzUtMy40NDEsMTQuNTc4bC0zLjc4Niw3LjU3MmMtMC41MjEsMS4wNDItMC43OTIsMi4xODktMC43OTIsMy4zNTR2MTYuMDM4DQoJCQlDNDY0LjkyNCwyODcuMTI2LDQ2MC41NDQsMjk3LjQ3OCw0NTIuNTkxLDMwNS4xOTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NzIuNDIzLDM4MC44MTRjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjV2NDguMTE1YzAsNC4xNDIsMy4zNTgsNy41LDcuNSw3LjVjNC4xNDIsMCw3LjUtMy4zNTgsNy41LTcuNXYtNDguMTE1DQoJCQlDNDc5LjkyMywzODQuMTczLDQ3Ni41NjUsMzgwLjgxNCw0NzIuNDIzLDM4MC44MTR6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zOS41NzcsMzkwLjcyOGMtNC4xNDIsMC03LjUsMy4zNTgtNy41LDcuNXYzOC4yMDFjMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNWM0LjE0MiwwLDcuNS0zLjM1OCw3LjUtNy41di0zOC4yMDENCgkJCUM0Ny4wNzcsMzk0LjA4Nyw0My43MTksMzkwLjcyOCwzOS41NzcsMzkwLjcyOHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTMxNy41MzIsMTU4LjQ3NWMtMjguMzY2LTI4LjM2Ni04Ny43MTUtMjIuOTQzLTExMS45MTctMTkuMjk1Yy03LjYyMywxLjE0OS0xMy4xNTUsNy42LTEzLjE1NSwxNS4zMzl2MTcuMjc4DQoJCQljMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNWM0LjE0MiwwLDcuNS0zLjM1OCw3LjUtNy41di0xNy4yNzljMC0wLjI1NSwwLjE2OC0wLjQ3MywwLjM5Mi0wLjUwNw0KCQkJYzkuNjY3LTEuNDU3LDI4Ljg1LTMuNzA1LDQ4LjcyNS0yLjM4YzIzLjM4OCwxLjU1Nyw0MC4zMjgsNy40MjgsNTAuMzQ5LDE3LjQ1YzIuOTI5LDIuOTI5LDcuNjc4LDIuOTI5LDEwLjYwNiwwDQoJCQlDMzIwLjQ2MSwxNjYuMTUyLDMyMC40NjEsMTYxLjQwMywzMTcuNTMyLDE1OC40NzV6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNjcuODg0LDM5Ni44NTNjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjV2MzIuMDc3YzAsNC4xNDIsMy4zNTgsNy41LDcuNSw3LjVjNC4xNDIsMCw3LjUtMy4zNTgsNy41LTcuNXYtMzIuMDc3DQoJCQlDMTc1LjM4NCw0MDAuMjEyLDE3Mi4wMjYsMzk2Ljg1MywxNjcuODg0LDM5Ni44NTN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNDQuMzA2LDM5Ni44NTNjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjV2MzIuMDc3YzAsNC4xNDIsMy4zNTgsNy41LDcuNSw3LjVjNC4xNDIsMCw3LjUtMy4zNTgsNy41LTcuNXYtMzIuMDc3DQoJCQlDMzUxLjgwNiw0MDAuMjEyLDM0OC40NDgsMzk2Ljg1MywzNDQuMzA2LDM5Ni44NTN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo='
      }
    }
  ],
  connectionTypes: [
    {
      id: 'ct1',
      title: 'Default',
      color: '#7D7D7D',
      textColor: 'black',
      legend: true,
      legendOrder: 1,
      legendLabel: 'Beschreibung der Verbindung',
      'default': true,
      labelSize: 1
    },
    {
      id: 'ct2',
      title: 'Annonym',
      color: '#7D7D7D',
      textColor: 'black',
      legend: true,
      legendOrder: 1,
      legendLabel: 'Beschreibung der Verbindung',
      'default': true,
      strokeDasharray: '10, 10',
      labelSize: 1
    },
    {
      id: '803a726f-c6c0-4423-9eb1-466d6b681807',
      color: '#008080',
      textColor: '#aaaaaa',
      colorInactive: '#aaaaaa',
      textColorInactive: '#aaaaaa',
      strokeDasharray: '3,6',
      legend: true,
      legendOrder: 2,
      legendLabel: '',
      'default': false,
      title: 'Verzweigung',
      labelSize: 1
    }
  ],
  boxTypes: [
    {
      id: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
      title: 'Datenprozesse',
      color: '#229955',
      textColor: '#ffffff',
      colorInactive: '#28b464',
      textColorInactive: '#ffffff',
      borderColor: '#ff00ff',
      borderWidth: 0,
      borderStrokeDasharray: '#ff00ff',
      legend: true,
      legendOrder: 0,
      legendLabel: '#ff00ff',
      sourceDefault: true,
      purposeDefault: true,
      actionDefault: true,
      labelSize: 1,
      shortInfoLabelSize: 0.8,
      shortInfoBackground: '#f0aa28',
      shortInfoActiveBackground: '#db940f',
      infoIconBackground: '#e72282',
      infoIconActiveBackground: '#b81462',
      policyIconBackground: '#e72282',
      policyIconActiveBackground: '#bc1464'
    },
    {
      id: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
      color: '#179cce',
      textColor: '#ffffff',
      colorInactive: '#28b4e6',
      textColorInactive: '#ffffff',
      borderColor: '#ffffff',
      borderWidth: 0,
      borderStrokeDasharray: '#ffffff',
      legend: true,
      legendOrder: 0,
      legendLabel: '#ffffff',
      sourceDefault: true,
      purposeDefault: true,
      actionDefault: true,
      labelSize: 1,
      shortInfoLabelSize: 0.8,
      shortInfoBackground: '#f0aa28',
      shortInfoActiveBackground: '#efa212',
      infoIconBackground: '#e94c89',
      infoIconActiveBackground: '#e42e77',
      policyIconBackground: '#e94c89',
      policyIconActiveBackground: '#e32471',
      title: 'Datenkategorien und -ziele'
    },
    {
      id: '2a11c270-00d7-49c7-83b7-0a812e97ac2c',
      color: '#d9930f',
      textColor: '#ffffff',
      colorInactive: '#f0aa28',
      textColorInactive: '#ffffff',
      borderColor: '#ffffff',
      borderWidth: 0,
      borderStrokeDasharray: '#ffffff',
      legend: true,
      legendOrder: 0,
      legendLabel: '#ffffff',
      sourceDefault: true,
      purposeDefault: true,
      actionDefault: true,
      labelSize: 1,
      shortInfoLabelSize: 0.8,
      shortInfoBackground: '#e72282',
      shortInfoActiveBackground: '#ae135c',
      infoIconBackground: '#e72282',
      infoIconActiveBackground: '#a21156',
      policyIconBackground: '#e72282',
      policyIconActiveBackground: '#a71259',
      title: 'Optional'
    },
    {
      id: '16a961e6-924b-43cb-a2d3-3f6d5a777af0',
      color: '#bc1464',
      textColor: '#ffffff',
      colorInactive: '#e72282',
      textColorInactive: '#ffffff',
      borderColor: '#ffffff',
      borderWidth: 0,
      borderStrokeDasharray: '#ffffff',
      legend: true,
      legendOrder: 0,
      legendLabel: '#ffffff',
      sourceDefault: true,
      purposeDefault: true,
      actionDefault: true,
      labelSize: 1,
      shortInfoLabelSize: 0.8,
      shortInfoBackground: '#28b4e6',
      shortInfoActiveBackground: '#1693c2',
      infoIconBackground: '#28b4e6',
      infoIconActiveBackground: '#1691be',
      policyIconBackground: '#28b4e6',
      policyIconActiveBackground: '#1482ab',
      title: 'Prozess Optional'
    },
    {
      id: '6ef60d9c-945d-44fe-b7f3-16a3aa80ae64',
      color: '#b0b0b0',
      textColor: '#000000',
      colorInactive: '#b2b2b2',
      textColorInactive: '#000000',
      borderColor: '#ffffff',
      borderWidth: 0,
      borderStrokeDasharray: '#ffffff',
      legend: true,
      legendOrder: 0,
      legendLabel: '#ffffff',
      sourceDefault: true,
      purposeDefault: true,
      actionDefault: true,
      labelSize: 1,
      shortInfoLabelSize: 0.8,
      shortInfoBackground: '#ff80ff',
      shortInfoActiveBackground: '#ff80ff',
      infoIconBackground: '#666666',
      infoIconActiveBackground: '#666666',
      policyIconBackground: '#666666',
      policyIconActiveBackground: '#666666',
      title: 'Gesetzgeber oder Behörden'
    }
  ],
  cases: [
    {
      id: '77188745-addb-4c6d-af43-62d35921a7a5',
      label: 'Sichere Registrierung',
      info: '',
      permissions: '',
      dataSources: [
        {
          id: '5-dp1',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Informationen aus dem Gespräch mit Ihrem Leistungserbringer',
            ''
          ],
          shortInfo: null,
          info: null,
          position: {
            start: 0,
            end: 0
          },
          itemSymbols: [
            {
              customSymbolId: 'b4a9c476-2d96-4f25-9354-a74b0901efde',
              title: 'Leistungserbringer',
              text: '<p>Ihr Arzt, Ihre Klinik, Ihre Gesundheitseinrichtung oder andere Angehörige der Gesundheitsberufe, die allein oder im Auftrag Ihres Arztes, Ihrer Klinik oder Ihrer Gesundheitseinrichtung handeln.</p>'
            }
          ]
        },
        {
          id: '81e89b5f-d390-419e-b0ec-3f462a9585a0',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Einverständnis zur Nutzung myoncare zwischen Ihnen und Ihrem Leistungserbringer'
          ],
          position: {
            start: 1,
            end: 1
          },
          shortInfo: null,
          info: null,
          itemSymbols: []
        },
        {
          id: '59fb0bf3-92f8-4095-a405-709811c466fd',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Ihre myoncare-Account-Daten'
          ],
          position: {
            start: 2,
            end: 2
          },
          shortInfo: null,
          itemSymbols: [
            {
              customSymbolId: 'b4a9c476-2d96-4f25-9354-a74b0901efde',
              title: 'Minimale Datenanforderungen',
              text: '<p>Vom Leistungserbringer zu befüllen:</p><ul><li>Patienten ID</li><li>Geburtsdatum</li><li>Vorname</li><li>Nachname</li><li>Standort</li></ul>'
            },
            {
              customSymbolId: 'ce976938-6cff-423f-980c-c7368239e7b9',
              title: '',
              text: 'Wir speichern Daten grundsätzlich nur so lange, wie dies für die Verarbeitung erforderlich ist. Bitte beachten Sie, dass zahlreiche Aufbewahrungsfristen die weitere Speicherung von personenbezogenen Daten erfordern. Dies gilt insbesondere für handelsrechtliche oder steuerrechtliche Aufbewahrungspflichten (z. B. Handelsgesetzbuch, Steuergesetz, etc.). ... check, wie ausführlich hier'
            },
            {
              customSymbolId: '270c03d7-1194-46f8-be81-7ec56a74c20d',
              title: '',
              text: ''
            }
          ]
        }
      ],
      dataPurposes: [
        {
          id: '1-dp1',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Ratschlag des Leistungserbringers, Einstieg in eine Therapie bzw. die digitale Betreuung',
            ''
          ],
          position: {
            start: 0,
            end: 0
          },
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '4a46afa7-70ef-4740-bd79-f24fcbb0ecb9',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Effizientere Kommunikation, digitale Betreuung',
            ''
          ],
          position: {
            start: 1,
            end: 1
          }
        },
        {
          id: '35eeecc2-2058-4f99-bd42-2984d5411555',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Grundlage für eine digital unterstützte Kommunikation mit Ihrem Leistungserbringer schaffen',
            ''
          ],
          position: {
            start: 2,
            end: 2
          },
          shortInfo: null,
          itemSymbols: []
        }
      ],
      actions: [
        {
          id: '4101df50-cd51-4ef0-b358-efdff4c9d53f',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Initialer Besuch bei Ihrem Leistungserbringer, welcher Patientenakte anlegt',
            ''
          ],
          position: {
            start: 0,
            end: 0
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          info: null,
          itemSymbols: []
        },
        {
          id: '46c1fd6f-7244-45a3-a209-af223f7fa617',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Vereinbarung zur Nutzung von myoncare'
          ],
          position: {
            start: 1,
            end: 1
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          info: '<p>Vereinbarung erfolgt verbal, ggf. Unterzeichnung der Datenschutzerklärung Ihres Leistungserbringers</p>',
          erasurePolicy: '',
          storagePolicy: ''
        },
        {
          id: '9ad1224d-3197-41da-9eae-d63ad6e9c3b2',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Bereitstellung des Nutzerzugangs'
          ],
          position: {
            start: 2,
            end: 2
          },
          participantID: '2',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '99e94618-045c-459c-9108-bb059dd3dd70',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Anlage Ihres myoncare-Acoounts durch Leistungserbringer, Erzeugung eines individuellen QR-Codes'
          ],
          position: {
            start: 2,
            end: 2
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          info: '<p>Ihr Leistungserbringer</p><ul><li>erstellt einen individuellen Patienten-QR-Code für den myoncare Login</li><li>pflegt erste Daten in dem Account ein</li></ul>',
          erasurePolicy: 'Nach gesetlichen Vorgaben',
          storagePolicy: 'On Premise oder Cloud',
          itemSymbols: [
            {
              customSymbolId: 'b4a9c476-2d96-4f25-9354-a74b0901efde',
              title: 'QR code',
              text: '<p>Ein digitaler, einzigartiger und maschinenlesbarer Identifikationscode.</p>'
            }
          ]
        },
        {
          id: 'ce90393b-6be8-4a77-807f-1ba50bb47430',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Aktivierung Ihres Nutzerkontos bei myoncare über Ihr mobiles Endgerät'
          ],
          position: {
            start: 2,
            end: 2
          },
          participantID: '1',
          shortInfo: null,
          infoTitle: '',
          erasurePolicy: '',
          info: '<p>Zustimmung myoncare Datenschutzbestimmung</p>',
          itemSymbols: []
        }
      ],
      connections: [
        {
          id: '2f837227-b481-45fd-8552-b0d9696997e4',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '4101df50-cd51-4ef0-b358-efdff4c9d53f',
          destination: '46c1fd6f-7244-45a3-a209-af223f7fa617',
          position: {
            start: 0,
            end: 1
          }
        },
        {
          id: '2468bab2-ef6f-462c-8bae-213b72905014',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '46c1fd6f-7244-45a3-a209-af223f7fa617',
          destination: '99e94618-045c-459c-9108-bb059dd3dd70',
          position: {
            start: 1,
            end: 2
          }
        },
        {
          id: 'd65fbef6-0fb0-489e-ba8e-97df279d671c',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '99e94618-045c-459c-9108-bb059dd3dd70',
          destination: '9ad1224d-3197-41da-9eae-d63ad6e9c3b2',
          position: {
            start: 2,
            end: 2
          }
        },
        {
          id: '0a3ac714-52be-4682-8263-d51f76d24b1e',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '9ad1224d-3197-41da-9eae-d63ad6e9c3b2',
          destination: 'ce90393b-6be8-4a77-807f-1ba50bb47430',
          position: {
            start: 2,
            end: 2
          }
        }
      ],
      isOpen: true,
      infoTitle: '',
      itemSymbols: [
        {
          customSymbolId: '408a8e5c-c31f-44de-8846-846e65e510ad',
          title: '',
          text: '<p><span style="color: black;">Technische Voraussetzungen für Smartphones:</span></p><ul><li><span style="color: black;">iOS 12 (oder höher) / Android 8 (oder höher)</span></li><li><span style="color: black;">Herunterladen von myoncare aus dem AppStore/ Google PlayStore</span></li><li><span style="color: black;">Erlauben des Kamerazugriffs (innerhalb der App, verpflichtend)</span></li><li><span style="color: black;">Erlauben des Mikrofonzugriffs (für Videotelefonie verpflichtend, sonst optional; innerhalb der App)</span></li><li><span style="color: black;">Erlauben von Pushnachrichten (als reminder, innerhalb der App, optional)</span></li></ul><p><br></p>'
        }
      ]
    },
    {
      id: '5b366802-a144-472a-8e8a-b9a08a4cca80',
      label: 'Anlegen eines digitalen Behandlungspfades mit Gesundheits-Checkups',
      dataSources: [
        {
          id: '9e73b0c7-0adf-40ab-bd81-3cf7459cbc2a',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Informationen aus dem Gespräch bei Ihrem Leistungserbringer',
            ''
          ],
          position: {
            start: 0,
            end: 0
          },
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '96bf11a5-1310-437b-b221-70115452bfce',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Gesundheitsbozogene Informationen über Sie ',
            ''
          ],
          position: {
            start: 1,
            end: 2
          },
          shortInfo: null,
          info: null,
          itemSymbols: [
            {
              customSymbolId: 'b4a9c476-2d96-4f25-9354-a74b0901efde',
              title: '',
              text: '<p>Die Informationen basieren auf den Ihrem Leistungserbringer zur Verfügung stehenden Daten&nbsp;(z.B. Alter, Größe Gewicht, Gesundheitsempfinden).</p>'
            }
          ]
        }
      ],
      dataPurposes: [
        {
          id: '6327aa68-f86e-43de-abbd-0ab555292bb3',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Beobachtung / Kontrolle Ihres Gesundheitszustandes',
            'Transparenz für Ihren Leistungserbringer',
            ''
          ],
          position: {
            start: 0,
            end: 0
          },
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: 'f14ac792-b8b0-4606-82b0-7a23286b18de',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Eine für den Leistungserbringer individuell erstellte Übersicht über Ihren Gesundheitszustand, insbesondere auch zur Identifikation von Auffälligkeiten auf Basis des medizinischen Wissens Ihres Leistungserbringers'
          ],
          position: {
            start: 1,
            end: 2
          },
          shortInfo: null,
          itemSymbols: [
            {
              customSymbolId: 'b4a9c476-2d96-4f25-9354-a74b0901efde',
              title: 'Ggf. Infos zu Quellen',
              text: '<p><br></p>'
            }
          ],
          info: '<p>Hier Verweis auf Glossar?</p>'
        }
      ],
      actions: [
        {
          id: 'd9f5223c-91aa-40a7-bad2-35b80af42759',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Vereinbarung digitaler ',
            'Gesundheitsfragebögen',
            ''
          ],
          position: {
            start: 0,
            end: 0
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '3d4b1e63-a8a5-4d8b-bbf0-48becbc4a620',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Versenden eines initialen ',
            'Gesundheitsfragebogens',
            ''
          ],
          position: {
            start: 1,
            end: 1
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '93d16e8e-9fa6-4f46-a645-b7438885ffd3',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Übermittlung des initialen Gesundheitsfragebogens  ',
            ''
          ],
          position: {
            start: 1,
            end: 1
          },
          participantID: '2',
          shortInfo: null
        },
        {
          id: 'da7ca135-0df9-4312-9cdf-02e1424ebd67',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Erhalt und Ausfüllen des initialen Gesundheitsfragebogens',
            ''
          ],
          position: {
            start: 1,
            end: 1
          },
          participantID: '1',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: 'f371ae80-5a83-4e3d-ad0e-7c9c5dd4a5a2',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Freigabe der Daten an Ihren Leistungserbringer via aktivem "Absenden" des ausgefüllten Fragebogens',
            ''
          ],
          position: {
            start: 2,
            end: 2
          },
          participantID: '1',
          shortInfo: [
            'Jede Freigabe erfolgt einzeln'
          ],
          itemSymbols: []
        },
        {
          id: '0d8115ec-db27-46fe-b2b2-f0de3d985912',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Sichere Übermittlung des Fragebogens und automatisierte technische Auswertung, falls durch Ihren Leistungserbringer initialisiert',
            ''
          ],
          position: {
            start: 2,
            end: 2
          },
          participantID: '2',
          shortInfo: null,
          info: '<p>Die Übermittlung aller Daten erfolgt Ende-zu-Ende verschlüsselt. Damit ist für jeden Unbefugten, der sich während der Übermittlung Zugriff auf die Daten verschaffen würde, nach dem heutigen Stand der Technik ein Lesen der Informationen ausgeschlossen.</p><p><br></p><p>Die technische Auswertung vergleicht die Angaben des Patienten mit Schwellwerten aus den Behandlungsrichtlinien und gibt dem Artz Hinweise auf Auffälligkeiten.</p>',
          itemSymbols: []
        },
        {
          id: '9df0e1e5-24e2-4a09-991b-9a88ac9df141',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Empfangen der Ergebnisse und Bewertung Ihrer Antworten zum Fragebogen'
          ],
          position: {
            start: 2,
            end: 2
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          itemSymbols: []
        }
      ],
      connections: [
        {
          id: '02c48709-2183-4931-beb5-458548451422',
          typeId: 'ct1',
          label: 'Ggf. Info zur Verschlüsselung',
          textEllipsis: false,
          source: 'f371ae80-5a83-4e3d-ad0e-7c9c5dd4a5a2',
          destination: '0d8115ec-db27-46fe-b2b2-f0de3d985912',
          position: {
            start: 2,
            end: 2
          }
        },
        {
          id: '6fce78a5-cc17-4776-93d1-e86a64f238c0',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'd9f5223c-91aa-40a7-bad2-35b80af42759',
          destination: '3d4b1e63-a8a5-4d8b-bbf0-48becbc4a620',
          position: {
            start: 0,
            end: 1
          }
        },
        {
          id: '484da406-387d-4943-b902-c65b1920382e',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '3d4b1e63-a8a5-4d8b-bbf0-48becbc4a620',
          destination: '93d16e8e-9fa6-4f46-a645-b7438885ffd3',
          position: {
            start: 1,
            end: 1
          }
        },
        {
          id: '2784f74f-831a-4b22-9341-c94b30f819c4',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '93d16e8e-9fa6-4f46-a645-b7438885ffd3',
          destination: 'da7ca135-0df9-4312-9cdf-02e1424ebd67',
          position: {
            start: 1,
            end: 1
          }
        },
        {
          id: '85c774a5-e8a6-40b2-9d13-c5209066ba5f',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'da7ca135-0df9-4312-9cdf-02e1424ebd67',
          destination: 'f371ae80-5a83-4e3d-ad0e-7c9c5dd4a5a2',
          position: {
            start: 1,
            end: 2
          }
        },
        {
          id: '60fd31aa-3e32-452b-a4be-7733b33f8d84',
          typeId: 'ct1',
          textEllipsis: false,
          label: 'Ggf. Infos zur Verschlüsselung',
          source: '0d8115ec-db27-46fe-b2b2-f0de3d985912',
          destination: '9df0e1e5-24e2-4a09-991b-9a88ac9df141',
          position: {
            start: 2,
            end: 2
          }
        }
      ],
      shortInfo: [],
      infoTitle: '',
      info: '',
      permissions: '',
      isOpen: false
    },
    {
      id: '6466144b-5db1-4cc3-bfd4-42ddd2644588',
      label: 'Kontinuierliche Verbesserung des digitalen Behandlungspfades und Nutzenbeispiele ',
      dataSources: [
        {
          id: 'ec93ab50-6a66-4d0c-8657-8790094130a2',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Kontinuierliche Informationen über Ihren Gesundheitszustand'
          ],
          position: {
            start: 0,
            end: 1
          },
          shortInfo: null
        },
        {
          id: '7c7d4da4-a9c1-4665-9ab7-6b2276d50f2b',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Bei Nutzung von Apple Health oder Google Fit: Mögliche Nutzung Ihrer Fitnessdaten'
          ],
          position: {
            start: 2,
            end: 3
          },
          shortInfo: null,
          itemSymbols: [
            {
              customSymbolId: 'd0ead52e-5b6d-463f-a598-b99bbfcf2330',
              title: 'Optional',
              text: '<p>Generell sind alle Prozessschritte optional. Die Nutzung Ihrer Fitnessdaten liegt komplett in Ihrer Hand und kann jederzeit wieder gestoppt werden.</p>'
            }
          ]
        },
        {
          id: 'b9385eb8-5a22-4e78-85f7-b68e00bdf821',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Wiederkehrende Aspekte Ihrer Behandlung'
          ],
          position: {
            start: 4,
            end: 4
          },
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '2505a251-fbe3-4d35-979b-2b5957550cd2',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Auffälligkeiten in der Behandlung'
          ],
          position: {
            start: 5,
            end: 7
          },
          shortInfo: null
        }
      ],
      dataPurposes: [
        {
          id: 'dcced2c1-410c-4f2b-a163-8e216a808678',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Erzeugung einer laufend verbesserten Datenbasis auf Basis der Gesundheitsfragebögen'
          ],
          position: {
            start: 0,
            end: 1
          },
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '1c7f3538-b40c-44e0-9b3a-ef5b8d65e623',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Sicherstellung angemessener Reaktionen auf alle Auffälligkeiten in der Behandlung'
          ],
          position: {
            start: 5,
            end: 7
          },
          info: '<p>Hinweis: myoncare darf nicht für medizinische Notfälle verwendet werden. Nutzen Sie hierfür andere Kommunikationswege (z.B. den telefonsichen Notruf).</p>'
        },
        {
          id: '37cc155e-55a7-413d-9381-7418c76088b0',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Erweiterung der Datenbasis durch die Nutzung von Fitnessdaten'
          ],
          position: {
            start: 2,
            end: 3
          },
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '68a21968-4693-4fe7-a0b2-c7bbbb39b70a',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Entlastung von Routinetätigkeiten'
          ],
          position: {
            start: 4,
            end: 4
          },
          shortInfo: null,
          itemSymbols: []
        }
      ],
      actions: [
        {
          id: 'a19b9f10-f053-47e1-8d90-d3d3e52995ba',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Bewertung aller vorliegenden Informationen '
          ],
          position: {
            start: 0,
            end: 0
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null
        },
        {
          id: 'b4e0ad7e-6ebc-48d1-b3f2-64ced1d03887',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Anpassung der Gesundheitsfragebögen und deren Versand'
          ],
          position: {
            start: 1,
            end: 1
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          itemSymbols: [
            {
              customSymbolId: 'b4a9c476-2d96-4f25-9354-a74b0901efde',
              title: 'Anpassungen',
              text: '<p>Ihr Arzt / der betroffene Leistungserbringer kann den Gesundheitsfragebogen bedarfsweise anpassen, z.B. ....?</p>'
            }
          ]
        },
        {
          id: 'd18494d7-d511-44de-99c6-c6ca399a7cab',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Wiederholte Beantwortung von Gesundheitsfragebögen und Absenden der Antworten'
          ],
          position: {
            start: 0,
            end: 1
          },
          participantID: '1',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: 'b0fdbf38-ba07-40c6-92fc-080eab9ea10e',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Übermittlung der angepassten Gesundheitsfragebögen'
          ],
          position: {
            start: 1,
            end: 1
          },
          participantID: '2',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: 'a89007b6-12c7-4c8c-915e-1e8e99424a04',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Sichere Übermittlung Ihrer Informationen'
          ],
          position: {
            start: 0,
            end: 0
          },
          participantID: '2',
          shortInfo: null
        },
        {
          id: '9e62fb15-5c76-4b15-84bc-1d2faee57e09',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Optionales Setzen von Erinnerungen, z,.B. an Medikamenteneinnahme'
          ],
          position: {
            start: 4,
            end: 4
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          info: '<p>Dieser Kapitel ist exemplarisch ausgewählt für alle Integrationesmöglichkeiten einer Regelkommunikation mit dem Patienten</p>',
          itemSymbols: []
        },
        {
          id: '14307213-f3ca-42e6-9a46-0f3e61afade2',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Übermittlung elektronischer Erinnerungen'
          ],
          position: {
            start: 4,
            end: 4
          },
          participantID: '2',
          shortInfo: null
        },
        {
          id: '6238b4e6-cda2-4de8-9dc7-4d8fc100fbca',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Z.B. Erhalt von Erinnerungen an Medikamenteneinnahme'
          ],
          position: {
            start: 4,
            end: 4
          },
          participantID: '1',
          shortInfo: null
        },
        {
          id: '91a18492-15d5-47c6-8b44-2fe2f70608d4',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Auffälligkeiten z.B. Hinweise auf Nebenwirkungen'
          ],
          position: {
            start: 5,
            end: 5
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          info: '<p>Dieser Kapitel ist exemplarisch ausgewählt für alle Einzelfall-Interaktionen mit dem Patienten</p>',
          itemSymbols: []
        },
        {
          id: '7cd2e424-8e68-4e94-86cc-26782400cbaf',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Überprüfung und Bewertung durch den Leistungserbringer',
            'Auswahl des besten Kontaktweges'
          ],
          position: {
            start: 6,
            end: 6
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '84749145-ada9-45d4-b821-468589f4f145',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Bereitstellung digitaler Kommunikation über Chat oder Video-Telefonie'
          ],
          position: {
            start: 6,
            end: 6
          },
          participantID: '2',
          shortInfo: null
        },
        {
          id: '409197d7-f447-42ab-8d6a-ec240118a0ac',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Direkte digitale Kommunikation mit Ihrem Arzt'
          ],
          position: {
            start: 6,
            end: 6
          },
          participantID: '1',
          shortInfo: null
        },
        {
          id: 'e99b35d5-0605-4c37-8115-663af092e69f',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Klassicher Arzttermin'
          ],
          position: {
            start: 7,
            end: 7
          },
          participantID: '1',
          shortInfo: null
        },
        {
          id: '94b8be0d-50c6-4709-b71f-2150078d6b85',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Klassische Terminvereinbarung'
          ],
          position: {
            start: 7,
            end: 7
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null
        },
        {
          id: 'fb3188a1-98b8-45ca-b24f-115cf157365e',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Falls noch nicht geschehen: Initialisierung von Apple Health oder Google Fit auf Ihrem Smartphone'
          ],
          position: {
            start: 2,
            end: 2
          },
          participantID: '1',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '87e76840-d3ad-4c06-8125-6a2b419e356b',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Ausgelesen, aggregieren und versenden der Daten',
            ''
          ],
          position: {
            start: 3,
            end: 3
          },
          participantID: '2',
          shortInfo: null,
          itemSymbols: [
            {
              customSymbolId: 'b4a9c476-2d96-4f25-9354-a74b0901efde',
              title: 'Aggregation',
              text: '<p>Die Daten werden in der Regel auf Tagesbasis aggregiert, fallweise ist stündlich möglich (?)</p>'
            }
          ]
        },
        {
          id: '5f86b149-42ca-4ce2-a7d7-c7df693cc722',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Einpflegen der Daten in der Patientenakte',
            ''
          ],
          position: {
            start: 3,
            end: 3
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '1bc46a8b-4d68-4316-8731-cd03f415a10c',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Einzelne / Selektive (?) Freigabe Ihrer Fitnessdaten für die Übermittlung mit myoncare'
          ],
          position: {
            start: 3,
            end: 3
          },
          participantID: '1',
          shortInfo: null,
          itemSymbols: []
        }
      ],
      connections: [
        {
          id: 'e42552c7-a52d-4eaa-8f73-b81ebc260fd6',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'a19b9f10-f053-47e1-8d90-d3d3e52995ba',
          destination: 'b4e0ad7e-6ebc-48d1-b3f2-64ced1d03887',
          position: {
            start: 1,
            end: 0
          }
        },
        {
          id: 'bbae4807-52fd-45c2-832e-b137d5089d2b',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'b4e0ad7e-6ebc-48d1-b3f2-64ced1d03887',
          destination: 'b0fdbf38-ba07-40c6-92fc-080eab9ea10e',
          position: {
            start: 1,
            end: 1
          }
        },
        {
          id: '211daff3-7b0f-4de3-9442-a79cf906938b',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'b0fdbf38-ba07-40c6-92fc-080eab9ea10e',
          destination: 'd18494d7-d511-44de-99c6-c6ca399a7cab',
          position: {
            start: 1,
            end: 1
          }
        },
        {
          id: 'a4ca636c-2016-453f-ad78-3cbcfff3c589',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'd18494d7-d511-44de-99c6-c6ca399a7cab',
          destination: 'a89007b6-12c7-4c8c-915e-1e8e99424a04',
          position: {
            start: 0,
            end: 0
          }
        },
        {
          id: 'd4d26f95-285a-4c31-8696-cc7d6802f22c',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'a89007b6-12c7-4c8c-915e-1e8e99424a04',
          destination: 'a19b9f10-f053-47e1-8d90-d3d3e52995ba',
          position: {
            start: 0,
            end: 0
          }
        },
        {
          id: '03e76dd8-a628-4a34-b21a-3ef12c18ab63',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '9e62fb15-5c76-4b15-84bc-1d2faee57e09',
          destination: '14307213-f3ca-42e6-9a46-0f3e61afade2',
          position: {
            start: 4,
            end: 4
          }
        },
        {
          id: '74260977-c7af-4400-83ca-8ffb169a41d5',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '14307213-f3ca-42e6-9a46-0f3e61afade2',
          destination: '6238b4e6-cda2-4de8-9dc7-4d8fc100fbca',
          position: {
            start: 4,
            end: 4
          }
        },
        {
          id: '2e076a7d-b8a4-40a9-8f2a-f14c5275d037',
          typeId: '803a726f-c6c0-4423-9eb1-466d6b681807',
          label: '',
          textEllipsis: true,
          source: '7cd2e424-8e68-4e94-86cc-26782400cbaf',
          destination: '94b8be0d-50c6-4709-b71f-2150078d6b85',
          position: {
            start: 6,
            end: 7
          }
        },
        {
          id: '7ca771c1-33e0-421f-8a5c-196c9ef00f2a',
          typeId: '803a726f-c6c0-4423-9eb1-466d6b681807',
          label: '',
          textEllipsis: true,
          source: '7cd2e424-8e68-4e94-86cc-26782400cbaf',
          destination: '84749145-ada9-45d4-b821-468589f4f145',
          position: {
            start: 6,
            end: 6
          }
        },
        {
          id: '8143e06b-fd36-4c53-80ef-76b0364796ff',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '84749145-ada9-45d4-b821-468589f4f145',
          destination: '409197d7-f447-42ab-8d6a-ec240118a0ac',
          position: {
            start: 6,
            end: 6
          }
        },
        {
          id: '28582dbc-76d1-4a3d-b014-1d15007b833f',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '94b8be0d-50c6-4709-b71f-2150078d6b85',
          destination: 'e99b35d5-0605-4c37-8115-663af092e69f',
          position: {
            start: 7,
            end: 7
          }
        },
        {
          id: '8aad4020-5733-4607-9b2f-675152621cd2',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'fb3188a1-98b8-45ca-b24f-115cf157365e',
          destination: '1bc46a8b-4d68-4316-8731-cd03f415a10c',
          position: {
            start: 2,
            end: 3
          }
        },
        {
          id: '3ab1802e-389f-4d63-a374-81ed01c93d70',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '1bc46a8b-4d68-4316-8731-cd03f415a10c',
          destination: '87e76840-d3ad-4c06-8125-6a2b419e356b',
          position: {
            start: 3,
            end: 3
          }
        },
        {
          id: 'aa0a5deb-0a31-47f5-8d0a-a4641ef8cc4c',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '87e76840-d3ad-4c06-8125-6a2b419e356b',
          destination: '5f86b149-42ca-4ce2-a7d7-c7df693cc722',
          position: {
            start: 3,
            end: 3
          }
        },
        {
          id: '0692d60e-28ac-4f18-88b0-e5e5b3039817',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '91a18492-15d5-47c6-8b44-2fe2f70608d4',
          destination: '7cd2e424-8e68-4e94-86cc-26782400cbaf',
          position: {
            start: 5,
            end: 6
          }
        }
      ],
      shortInfo: [],
      infoTitle: '',
      info: '',
      permissions: '',
      isOpen: false,
      itemSymbols: []
    },
    {
      id: 'a9c32c9f-a85e-4d5b-ad3f-6fe2d0ab5b88',
      label: 'Direkte, digitale Kommunikation mit dem Arzt ',
      dataSources: [
        {
          id: '1e0b8518-acfe-4baa-baf5-76f75959a76a',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Ihr Anliegen '
          ],
          position: {
            start: 0,
            end: 4
          },
          shortInfo: null,
          itemSymbols: [
            {
              customSymbolId: 'b4a9c476-2d96-4f25-9354-a74b0901efde',
              title: '',
              text: '<p>Um sich wegen Ihres Anliegens mit Ihrem Leistungserbringer in Verbindung zu setzen und dieses im Anschluss zu besprechen, stehen Ihnen unterschiedliche Kommunikationskanäle zur Verfügung (z.B. Video-Telefonat, Chat, persönlicher Termin).</p>'
            }
          ]
        },
        {
          id: 'd19f143f-5536-4d1f-a60d-72a4dccbcb63',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Ihr Befinden, Ihre Symptome und Fragen'
          ],
          position: {
            start: 5,
            end: 6
          },
          shortInfo: null
        }
      ],
      dataPurposes: [
        {
          id: '5f97cdc5-b5c3-4865-a932-65a312007f76',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Schnelle, flexible und einfache Kommunikation ',
            'Potentielle Vermeidung von unnötig zeitaufwändigen Besuchen in medizinischen Einrichtungen'
          ],
          position: {
            start: 0,
            end: 3
          },
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '4b424074-0293-4356-af31-5dfad026b646',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Eine dem Anliegen angemessene persönliche Kommunikation'
          ],
          position: {
            start: 4,
            end: 4
          }
        },
        {
          id: '4316dedb-ed7d-46d7-969b-1c973be9eb5e',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Eine für das Anliegen angemessene Kommunikation'
          ],
          position: {
            start: 5,
            end: 6
          },
          shortInfo: null,
          itemSymbols: []
        }
      ],
      actions: [
        {
          id: '5dcf3335-f040-4051-a9d1-d406788583de',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Anfrage zum Chat'
          ],
          position: {
            start: 0,
            end: 0
          },
          participantID: '1',
          shortInfo: null
        },
        {
          id: '548d6eb6-7c33-4791-ac22-72fa4884ee9a',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Sichere Übermittlung der Anfrage '
          ],
          position: {
            start: 0,
            end: 1
          },
          participantID: '2',
          shortInfo: null
        },
        {
          id: '9b3327f2-d45f-4e83-9e57-e50959df4924',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Erhalt der Anfrage '
          ],
          position: {
            start: 0,
            end: 2
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null
        },
        {
          id: 'e64e549c-60a8-4105-b84b-f0d6dd78cb14',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Übermittlung Terminvorschlag für eine Video-Sprechstunde'
          ],
          position: {
            start: 3,
            end: 3
          },
          participantID: '2',
          shortInfo: null
        },
        {
          id: 'bfd406ca-d055-4a84-8483-e66bd112012e',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Prüfung Terminoptionen'
          ],
          position: {
            start: 3,
            end: 4
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null
        },
        {
          id: '8b98905c-15d4-4af0-b23f-cd8d19eb2862',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Erhalt des Terminvorschlags für eine Video-Sprechstunde, die Sie entweder annehmen können oder Sie schlagen einen Alternativtermin vor'
          ],
          position: {
            start: 3,
            end: 3
          },
          participantID: '1',
          shortInfo: null
        },
        {
          id: '0e0ac69f-775d-46e0-a1cd-8f868e390eab',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Anfrage zur Video-Sprechstunde'
          ],
          position: {
            start: 1,
            end: 1
          },
          participantID: '1',
          shortInfo: null
        },
        {
          id: '34c99085-58e9-40d1-8828-1373ed75e8b5',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Erhalt der Antwort über den Chat'
          ],
          position: {
            start: 2,
            end: 2
          },
          participantID: '1',
          shortInfo: null
        },
        {
          id: '27097aaa-5484-43cb-9a8f-fed5d70d82e6',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Erhalt eines Vorschlags für einen persönlichen Termin'
          ],
          position: {
            start: 4,
            end: 4
          },
          participantID: '1',
          shortInfo: null
        },
        {
          id: '3a9cd5c7-4129-48d5-804f-1fbc71d8444d',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Sichere und vertrauensvolle Kommunikation Ihrer Anliegen via Chat oder Videosprechstunde'
          ],
          position: {
            start: 5,
            end: 6
          },
          participantID: '1',
          shortInfo: [
            'Kann ggf. auch komplett raus, da oben inhaltlich schon abgedeckt'
          ],
          itemSymbols: []
        },
        {
          id: '40811c5d-3022-4814-a1a7-fa3ab463feda',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Bereitstellung einer Infrastruktur mit hohen Sicherheitsstandards, permanente Anpassungen an den Stand der Technik'
          ],
          position: {
            start: 5,
            end: 6
          },
          participantID: '2',
          shortInfo: [
            'Kann ggf. auch komplett raus, da oben inhaltlich schon abgedeckt'
          ],
          itemSymbols: []
        },
        {
          id: 'dead28ee-dfde-4982-b345-2942a1ea9ee8',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Sichere und vertrauensvolle Kommunikation mit Patienten, Nutzung effektiver Wege'
          ],
          position: {
            start: 5,
            end: 6
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: [
            'Kann ggf. auch komplett raus, da oben inhaltlich schon abgedeckt'
          ],
          itemSymbols: []
        },
        {
          id: '64d8082c-df6f-4d7e-a88c-75f1e652ab24',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Übermittlung des Terminvorschlags'
          ],
          position: {
            start: 4,
            end: 4
          },
          participantID: '2',
          shortInfo: null,
          itemSymbols: []
        }
      ],
      connections: [
        {
          id: '99231472-6ca0-45c1-8f6f-dc63ffdaa632',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '5dcf3335-f040-4051-a9d1-d406788583de',
          destination: '548d6eb6-7c33-4791-ac22-72fa4884ee9a',
          position: {
            start: 0,
            end: 0
          }
        },
        {
          id: '2d001f6d-5357-445c-91f0-0deeeec5b1ca',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '548d6eb6-7c33-4791-ac22-72fa4884ee9a',
          destination: '9b3327f2-d45f-4e83-9e57-e50959df4924',
          position: {
            start: 0,
            end: 0
          }
        },
        {
          id: '6a5f1f4a-3689-4195-9669-0f877792f3cb',
          typeId: '803a726f-c6c0-4423-9eb1-466d6b681807',
          label: 'Ihr Leistungserbringer wählt den optimalen Kontaktweg',
          textEllipsis: false,
          source: '9b3327f2-d45f-4e83-9e57-e50959df4924',
          destination: '34c99085-58e9-40d1-8828-1373ed75e8b5',
          position: {
            start: 2,
            end: 2
          }
        },
        {
          id: '8f02ed06-0e99-411f-ac75-c10a84a06ddd',
          typeId: '803a726f-c6c0-4423-9eb1-466d6b681807',
          label: 'Ihr Leistungserbringer wählt den optimalen Kontaktweg',
          textEllipsis: false,
          source: '9b3327f2-d45f-4e83-9e57-e50959df4924',
          destination: 'bfd406ca-d055-4a84-8483-e66bd112012e',
          position: {
            start: 2,
            end: 3
          }
        },
        {
          id: 'f5ac35e1-28c1-4871-9734-584e7f95120b',
          typeId: '803a726f-c6c0-4423-9eb1-466d6b681807',
          label: '',
          textEllipsis: true,
          source: 'bfd406ca-d055-4a84-8483-e66bd112012e',
          destination: '27097aaa-5484-43cb-9a8f-fed5d70d82e6',
          position: {
            start: 4,
            end: 4
          }
        },
        {
          id: '0949beae-3239-45dd-9a6b-91ee1333970f',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '0e0ac69f-775d-46e0-a1cd-8f868e390eab',
          destination: '548d6eb6-7c33-4791-ac22-72fa4884ee9a',
          position: {
            start: 1,
            end: 1
          }
        },
        {
          id: '65e484d2-fa8c-4fca-85fd-3c33df196f9d',
          typeId: '803a726f-c6c0-4423-9eb1-466d6b681807',
          label: '',
          textEllipsis: true,
          source: 'bfd406ca-d055-4a84-8483-e66bd112012e',
          destination: 'e64e549c-60a8-4105-b84b-f0d6dd78cb14',
          position: {
            start: 3,
            end: 3
          }
        },
        {
          id: '883d4bd8-e3a2-4923-a338-c66e4658c32b',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'e64e549c-60a8-4105-b84b-f0d6dd78cb14',
          destination: '8b98905c-15d4-4af0-b23f-cd8d19eb2862',
          position: {
            start: 3,
            end: 3
          }
        },
        {
          id: 'f00c31a7-7e3f-4115-937d-0cad10877e07',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '3a9cd5c7-4129-48d5-804f-1fbc71d8444d',
          destination: '40811c5d-3022-4814-a1a7-fa3ab463feda',
          position: {
            start: 5,
            end: 5
          }
        },
        {
          id: '2b88dc63-f1b5-4299-a5a2-c328efb9c61b',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '40811c5d-3022-4814-a1a7-fa3ab463feda',
          destination: 'dead28ee-dfde-4982-b345-2942a1ea9ee8',
          position: {
            start: 5,
            end: 5
          }
        },
        {
          id: '923f2fc3-5a12-4bfb-b66a-45bd323fca95',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'dead28ee-dfde-4982-b345-2942a1ea9ee8',
          destination: '40811c5d-3022-4814-a1a7-fa3ab463feda',
          position: {
            start: 6,
            end: 6
          }
        },
        {
          id: 'd0817e08-0c1f-4562-84a8-653b793dbcab',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '40811c5d-3022-4814-a1a7-fa3ab463feda',
          destination: '3a9cd5c7-4129-48d5-804f-1fbc71d8444d',
          position: {
            start: 6,
            end: 6
          }
        }
      ],
      shortInfo: [],
      infoTitle: '',
      info: '',
      permissions: '',
      isOpen: false
    },
    {
      id: '86f7be11-bcf5-4603-8dcb-1b0ce2967fa9',
      label: 'Ihre Daten im Gesundheitssystem',
      dataSources: [
        {
          id: '6c863ab4-a8e7-4a53-8210-ae03fee61cca',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Personenbezogene Daten, die zur Erfüllung unserer gesetzlichen Verpflichtungen als Hersteller der myoncare App als Medizinprodukt verarbeitet werden'
          ],
          position: {
            start: 1,
            end: 1
          },
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: 'c9aec424-53af-4b2f-9c33-205086bc76fa',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Personenbezogenen Daten zur Erfüllung der gesetzlichen Sicherheits- oder Vigilanzziele von Medizinprodukte- oder Pharmaunternehmen'
          ],
          position: {
            start: 2,
            end: 2
          },
          shortInfo: null,
          itemSymbols: []
        }
      ],
      dataPurposes: [
        {
          id: '0a292445-313f-4bf4-9979-0c272043a99c',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Qualitätssicherungsprozess von Medizinprodukten'
          ],
          position: {
            start: 0,
            end: 0
          },
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '436c79a2-c0b3-47be-8f63-c88d1e79fa61',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Überwachung von myoncare als Medizinprodukt'
          ],
          position: {
            start: 1,
            end: 1
          },
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '9de118e8-5f90-4398-93ed-1f09bc1df730',
          typeId: 'ead085b8-a8c1-413e-9d61-627c26c0ccb6',
          label: [
            'Nutzung von myoncare Daten zur Überwachung der von Ihnen verwendeten Medizinprodukte (nicht myoncare selbst)'
          ],
          position: {
            start: 2,
            end: 2
          },
          shortInfo: null,
          itemSymbols: []
        }
      ],
      actions: [
        {
          id: 'cf995809-b3b5-4b71-9669-7d6162ed96c4',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Erzeugung und Speicherung der Daten, die mit myoncares gesetzlichen Verpflichtungen als Hersteller eines Medizinproduktes zusammenhängen (z. B. Daten zur Überwachung der Funktionsfähigkeit der App, Auswertung von Vorfallsmeldungen, etc.)',
            '',
            ''
          ],
          position: {
            start: 1,
            end: 1
          },
          participantID: '2',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '27f74f77-a10e-4586-ac34-4ac598d26750',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Erzeugung und Speicherung von vorgegebenen Daten Ihrer verwendeten Medizinprodukte'
          ],
          position: {
            start: 2,
            end: 2
          },
          participantID: '2',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: 'e6431bcc-09eb-464b-b0fd-5140d8970cec',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Anfrage Daten einer berechtigten Stelle'
          ],
          position: {
            start: 1,
            end: 1
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          itemSymbols: [
            {
              customSymbolId: 'b4a9c476-2d96-4f25-9354-a74b0901efde',
              title: '',
              text: '<p><br></p>'
            }
          ]
        },
        {
          id: '291deb7f-a8d0-4d14-8870-01e372fba521',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Datenübermittlung mit der myoncare Anwendung',
            '(wie oben beschrieben)',
            ''
          ],
          position: {
            start: 1,
            end: 0
          },
          participantID: '1',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '807d8d42-8ba0-4083-9e6e-0e08ae2f8873',
          typeId: '6ef60d9c-945d-44fe-b7f3-16a3aa80ae64',
          label: [
            'Erhalt der relevanten Daten durch benannte Stelle (?)',
            '',
            'Wenn möglich nach Pseudonymisierung'
          ],
          position: {
            start: 1,
            end: 1
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: 'b5557511-8eda-4e0b-8cb9-92d0b63c5923',
          typeId: '6ef60d9c-945d-44fe-b7f3-16a3aa80ae64',
          label: [
            'Gesetzliche Verpflichtungen und Legitimationen'
          ],
          position: {
            start: 0,
            end: 0
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '0bb8b339-f77f-42af-ae7f-e42291e032a3',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Erhalt Verpflichtungen und Legitimationen mit der Zulassung '
          ],
          position: {
            start: 0,
            end: 0
          },
          participantID: '2',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: 'f9fbd6ab-aa4b-490c-af83-6987fc286766',
          typeId: '5775ec66-2aa5-4e44-97cc-a6a558f81a21',
          label: [
            'Übertragung von Daten wie oben beschrieben'
          ],
          position: {
            start: 1,
            end: 2
          },
          participantID: '1',
          shortInfo: null,
          itemSymbols: []
        },
        {
          id: '429d684d-49ab-4baa-a32a-fbc693344587',
          typeId: '6ef60d9c-945d-44fe-b7f3-16a3aa80ae64',
          label: [
            'Erhalt der relevanten Daten durch benannte Stelle',
            '',
            'Wenn möglich nach Pseudonymisierung'
          ],
          position: {
            start: 2,
            end: 2
          },
          participantID: 'f72e05f4-54f5-4b77-af4e-d4f9718c3a4a',
          shortInfo: null,
          itemSymbols: []
        }
      ],
      connections: [
        {
          id: '76f6c153-a74e-45c5-a954-6ad763311184',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'b5557511-8eda-4e0b-8cb9-92d0b63c5923',
          destination: 'e6431bcc-09eb-464b-b0fd-5140d8970cec',
          position: {
            start: 0,
            end: 1
          }
        },
        {
          id: '5339fe00-8a34-498e-9203-7fb98c4b3a5f',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'b5557511-8eda-4e0b-8cb9-92d0b63c5923',
          destination: '0bb8b339-f77f-42af-ae7f-e42291e032a3',
          position: {
            start: 0,
            end: 0
          }
        },
        {
          id: '2f65fa55-aa6c-4dc1-9db4-a07ef9da4a78',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'cf995809-b3b5-4b71-9669-7d6162ed96c4',
          destination: '807d8d42-8ba0-4083-9e6e-0e08ae2f8873',
          position: {
            start: 1,
            end: 1
          }
        },
        {
          id: '85248eb6-8e21-499f-a1a9-f2ed32309216',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: '0bb8b339-f77f-42af-ae7f-e42291e032a3',
          destination: 'cf995809-b3b5-4b71-9669-7d6162ed96c4',
          position: {
            start: 0,
            end: 1
          }
        },
        {
          id: 'c9c3eb5d-eb90-4f36-a9a0-ce22b3a7528b',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'f9fbd6ab-aa4b-490c-af83-6987fc286766',
          destination: 'cf995809-b3b5-4b71-9669-7d6162ed96c4',
          position: {
            start: 1,
            end: 1
          }
        },
        {
          id: '200913fd-2d18-4e4e-a86b-80dca2c78553',
          typeId: 'ct1',
          label: '',
          textEllipsis: true,
          source: 'f9fbd6ab-aa4b-490c-af83-6987fc286766',
          destination: '27f74f77-a10e-4586-ac34-4ac598d26750',
          position: {
            start: 2,
            end: 2
          }
        }
      ],
      shortInfo: [],
      infoTitle: '',
      info: '',
      permissions: '',
      isOpen: false,
      itemSymbols: [
        {
          customSymbolId: '013d68de-ed99-4304-9564-97c543a141e8',
          title: 'Nach gesetzlichen Vorschriften',
          text: '<p>Alle hier beschriebenen Prozesse erfolgen ausschließlich nach Vorgabe der gesetzlichen Vorschriften</p>'
        }
      ]
    },
    {
      id: '0891dcdf-836c-4244-8cf6-b5d0b6b942a0',
      label: 'Ein Case',
      dataSources: [],
      dataPurposes: [],
      actions: [],
      connections: [],
      shortInfo: [],
      infoTitle: '',
      info: '',
      permissions: '',
      isOpen: false
    }
  ],
  sourceInformation: {
    id: 'si-1',
    info: '<div><table><tr><tr><td>Eine Quelle</td></tr></tr></table></div>'
  },
  revisionHistory: {
    id: 'rh-1',
    info: '<div><p><ul><li>Initiale Version 1.0</li></ul></p></div>'
  },
  glossar: [
    {
      id: 'g1',
      keywords: [
        'Handy',
        'Mobiles Endgerät',
        'Smartphone'
      ],
      title: 'Smartphone',
      content: '<p>Ist ein mobiles Telefon</p>'
    }
  ],
  isDialogFullsize: true,
  isDetailedIcons: false,
  fixedLabels: {
    headerSource: 'Datenkategorie',
    headerPurpose: 'Verwendungszweck'
  },
  colors: {
    canvasBackground: '#ffffff',
    headerSourceLabel: '#ffffff',
    headerSourceIcon: '#ffffff',
    headerSourceBackground: '#28b4e6',
    headerSourceArrowBackground: '#28b4e6',
    headerProcessLabel: '#ffffff',
    headerProcessIcon: '#ffffff',
    headerProcessBackground: '#006ba2',
    headerProcessArrowLeftBackground: '#006ba2',
    headerProcessArrowRightBackground: '#006ba2',
    headerPurposeLabel: '#ffffff',
    headerPurposeIcon: '#ffffff',
    headerPurposeBackground: '#28b4e6',
    headerPurposeArrowBackground: '#28b4e6',
    caseHeaderLabel: '#ffffff',
    caseHeaderIcon: '#f0aa28',
    caseHeaderBackground: '#e94c89',
    caseHeaderBackgroundGradient: null,
    caseBodyBackground: '#eeeeee',
    caseBorder: '#e94c89',
    participantLabel: '#006ba2',
    participantIcon: '#006ba2',
    participantBorder: '#006ba2',
    participantBackground: '#ffffff',
    participantBackgroundGradient: 'url(#white_gradient_2)',
    caseActionIdentifierChecked: '#006ba2',
    caseActionIdentifierUnchecked: '#006ba2',
    controlsLabel: '#ffffff',
    controlsBackground: '#e94c89',
    controlsBackgroundHover: '#e94c89',
    modelModeLabel: '#ffffff',
    modelModeBackground: '#48AAE6',
    textEllipsisBackground: '#48AAE6',
    textEllipsisLabel: '#ffffff',
    glossarKeyword: '#48AAE6',
    overlayBackground: '#ffffff',
    overlayLabel: "#000000",
    tutorialBackground: '#FFB136',
    tutorialLabel: '#000000'
  },
  dimensions: {
    caseLabelSize: 1.2,
    headerLabelSize: 1.2
  },
  predefinedSymbols: [
    {
      id: 'b4a9c476-2d96-4f25-9354-a74b0901efde',
      title: 'Info',
      icon: {
        id: 'info',
        dataUri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjU0My4wNTlweCIgaGVpZ2h0PSI1NDMuMDU5cHgiIHZpZXdCb3g9IjAgMCA1NDMuMDU5IDU0My4wNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU0My4wNTkgNTQzLjA1OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNDYuNDM4LDQ2OC4xMzdoLTE4LjcyN1YxNzEuMDZjMC01LjA2Mi0xLjg1NS05LjQ1Ni01LjU1Ny0xMy4xN2MtMy43MDktMy43MDMtOC4wOTgtNS41NTctMTMuMTY0LTUuNTU3SDE5Ni42Mg0KCQkJYy01LjA3MywwLTkuNDYxLDEuODU0LTEzLjE3LDUuNTU3Yy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwMy01LjU2MywxMy4xN3YzNy40NTRjMCw1LjA3NCwxLjg1NCw5LjQ2Miw1LjU2MywxMy4xNw0KCQkJYzMuNzAzLDMuNzE1LDguMDkxLDUuNTY5LDEzLjE3LDUuNTY5aDE4LjcyN3YyNDAuODgzSDE5Ni42MmMtNS4wNzMsMC05LjQ2MSwxLjg1NS0xMy4xNyw1LjU1Nw0KCQkJYy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwNC01LjU2MywxMy4xN3YzNy40NTVjMCw1LjA3NCwxLjg1NCw5LjQ2MSw1LjU2MywxMy4xN2MzLjcwMywzLjcxNSw4LjA5MSw1LjU3LDEzLjE3LDUuNTdoMTQ5LjgxNw0KCQkJYzUuMDc0LDAsOS40NjEtMS44NTUsMTMuMTctNS41N2MzLjcwMy0zLjcwMSw1LjU2NC04LjA5LDUuNTY0LTEzLjE3di0zNy40NTVjMC01LjA2MS0xLjg1NS05LjQ1NS01LjU2NC0xMy4xNw0KCQkJQzM1NS44OTgsNDY5Ljk4NCwzNTEuNTA2LDQ2OC4xMzcsMzQ2LjQzOCw0NjguMTM3eiIvPg0KCQk8Y2lyY2xlIGN4PSIyNjcuNjczIiBjeT0iNjIuOTIiIHI9IjYyLjkyIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo='
      },
      position: 0,
      isDialog: true,
      legend: true,
      legendLabel: 'Info'
    }
  ],
  customSymbols: [
    {
      id: 'ee428bc3-db23-4872-84de-31c0461d981d',
      title: 'Information',
      icon: {
        id: 'info',
        dataUri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjU0My4wNTlweCIgaGVpZ2h0PSI1NDMuMDU5cHgiIHZpZXdCb3g9IjAgMCA1NDMuMDU5IDU0My4wNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU0My4wNTkgNTQzLjA1OTsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNDYuNDM4LDQ2OC4xMzdoLTE4LjcyN1YxNzEuMDZjMC01LjA2Mi0xLjg1NS05LjQ1Ni01LjU1Ny0xMy4xN2MtMy43MDktMy43MDMtOC4wOTgtNS41NTctMTMuMTY0LTUuNTU3SDE5Ni42Mg0KCQkJYy01LjA3MywwLTkuNDYxLDEuODU0LTEzLjE3LDUuNTU3Yy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwMy01LjU2MywxMy4xN3YzNy40NTRjMCw1LjA3NCwxLjg1NCw5LjQ2Miw1LjU2MywxMy4xNw0KCQkJYzMuNzAzLDMuNzE1LDguMDkxLDUuNTY5LDEzLjE3LDUuNTY5aDE4LjcyN3YyNDAuODgzSDE5Ni42MmMtNS4wNzMsMC05LjQ2MSwxLjg1NS0xMy4xNyw1LjU1Nw0KCQkJYy0zLjcwOCwzLjcxNS01LjU2Myw4LjEwNC01LjU2MywxMy4xN3YzNy40NTVjMCw1LjA3NCwxLjg1NCw5LjQ2MSw1LjU2MywxMy4xN2MzLjcwMywzLjcxNSw4LjA5MSw1LjU3LDEzLjE3LDUuNTdoMTQ5LjgxNw0KCQkJYzUuMDc0LDAsOS40NjEtMS44NTUsMTMuMTctNS41N2MzLjcwMy0zLjcwMSw1LjU2NC04LjA5LDUuNTY0LTEzLjE3di0zNy40NTVjMC01LjA2MS0xLjg1NS05LjQ1NS01LjU2NC0xMy4xNw0KCQkJQzM1NS44OTgsNDY5Ljk4NCwzNTEuNTA2LDQ2OC4xMzcsMzQ2LjQzOCw0NjguMTM3eiIvPg0KCQk8Y2lyY2xlIGN4PSIyNjcuNjczIiBjeT0iNjIuOTIiIHI9IjYyLjkyIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo='
      },
      position: 0,
      isDialog: true,
      legend: false,
      legendLabel: ''
    },
    {
      id: '013d68de-ed99-4304-9564-97c543a141e8',
      title: 'Sicherheit',
      icon: {
        id: 'verified',
        dataUri: 'data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ1OS42NjkgODIuOTA2LTE5Ni04MS4zNzdjLTQuOTEtMi4wMzgtMTAuNDI5LTIuMDM5LTE1LjMzOCAwbC0xOTYgODEuMzc3Yy03LjQ2NSAzLjEtMTIuMzMxIDEwLjM4OC0xMi4zMzEgMTguNDcxdjk4LjkyNWMwIDEzNi4yMTMgODIuMzI5IDI1OC43NCAyMDguNDQyIDMxMC4yMTUgNC44NDQgMS45NzcgMTAuMjcxIDEuOTc3IDE1LjExNiAwIDEyNi4xMTEtNTEuNDc0IDIwOC40NDItMTc0LjAwMSAyMDguNDQyLTMxMC4yMTV2LTk4LjkyNWMwLTguMDgzLTQuODY1LTE1LjM3MS0xMi4zMzEtMTguNDcxem0tMjcuNjY5IDExNy4zOTZjMCAxMTUuNzk1LTY4IDIyMi4zOTItMTc2IDI2OS45NzQtMTA1LjExNC00Ni4zMTEtMTc2LTE1MS4wNDEtMTc2LTI2OS45NzR2LTg1LjU3M2wxNzYtNzMuMDc0IDE3NiA3My4wNzR6bS0xOTguMTA2IDY3LjQxNCA4NS45NjQtODUuOTYzYzcuODEtNy44MSAyMC40NzMtNy44MTEgMjguMjg0IDBzNy44MSAyMC40NzQtLjAwMSAyOC4yODRsLTEwMC4xMDUgMTAwLjEwNWMtNy44MTIgNy44MTItMjAuNDc1IDcuODA5LTI4LjI4NCAwbC01NS44OTQtNTUuODk0Yy03LjgxMS03LjgxMS03LjgxMS0yMC40NzQgMC0yOC4yODRzMjAuNDc0LTcuODExIDI4LjI4NCAweiIvPjwvZz48L3N2Zz4='
      },
      position: 1,
      isDialog: true,
      legend: false,
      legendLabel: ''
    },
    {
      id: '408a8e5c-c31f-44de-8846-846e65e510ad',
      title: 'Smartphone',
      icon: {
        id: 'smartphone',
        dataUri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwMy42MDQgNTAzLjYwNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAzLjYwNCA1MDMuNjA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTMzNy4zMjQsMEgxNjcuMTkyYy0yOC45MjQsMC01My41LDIzLjU4NC01My41LDUyLjV2Mzk4LjY2NGMwLDI4LjkxNiwyNC4wNTYsNTIuNDQsNTIuOTgsNTIuNDRsMTcwLjQxMi0wLjE4NA0KCQkJYzI4LjkyLDAsNTIuNTgtMjMuNTI4LDUyLjU4LTUyLjQ0OGwwLjI0OC0zOTguNUMzODkuOTA4LDIzLjQ1MiwzNjYuMzY0LDAsMzM3LjMyNCwweiBNMjI3LjY4LDMxLjQ3Nmg0OS4zNg0KCQkJYzQuMzM2LDAsNy44NjgsMy41Miw3Ljg2OCw3Ljg2OGMwLDQuMzQ4LTMuNTMyLDcuODY4LTcuODY4LDcuODY4aC00OS4zNmMtNC4zNDgsMC03Ljg2OC0zLjUyLTcuODY4LTcuODY4DQoJCQlDMjE5LjgxMiwzNC45OTYsMjIzLjMzMiwzMS40NzYsMjI3LjY4LDMxLjQ3NnogTTE5OC4wMiwzMy45OGMyLjkxNi0yLjkxMiw4LjIyNC0yLjk1MiwxMS4xMzYsMGMxLjQ2LDEuNDU2LDIuMzI0LDMuNSwyLjMyNCw1LjU4OA0KCQkJYzAsMi4wNDgtMC44NjQsNC4wODgtMi4zMjQsNS41NDhjLTEuNDUyLDEuNDYtMy41MDQsMi4zMi01LjU0OCwyLjMyYy0yLjA4NCwwLTQuMDg4LTAuODYtNS41ODgtMi4zMg0KCQkJYy0xLjQ1Mi0xLjQ1Ni0yLjI4LTMuNS0yLjI4LTUuNTQ4QzE5NS43MzYsMzcuNDgsMTk2LjU2OCwzNS40MzYsMTk4LjAyLDMzLjk4eiBNMjUwLjc3Miw0ODguMDA4DQoJCQljLTEyLjk4NCwwLTIzLjU0NC0xMC41NjgtMjMuNTQ0LTIzLjU0OGMwLTEyLjk4NCwxMC41Ni0yMy41NDgsMjMuNTQ0LTIzLjU0OHMyMy41NDQsMTAuNTY0LDIzLjU0NCwyMy41NDgNCgkJCUMyNzQuMzE2LDQ3Ny40NCwyNjMuNzUyLDQ4OC4wMDgsMjUwLjc3Miw0ODguMDA4eiBNMzY1LjQ4OCw0MjQuOTA4SDE0MS4yMzJWNzQuNzU2aDIyNC4yNTZWNDI0LjkwOHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='
      },
      position: 0,
      isDialog: true,
      legend: false,
      legendLabel: ''
    },
    {
      id: 'd0ead52e-5b6d-463f-a598-b99bbfcf2330',
      title: '',
      icon: {
        id: '7fc01349-8700-42ff-b288-2beb5a0bad2a',
        dataUri: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiAgdmlld0JveD0iMCAwIDk2IDk2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iSWNvbnNfU3RlZXJpbmdXaGVlbDFfTSIgb3ZlcmZsb3c9ImhpZGRlbiI+PGcgaWQ9Ikljb25zIj48cGF0aCBkPSJNOTEuNzE5MiA0NC45NDA5QzkwLjg1MzQgNDQuMDg3IDg5LjY2NDggNDMuNjQyNCA4OC40NTExIDQzLjcxODNMODMuMjI2NSA0NC4wMzMyQzgyLjYyNjkgNDQuMDYyNyA4Mi4wNzQ2IDQ0LjM2NzQgODEuNzI5OSA0NC44NTg5IDgxLjIyNDEgNDUuNTQwOSA4MC4yNjEyIDQ1LjY4MzcgNzkuNTc5MiA0NS4xNzc5IDc5LjUzMiA0NS4xNDI5IDc5LjQ4NjcgNDUuMTA1MSA3OS40NDM4IDQ1LjA2NDkgNzguOTg1NCA0NC42MDMxIDc4LjMyOTIgNDQuMzk2NCA3Ny42ODg5IDQ0LjUxMjJMNzYuODEzIDQ0LjY2OEM3Ni4xOTUxIDM5LjMwNjcgNzQuMDg2MSAzNC4yMjYyIDcwLjcyNTQgMzAuMDAzNUw3MS40NzAxIDI5LjQ4MzVDNzIuMDAyMyAyOS4xMTE0IDcyLjMxOTEgMjguNTAyOCA3Mi4zMTg4IDI3Ljg1MzUgNzIuMzE0NiAyNy4wMzA5IDcyLjk3OCAyNi4zNjA3IDczLjgwMDUgMjYuMzU2NSA3My44OTQ5IDI2LjM1NiA3My45ODkxIDI2LjM2NDUgNzQuMDgxOSAyNi4zODE4IDc0LjY3MjggMjYuNDg1OSA3NS4yNzg3IDI2LjMxMDkgNzUuNzIzMSAyNS45MDc3TDc5LjQ5NyAyMi41NjNDODAuNDE1NiAyMS43NDYxIDgwLjk3IDIwLjU5NjIgODEuMDM3IDE5LjM2ODcgODEuMTA0MyAxOC4yNDczIDgwLjcxNDUgMTcuMTQ2NSA3OS45NTY1IDE2LjMxNzQgNzguMzUyNyAxNC41Njk1IDc1LjYzNTcgMTQuNDUyNyA3My44ODc4IDE2LjA1NjUgNzMuNzc4OCAxNi4xNTY1IDczLjY3NTIgMTYuMjYyIDczLjU3NzEgMTYuMzcyNkw3MC4xMDU0IDIwLjI4OTFDNjkuNzAyOSAyMC43MzQ0IDY5LjUyODEgMjEuMzQwNCA2OS42MzE4IDIxLjkzMTYgNjkuNzgyMSAyMi43NDA3IDY5LjI0ODEgMjMuNTE4NCA2OC40MzkxIDIzLjY2ODcgNjguMzQ3NiAyMy42ODU3IDY4LjI1NDggMjMuNjk0MSA2OC4xNjE4IDIzLjY5MzhMNjguMTU2NSAyMy42OTM4QzY3LjUwNzUgMjMuNjk0IDY2Ljg5OTYgMjQuMDExNCA2Ni41Mjg1IDI0LjU0MzhMNjYuMDA5OCAyNS4yODczQzYxLjc4NzggMjEuOTI2NCA1Ni43MDc4IDE5LjgxNjggNTEuMzQ3IDE5LjE5ODJMNTEuNTA0MSAxOC4zMTYyQzUxLjYxODMgMTcuNjc2IDUxLjQxMTkgMTcuMDIwNSA1MC45NTE0IDE2LjU2MTMgNTAuMzY3MSAxNS45ODE4IDUwLjM2MzIgMTUuMDM4NCA1MC45NDI3IDE0LjQ1NDEgNTEuMDA4NCAxNC4zODc5IDUxLjA4MDEgMTQuMzI4IDUxLjE1NyAxNC4yNzUyIDUxLjY0ODcgMTMuOTMwNyA1MS45NTM2IDEzLjM3ODMgNTEuOTgzMSAxMi43Nzg2TDUyLjI4NjggNy43NDQ5QzUyLjM1ODcgNi41MTc5NCA1MS45Mzc1IDUuMzEzMDkgNTEuMTE2OCA0LjM5ODIgNTAuMzcxNiAzLjU1NzYzIDQ5LjMxNzYgMy4wNTQ3MyA0OC4xOTU0IDMuMDA0MiA0NS44MjU2IDIuOTAyMjMgNDMuODIxOSA0Ljc0MDY0IDQzLjcxOTkgNy4xMTA0IDQzLjcxMzYgNy4yNTgzIDQzLjcxNDkgNy40MDY0MyA0My43MjM4IDcuNTU0Mkw0NC4wMzg3IDEyLjc3ODhDNDQuMDY4MiAxMy4zNzg0IDQ0LjM3MjkgMTMuOTMwNyA0NC44NjQ0IDE0LjI3NTQgNDUuNTQyOCAxNC43NDEyIDQ1LjcxNTEgMTUuNjY4NyA0NS4yNDkzIDE2LjM0NzEgNDUuMTk2NSAxNi40MjQgNDUuMTM2NiAxNi40OTU4IDQ1LjA3MDQgMTYuNTYxNSA0NC42MDk5IDE3LjAyMDcgNDQuNDAzNSAxNy42NzYyIDQ0LjUxNzcgMTguMzE2NEw0NC42NzQ2IDE5LjE5ODRDMzkuMzE0NCAxOS44MTcgMzQuMjM1MSAyMS45MjYyIDMwLjAxMzMgMjUuMjg2NEwyOS40ODk5IDI0LjUzNjRDMjkuMTE4OCAyNC4wMDQgMjguNTEwOSAyMy42ODY2IDI3Ljg2MTkgMjMuNjg2NEwyNy44NTY2IDIzLjY4NjRDMjcuMDM0IDIzLjY4OTMgMjYuMzY0OSAyMy4wMjQ4IDI2LjM2MTkgMjIuMjAyMyAyNi4zNjE2IDIyLjEwODcgMjYuMzcwMSAyMi4wMTUzIDI2LjM4NzMgMjEuOTIzMyAyNi40OTA1IDIxLjMzMjQgMjYuMzE1NiAyMC43MjY5IDI1LjkxMzIgMjAuMjgyMUwyMi41Njg1IDE2LjUwODJDMjEuNzUxNiAxNS41ODk2IDIwLjYwMTcgMTUuMDM1MiAxOS4zNzQyIDE0Ljk2ODIgMTguMjUyNSAxNC44OTg5IDE3LjE1MSAxNS4yODkgMTYuMzIyOSAxNi4wNDg3IDE0LjU3NSAxNy42NTI1IDE0LjQ1ODIgMjAuMzY5NSAxNi4wNjIgMjIuMTE3NCAxNi4xNjIgMjIuMjI2NCAxNi4yNjc1IDIyLjMzIDE2LjM3ODEgMjIuNDI4MUwyMC4yOTM5IDI1LjlDMjAuNzM5MyAyNi4zMDI2IDIxLjM0NTUgMjYuNDc3NCAyMS45MzY5IDI2LjM3MzYgMjIuNzQ2IDI2LjIyMzUgMjMuNTIzNiAyNi43NTc4IDIzLjY3MzYgMjcuNTY2OSAyMy42OTA3IDI3LjY1ODkgMjMuNjk5MSAyNy43NTIzIDIzLjY5ODYgMjcuODQ1OCAyMy42OTgyIDI4LjQ5NTcgMjQuMDE1NiAyOS4xMDQ4IDI0LjU0ODYgMjkuNDc2N0wyNS4yOTg2IDI5Ljk5OTlDMjEuOTM3OSAzNC4yMjA5IDE5LjgyODEgMzkuMjk5NSAxOS4yMDg2IDQ0LjY1OTNMMTguMzIwNSA0NC41MDExQzE3LjY4MDIgNDQuMzg1MyAxNy4wMjM5IDQ0LjU5MTkgMTYuNTY1NiA0NS4wNTM4IDE1Ljk0NiA0NS42MzQ1IDE0Ljk3MjkgNDUuNjAyOSAxNC4zOTIzIDQ0Ljk4MzIgMTQuMzUyMSA0NC45NDA0IDE0LjMxNDUgNDQuODk1MyAxNC4yNzk1IDQ0Ljg0ODIgMTMuOTM1IDQ0LjM1NjUgMTMuMzgyNiA0NC4wNTE2IDEyLjc4MjkgNDQuMDIyMUw3Ljc0OTIgNDMuNzE4NEM2LjUyMjE4IDQzLjY0NjEgNS4zMTcxOCA0NC4wNjczIDQuNDAyNSA0NC44ODg0IDMuNTYxOTYgNDUuNjMzNyAzLjA1OTEzIDQ2LjY4NzcgMy4wMDg3IDQ3LjgxIDIuOTA2NDcgNTAuMTc5OCA0Ljc0NDcgNTIuMTgzOCA3LjExNDUxIDUyLjI4NiA3LjE3NjcgNTIuMjg4NyA3LjIzODk1IDUyLjI5IDcuMzAxMiA1Mi4yOSA3LjM4NjYgNTIuMjkgNy40NzI2IDUyLjI4NzUgNy41NTg1IDUyLjI4MjFMMTIuNzgzMSA1MS45NjcyQzEzLjM4MjggNTEuOTM3OCAxMy45MzUyIDUxLjYzMjggMTQuMjc5NyA1MS4xNDEgMTQuNzg2MiA1MC40NTkxIDE1Ljc0OTUgNTAuMzE2OCAxNi40MzE0IDUwLjgyMzMgMTYuNDc4MyA1MC44NTgxIDE2LjUyMzIgNTAuODk1NiAxNi41NjU4IDUwLjkzNTUgMTcuMDI0MSA1MS4zOTc0IDE3LjY4MDQgNTEuNjA0IDE4LjMyMDcgNTEuNDg4MkwxOS4yMDc0IDUxLjMzMDVDMTkuODI0OCA1Ni42OTA0IDIxLjkzMjYgNjEuNzY5OCAyNS4yOTE1IDY1Ljk5MkwyNC41NDA0IDY2LjUxNkMyNC4wMDc0IDY2Ljg4NzkgMjMuNjkgNjcuNDk3IDIzLjY5MDQgNjguMTQ2OSAyMy42OTQ2IDY4Ljk2OTUgMjMuMDMxMiA2OS42Mzk3IDIyLjIwODcgNjkuNjQzOSAyMi4xMTQzIDY5LjY0NDQgMjIuMDIwMSA2OS42MzU5IDIxLjkyNzMgNjkuNjE4NiAyMS4zMzY0IDY5LjUxNiAyMC43MzEyIDY5LjY5MDkgMjAuMjg2MSA3MC4wOTI3TDE2LjUxMjYgNzMuNDM3QzE1LjU5NDIgNzQuMjU0IDE1LjA0IDc1LjQwMzkgMTQuOTczMSA3Ni42MzEzIDE0LjkwNTcgNzcuNzUyNiAxNS4yOTUzIDc4Ljg1MzQgMTYuMDUzMSA3OS42ODI2IDE2Ljg2NzMgODAuNTY4IDE4LjAxNDggODEuMDcyNCAxOS4yMTc3IDgxLjA3MzdMMTkuMjU3NyA4MS4wNzM3QzIwLjQ3MjkgODEuMDYxOCAyMS42MjY0IDgwLjUzNjQgMjIuNDMzIDc5LjYyNzRMMjUuOTA0NyA3NS43MTA5QzI2LjMwNzMgNzUuMjY1NSAyNi40ODIxIDc0LjY1OTMgMjYuMzc4MyA3NC4wNjc5IDI2LjIyODIgNzMuMjU4OCAyNi43NjI1IDcyLjQ4MTIgMjcuNTcxNiA3Mi4zMzEyIDI3LjY2MjkgNzIuMzE0MyAyNy43NTU1IDcyLjMwNTkgMjcuODQ4MyA3Mi4zMDYyTDI3Ljg1MzYgNzIuMzA2MkMyOC41MDI2IDcyLjMwNiAyOS4xMTA1IDcxLjk4ODYgMjkuNDgxNiA3MS40NTYyTDMwLjAwNDIgNzAuNzA3QzM0LjIyNDcgNzQuMDY4OCAzOS4zMDMzIDc2LjE3OTkgNDQuNjYzMyA3Ni44MDA0TDQ0LjUwNiA3Ny42ODM4QzQ0LjM5MTcgNzguMzI0IDQ0LjU5ODIgNzguOTc5NiA0NS4wNTg3IDc5LjQzODcgNDUuNjQzIDgwLjAxODIgNDUuNjQ2OSA4MC45NjE2IDQ1LjA2NzQgODEuNTQ1OSA0NS4wMDE3IDgxLjYxMjEgNDQuOTMgODEuNjcyIDQ0Ljg1MzEgODEuNzI0OCA0NC4zNjE0IDgyLjA2OTMgNDQuMDU2NSA4Mi42MjE3IDQ0LjAyNyA4My4yMjE0TDQzLjcyMzMgODguMjU1MUM0My42NTE0IDg5LjQ4MjEgNDQuMDcyNiA5MC42ODY5IDQ0Ljg5MzMgOTEuNjAxOCA0NS42Mzg1IDkyLjQ0MjQgNDYuNjkyNSA5Mi45NDUzIDQ3LjgxNDcgOTIuOTk1OCA0Ny44NzQ3IDkyLjk5ODIgNDcuOTM0NyA5Mi45OTk3IDQ3Ljk5NDcgOTIuOTk5NyA1MC4zNjY2IDkzLjAwMjMgNTIuMjkxNSA5MS4wODE1IDUyLjI5NCA4OC43MDk2IDUyLjI5NDEgODguNjIxNyA1Mi4yOTE1IDg4LjUzMzggNTIuMjg2MiA4OC40NDZMNTEuOTcxMyA4My4yMjE0QzUxLjk0MTggODIuNjIxNyA1MS42MzY5IDgyLjA2OTMgNTEuMTQ1MSA4MS43MjQ4IDUwLjQ2NjkgODEuMjU4MSA1MC4yOTU1IDgwLjMzIDUwLjc2MjIgNzkuNjUxOCA1MC44MTQ3IDc5LjU3NTUgNTAuODc0MyA3OS41MDQzIDUwLjk0IDc5LjQzOSA1MS40MDA1IDc4Ljk3OTggNTEuNjA2OSA3OC4zMjQzIDUxLjQ5MjcgNzcuNjg0MUw1MS4zMzYxIDc2LjgwMzVDNTYuNjk3IDc2LjE4NjggNjEuNzc3NiA3NC4wNzkyIDY2LjAwMDggNzAuNzJMNjYuNTIwOCA3MS40NjU1QzY2Ljg5MjQgNzEuOTk2OSA2Ny40OTk5IDcyLjMxMzYgNjguMTQ4MyA3Mi4zMTQyTDY4LjE1MTIgNzIuMzE0MkM2OC41NDY2IDcyLjMyODEgNjguOTIzOSA3Mi40ODM3IDY5LjIxNDIgNzIuNzUyNiA2OS41NTkzIDczLjEwMDUgNjkuNzEyIDczLjU5NTQgNjkuNjIyOSA3NC4wNzczIDY5LjUxOTQgNzQuNjY4MiA2OS42OTQzIDc1LjI3MzggNzAuMDk3IDc1LjcxODVMNzMuNDQxNyA3OS40OTI0Qzc0LjI1ODYgODAuNDExIDc1LjQwODUgODAuOTY1NCA3Ni42MzYgODEuMDMyNCA3Ni43MTIyIDgxLjAzNjMgNzYuNzg4NCA4MS4wMzgzIDc2Ljg2NDEgODEuMDM4MyA3Ny45MDg2IDgxLjA0NTUgNzguOTE3MSA4MC42NTc0IDc5LjY4NzMgNzkuOTUxOSA4MS40MzUyIDc4LjM0ODEgODEuNTUyIDc1LjYzMTEgNzkuOTQ4MiA3My44ODMyIDc5Ljg0ODIgNzMuNzc0MiA3OS43NDI3IDczLjY3MDUgNzkuNjMyMSA3My41NzI1TDc1LjcxNTcgNzAuMUM3NS4yNzA3IDY5LjY5NyA3NC42NjQ1IDY5LjUyMjIgNzQuMDczMiA2OS42MjY0IDczLjI2NDEgNjkuNzc2NyA3Mi40ODY0IDY5LjI0MjcgNzIuMzM2MSA2OC40MzM3IDcyLjMxODkgNjguMzQxNSA3Mi4zMTA1IDY4LjI0NzkgNzIuMzExIDY4LjE1NDIgNzIuMzExNCA2Ny41MDQzIDcxLjk5NCA2Ni44OTUyIDcxLjQ2MSA2Ni41MjMzTDcwLjcxODIgNjYuMDA1MUM3NC4wODA1IDYxLjc4MzYgNzYuMTkxNSA1Ni43MDM4IDc2LjgxMTMgNTEuMzQyN0w3Ny42ODg2IDUxLjQ5ODlDNzguMzI4OCA1MS42MTQxIDc4Ljk4NDggNTEuNDA3NSA3OS40NDM1IDUwLjk0NjIgODAuMDYyMyA1MC4zNjU1IDgxLjAzNDcgNTAuMzk2MyA4MS42MTU1IDUxLjAxNTEgODEuNjU2MSA1MS4wNTg0IDgxLjY5NDIgNTEuMTA0MSA4MS43Mjk2IDUxLjE1MTggODIuMDc0MSA1MS42NDM1IDgyLjYyNjUgNTEuOTQ4NCA4My4yMjYyIDUxLjk3NzlMODguMjU5OSA1Mi4yODE2Qzg4LjM1MDIgNTIuMjg3IDg4LjQ0MDUgNTIuMjg5OCA4OC41MzA5IDUyLjI4OTkgODkuNjY2MyA1Mi4yODkgOTAuNzYxNCA1MS44NjkzIDkxLjYwNjYgNTEuMTExMiA5Mi40NDcyIDUwLjM2NiA5Mi45NTAxIDQ5LjMxMiA5My4wMDA2IDQ4LjE4OTggOTMuMDUxNiA0Ni45NzQ0IDkyLjU4NjEgNDUuNzk0MiA5MS43MTkyIDQ0Ljk0MDlaTTY4LjE1NjIgMjUuNjkzOCA2OC4xNjE1IDI1LjY5MzhDNjkuMDg5OCAyNS42OTY0IDY5Ljk4MDcgMjUuMzI3OCA3MC42MzU3IDI0LjY3TDcwLjYzNTcgMjQuNjdDNzEuNDM3NiAyMy44NzEzIDcxLjc5ODMgMjIuNzMwOSA3MS42MDE2IDIxLjYxNjNMNzUuMDczMiAxNy42OTkzQzc1LjUwMTkgMTcuMjEwNCA3Ni4xMTk4IDE2LjkyOTEgNzYuNzcgMTYuOTI2OSA3Ny40MjI4IDE2LjkxMjEgNzguMDQ5MiAxNy4xODQzIDc4LjQ4MzkgMTcuNjcxNSA3OC44NzY3IDE4LjEwNjYgNzkuMDc2OCAxOC42ODIyIDc5LjAzODYgMTkuMjY3MiA3OS4wMDA1IDE5Ljk1ODcgNzguNjg4IDIwLjYwNjQgNzguMTcwNCAyMS4wNjY1TDc0LjQzNjUgMjQuNDE0MkM3My4zMDk1IDI0LjIwODcgNzIuMTUzNCAyNC41Njg2IDcxLjM0MjMgMjUuMzc3NiA3MC42ODQ3IDI2LjAyOTUgNzAuMzE3NyAyNi45MTg5IDcwLjMyNDIgMjcuODQ0OEw2OS40Mjc3IDI4LjQ3MDRDNjguODI3MyAyNy44MTI3IDY4LjE5NzkgMjcuMTgzMyA2Ny41Mzk1IDI2LjU4MjJaTTQ2LjQ4MDkgMTcuOTc4QzQ3Ljg0NjUgMTYuNjIyMyA0Ny44NTQ1IDE0LjQxNjIgNDYuNDk4NyAxMy4wNTA2IDQ2LjM1NTYgMTIuOTA2NSA0Ni4yMDAxIDEyLjc3NTEgNDYuMDM0MSAxMi42NThMNDUuNzE5MiA3LjQzMzRDNDUuNjQyOCA2LjE2ODA0IDQ2LjYwNjcgNS4wODAzNSA0Ny44NzIgNS4wMDM5NyA0Ny45NTE1IDQuOTk5MTcgNDguMDMxMiA0Ljk5ODUxIDQ4LjExMDggNS4wMDIgNDguNjk2NSA1LjAzMTgzIDQ5LjI0NTEgNS4yOTc0MyA0OS42MzE4IDUuNzM4MyA1MC4wOTM5IDYuMjU0MTQgNTAuMzMwOCA2LjkzMzE2IDUwLjI5IDcuNjI0NUw1MC4wMTYxIDEyLjYzMTNDNDkuMDc0NSAxMy4yODMxIDQ4LjUxMTggMTQuMzU0OCA0OC41MSAxNS41IDQ4LjUwNTUgMTYuNDI2MyA0OC44NzUgMTcuMzE1MiA0OS41MzQ5IDE3Ljk2NTNMNDkuMzQ0OSAxOS4wMzM4QzQ4LjkwMjIgMTkuMDEzNyA0OC40NTc5IDE5IDQ4LjAxIDE5IDQ3LjU2MDkgMTkgNDcuMTE1MSAxOS4wMTM2IDQ2LjY3MSAxOS4wMzM5Wk0yNS42OTg2IDI3Ljg0ODZDMjUuNzAyOCAyNi45MTgyIDI1LjMzNCAyNi4wMjUgMjQuNjc0NyAyNS4zNjg2TDI0LjY3NDIgMjUuMzY4NkMyNC4wMjM5IDI0LjcxODEgMjMuMTQyOCAyNC4zNTEzIDIyLjIyMzEgMjQuMzQ4IDIyLjAyMSAyNC4zNDggMjEuODE5MyAyNC4zNjYzIDIxLjYyMDUgMjQuNDAyN0wxNy43MDM1IDIwLjkzMTFDMTYuNzU0NyAyMC4wODk1IDE2LjY2NzkgMTguNjM4MSAxNy41MDk1IDE3LjY4OTMgMTcuNTYyIDE3LjYzMDIgMTcuNjE3NCAxNy41NzM4IDE3LjY3NTcgMTcuNTIwNCAxOC4xMTAzIDE3LjEyNjcgMTguNjg2MyAxNi45MjY1IDE5LjI3MTQgMTYuOTY1NyAxOS45NjI5IDE3LjAwMzggMjAuNjEwNiAxNy4zMTYzIDIxLjA3MDcgMTcuODMzOUwyNC40MTg0IDIxLjU2NzhDMjQuMjEyNyAyMi42OTQ4IDI0LjU3MjcgMjMuODUxIDI1LjM4MTggMjQuNjYyIDI2LjAzMzIgMjUuMzIgMjYuOTIyNyAyNS42ODcxIDI3Ljg0ODUgMjUuNjhMMjguNDc4NSAyNi41ODMxQzI3LjgyMTUgMjcuMTgzMSAyNy4xOTI4IDI3LjgxMTggMjYuNTkyNCAyOC40NjkzWk0xNy45ODI4IDQ5LjUyMzlDMTYuNjI3MSA0OC4xNTgzIDE0LjQyMSA0OC4xNTAzIDEzLjA1NTQgNDkuNTA2MSAxMi45MTEzIDQ5LjY0OTIgMTIuNzc5OSA0OS44MDQ3IDEyLjY2MjggNDkuOTcwN0w3LjQzODIgNTAuMjg1NkM2LjE3Mjg0IDUwLjM2MiA1LjA4NTE1IDQ5LjM5ODEgNS4wMDg3NyA0OC4xMzI4IDUuMDAzOTcgNDguMDUzMyA1LjAwMzMxIDQ3Ljk3MzYgNS4wMDY4IDQ3Ljg5NCA1LjAzNjYzIDQ3LjMwODMgNS4zMDIyMyA0Ni43NTk3IDUuNzQzMSA0Ni4zNzMgNi4yMTk0NCA0NS45NDYyIDYuODM2NDUgNDUuNzEwMiA3LjQ3NiA0NS43MSA3LjUyNjggNDUuNzEgNy41NzggNDUuNzExNCA3LjYyOTMgNDUuNzE0NEwxMi42MzYxIDQ1Ljk4NzhDMTMuMjg3NiA0Ni45Mjk4IDE0LjM1OTQgNDcuNDkyOCAxNS41MDQ4IDQ3LjQ5NDYgMTYuNDMxIDQ3LjQ5OTIgMTcuMzE5OSA0Ny4xMjk3IDE3Ljk3IDQ2LjQ3TDE5LjA0NDIgNDYuNjYxM0MxOS4wMjQyIDQ3LjEwNTQgMTkuMDEwMyA0Ny41NTEzIDE5LjAxMDMgNDguMDAwMyAxOS4wMTAzIDQ4LjQ0NzEgMTkuMDI0IDQ4Ljg5MDggMTkuMDQ0MSA0OS4zMzI4Wk0yNy44NTM0IDcwLjMwNjJDMjYuOTIzOCA3MC4zMDU5IDI2LjAzMiA3MC42NzQxIDI1LjM3MzQgNzEuMzMwMUwyNS4zNzM0IDcxLjMzMDZDMjQuNTcxMyA3Mi4xMjkyIDI0LjIxMDYgNzMuMjY5NyAyNC40MDc1IDc0LjM4NDNMMjAuOTM1OSA3OC4zMDEzQzIwLjA5NDMgNzkuMjUwMSAxOC42NDI5IDc5LjMzNjkgMTcuNjk0MSA3OC40OTUzIDE3LjYzNSA3OC40NDI4IDE3LjU3ODYgNzguMzg3NCAxNy41MjUyIDc4LjMyOTEgMTcuMTMyMyA3Ny44OTQgMTYuOTMyMyA3Ny4zMTg0IDE2Ljk3MDUgNzYuNzMzNCAxNy4wMDg2IDc2LjA0MTkgMTcuMzIxMSA3NS4zOTQyIDE3LjgzODcgNzQuOTM0MUwyMS41NzI2IDcxLjU4NjRDMjIuNjk5NyA3MS43OTQgMjMuODU2OCA3MS40MzM3IDI0LjY2NjggNzAuNjIzIDI1LjMyNDMgNjkuOTcxMyAyNS42OTEzIDY5LjA4MiAyNS42ODQ5IDY4LjE1NjNMMjYuNTg4MiA2Ny41MjU2QzI3LjE4NzcgNjguMTgyOCAyNy44MTYzIDY4LjgxMTYgMjguNDc0MSA2OS40MTJaTTQ5LjUyODcgNzguMDIyQzQ4LjE2MzEgNzkuMzc3NyA0OC4xNTUxIDgxLjU4MzggNDkuNTEwOSA4Mi45NDk0IDQ5LjY1NCA4My4wOTM1IDQ5LjgwOTUgODMuMjI0OSA0OS45NzU1IDgzLjM0Mkw1MC4yOTA0IDg4LjU2NjZDNTAuMzY2OSA4OS44MzE5IDQ5LjQwMzEgOTAuOTE5NyA0OC4xMzc4IDkwLjk5NjIgNDguMDU4MiA5MS4wMDEgNDcuOTc4NCA5MS4wMDE3IDQ3Ljg5ODggOTAuOTk4MiA0Ny4zMTMxIDkwLjk2ODQgNDYuNzY0NSA5MC43MDI4IDQ2LjM3NzggOTAuMjYxOSA0NS45MTU2IDg5Ljc0NjEgNDUuNjc4NSA4OS4wNjcxIDQ1LjcxOTIgODguMzc1N0w0NS45OTI2IDgzLjM2ODlDNDYuOTM0NyA4Mi43MTczIDQ3LjQ5NzcgODEuNjQ1NCA0Ny40OTk0IDgwLjUgNDcuNTAzOSA3OS41NzM3IDQ3LjEzNDQgNzguNjg0OCA0Ni40NzQ1IDc4LjAzNDdMNDYuNjY0NSA3Ni45NjU5QzQ3LjExMDggNzYuOTg1OSA0Ny41NTg4IDc3IDQ4LjAxMDEgNzcgNDguNDU1NCA3NyA0OC44OTc1IDc2Ljk4NjMgNDkuMzM4IDc2Ljk2NjNaTTcwLjMxMSA2OC4xNTE0QzcwLjMwNjggNjkuMDgxOCA3MC42NzU2IDY5Ljk3NSA3MS4zMzQ5IDcwLjYzMTRMNzEuMzM1NCA3MC42MzE0QzcyLjEzNDQgNzEuNDMyOCA3My4yNzQ1IDcxLjc5MzQgNzQuMzg5MSA3MS41OTczTDc4LjMwNjEgNzUuMDY4OUM3OS4yNTQ5IDc1LjkxMDUgNzkuMzQxNyA3Ny4zNjE5IDc4LjUwMDEgNzguMzEwNyA3OC40NDc2IDc4LjM2OTggNzguMzkyMiA3OC40MjYyIDc4LjMzMzkgNzguNDc5NiA3Ny44OTc0IDc4Ljg3MDEgNzcuMzIyOCA3OS4wNjk5IDc2LjczODIgNzkuMDM0MyA3Ni4wNDY3IDc4Ljk5NjIgNzUuMzk5IDc4LjY4MzcgNzQuOTM4OSA3OC4xNjYxTDcxLjU5MTIgNzQuNDMyMkM3MS43OTY5IDczLjMwNTIgNzEuNDM2OSA3Mi4xNDkgNzAuNjI3OCA3MS4zMzggNjkuOTgyNiA3MC42ODcxIDY5LjEwNDMgNzAuMzIwNiA2OC4xODc4IDcwLjMxOTlMNjguMTYwNSA3MC4zMTk5IDY3LjUzNDggNjkuNDIzM0M2OC4xOTI3IDY4LjgyMzMgNjguODIyMiA2OC4xOTQgNjkuNDIzMyA2Ny41MzUzWk00OC4wMSA3NUMzMy4wOTgzIDc1IDIxLjAxIDYyLjkxMTcgMjEuMDEgNDggMjEuMDEgMzMuMDg4MyAzMy4wOTgzIDIxIDQ4LjAxIDIxIDYyLjkyMTcgMjEgNzUuMDEgMzMuMDg4MyA3NS4wMSA0OCA3NC45OTMyIDYyLjkwNDcgNjIuOTE0NyA3NC45ODMyIDQ4LjAxIDc1Wk05MC4yNjY1IDQ5LjYyN0M4OS43NTE3IDUwLjA5MDkgODkuMDcyIDUwLjMyODMgODguMzgwMyA1MC4yODU2TDgzLjM3MzUgNTAuMDExN0M4Mi43MjE3IDQ5LjA3IDgxLjY1IDQ4LjUwNzMgODAuNTA0OCA0OC41MDU0IDc5LjU3ODcgNDguNTAwOSA3OC42OSA0OC44NzA0IDc4LjA0IDQ5LjUzTDc2Ljk3NjkgNDkuMzQwNkM3Ni45OTY5IDQ4Ljg5NTkgNzcuMDEwOSA0OC40NDk0IDc3LjAxMDkgNDcuOTk5NyA3Ny4wMTA5IDQ3LjU1MjIgNzYuOTk3MiA0Ny4xMDc5IDc2Ljk3NyA0Ni42NjUyTDc4LjAyNyA0Ni40NzU4Qzc5LjM4MjcgNDcuODQxNCA4MS41ODg4IDQ3Ljg0OTQgODIuOTU0NCA0Ni40OTM2IDgzLjA5ODUgNDYuMzUwNSA4My4yMjk5IDQ2LjE5NSA4My4zNDcgNDYuMDI5TDg4LjU3MTYgNDUuNzE0MUM4OS44MzcgNDUuNjM3NiA5MC45MjQ3IDQ2LjYwMTQgOTEuMDAxMiA0Ny44NjY3IDkxLjAwNiA0Ny45NDYzIDkxLjAwNjcgNDguMDI2MSA5MS4wMDMyIDQ4LjEwNTcgOTAuOTczNCA0OC42OTE1IDkwLjcwNzYgNDkuMjQwMyA5MC4yNjY1IDQ5LjYyN1oiLz48cGF0aCBkPSJNNDguMDEgMjNDMzQuMjAyOSAyMyAyMy4wMSAzNC4xOTI5IDIzLjAxIDQ4IDIzLjAxIDYxLjgwNzEgMzQuMjAyOSA3MyA0OC4wMSA3MyA2MS44MTcxIDczIDczLjAxIDYxLjgwNzEgNzMuMDEgNDggNzIuOTk0NCAzNC4xOTkzIDYxLjgxMDYgMjMuMDE1NiA0OC4wMSAyM1pNNzAuODA4NiA0NS4wMDI0QzY5LjkzMDkgNDUuMjgwOSA2OS4wMjExIDQ1LjQ0NTggNjguMTAxNSA0NS40OTMyIDY2LjczMjUgNDMuNzgyOSA2NC4yMzYzIDQzLjUwNjMgNjIuNTI2IDQ0Ljg3NTMgNjIuMjk3OSA0NS4wNTc5IDYyLjA5MDcgNDUuMjY1MSA2MS45MDgxIDQ1LjQ5MzIgNjAuOTE5NiA0NS40NDY0IDU5Ljk0MjIgNDUuMjY0IDU5LjAwMzMgNDQuOTUxMkw1OC41MzA3IDQ0Ljc5MzZDNTguMzIzOSA0NC4xMTc3IDU4LjA1MiA0My40NjM0IDU3LjcxODkgNDIuODRMNTcuOTQ1MiA0Mi4zODcyQzU4LjM4NzggNDEuNTAxOCA1OC45NSA0MC42ODE0IDU5LjYxNjEgMzkuOTQ5MiA2MS43OTM1IDQwLjE5MDQgNjMuNzU0MiAzOC42MjA4IDYzLjk5NTUgMzYuNDQzNCA2NC4wMjc2IDM2LjE1MzIgNjQuMDI3NiAzNS44NjAzIDYzLjk5NTUgMzUuNTcgNjQuNjc2NyAzNC45NTYgNjUuNDMzNCAzNC40MzE0IDY2LjI0NzQgMzQuMDA4OSA2OC43MTEgMzcuMjA2OSA3MC4yODQ2IDQwLjk5OTcgNzAuODA4NiA0NS4wMDI0Wk03MS4wMSA0OEM3MS4wMSA0OC4zMjY1IDcwLjk5ODggNDguNjUgNzAuOTg1MyA0OC45NzM2IDY5Ljg3OTIgNDguNjY1NyA2OC43MzY2IDQ4LjUwODIgNjcuNTg4NCA0OC41MDU0TDY3LjAxMzcgNDguNTA1NCA2Ni43MjM3IDQ5LjAwMkM2Ni4xODY2IDQ5Ljk1MTggNjQuOTgxMyA1MC4yODYzIDY0LjAzMTYgNDkuNzQ5MyA2My43MTkyIDQ5LjU3MjcgNjMuNDYwOSA0OS4zMTQzIDYzLjI4NDMgNDkuMDAyTDYyLjk5NTIgNDguNTA1IDYyLjQyIDQ4LjUwNUM2MS4yNDk2IDQ4LjUwOCA2MC4wODUxIDQ4LjY3MTcgNTguOTU5MyA0OC45OTE3IDU4Ljk4ODcgNDguNjY0MyA1OS4wMDkzIDQ4LjMzNDQgNTkuMDA5MyA0Ny45OTk2IDU5LjAwOTMgNDcuNjY4NSA1OC45ODg0IDQ3LjM0MjUgNTguOTU5MyA0Ny4wMTg4IDYwLjA4NDkgNDcuMzM4NSA2MS4yNDkxIDQ3LjUwMjEgNjIuNDE5MyA0Ny41MDVMNjIuOTk0NSA0Ny41MDUgNjMuMjgzNiA0Ny4wMDc5QzYzLjgyMDggNDYuMDU4MiA2NS4wMjYyIDQ1LjcyMzggNjUuOTc1OCA0Ni4yNjEgNjYuMjg4MSA0Ni40Mzc3IDY2LjU0NjQgNDYuNjk2IDY2LjcyMyA0Ny4wMDg0TDY3LjAxMyA0Ny41MDUgNjcuNTg3NyA0Ny41MDVDNjguNzM1OSA0Ny41MDIzIDY5Ljg3ODYgNDcuMzQ0OCA3MC45ODQ4IDQ3LjAzNyA3MC45OTkyIDQ3LjM1NyA3MS4wMSA0Ny42NzcyIDcxLjAxIDQ4Wk02Ni4yNCA2MkM2NS40MjU1IDYxLjU3NzYgNjQuNjY4NCA2MS4wNTMgNjMuOTg2OSA2MC40Mzg3IDY0LjIyODQgNTguMjYxMyA2Mi42NTkgNTYuMzAwMyA2MC40ODE2IDU2LjA1ODggNjAuMTkxMSA1Ni4wMjY1IDU5Ljg5OCA1Ni4wMjY1IDU5LjYwNzUgNTYuMDU4NyA1OC45NDE0IDU1LjMyNjggNTguMzc5NSA1NC41MDY2IDU3LjkzNzUgNTMuNjIxMkw1Ny43MTI4IDUzLjE3MTJDNTguMDQ2OCA1Mi41NDgxIDU4LjMxOTUgNTEuODk0IDU4LjUyNzIgNTEuMjE4Mkw1OS4wMDI5IDUxLjA1OTdDNTkuOTQxNSA1MC43NDY1IDYwLjkxODggNTAuNTYzOSA2MS45MDcyIDUwLjUxNzIgNjMuMjc2NSA1Mi4yMjc2IDY1Ljc3MyA1Mi41MDQxIDY3LjQ4MzQgNTEuMTM0OSA2Ny43MTE0IDUwLjk1MjQgNjcuOTE4NiA1MC43NDUyIDY4LjEwMTEgNTAuNTE3MiA2OS4wMjAyIDUwLjU2NDcgNjkuOTI5NSA1MC43Mjk3IDcwLjgwNjggNTEuMDA4MSA3MC4yODExIDU1LjAxMDcgNjguNzA1OCA1OC44MDMgNjYuMjQwOCA2MlpNNjQuOTMzNSAzMi40NDM5QzYzLjkzNzIgMzMuMDA3NSA2My4wMjEyIDMzLjcwMjQgNjIuMjEgMzQuNTFMNjEuODAzMiAzNC45MTYyIDYxLjk1MDIgMzUuNDcyNEM2Mi4yNDE5IDM2LjUyMzkgNjEuNjI2IDM3LjYxMjggNjAuNTc0NSAzNy45MDQ1IDYwLjIyODkgMzguMDAwNCA1OS44NjM3IDM4LjAwMDQgNTkuNTE4MSAzNy45MDQ1TDU4Ljk2MjQgMzcuNzU3NSA1OC41NTU3IDM4LjE2MzhDNTcuNzI5MSAzOC45OTQ0IDU3LjAyMDggMzkuOTM0OCA1Ni40NTA3IDQwLjk1ODYgNTYuMDI3NyA0MC40NTI0IDU1LjU2MDMgMzkuOTg0OSA1NS4wNTQxIDM5LjU2MTggNTYuMDc3OCAzOC45OTE2IDU3LjAxODEgMzguMjgzMyA1Ny44NDg2IDM3LjQ1NjdMNTguMjU0OSAzNy4wNSA1OC4xMDc5IDM2LjQ5NDNDNTcuODE2MSAzNS40NDI4IDU4LjQzMiAzNC4zNTM4IDU5LjQ4MzYgMzQuMDYyIDU5LjgyOTIgMzMuOTY2MiA2MC4xOTQ0IDMzLjk2NjEgNjAuNTQgMzQuMDYyTDYxLjA5NjIgMzQuMjA5IDYxLjUwMjQgMzMuODAyMkM2Mi4zMDk5IDMyLjk5MTEgNjMuMDA0OCAzMi4wNzUxIDYzLjU2ODQgMzEuMDc5IDY0LjA0MjQgMzEuNTE0OCA2NC40OTc0IDMxLjk2OTggNjQuOTMzNSAzMi40NDM5Wk01MS4wMDEyIDcwLjc5OTFDNTAuNzIzNiA2OS45MjI4IDUwLjU1ODkgNjkuMDE0NyA1MC41MTEyIDY4LjA5NjcgNTIuMjIxNSA2Ni43Mjc3IDUyLjQ5ODEgNjQuMjMxNSA1MS4xMjkxIDYyLjUyMTIgNTAuOTQ2NSA2Mi4yOTMxIDUwLjczOTMgNjIuMDg1OSA1MC41MTEyIDYxLjkwMzMgNTAuNTU3OCA2MC45MTQ4IDUwLjc0MDIgNTkuOTM3MyA1MS4wNTMyIDU4Ljk5ODVMNTEuMjEyMyA1OC41MjE0QzUxLjg4NjYgNTguMzE1MyA1Mi41MzkzIDU4LjA0NDUgNTMuMTYxNCA1Ny43MTI2TDUzLjYxNzIgNTcuOTQwNEM1NC41MDI2IDU4LjM4MyA1NS4zMjMgNTguOTQ1MiA1Ni4wNTUyIDU5LjYxMTMgNTUuODEzOSA2MS43ODg3IDU3LjM4MzUgNjMuNzQ5NCA1OS41NjA5IDYzLjk5MDcgNTkuODUxMyA2NC4wMjI5IDYwLjE0NDMgNjQuMDIyOSA2MC40MzQ2IDYzLjk5MDcgNjEuMDQ4NCA2NC42NzE3IDYxLjU3MjggNjUuNDI4MSA2MS45OTUyIDY2LjI0MTggNTguNzk2NyA2OC43MDQxIDU1LjAwMzcgNzAuMjc2NCA1MS4wMDEyIDcwLjc5OTFaTTQ4LjAxIDU3QzQzLjAzOTQgNTcgMzkuMDEgNTIuOTcwNiAzOS4wMSA0OCAzOS4wMSA0My4wMjk0IDQzLjAzOTQgMzkgNDguMDEgMzkgNTIuOTgwNiAzOSA1Ny4wMSA0My4wMjk0IDU3LjAxIDQ4IDU3LjAwNDUgNTIuOTY4MyA1Mi45NzgzIDU2Ljk5NDUgNDguMDEgNTdaTTQ1LjQ4NzIgNjguMDk3MkM0NS40Mzk4IDY5LjAxNDEgNDUuMjc1MyA2OS45MjEyIDQ0Ljk5NzggNzAuNzk2NCA0MC45OTYyIDcwLjI2OTggMzcuMjA1IDY4LjY5NDIgMzQuMDA5IDY2LjIyOTIgMzQuNDMwNiA2NS40MTc0IDM0Ljk1NCA2NC42NjI1IDM1LjU2NjMgNjMuOTgyOSAzNy43NDM4IDY0LjIyNDQgMzkuNzA0NyA2Mi42NTUxIDM5Ljk0NjIgNjAuNDc3NiAzOS45Nzg1IDYwLjE4NzEgMzkuOTc4NSA1OS44OTQgMzkuOTQ2MyA1OS42MDM1IDQwLjY3ODQgNTguOTM3NyA0MS40OTg2IDU4LjM3NTggNDIuMzgzOCA1Ny45MzM1TDQyLjg0MTYgNTcuNzA0NkM0My40NjE0IDU4LjAzNjggNDQuMTExOCA1OC4zMDg0IDQ0Ljc4MzggNTguNTE1NUw0NC45NDQ4IDU4Ljk5ODlDNDUuMjU4MSA1OS45Mzc3IDQ1LjQ0MDYgNjAuOTE1MSA0NS40ODczIDYxLjkwMzcgNDMuNzc2OSA2My4yNzMgNDMuNTAwNCA2NS43Njk1IDQ0Ljg2OTYgNjcuNDc5OSA0NS4wNTIyIDY3LjcwNzkgNDUuMjU5MyA2Ny45MTUxIDQ1LjQ4NzMgNjguMDk3NlpNNDUuMDA4OCAyNS4yMDIyQzQ1LjI4NjMgMjYuMDc4IDQ1LjQ1MDcgMjYuOTg1OCA0NS40OTggMjcuOTAzMyA0My43ODc3IDI5LjI3MjMgNDMuNTExMSAzMS43Njg1IDQ0Ljg4MDEgMzMuNDc4OCA0NS4wNjI3IDMzLjcwNjkgNDUuMjY5OSAzMy45MTQxIDQ1LjQ5OCAzNC4wOTY3IDQ1LjQ1MTIgMzUuMDg1MiA0NS4yNjg4IDM2LjA2MjYgNDQuOTU2IDM3LjAwMTVMNDQuNzk2IDM3LjQ4MTVDNDQuMTI0MSAzNy42ODc4IDQzLjQ3MzYgMzcuOTU4NSA0Mi44NTM2IDM4LjI4OTdMNDIuMzkxNyAzOC4wNTg4QzQxLjUwNjUgMzcuNjE2NSA0MC42ODYzIDM3LjA1NDYgMzkuOTU0MiAzNi4zODg4IDQwLjE5NTUgMzQuMjExNCAzOC42MjU5IDMyLjI1MDcgMzYuNDQ4NSAzMi4wMDk0IDM2LjE1ODEgMzEuOTc3MiAzNS44NjUxIDMxLjk3NzIgMzUuNTc0OCAzMi4wMDk0IDM0Ljk2MjcgMzEuMzMwMSAzNC40Mzk0IDMwLjU3NTcgMzQuMDE3NyAyOS43NjQzIDM3LjIxNDkgMjcuMzAwOCA0MS4wMDY5IDI1LjcyNjkgNDUuMDA4OCAyNS4yMDIyWk01MC41MjI0IDI3LjkwMzNDNTAuNTY5OSAyNi45ODU4IDUwLjczNDYgMjYuMDc4MSA1MS4wMTI0IDI1LjIwMjMgNTUuMDE0NyAyNS43MjY5IDU4LjgwNyAyNy4zMDEgNjIuMDA0NCAyOS43NjQ4IDYxLjU4MTkgMzAuNTc4OSA2MS4wNTcyIDMxLjMzNTggNjAuNDQzMSAzMi4wMTcxIDU4LjI2NTcgMzEuNzc1OCA1Ni4zMDUgMzMuMzQ1NCA1Ni4wNjM3IDM1LjUyMjggNTYuMDMxNSAzNS44MTMyIDU2LjAzMTUgMzYuMTA2MiA1Ni4wNjM3IDM2LjM5NjUgNTUuMzMxOCAzNy4wNjI2IDU0LjUxMTYgMzcuNjI0NSA1My42MjYyIDM4LjA2NjVMNTMuMTczOCAzOC4yOTI2QzUyLjU1MiAzNy45NiA1MS44OTk0IDM3LjY4ODMgNTEuMjI1MiAzNy40ODE0TDUxLjA2NTIgMzcuMDAxNEM1MC43NTIgMzYuMDYyOCA1MC41Njk0IDM1LjA4NTUgNTAuNTIyNyAzNC4wOTcxIDUyLjIzMzEgMzIuNzI3OCA1Mi41MDk2IDMwLjIzMTMgNTEuMTQwNCAyOC41MjA5IDUwLjk1NzkgMjguMjkyOSA1MC43NTA3IDI4LjA4NTcgNTAuNTIyNyAyNy45MDMyWk00OC45NzY4IDI1LjAyNDVDNDguNjY5OCAyNi4xMjkgNDguNTEyOCAyNy4yNjk3IDQ4LjUxIDI4LjQxNkw0OC41MSAyOC45OTA3IDQ5LjAwNjYgMjkuMjgwN0M0OS45NTY0IDI5LjgxNzggNTAuMjkwOSAzMS4wMjMxIDQ5Ljc1MzkgMzEuOTcyOCA0OS41NzczIDMyLjI4NTIgNDkuMzE4OSAzMi41NDM1IDQ5LjAwNjYgMzIuNzIwMUw0OC41MDk2IDMzLjAwOTIgNDguNTA5NiAzMy41ODQ0QzQ4LjUxMjYgMzQuNzU2NyA0OC42NzY5IDM1LjkyMjkgNDguOTk3OSAzNy4wNTA0IDQ4LjY3MTggMzcuMDIxMyA0OC4zNDMzIDM3LjAwMDQgNDguMDA5OCAzNy4wMDA0IDQ3LjY3NjMgMzcuMDAwNCA0Ny4zNDc2IDM3LjAyMTIgNDcuMDIxNiAzNy4wNTA0IDQ3LjM0MjQgMzUuOTIyOSA0Ny41MDY2IDM0Ljc1NjYgNDcuNTA5NiAzMy41ODQ0TDQ3LjUwOTYgMzMuMDA5MiA0Ny4wMTI1IDMyLjcyMDFDNDYuMDYyNyAzMi4xODMgNDUuNzI4MiAzMC45Nzc3IDQ2LjI2NTIgMzAuMDI4IDQ2LjQ0MTggMjkuNzE1NiA0Ni43MDAyIDI5LjQ1NzMgNDcuMDEyNSAyOS4yODA3TDQ3LjUwOTEgMjguOTkwNyA0Ny41MDkxIDI4LjQxNkM0Ny41MDY0IDI3LjI2OTcgNDcuMzQ5NSAyNi4xMjkgNDcuMDQyOCAyNS4wMjQ1IDQ3LjM2MzcgMjUuMDExMiA0Ny42ODUyIDI1IDQ4LjAwOTMgMjUgNDguMzMzNCAyNSA0OC42NTU5IDI1LjAxMTIgNDguOTc2OCAyNS4wMjQ1Wk0zMi40NTI2IDMxLjA3ODRDMzMuMDE1NSAzMi4wNzE4IDMzLjcwOSAzMi45ODUzIDM0LjUxNDYgMzMuNzk0NEwzNC45MjA4IDM0LjIwMTIgMzUuNDc3IDM0LjA1NDJDMzYuNTI4NSAzMy43NjI1IDM3LjYxNzQgMzQuMzc4NCAzNy45MDkxIDM1LjQyOTkgMzguMDA1IDM1Ljc3NTUgMzguMDA1IDM2LjE0MDcgMzcuOTA5MSAzNi40ODYzTDM3Ljc2MjEgMzcuMDQyIDM4LjE2ODQgMzcuNDQ4N0MzOS4wMDA5IDM4LjI3NzIgMzkuOTQzOCAzOC45ODY5IDQwLjk3MDQgMzkuNTU3NyA0MC40NjMgMzkuOTgxNyAzOS45OTQ0IDQwLjQ1MDMgMzkuNTcwNCA0MC45NTc3IDM4Ljk5OTYgMzkuOTMxMiAzOC4yODk5IDM4Ljk4ODQgMzcuNDYxNCAzOC4xNTU5TDM3LjA1NDcgMzcuNzQ5NiAzNi40OTkgMzcuODk2NkMzNS40NDc0IDM4LjE4ODIgMzQuMzU4NSAzNy41NzIyIDM0LjA2NjkgMzYuNTIwNiAzMy45NzExIDM2LjE3NTEgMzMuOTcxMSAzNS44MSAzNC4wNjY5IDM1LjQ2NDVMMzQuMjEzOSAzNC45MDgzIDMzLjgwNzEgMzQuNTAyMUMzMi45OTc5IDMzLjY5NjUgMzIuMDg0NCAzMy4wMDMgMzEuMDkxIDMyLjQ0MDEgMzEuNTI1OSAzMS45Njc2IDMxLjk3OTggMzEuNTEzNyAzMi40NTI2IDMxLjA3ODRaTTI1LjIxMTcgNTAuOTk0OEMyNi4wODYxIDUwLjcxODMgMjYuOTkyMiA1MC41NTQ0IDI3LjkwODEgNTAuNTA2OCAyOS4yNzcxIDUyLjIxNzEgMzEuNzczMyA1Mi40OTM3IDMzLjQ4MzYgNTEuMTI0NyAzMy43MTE3IDUwLjk0MjEgMzMuOTE4OSA1MC43MzQ5IDM0LjEwMTUgNTAuNTA2OCAzNS4wOSA1MC41NTM0IDM2LjA2NzUgNTAuNzM1OCAzNy4wMDYzIDUxLjA0ODhMMzcuNDkxIDUxLjIxMDVDMzcuNjk2NiA1MS44ODA4IDM3Ljk2NjMgNTIuNTI5OCAzOC4yOTYyIDUzLjE0ODRMMzguMDYzOSA1My42MTMzQzM3LjYyMTYgNTQuNDk4NSAzNy4wNTk3IDU1LjMxODcgMzYuMzkzOSA1Ni4wNTA4IDM0LjIxNjUgNTUuODA5MyAzMi4yNTU2IDU3LjM3ODcgMzIuMDE0MiA1OS41NTYxIDMxLjk4MiA1OS44NDY1IDMxLjk4MTkgNjAuMTM5NiAzMi4wMTQxIDYwLjQzIDMxLjMzNTEgNjEuMDQyIDMwLjU4MSA2MS41NjUyIDI5Ljc3IDYxLjk4NjkgMjcuMzA3NyA1OC43ODkgMjUuNzM1MSA1NC45OTY3IDI1LjIxMTcgNTAuOTk0OFpNMjUuMDEgNDhDMjUuMDEgNDcuNjc0NiAyNS4wMjExIDQ3LjM1MTcgMjUuMDM0NiA0Ny4wMjk1IDI2LjEzNzMgNDcuMzM1NSAyNy4yNzYxIDQ3LjQ5MTkgMjguNDIwNCA0Ny40OTQ2TDI4Ljk5NTYgNDcuNDk0NiAyOS4yODQ3IDQ2Ljk5NzZDMjkuODIxOCA0Ni4wNDc4IDMxLjAyNzEgNDUuNzEzMyAzMS45NzY4IDQ2LjI1MDMgMzIuMjg5MiA0Ni40MjY5IDMyLjU0NzUgNDYuNjg1MyAzMi43MjQxIDQ2Ljk5NzZMMzMuMDE0MSA0Ny40OTQyIDMzLjU4ODggNDcuNDk0MkMzNC43NjMyIDQ3LjQ5MTIgMzUuOTMxNSA0Ny4zMjY0IDM3LjA2MDggNDcuMDA0MiAzNy4wMzA4IDQ3LjMzMjYgMzcuMDEwOCA0Ny42NjM3IDM3LjAxMDggNDcuOTk5NiAzNy4wMTA4IDQ4LjMzMTggMzcuMDMxNiA0OC42NTkgMzcuMDYwOCA0OC45ODM3IDM1LjkzMTYgNDguNjYxOCAzNC43NjM1IDQ4LjQ5NzEgMzMuNTg5NCA0OC40OTQyTDMzLjAxNDcgNDguNDk0MiAzMi43MjQ3IDQ4Ljk5MDhDMzIuMTg3OCA0OS45NDA2IDMwLjk4MjUgNTAuMjc1NCAzMC4wMzI3IDQ5LjczODUgMjkuNzIwMyA0OS41NjE5IDI5LjQ2MiA0OS4zMDM2IDI5LjI4NTMgNDguOTkxM0wyOC45OTYyIDQ4LjQ5NDIgMjguNDIxIDQ4LjQ5NDJDMjcuMjc2NiA0OC40OTY5IDI2LjEzNzcgNDguNjUzMiAyNS4wMzQ5IDQ4Ljk1OSAyNS4wMjE2IDQ4LjY0MDggMjUuMDEgNDguMzIxNyAyNS4wMSA0OFpNMzcuNDkzOCA0NC43NzczIDM3LjAwNTkgNDQuOTM5OUMzNi4wNjcxIDQ1LjI1MzIgMzUuMDg5NyA0NS40MzU3IDM0LjEwMTEgNDUuNDgyNCAzMi43MzE4IDQzLjc3MiAzMC4yMzUzIDQzLjQ5NTUgMjguNTI0OSA0NC44NjQ3IDI4LjI5NjkgNDUuMDQ3MiAyOC4wODk3IDQ1LjI1NDQgMjcuOTA3MiA0NS40ODI0IDI2Ljk5MTkgNDUuNDM0OSAyNi4wODY1IDQ1LjI3MDkgMjUuMjEyNyA0NC45OTQzIDI1LjczNzkgNDAuOTkyNiAyNy4zMTIzIDM3LjIwMTEgMjkuNzc2IDM0LjAwNDMgMzAuNTg3NSAzNC40MjYxIDMxLjM0MjEgMzQuOTQ5NSAzMi4wMjE1IDM1LjU2MTcgMzEuNzgwMiAzNy43MzkxIDMzLjM0OTggMzkuNjk5OCAzNS41MjcyIDM5Ljk0MTEgMzUuODE3NiAzOS45NzMzIDM2LjExMDYgMzkuOTczMyAzNi40MDA5IDM5Ljk0MTEgMzcuMDY2NyA0MC42NzMyIDM3LjYyODcgNDEuNDkzNCAzOC4wNzA5IDQyLjM3ODZMMzguMzAwOSA0Mi44Mzk0QzM3Ljk3MDQgNDMuNDU4IDM3LjcwMDMgNDQuMTA2OSAzNy40OTQyIDQ0Ljc3NzNaTTMxLjA4MzQgNjMuNTUyMUMzMi4wNzY3IDYyLjk4OTEgMzIuOTkwMSA2Mi4yOTU2IDMzLjc5OTIgNjEuNDlMMzQuMjA2IDYxLjA4MzggMzQuMDU5IDYwLjUyNzZDMzMuNzY3MyA1OS40NzYxIDM0LjM4MzIgNTguMzg3MiAzNS40MzQ3IDU4LjA5NTUgMzUuNzgwMyA1Ny45OTk2IDM2LjE0NTUgNTcuOTk5NiAzNi40OTExIDU4LjA5NTVMMzcuMDQ2OCA1OC4yNDI1IDM3LjQ1MzUgNTcuODM2MkMzOC4yODIyIDU3LjAwMzYgMzguOTkxOSA1Ni4wNjA2IDM5LjU2MjcgNTUuMDMzOSAzOS45ODY1IDU1LjU0MTUgNDAuNDU0OCA1Ni4wMTAzIDQwLjk2MjEgNTYuNDM0NSAzOS45MzU3IDU3LjAwNTMgMzguOTkzIDU3LjcxNDkgMzguMTYwNiA1OC41NDMzTDM3Ljc1NDMgNTguOTUgMzcuOTAxMyA1OS41MDU3QzM4LjE5MjkgNjAuNTU3MyAzNy41NzY5IDYxLjY0NjMgMzYuNTI1MiA2MS45Mzc5IDM2LjE3OTYgNjIuMDMzOCAzNS44MTQzIDYyLjAzMzcgMzUuNDY4NyA2MS45Mzc4TDM0LjkxMjUgNjEuNzkwOCAzNC41MDU4IDYyLjE5NzZDMzMuNzAwNiA2My4wMDcgMzMuMDA3NCA2My45MjA1IDMyLjQ0NDYgNjQuOTEzOCAzMS45NzIzIDY0LjQ3ODkgMzEuNTE4NiA2NC4wMjUgMzEuMDgzNCA2My41NTIxWk00Ny4wMzI4IDcwLjk3NTJDNDcuMzM5NyA2OS44NzA4IDQ3LjQ5NjcgNjguNzMwMiA0Ny40OTk0IDY3LjU4NEw0Ny40OTk0IDY3LjAwODggNDcuMDAyNCA2Ni43MTk3QzQ2LjA1MjYgNjYuMTgyNiA0NS43MTgxIDY0Ljk3NzMgNDYuMjU1MSA2NC4wMjc2IDQ2LjQzMTcgNjMuNzE1MiA0Ni42OTAxIDYzLjQ1NjkgNDcuMDAyNCA2My4yODAzTDQ3LjQ5OSA2Mi45OTAzIDQ3LjQ5OSA2Mi40MTZDNDcuNDk2IDYxLjI0MzUgNDcuMzMxNyA2MC4wNzcgNDcuMDEwNiA1OC45NDk0IDQ3LjM0MDYgNTguOTc5NCA0Ny42NzI2IDU5IDQ4LjAxIDU5IDQ4LjM0IDU5IDQ4LjY2NDQgNTguOTc5MSA0OC45ODY4IDU4Ljk1IDQ4LjY2NjEgNjAuMDc3MyA0OC41MDE5IDYxLjI0MzQgNDguNDk5IDYyLjQxNTVMNDguNDk5IDYyLjk5MDIgNDguOTk1NiA2My4yODAyQzQ5Ljk0NTQgNjMuODE3MyA1MC4yNzk5IDY1LjAyMjYgNDkuNzQyOSA2NS45NzIzIDQ5LjU2NjMgNjYuMjg0NyA0OS4zMDc5IDY2LjU0MyA0OC45OTU2IDY2LjcxOTZMNDguNDk4NSA2Ny4wMDg3IDQ4LjQ5ODUgNjcuNTgzOUM0OC41MDEyIDY4LjczMDMgNDguNjU4MSA2OS44NzExIDQ4Ljk2NDkgNzAuOTc1NyA0OC42NDc2IDcwLjk4ODcgNDguMzI5OSA3MC45OTk5IDQ4LjAwOTUgNzAuOTk5OSA0Ny42ODI1IDcxIDQ3LjM1NzMgNzAuOTg4OSA0Ny4wMzI4IDcwLjk3NTJaTTYzLjU2MDggNjQuOTI4NkM2Mi45OTcyIDYzLjkzMjUgNjIuMzAyNCA2My4wMTY3IDYxLjQ5NSA2Mi4yMDU2TDYxLjA4ODggNjEuNzk4OCA2MC41MzI2IDYxLjk0NThDNTkuNDgxMSA2Mi4yMzc1IDU4LjM5MjIgNjEuNjIxNiA1OC4xMDA1IDYwLjU3MDEgNTguMDA0NiA2MC4yMjQ1IDU4LjAwNDYgNTkuODU5MyA1OC4xMDA1IDU5LjUxMzdMNTguMjQ3NSA1OC45NTggNTcuODQxMiA1OC41NTEzQzU3LjAxMDUgNTcuNzI0NyA1Ni4wNyA1Ny4wMTYzIDU1LjA0NjEgNTYuNDQ2MSA1NS41NTI1IDU2LjAyMzIgNTYuMDIwMSA1NS41NTYxIDU2LjQ0MzUgNTUuMDUwMSA1Ny4wMTM2IDU2LjA3MzYgNTcuNzIxOSA1Ny4wMTM4IDU4LjU0ODMgNTcuODQ0Mkw1OC45NTUgNTguMjUwNSA1OS41MTA3IDU4LjEwMzVDNjAuNTYyMyA1Ny44MTE5IDYxLjY1MTMgNTguNDI3OSA2MS45NDI5IDU5LjQ3OTUgNjIuMDM4OCA1OS44MjUyIDYyLjAzODcgNjAuMTkwNSA2MS45NDI4IDYwLjUzNjFMNjEuNzk1OCA2MS4wOTIzIDYyLjIwMjYgNjEuNDk5QzYzLjAxNCA2Mi4zMDYgNjMuOTI5OSA2My4wMDA1IDY0LjkyNTkgNjMuNTY0MSA2NC40OSA2NC4wMzc2IDY0LjAzNDkgNjQuNDkyNSA2My41NjA4IDY0LjkyODZaIi8+PC9nPjwvc3ZnPg=='
      },
      position: 0,
      isDialog: true,
      legend: false,
      legendLabel: ''
    }
  ],
  tutorial: {
    id: '970c03d7-1194-46f8-be81-7ec56a74c20d',
    steps: [
      {
        id: '511a64f9-6896-4973-b7f8-57eeb43d797f',
        isActive: true,
        title: 'Steuerung',
        text: 'Das ist die Steuerung',
        itemId: 'controls'
      },
      {
        id: '520c03d7-1194-46f8-be81-7ec56a74c20d',
        isActive: false,
        title: 'a',
        text: 'a',
        itemId: '5-dp1'
      }
    ]
  }
}