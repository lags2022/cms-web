import server from './server'
import { findAvailablePort } from './utils/findAvailablePort'

const desiredPort = process.env.PORT ?? 3001
// para asignar un puerto especifico en la consola con variable de entorno: PORT=3002 node src/index.js

// eslint-disable-next-line @typescript-eslint/no-floating-promises
findAvailablePort(desiredPort).then(port =>
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port as number}`)
  })
)
