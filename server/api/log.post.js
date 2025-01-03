export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const logMessage = `${new Date().toISOString()} - ${JSON.stringify(body)}\n`
  await useFileSystem().appendFile('./server/logs.txt', logMessage)
  return { status: 'OK' }
})
