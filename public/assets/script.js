$(document).ready(function(){

    $(".form-group").on("submit", function(event){
        event.preventDefault();

        console.log(event);
    })
    const url = new URL('https://mhw-db.com/monsters');
    url.searchParams.set('p', JSON.stringify({
        id: true,
        name: true
    }));

    fetch(url)
        .then(response => response.json())
        .then(response => {
console.log(response)        });
    $.get("https://mhw-db.com/armor").then((res)=>{
        console.log(res[0]);
    })
});