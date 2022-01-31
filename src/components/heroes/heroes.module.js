const { ResponseMessage } = require('../../util/responseMessage');
const { getHeroesService,
    getHeroeService,
    setHeroTeamService } = require('./heroes.service')

const getHeroesModule = async (req) => {
    try {
        const { code, message, response } = await getHeroesService(req);
        return new ResponseMessage(code, message, response);
    } catch (error) {
        return new ResponseMessage(error.response.status, error.message)
    }
}

const getHeroeModule = async (req) => {
    try {
        const { code, message, response } = await getHeroeService(req);
        return new ResponseMessage(code, message, response);
    } catch (error) {
        return new ResponseMessage(error.response.status, error.message)
    }
}

const setHeroTeamModule = async (req) => {
    try {
        const { code, message, response } = await setHeroTeamService(req);
        return new ResponseMessage(code, message, response);
    } catch (error) {
        return new ResponseMessage(error.response, error.message)
    }
}

module.exports = {
    getHeroesModule,
    getHeroeModule,
    setHeroTeamModule
}