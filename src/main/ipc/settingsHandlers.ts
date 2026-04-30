import { app, ipcMain, shell } from 'electron'; import path from 'node:path'
export function registerSettingsHandlers(){ ipcMain.handle('settings:get',()=>({profilePath:path.join(app.getPath('userData'),'appData','instagram-profile'),captureStatus:'idle'})); ipcMain.handle('settings:openDataFolder',()=>shell.openPath(path.join(app.getPath('userData'),'appData')))}
