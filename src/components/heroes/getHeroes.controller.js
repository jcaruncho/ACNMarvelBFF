const { getHeroesModule } = require('./getHeroes.module');

const getHeroes = async (req, res) => {
    try {
        const response = await getHeroesModule(req);
        return res.status(response.code).send(response);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getHeroes
}