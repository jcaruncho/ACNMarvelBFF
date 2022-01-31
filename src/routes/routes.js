const path = require('path');
const { getHeroes,
    getHeroe,
    setHeroTeam } = require("../components/heroes/heroes.controller");

const prefixRoute = process.env.BFF_PREFIX;

const routes = (app) => {
    app.get(`${prefixRoute}/getHeroes`, getHeroes);

    app.get(`${prefixRoute}/getHeroe/:id`, getHeroe);

    app.post(`${prefixRoute}/setHeroTeam`, setHeroTeam);

    app.get('*', function (req, res) {
        console.log(__dirname);
        res.sendFile(path.resolve(__dirname + '/../../public/index.html'));
    });
}

module.exports = { routes };