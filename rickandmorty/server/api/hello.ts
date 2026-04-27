export default defineEventHandler(() => {
  return {
    message: "Hola desde el servidor 👋",
    time: new Date().toISOString()
  }
})