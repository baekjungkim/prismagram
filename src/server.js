require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

// GraphQLServer 에는 express 서버가 내장되어 있다.
// server.express 라고 하면 express 서버에 접근할 수 있다.
// express 서버에서 logger 미들웨어를 사용하도록 설정.
server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
