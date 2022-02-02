const { setHeroTeamModule } = require('./setHeroTeam.module');

const setHeroTeam = async (req, res) => {
    try {
        const response = await setHeroTeamModule(req);
        return res.status(response.code).send(response);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    setHeroTeam
}