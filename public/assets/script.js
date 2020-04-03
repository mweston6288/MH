$(document).ready(function(){

    $(".form-group").on("submit", function(event){
        event.preventDefault();

        console.log(event);
    })
});