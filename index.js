const {app, BrowserWindow} = require('electron')
//require('electron') é o comando para utilizarmos a biliotec do electron
//BrowserWindow é o comando que abre um APP

let mainWindow

app.on('ready',() =>{
    mainWindow = new BrowserWindow ({
        whidth: 900,
        height: 800,
    })
//Comando que abre o nosso html
    mainWindow.loadURL(`file://${__dirname}/index.html`)

})