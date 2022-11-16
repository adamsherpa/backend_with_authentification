import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.register(require('./routes/router'));
fastify.register(require('fastify-cors'), { origin: true });
fastify.register(require('fastify-websocket'), {
  options: {
    maxPayload: 1048576,
    clientTracking: true,
  },
});

fastify.get('/', async (request, reply) => {
  hello: 'world';
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
