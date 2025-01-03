import md5 from 'md5';
import { initDb } from '../db';

export default defineEventHandler(async (event) => {
  const { title, content, tags, walletAddress } = await useBody(event);
  const db = await initDb();
  const md5Hash = md5(title);
  const createdAt = new Date().toISOString();

  await db.run(`
    INSERT INTO posts (title, content, tags, md5_hash, wallet_address, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `, [title, content, tags, md5Hash, walletAddress, createdAt]);

  return { success: true };
});
