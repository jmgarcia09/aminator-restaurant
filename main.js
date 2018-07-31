const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 1280, height: 800 });

  // y carga el archivo index.html de la aplicación.
  win.loadFile('./build/index.html');
}

app.on('ready', createWindow);
