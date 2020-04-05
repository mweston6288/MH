const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(express.urlencoded({ extented: true }));
app.use(express.json());
app.use(express.static("public"));

/*app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(require("./controllers/monsterController.js"));
*/

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("App listening on Port " + PORT);
    });
});
