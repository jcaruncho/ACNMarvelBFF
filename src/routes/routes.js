const { getHeroes,
    getHeroe } = require("../components/heroes/heroes.controller");

const prefixRoute = process.env.BFF_PREFIX;

const routes = (app) => {
    app.get(`${prefixRoute}/getHeroes`, getHeroes);

    app.get(`${prefixRoute}/getHeroe/:id`, getHeroe);
}

module.exports = { routes };