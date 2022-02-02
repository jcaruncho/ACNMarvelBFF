const { getHeroeModule } = require('./getHeroeModule.module');

const getHeroe = async (req, res) => {
    try {
        const response = await getHeroeModule(req);
        return res.status(response.code).send(response);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getHeroe
}