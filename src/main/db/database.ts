import path from 'node:path'
import fs from 'node:fs'
import { app } from 'electron'
import Database from 'better-sqlite3'
import { schemaSQL } from './schema'

const dataDir = path.join(app.getPath('userData'), 'appData')
fs.mkdirSync(dataDir, { recursive: true })
export const dbPath = path.join(dataDir, 'instagram-live.sqlite')
export const db = new Database(dbPath)
db.exec(schemaSQL)
