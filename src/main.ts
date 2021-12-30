import { app, BrowserWindow } from "electron";
// import installExtension, {
// 	REDUX_DEVTOOLS,
// 	REACT_DEVELOPER_TOOLS,
// } from 'electron-devtools-installer';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

//app.disableHardwareAcceleration();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
	// eslint-disable-line global-require
	app.quit();
}

const createWindow = (): void => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1024,
		height: 800,
		backgroundColor: "#0d1117",
		show: false,
		autoHideMenuBar: true,
		webPreferences: {
			webSecurity: true,
			nodeIntegration: true,
			nodeIntegrationInWorker: true,
			contextIsolation: false,
			enableRemoteModule: true,
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
			/* Set to false when packing */
			devTools: true,
		},
	});

	// mainWindow.webContents.openDevTools();

	// and load the index.html of the app.
	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	// Show window when its ready to
	mainWindow.on("ready-to-show", () => mainWindow.show());
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", async () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
app.whenReady().then(() => {
	//installExtension(REDUX_DEVTOOLS);
	//installExtension(REACT_DEVELOPER_TOOLS);

	console.log(app.getPath("userData"));
});
