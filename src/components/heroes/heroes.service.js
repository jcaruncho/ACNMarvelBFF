const axios = require('axios');
const Heroes = require('../../model/heroe');

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
        return {
            code: 200,
            message: 'OK',
            response: data.data
        };
    } catch (error) {
        throw error;
    }
}

const getHeroeService = async (req) => {
    const { id } = req.params
    try {
        const url = `${process.env.API_URL}characters?apikey=${process.env.API_KEY}&id=${id}`;
        const { data } = await axios.get(url, axiosConfig);
        const heroExists = await Heroes.findOne({ id });
        if (heroExists) {
            data.data.results[0].team = heroExists.team;
        }
        return {
            code: 200,
            message: 'OK',
            response: data.data
        };
    } catch (error) {
        throw error;
    }
}

const setHeroTeamService = async (req) => {
    try {
        const { id, team } = req.body
        const hero = new Heroes({ id, team });
        const heroExists = await Heroes.findOne({ id });
        if (!heroExists) {
            response = await hero.save();
        } else {
            response = await Heroes.findByIdAndUpdate(heroExists._id, { team: team }, { new: true });
        }
        return {
            code: 200,
            message: 'OK',
            response
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getHeroesService,
    getHeroeService,
    setHeroTeamService
}
