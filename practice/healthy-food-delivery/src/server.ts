import http from 'http'

const hostname: string = '127.0.0.1'
const port: number = 8000

http
  .createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write(request.method)
    response.end()
  })
  .listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log('server running at http://localhost:8000/')
  })
