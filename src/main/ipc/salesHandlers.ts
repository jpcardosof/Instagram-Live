import { ipcMain } from 'electron'
import { createSale, listSales } from '../db/repositories/salesRepository'
import { db } from '../db/database'
export function registerSalesHandlers(){ ipcMain.handle('sales:create',(_,data)=>{const u:any=db.prepare('SELECT * FROM users WHERE username=?').get(data.username); if(!u) throw new Error('Utilizador não encontrado'); createSale({ ...data, user_id:u.id}); db.prepare('UPDATE comments SET has_sale=1 WHERE username=?').run(data.username); return true}); ipcMain.handle('sales:list',(_,f)=>listSales(f))}
