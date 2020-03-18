
const mh = {

    getInfo: function(monsterID){
        $.ajax({
            url: 'https://mhw-db.com/monsters/'+monsterID,
            method: "GET"
        }).then(function(response){
            console.log(response);
        })
    }
}

module.exports = mh;