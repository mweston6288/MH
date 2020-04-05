const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.urlencoded({ extented: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log("App listening on Port " + PORT);
    });
});
