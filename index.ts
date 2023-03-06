import Fastify, { FastifyReply, FastifyRequest } from "fastify";

const fastify = Fastify({ logger: true });

fastify.post("/", async (req: FastifyRequest, rep: FastifyReply) => {
  return {
    status: "successful",
    error: false,
    data: {
      visits: ["pobla cra 59 #25-21"],
    },
  };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
