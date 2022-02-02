const axios = require('axios');
const Heroes = require('../../models/heroe');

const { axiosConfig } = require('../../config/axiosConfig');

const getHeroesService = async (req) => {
    const { offset = 0, nameStartsWith = '' } = req.query
    try {
        const url = `${process.env.API_URL}characters?apikey=${process.env.API_KEY}&offset=${offset}${nameStartsWith ? '&nameStartsWith=' + nameStartsWith : ''}`;
        const { data } = await axios.get(url, axiosConfig);
        const knownHeroesList = await Heroes.find({});
        if (knownHeroesList.length > 0) {
            data.data.results = data.data.results.map(hero => {
                const heroFound = knownHeroesList.find(knownHero => knownHero.id === hero.id);
                if (heroFound) {
                    hero.team = heroFound.team
                }
                return hero;
            });
        }
        return data.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getHeroesService
}
