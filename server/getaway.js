module.exports = async (fastify, opts) => {
  fastify.get('/hello', async (request, reply) => {
    return {code: 0, msg: 'SUCCESS'}
  })

}