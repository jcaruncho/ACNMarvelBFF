const axios = require('axios');
const Heroes = require('../../models/heroe');

const { axiosConfig } = require('../../config/axiosConfig');

const getHeroeService = async (req) => {
    const { id } = req.params
    try {
        const url = `${process.env.API_URL}characters?apikey=${process.env.API_KEY}&id=${id}`;
        const { data } = await axios.get(url, axiosConfig);
        const heroExists = await Heroes.findOne({ id });
        if (heroExists) {
            data.data.results[0].team = heroExists.team;
        }
        return data.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getHeroeService
}
