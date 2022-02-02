const { ResponseMessage } = require('../../util/responseMessage');
const { setHeroTeamService } = require('../../services/heroes/setHeroTeam.service');

const setHeroTeamModule = async (req) => {
    try {
        const response = await setHeroTeamService(req);
        return new ResponseMessage(200, 'Equipo registrado correctamente', response);
    } catch (error) {
        console.log(error);
        return new ResponseMessage(500, error.message)
    }
}

module.exports = {
    setHeroTeamModule
}