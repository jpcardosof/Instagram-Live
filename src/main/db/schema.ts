export const schemaSQL = `
CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE NOT NULL, display_name TEXT, avatar_url TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS comments (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, username TEXT NOT NULL, comment_text TEXT NOT NULL, comment_key TEXT UNIQUE NOT NULL, avatar_url TEXT, captured_at TEXT NOT NULL, live_url TEXT, has_sale INTEGER DEFAULT 0, processed INTEGER DEFAULT 0);
CREATE TABLE IF NOT EXISTS sales (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER NOT NULL, username TEXT NOT NULL, product_name TEXT NOT NULL, amount REAL NOT NULL, notes TEXT, created_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS raffles (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, rule_type TEXT NOT NULL, keyword TEXT, winner_user_id INTEGER, winner_username TEXT, created_at TEXT NOT NULL);
`
