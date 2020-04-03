const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extented: true }));
app.use(express.json());

require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
    console.log("App listening on Port " + PORT);
});