const { ResponseMessage } = require('../../util/responseMessage');
const { getHeroesService } = require('../../services/heroes/getHeroes.service');

const getHeroesModule = async (req) => {
    try {
        const response = await getHeroesService(req);
        return new ResponseMessage(200, 'OK', response);
    } catch (error) {
        return new ResponseMessage(500, error.message)
    }
}

module.exports = {
    getHeroesModule
}