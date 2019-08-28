import express from 'express'
import http from 'http'
import next from 'next'
import logger from './lib/logger'

const PORT = process.env.PORT || 3000

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', handler)

    http.createServer(server)
      .listen(PORT, () => {
        logger.server.info(`listening on port ${PORT}`)
      })
  })
