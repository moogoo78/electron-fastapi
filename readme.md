# Electron-Fastapi example

## About

inspried from https://github.com/matbloch/electron-flask

unfinished

### Build With

- electron
  - electron-builder
- fastapi
  - uvicorn
  - pyinstaller

## Getting Started

### Prerequisites

* npm
* python3

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/moogoo78/electron-flask
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. set env for Windows
   ```sh
   npm config set script-shell "powershell"
   ```

## Usage

build fastapi as python exe file
```sh
npm run package-py-win
```



             hiddenimports=['uvicorn.lifespan.off','uvicorn.lifespan.on','uvicorn.lifespan',
'uvicorn.protocols.websockets.auto','uvicorn.protocols.websockets.wsproto_impl',
'uvicorn.protocols.websockets_impl','uvicorn.protocols.http.auto',
'uvicorn.protocols.http.h11_impl','uvicorn.protocols.http.httptools_impl',
'uvicorn.protocols.websockets','uvicorn.protocols.http','uvicorn.protocols',
'uvicorn.loops.auto','uvicorn.loops.asyncio','uvicorn.loops.uvloop','uvicorn.loops',
'uvicorn.logging'],
