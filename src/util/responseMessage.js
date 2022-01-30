class ResponseMessage {
    constructor(code, message, response = {}) {
        this.code = code;
        this.message = message;
        this.response = response;
    }
}

module.exports = { ResponseMessage }