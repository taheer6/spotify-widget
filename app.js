const {app, BrowserWindow, screen} = require('electron');

const createWindow = () => {
    
    const { width } = screen.getPrimaryDisplay().workAreaSize;
    const windowWidth = 450; 
    const windowHeight = 175; 

    const win = new BrowserWindow({
        width: windowWidth,
        height: windowHeight,
        x: width - windowWidth - 15,
        y: 10,
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    win.loadFile('index.html');

    win.setAlwaysOnTop(true, 'floating');

}

app.whenReady().then(() => {
    createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit(); 
    }
})