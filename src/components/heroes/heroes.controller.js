const { getHeroesModule,
    getHeroeModule,
    setHeroTeamModule } = require('./heroes.module');

const getHeroes = async (req, res) => {
    try {
        const response = await getHeroesModule(req);
        return res.status(response.code).send(response);
    } catch (error) {
        throw error;
    }
}

const getHeroe = async (req, res) => {
    try {
        const response = await getHeroeModule(req);
        return res.status(response.code).send(response);
    } catch (error) {
        throw error;
    }
}

const setHeroTeam = async (req, res) => {
    try {
        const response = await setHeroTeamModule(req);
        return res.status(response.code).send(response);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getHeroes,
    getHeroe,
    setHeroTeam
}