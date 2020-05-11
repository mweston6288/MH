const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./backend/routes");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/monsters", {
	useNewUrlParser: true,
	useFindAndModify: false
});

//if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
//}

// routes go here
app.use(routes);

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});