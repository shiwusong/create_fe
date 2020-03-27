const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')
const appName = 'jiaoliudian'

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: false
})

// 静态目录
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, isProduction ? 'build' : 'client/public'),
  prefix: '/'
})


fastify.get(`/`, async (request, reply) => {
  reply.sendFile('index.html')
})

fastify.get(`/${appName}`,  async (request, reply) => {
  reply.sendFile('index.html')
})

fastify.get(`/${appName}/*`,  async (request, reply) => {
  reply.sendFile('index.html')
})



// Declare a route
fastify.register(require('./server/getaway.js'))

// Run the server!
fastify.listen(3001, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`系统启动成功！地址:${address}`)
})