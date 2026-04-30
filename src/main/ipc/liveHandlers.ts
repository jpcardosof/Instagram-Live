import { BrowserWindow, ipcMain } from 'electron'
import { createComment, listComments, clearComments } from '../db/repositories/commentsRepository'
import { upsertUser } from '../db/repositories/usersRepository'
import { onComment, openInstagram, startCapture, stopCapture } from '../playwright/instagramCapture'
let off:(()=>void)|null=null
export function registerLiveHandlers(win:BrowserWindow){ipcMain.handle('live:openInstagram',(_,url)=>openInstagram(url)); ipcMain.handle('live:startCapture',(_,url)=>{startCapture(url); if(!off){off=onComment((c)=>{const u:any=upsertUser(c.username,c.avatarUrl); createComment({...c,user_id:u.id,comment_key:`${c.username}|${c.commentText}|${c.capturedAt.slice(0,16)}`.toLowerCase()}); win.webContents.send('live:comment',c)})}}); ipcMain.handle('live:stopCapture',()=>stopCapture()); ipcMain.handle('comments:list',(_,f)=>listComments(f)); ipcMain.handle('session:clearComments',()=>clearComments())}
