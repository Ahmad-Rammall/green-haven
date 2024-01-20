const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    title: "Admin Page",
    width: 1000,
    height: 900,
  });
  win.maximize();
  // win.show();

  win.loadURL("http://localhost:3030");
};

app.whenReady().then(() => {
  createWindow();
});
