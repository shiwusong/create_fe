module.exports = async (fastify, opts) => {

  fastify.get('/api', async (request, reply) => {
    console.log('/api')
    return {code: 0, msg: '这是api请求'}
  })

  fastify.get('/hello', async (request, reply) => {
    console.log('/hello')
    return {code: 0, msg: 'SUCCESS'}
  })

}