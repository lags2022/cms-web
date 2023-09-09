import express from 'express'

const app = express()

// para que las tecnologias no sean visibles en la cabecera
app.disable('x-powered-by')

app.use(express.json()) // esto es igual al siguiente codigo:
// app.use((req, _res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo lleguen request que son POST y que tienen el header Content-type: application/json
//   let body = ''

//   req.on('data', chunk => {
//     body = body.concat(chunk.toString())
//   })

//   /**
//    * no olvidar que la request es la misma para una
//    * peticion, es decir va a viajar y seguira siendo
//    * la misma, por eso se puede mutar.
//   */
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })

app.get('/', (_req, res) => {
  res.send('hello world')
})

app.use((_req, res) => {
  res.status(404).send('<h5>404</h5>')
})

export default app
