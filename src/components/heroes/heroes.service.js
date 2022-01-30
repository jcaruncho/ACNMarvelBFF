const axios = require('axios');

const { axiosConfig } = require('../../config/axiosConfig');

const getHeroesService = async (req) => {
    const { offset = 0, nameStartsWith = '' } = req.query
    try {
        const url = `${process.env.API_URL}characters?apikey=${process.env.API_KEY}&offset=${offset}${nameStartsWith ? '&nameStartsWith=' + nameStartsWith : ''}`;
        const { data } = await axios.get(url, axiosConfig);
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
        return {
            code: 200,
            message: 'OK',
            response: data.data
        };
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getHeroesService,
    getHeroeService
}


