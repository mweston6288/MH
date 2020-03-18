$.ajax({
    url: 'https://mhw-db.com/monsters',
    method: "GET"
}).then(function(response){
    console.log(response);
})