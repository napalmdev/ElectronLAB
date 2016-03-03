//module to control app life
var app = require('app');

//module to create native browser window
var BrowserWindow = require('browser-window');
var mainWindow = null;

//Quit when all windows are closed
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

//This method'll be called when Electron has finished initialization
//and is ready to create browser windows
app.on('ready', function () {

  //Create the browser Window
  mainWindow = new BrowserWindow({ width: 800, height: 600});

  //and load the index.html of the app
  mainWindow.loadUrl( 'file://' + __dirname + '/index.html' );

  mainWindow.openDevTools('console');
  //Open Devtools.
  //mainWindow.openDevTools();
  //Emmited when the window is closed.
  mainWindow.on('closed', function () {

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

});
