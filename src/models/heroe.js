const { Schema, model } = require('mongoose');

const heroSchema = Schema({
    id: {
        type: Number,
        required: [true, 'El id del heroe es obligatorio'],
        unique: true
    },
    team: {
        type: String,
        required: [true, 'El equipo del heroe es obligatorio']
    }
});

heroSchema.methods.toJSON = function () {
    const { __v, _id, ...heroe } = this.toObject();
    return heroe;
}

module.exports = model('Heroes', heroSchema);