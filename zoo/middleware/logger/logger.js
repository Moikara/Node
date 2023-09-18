import fs from "fs"

const file = "./middleware/logger/log.txt"

const logger = (req, res, next) => {
    const time = new Date(Date.now()).toLocaleString();
    const { method, url } = req;

    fs.appendFileSync(file, `${time} Request ${method} ${url} \n`)

    res.on('finish', () => {
        const { statusCode } = res;
        fs.appendFileSync(file, `Response ${statusCode} \n`)
    });

    next();
}

export default logger