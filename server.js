const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/monsters", {
    useNewUrlParser: true,
    useFindAndModify: false
});
// Edit to its proper location later
//app.use(express.static('client/build'));

// routes go here
app.use(require("./backend/routes/api-routes.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});