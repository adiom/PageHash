import { initDb } from '../db';

export default defineEventHandler(async (event) => {
  const { id, title, content, tags } = await useBody(event);
  const db = await initDb();

  await db.run(`
    UPDATE posts
    SET title = ?, content = ?, tags = ?
    WHERE id = ?
  `, [title, content, tags, id]);

  return { success: true };
});
