$(document).ready(function(){

    $(".form-group").on("submit", function(event){
        event.preventDefault();

    })
    const url = new URL('https://mhw-db.com/monsters');
    url.searchParams.set('p', JSON.stringify({
        id: true,
        name: true
    }));


});