import express from 'express'

const app = express()

// para que las tecnologias no sean visibles en la cabecera
app.disable('x-powered-by')

app.use(express.json())
app.get('/', (_req, res) => {
  res.send('hello world')
})

app.use((_req, res) => {
  res.status(404).send('<h5>404</h5>')
})

export default app
