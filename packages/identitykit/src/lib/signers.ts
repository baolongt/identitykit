import { SignerConfig, TransportType } from "./types"

const NFID: SignerConfig = {
  id: "NFID",
  description:
    "Quickly sign in or create an anonymous, self-sovereign wallet with your email address or passkey.",
  // providerUrl: "https://nfid.one/rpc",
  providerUrl: "http://locahost:9090/rpc",
  transportType: TransportType.POPUP,
  popupHeight: 575,
  popupWidth: 450,
  label: "NFID Dev",
  icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTExLjc5NCAyLjQzM0ExLjE2MiAxLjE2MiAwIDAgMCAxMS41NDguMTJMOS4xNzQuMzc0Yy0xLjIxNi4xMy0yLjE5MS4yMzQtMi45ODMuMzc4LS44MTYuMTQ4LTEuNTE2LjM1LTIuMTY1LjcxNGE2LjY3NSA2LjY3NSAwIDAgMC0yLjUzIDIuNTA2Yy0uMzcuNjQ2LS41NzggMS4zNDMtLjczMiAyLjE1N0MuNjE0IDYuOTE5LjUgNy44OTMuMzYgOS4xMDZsLS4wMDYuMDUyLS4yMzMgMi4zMThhMS4xNjIgMS4xNjIgMCAxIDAgMi4zMTMuMjMybC4yMzEtMi4zYy4xNDYtMS4yNjQuMjQ5LTIuMTUuMzgxLTIuODQ1LjEzLS42ODIuMjc1LTEuMS40NjctMS40MzZhNC4zNSA0LjM1IDAgMCAxIDEuNjQ4LTEuNjMzYy4zMzgtLjE5Ljc2LS4zMzEgMS40NDMtLjQ1NS42OTktLjEyNyAxLjU5LS4yMjMgMi44Ni0uMzU4bDIuMzMtLjI0OFptMjIuNjEzLTEuMjhhMS4xNjIgMS4xNjIgMCAwIDAgMS4wMzMgMS4yOGwyLjMzLjI0OGMxLjI3LjEzNSAyLjE2LjIzMSAyLjg1OS4zNTguNjg0LjEyNCAxLjEwNS4yNjUgMS40NDMuNDU1YTQuMzUgNC4zNSAwIDAgMSAxLjY0OCAxLjYzM2MuMTkzLjMzNS4zMzcuNzU0LjQ2NyAxLjQzNi4xMzIuNjk1LjIzNSAxLjU4MS4zOCAyLjg0NGwuMjMyIDIuMzAyYTEuMTYyIDEuMTYyIDAgMSAwIDIuMzEzLS4yMzNsLS4yMzMtMi4zMTgtLjAwNi0uMDUyYy0uMTQtMS4yMTQtLjI1Mi0yLjE4Ny0uNDAyLTIuOTc3LS4xNTUtLjgxNC0uMzY0LTEuNTExLS43MzQtMi4xNTdhNi42NzUgNi42NzUgMCAwIDAtMi41MjktMi41MDZjLS42NS0uMzY0LTEuMzQ5LS41NjYtMi4xNjUtLjcxNC0uNzkyLS4xNDQtMS43NjctLjI0OC0yLjk4My0uMzc4TDM1LjY4Ni4xMjFhMS4xNjIgMS4xNjIgMCAwIDAtMS4yNzkgMS4wMzNabTAgNDQuOTIzYTEuMTYyIDEuMTYyIDAgMCAxIDEuMDMzLTEuMjhsMi4zMy0uMjQ4YzEuMjctLjEzNSAyLjE2LS4yMyAyLjg1OS0uMzU3LjY4NC0uMTI0IDEuMTA1LS4yNjYgMS40NDMtLjQ1NWE0LjM1IDQuMzUgMCAwIDAgMS42NDgtMS42MzNjLjE5My0uMzM2LjMzNy0uNzU1LjQ2Ny0xLjQzNy4xMzItLjY5NS4yMzUtMS41ODEuMzgtMi44NDRsLjIzMi0yLjMwMWExLjE2MiAxLjE2MiAwIDEgMSAyLjMxMy4yMzNsLS4yMzMgMi4zMTctLjAwNi4wNTNjLS4xNCAxLjIxMy0uMjUyIDIuMTg2LS40MDIgMi45NzYtLjE1NS44MTQtLjM2NCAxLjUxMi0uNzM0IDIuMTU4YTYuNjc1IDYuNjc1IDAgMCAxLTIuNTI5IDIuNTA2Yy0uNjUuMzY0LTEuMzQ5LjU2Ni0yLjE2NS43MTQtLjc5Mi4xNDMtMS43NjcuMjQ3LTIuOTgzLjM3N2wtMi4zNzQuMjUzYTEuMTYyIDEuMTYyIDAgMCAxLTEuMjc5LTEuMDMyWm0tMjEuNTggMGExLjE2MiAxLjE2MiAwIDAgMC0xLjAzMy0xLjI4bC0yLjMzLS4yNDhjLTEuMjctLjEzNS0yLjE2LS4yMy0yLjg1OS0uMzU3LS42ODQtLjEyNC0xLjEwNS0uMjY2LTEuNDQzLS40NTVhNC4zNSA0LjM1IDAgMCAxLTEuNjQ4LTEuNjMzYy0uMTkyLS4zMzYtLjMzNy0uNzU1LS40NjctMS40MzctLjEzMi0uNjk1LS4yMzUtMS41ODEtLjM4LTIuODQ0bC0uMjMyLTIuMzAxYTEuMTYyIDEuMTYyIDAgMCAwLTIuMzEzLjIzM2wuMjMzIDIuMzE3LjAwNi4wNTNjLjE0IDEuMjEzLjI1MiAyLjE4Ni40MDMgMi45NzYuMTU0LjgxNC4zNjMgMS41MTIuNzMzIDIuMTU4YTYuNjc0IDYuNjc0IDAgMCAwIDIuNTI5IDIuNTA2Yy42NS4zNjQgMS4zNDkuNTY2IDIuMTY1LjcxNC43OTIuMTQzIDEuNzY3LjI0NyAyLjk4My4zNzdsMi4zNzQuMjUzYTEuMTYyIDEuMTYyIDAgMCAwIDEuMjc5LTEuMDMyWm0tLjYzNi0zMS40MjJhMSAxIDAgMCAwLTEgMXYxNi4yNjRhMSAxIDAgMCAwIDEgMWgzLjE2NmExIDEgMCAwIDAgMS0xVjE1LjY1NGExIDEgMCAwIDAtMS0xaC0zLjE2NlptOC41NiAwYTEgMSAwIDAgMC0xIDF2MTYuMjY0YTEgMSAwIDAgMCAxIDFoNy42MzdjMiAwIDMuNzc0LS4zNzQgNS4zMjItMS4xMjIgMS41NDgtLjc0OCAyLjc0OS0xLjgwOSAzLjYwMS0zLjE4My44NTItMS4zNzQgMS4yNzktMi45ODMgMS4yNzktNC44MjcgMC0xLjg0NC0uNDI3LTMuNDUzLTEuMjc5LTQuODI3LS44NTItMS4zNzQtMi4wNTMtMi40MzUtMy42LTMuMTgzLTEuNTQ5LS43NDgtMy4zMjMtMS4xMjItNS4zMjMtMS4xMjJIMjAuNzVabTExLjE4NSAxMi44MTFjLS45NC44ODctMi4xOTIgMS4zMy0zLjc1NyAxLjMzaC0yLjk2MmEuMy4zIDAgMCAxLS4zLS4zdi05LjQxOWEuMy4zIDAgMCAxIC4zLS4zaDIuOTYyYzEuNTY1IDAgMi44MTguNDQ0IDMuNzU3IDEuMzMxLjk1Ny44ODcgMS40MzUgMi4xMTQgMS40MzUgMy42OCAwIDEuNTY1LS40NzggMi43OS0xLjQzNSAzLjY3OFoiIGZpbGw9InVybCgjYSkiIC8+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMS40MTUiIHkxPSIxNS43NTYiIHgyPSIyNy41NDgiIHkyPSIzOS4yMDYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0NDNUNEQyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMjQ1IiBzdG9wLWNvbG9yPSIjN0I2NkZGIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii41MjEiIHN0b3AtY29sb3I9IiMxRjhBRjAiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iLjc2IiBzdG9wLWNvbG9yPSIjMDBEMUZGIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzREVERDciIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KPC9zdmc+Cg==",
}

const MockedSigner: SignerConfig = {
  id: "MockedSigner",
  providerUrl: "https://icrc-25-example-signer.nfid.one",
  transportType: TransportType.POPUP,
  popupHeight: 640,
  popupWidth: 450,
  label: "Mocked Signer Wallet",
  icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTExLjc5NCAyLjQzM0ExLjE2MiAxLjE2MiAwIDAgMCAxMS41NDguMTJMOS4xNzQuMzc0Yy0xLjIxNi4xMy0yLjE5MS4yMzQtMi45ODMuMzc4LS44MTYuMTQ4LTEuNTE2LjM1LTIuMTY1LjcxNGE2LjY3NSA2LjY3NSAwIDAgMC0yLjUzIDIuNTA2Yy0uMzcuNjQ2LS41NzggMS4zNDMtLjczMiAyLjE1N0MuNjE0IDYuOTE5LjUgNy44OTMuMzYgOS4xMDZsLS4wMDYuMDUyLS4yMzMgMi4zMThhMS4xNjIgMS4xNjIgMCAxIDAgMi4zMTMuMjMybC4yMzEtMi4zYy4xNDYtMS4yNjQuMjQ5LTIuMTUuMzgxLTIuODQ1LjEzLS42ODIuMjc1LTEuMS40NjctMS40MzZhNC4zNSA0LjM1IDAgMCAxIDEuNjQ4LTEuNjMzYy4zMzgtLjE5Ljc2LS4zMzEgMS40NDMtLjQ1NS42OTktLjEyNyAxLjU5LS4yMjMgMi44Ni0uMzU4bDIuMzMtLjI0OFptMjIuNjEzLTEuMjhhMS4xNjIgMS4xNjIgMCAwIDAgMS4wMzMgMS4yOGwyLjMzLjI0OGMxLjI3LjEzNSAyLjE2LjIzMSAyLjg1OS4zNTguNjg0LjEyNCAxLjEwNS4yNjUgMS40NDMuNDU1YTQuMzUgNC4zNSAwIDAgMSAxLjY0OCAxLjYzM2MuMTkzLjMzNS4zMzcuNzU0LjQ2NyAxLjQzNi4xMzIuNjk1LjIzNSAxLjU4MS4zOCAyLjg0NGwuMjMyIDIuMzAyYTEuMTYyIDEuMTYyIDAgMSAwIDIuMzEzLS4yMzNsLS4yMzMtMi4zMTgtLjAwNi0uMDUyYy0uMTQtMS4yMTQtLjI1Mi0yLjE4Ny0uNDAyLTIuOTc3LS4xNTUtLjgxNC0uMzY0LTEuNTExLS43MzQtMi4xNTdhNi42NzUgNi42NzUgMCAwIDAtMi41MjktMi41MDZjLS42NS0uMzY0LTEuMzQ5LS41NjYtMi4xNjUtLjcxNC0uNzkyLS4xNDQtMS43NjctLjI0OC0yLjk4My0uMzc4TDM1LjY4Ni4xMjFhMS4xNjIgMS4xNjIgMCAwIDAtMS4yNzkgMS4wMzNabTAgNDQuOTIzYTEuMTYyIDEuMTYyIDAgMCAxIDEuMDMzLTEuMjhsMi4zMy0uMjQ4YzEuMjctLjEzNSAyLjE2LS4yMyAyLjg1OS0uMzU3LjY4NC0uMTI0IDEuMTA1LS4yNjYgMS40NDMtLjQ1NWE0LjM1IDQuMzUgMCAwIDAgMS42NDgtMS42MzNjLjE5My0uMzM2LjMzNy0uNzU1LjQ2Ny0xLjQzNy4xMzItLjY5NS4yMzUtMS41ODEuMzgtMi44NDRsLjIzMi0yLjMwMWExLjE2MiAxLjE2MiAwIDEgMSAyLjMxMy4yMzNsLS4yMzMgMi4zMTctLjAwNi4wNTNjLS4xNCAxLjIxMy0uMjUyIDIuMTg2LS40MDIgMi45NzYtLjE1NS44MTQtLjM2NCAxLjUxMi0uNzM0IDIuMTU4YTYuNjc1IDYuNjc1IDAgMCAxLTIuNTI5IDIuNTA2Yy0uNjUuMzY0LTEuMzQ5LjU2Ni0yLjE2NS43MTQtLjc5Mi4xNDMtMS43NjcuMjQ3LTIuOTgzLjM3N2wtMi4zNzQuMjUzYTEuMTYyIDEuMTYyIDAgMCAxLTEuMjc5LTEuMDMyWm0tMjEuNTggMGExLjE2MiAxLjE2MiAwIDAgMC0xLjAzMy0xLjI4bC0yLjMzLS4yNDhjLTEuMjctLjEzNS0yLjE2LS4yMy0yLjg1OS0uMzU3LS42ODQtLjEyNC0xLjEwNS0uMjY2LTEuNDQzLS40NTVhNC4zNSA0LjM1IDAgMCAxLTEuNjQ4LTEuNjMzYy0uMTkyLS4zMzYtLjMzNy0uNzU1LS40NjctMS40MzctLjEzMi0uNjk1LS4yMzUtMS41ODEtLjM4LTIuODQ0bC0uMjMyLTIuMzAxYTEuMTYyIDEuMTYyIDAgMCAwLTIuMzEzLjIzM2wuMjMzIDIuMzE3LjAwNi4wNTNjLjE0IDEuMjEzLjI1MiAyLjE4Ni40MDMgMi45NzYuMTU0LjgxNC4zNjMgMS41MTIuNzMzIDIuMTU4YTYuNjc0IDYuNjc0IDAgMCAwIDIuNTI5IDIuNTA2Yy42NS4zNjQgMS4zNDkuNTY2IDIuMTY1LjcxNC43OTIuMTQzIDEuNzY3LjI0NyAyLjk4My4zNzdsMi4zNzQuMjUzYTEuMTYyIDEuMTYyIDAgMCAwIDEuMjc5LTEuMDMyWm0tLjYzNi0zMS40MjJhMSAxIDAgMCAwLTEgMXYxNi4yNjRhMSAxIDAgMCAwIDEgMWgzLjE2NmExIDEgMCAwIDAgMS0xVjE1LjY1NGExIDEgMCAwIDAtMS0xaC0zLjE2NlptOC41NiAwYTEgMSAwIDAgMC0xIDF2MTYuMjY0YTEgMSAwIDAgMCAxIDFoNy42MzdjMiAwIDMuNzc0LS4zNzQgNS4zMjItMS4xMjIgMS41NDgtLjc0OCAyLjc0OS0xLjgwOSAzLjYwMS0zLjE4My44NTItMS4zNzQgMS4yNzktMi45ODMgMS4yNzktNC44MjcgMC0xLjg0NC0uNDI3LTMuNDUzLTEuMjc5LTQuODI3LS44NTItMS4zNzQtMi4wNTMtMi40MzUtMy42LTMuMTgzLTEuNTQ5LS43NDgtMy4zMjMtMS4xMjItNS4zMjMtMS4xMjJIMjAuNzVabTExLjE4NSAxMi44MTFjLS45NC44ODctMi4xOTIgMS4zMy0zLjc1NyAxLjMzaC0yLjk2MmEuMy4zIDAgMCAxLS4zLS4zdi05LjQxOWEuMy4zIDAgMCAxIC4zLS4zaDIuOTYyYzEuNTY1IDAgMi44MTguNDQ0IDMuNzU3IDEuMzMxLjk1Ny44ODcgMS40MzUgMi4xMTQgMS40MzUgMy42OCAwIDEuNTY1LS40NzggMi43OS0xLjQzNSAzLjY3OFoiIGZpbGw9InVybCgjYSkiIC8+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMS40MTUiIHkxPSIxNS43NTYiIHgyPSIyNy41NDgiIHkyPSIzOS4yMDYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0NDNUNEQyIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIuMjQ1IiBzdG9wLWNvbG9yPSIjN0I2NkZGIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9Ii41MjEiIHN0b3AtY29sb3I9IiMxRjhBRjAiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iLjc2IiBzdG9wLWNvbG9yPSIjMDBEMUZGIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMzREVERDciIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KPC9zdmc+Cg==",
}

export { NFID, MockedSigner }
