const express = require("express");
const AppError = require("./utils/appError");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const routes = require('./routes')
app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
    console.log(req.method + " " + req.url)
    next()
});

app.use('/',routes)

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(require("./controllers/errorController"));


module.exports = app;
