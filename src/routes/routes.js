const path = require('path');
const { getHeroes } = require("../components/heroes/getHeroes.controller");
const { getHeroe } = require("../components/heroes/getHeroe.controller");
const { setHeroTeam } = require("../components/heroes/setHeroTeam.controller");
const { healthcheck } = require("../components/healthcheck/healthcheck.controller");

//const { validateGetHeroe } = require("../middlewares/heroes/validateGetHeroe");

const prefixRoute = process.env.BFF_PREFIX;

const routes = (app) => {
    app.get(`${prefixRoute}/getHeroes`, getHeroes);

    app.get(`${prefixRoute}/getHeroe/:id`, getHeroe);

    app.post(`${prefixRoute}/setHeroTeam`, setHeroTeam);

    app.get(`${prefixRoute}/healthcheck`, healthcheck);

    app.get('*', () => {
        res.sendFile(path.resolve(__dirname + '/../../public/index.html'));
    });
}

module.exports = { routes };