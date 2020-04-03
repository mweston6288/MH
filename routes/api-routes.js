const db = require("../models");

module.exports = (app) => {
    app.post("/api/armor", (req, res) => {
        $.get("https://mhw-db.com/armor").then((res)=>{
            console.log(res);

        })
       // db.Armor.create
    })
}