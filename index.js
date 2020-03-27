// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: false
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.register(require('./server/getaway.js'))

// Run the server!
fastify.listen(3001, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`系统启动成功！地址:${address}`)
})