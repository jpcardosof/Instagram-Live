import { EventEmitter } from 'node:events'
import path from 'node:path'
import { app } from 'electron'
import { chromium, type BrowserContext, type Page } from 'playwright'

export type CapturedComment = { username: string; commentText: string; avatarUrl?: string; capturedAt: string; liveUrl?: string }
const ev = new EventEmitter(); let timer: NodeJS.Timeout | null = null; let context: BrowserContext | null = null; let page: Page | null = null
const seen = new Set<string>()
const keyOf = (c: CapturedComment) => `${c.username}|${c.commentText}|${c.capturedAt.slice(0,16)}`.toLowerCase()
export async function openInstagram(url?: string){ if(!context){context=await chromium.launchPersistentContext(path.join(app.getPath('userData'),'appData','instagram-profile'),{headless:false}); page=await context.newPage()} await page!.goto(url || 'https://www.instagram.com') }
export async function extractCommentsFromPage(_page: Page): Promise<CapturedComment[]>{ return [] }
export function startMockCapture(liveUrl?: string){ stopCapture(); timer=setInterval(()=>{ const c={username:`user_${Math.ceil(Math.random()*7)}`,commentText:['quero','quanto custa?','manda link'][Math.floor(Math.random()*3)],capturedAt:new Date().toISOString(),liveUrl}; if(!seen.has(keyOf(c))){seen.add(keyOf(c)); ev.emit('comment', c)} },1800)}
export function startCapture(liveUrl?: string){ startMockCapture(liveUrl) }
export function stopCapture(){ if(timer){clearInterval(timer);timer=null} }
export const onComment=(cb:(c:CapturedComment)=>void)=>{ ev.on('comment',cb); return ()=>ev.off('comment',cb)}
