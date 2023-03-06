import Fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const fastify = Fastify({ logger: true });

const PORT = process.env.PORT;

fastify.get("/", (req, rep) => {
  rep.send({ message: "healthy state" });
});

fastify.post("/visit", async (req, rep) => {
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
    await fastify.listen({ port: PORT });
    console.log(`Server ready on port ${PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
