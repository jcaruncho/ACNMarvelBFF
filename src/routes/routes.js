const routes = (app) => {
    app.get("/api", function (req, res) {
        res.send("hola")
    });
}

module.exports = { routes };