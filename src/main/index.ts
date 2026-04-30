import { app, BrowserWindow } from 'electron'
import path from 'node:path'
import { registerLiveHandlers } from './ipc/liveHandlers'; import { registerSalesHandlers } from './ipc/salesHandlers'; import { registerRaffleHandlers } from './ipc/raffleHandlers'; import { registerSettingsHandlers } from './ipc/settingsHandlers'; import './db/database'
const create=()=>{const win=new BrowserWindow({width:1200,height:800,webPreferences:{preload:path.join(__dirname,'../preload/index.js')}}); registerLiveHandlers(win); registerSalesHandlers(); registerRaffleHandlers(); registerSettingsHandlers(); if(process.env.VITE_DEV_SERVER_URL)win.loadURL(process.env.VITE_DEV_SERVER_URL); else win.loadFile(path.join(__dirname,'../renderer/index.html'))}
app.whenReady().then(create)
