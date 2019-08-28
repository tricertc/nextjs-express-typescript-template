import debug from 'debug'

/**
 * Create a logger instance for the given namespace.
 *
 * @param {string} namespace
 * @returns
 */
function createLogger (namespace: string) {
  const logger = debug(`app:${namespace}`)
  return {
    info: (msg: string) => logger(msg),
  }
}

export default {
  server: createLogger('server'),
}
