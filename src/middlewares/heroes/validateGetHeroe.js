const { validate } = require("jsonschema");

const validateGetHeroe = (req, res, next) => {
    try {
        const schema = {

        }
        validate(req.body, schema, { throwAll: true });
        next();
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = { validateGetHeroe };