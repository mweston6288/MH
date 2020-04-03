const mh = require("../controllers/mhController")

$(".form-group").on("submit", function(event){
    event.preventDefault();

    mh.getInfo(1);
})