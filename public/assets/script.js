$(document).ready(function(){

    $(".form-group").on("submit", function(event){
        event.preventDefault();

        console.log(event);
    })
    $.get("https://mhw-db.com/armor").then((res)=>{
        console.log(res[0]);
    })
});