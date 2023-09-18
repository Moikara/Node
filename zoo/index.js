import express from "express";

import router from "./routes/animalRouter.js";
import logger from "./middleware/logger/logger.js";

const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(logger);

server.use("/animals", router);

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
});