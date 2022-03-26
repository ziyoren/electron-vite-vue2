const { app, BrowserWindow, session } = require('electron')
const path = require('path')

const reactDevToolsPath = path.resolve(__dirname, '../vue-devtools');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })


  let url = process.env.NODE_ENV === 'development' ?
  'http://localhost:3000' :
  'file://' + path.join(__dirname, '../dist/index.html');
  win.loadURL( url )
}

app.whenReady().then( async () => {
  if (process.env.NODE_ENV === 'development'){
    await session.defaultSession.loadExtension(reactDevToolsPath)
  }
  
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


