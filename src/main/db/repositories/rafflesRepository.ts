import { db } from '../database'
export const createRaffle=(r:any)=>db.prepare('INSERT INTO raffles(name,rule_type,keyword,winner_user_id,winner_username,created_at) VALUES(?,?,?,?,?,?)').run(r.name||null,r.ruleType,r.keyword||null,r.winner_user_id||null,r.winner_username,new Date().toISOString())
export const listRaffles=()=>db.prepare('SELECT * FROM raffles ORDER BY id DESC').all()
