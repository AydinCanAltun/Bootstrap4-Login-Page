$(document).ready(function() {

    if( $("#registerFormBtn").length > 0 )
    {
        $("#registerFormBtn").click(function(e) {
            e.preventDefault();
            $("#loginPage").animate({
                right: "-100%"
            }, 500);

            $("#registerPage").animate({
                left: "0px"
            }, 500);

        });
    }

    if( $("#loginFormBtn").length > 0 )
    {
        $("#loginFormBtn").click(function(e) {
            e.preventDefault();
            $("#registerPage").animate({
                left: "-100%"
            }, 500);

            $("#loginPage").animate({
                right: "0px"
            }, 500);

        });
    }

});