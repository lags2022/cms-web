import net from 'node:net'

// aqui colocamos esto para que el linter no corrija algunas lineas
// eslint-disable-next-line
export const findAvailablePort = (desiredPort: number | string) => {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address() as net.AddressInfo
      server.close(() => {
        resolve(port)
      })
    })

    // no olvidar que node siempre escucha los eventos
    /**
     * La expresión server.listen(0) en Node.js hace que el servidor escuche
     * en un puerto disponible de forma automática. Cuando se pasa 0 como
     * argumento para listen(), Node.js seleccionará automáticamente un
     * puerto disponible y asignará ese puerto al servidor.
     */
    server.on('error', (err: NodeJS.ErrnoException) => {
      // tbm se puede usar err: Any
      if (err.code === 'EADDRINUSE') {
        // eslint-disable-next-line
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}
