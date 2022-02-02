const { ResponseMessage } = require('../../util/responseMessage');
const { getHeroeService } = require('../../services/heroes/getHeroe.service');

const getHeroeModule = async (req) => {
    try {
        const response = await getHeroeService(req);
        return new ResponseMessage(200, 'OK', response);
    } catch (error) {
        return new ResponseMessage(500, error.message)
    }
}

module.exports = {
    getHeroeModule
}