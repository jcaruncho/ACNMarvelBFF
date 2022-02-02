const axios = require('axios');
const Heroes = require('../../models/heroe');

const setHeroTeamService = async (req) => {
    try {
        const { id, team } = req.body
        const hero = new Heroes({ id, team });
        const heroExists = await Heroes.findOne({ id });
        let response;
        if (!heroExists) {
            response = await hero.save();
        } else {
            response = await Heroes.findByIdAndUpdate(heroExists._id, { team: team }, { new: true });
        }
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    setHeroTeamService
}
