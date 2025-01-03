import { initDb } from '../db';

export default defineEventHandler(async (event) => {
  const { id } = await useBody(event);
  const db = await initDb();

  await db.run('DELETE FROM posts WHERE id = ?', [id]);

  return { success: true };
});
