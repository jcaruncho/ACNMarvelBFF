const Mongoose = require('mongoose');
const { ResponseMessage } = require('../../util/responseMessage');

const healthcheck = (req, res) => {
    try {
        const response = Mongoose.connection.readyState;

        if (response === 1) {
            const response = new ResponseMessage(200, 'OK');
            res.status(200).send(response);
        } else {
            const response = new ResponseMessage(500, 'ERROR', { error: "Error con la conexion a MongoDB" });
            res.status(500).send(response);
        }
    } catch (error) {
        const response = new ResponseMessage(500, 'ERROR', { error: "Error al intentar revisar healthcheck" });
        res.status(500).send(response);
    }
}

module.exports = { healthcheck };