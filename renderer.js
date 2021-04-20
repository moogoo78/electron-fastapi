const { app, BrowserWindow } = require('electron')
const path = require('path')

const PY_DIST_FOLDER = "dist-py"; // python distributable folder
const PY_SRC_FOLDER = "py"; // path to the python source
const PY_MODULE = "main.py"; // the name of the main module

const isRunningInBundle = () => {
  return require("fs").existsSync(path.join(__dirname, PY_DIST_FOLDER));
};

const getPythonScriptPath = () => {
  if (!isRunningInBundle()) {
    return path.join(__dirname, PY_SRC_FOLDER, PY_MODULE);
  }
  if (process.platform === "win32") {
    return path.join(
      __dirname,
      PY_DIST_FOLDER,
      PY_MODULE.slice(0, -3) + ".exe"
    );
  }
  return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE);
};

const startPythonSubprocess = () => {
  const script = getPythonScriptPath();
  console.log(script, isRunningInBundle());
  if (isRunningInBundle()) {
    const subpy = require("child_process").execFile(script, []);
  } else {
    //subpy = require("child_process").spawn("python", [script]);
  }
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
