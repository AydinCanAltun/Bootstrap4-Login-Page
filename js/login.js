$(document).ready(function () {
    
    if( $("#registerFormBtn").length > 0 )
    {
        $("#registerFormBtn").click(function(e) {
            e.preventDefault();
            $("#registerFormDiv").removeClass("d-none");
            $("#loginFormDiv").animate({
                width: "0%",
                opacity: 0
            }, 500);

            $("#registerFormDiv").animate({
                width: "25%",
                opacity: 1
            }, 500);

            return false;
        })
    }

    if( $("#loginFormBtn").length > 0 )
    {
        $("#loginFormBtn").click(function(e) {
            e.preventDefault();
            $("#loginFormDiv").removeClass("d-none");
            $("#registerFormDiv").animate({
                width: "0%",
                opacity: 0
            }, 500);

            $("#loginFormDiv").animate({
                width: "25%",
                opacity: 1
            }, 500);
            
            

            return false;
        });
    }



});