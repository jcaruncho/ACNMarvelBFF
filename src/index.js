require('dotenv').config();
const express = require("express");
const helmet = require("helmet");
const cors = require('cors');

const { dbConnection } = require("./config/dbConnection");
const { routes } = require("./routes/routes");

const app = express();

const dbConnect = async () => {
    await dbConnection();
}

const middlewares = () => {
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(express.static('public'));
}

const appStart = async () => {

    dbConnect();

    middlewares();

    routes(app);

    app.listen(process.env.PORT, () => {
        console.log('Servidor corriengo en el puerto', process.env.PORT);
    });
}

appStart();