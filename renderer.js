const { app, BrowserWindow } = require('electron')
const path = require('path')

const startPythonSubprocess = () => {
  //let script = getPythonScriptPath();
  //if (isRunningInBundle()) {
  //subpy = require("child_process").execFile(script, []);
  //} else {
  //subpy = require("child_process").spawn("python", [script]);
  //}
  const startServer = require('child_process').execFile('main.exe',[])
};

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadURL('http://localhost:8000')
}

app.whenReady().then(() => {
  startPythonSubprocess();
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
