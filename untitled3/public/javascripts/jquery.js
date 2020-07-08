$(document).ready(function() {
    $("#show").submit(function(event) {
        event.preventDefault();

        //Handle 1st Image Render
        if ($("#img1").css('display') == 'none' && $("#img2").css('display') == 'none') {
            $("#img1").css('display', 'block');
        }


        //Toggle After 1st render
        else if ($("#img1").css('display') == 'block') {
            $("#img2").css('display', 'block');
            $("#img1").css('display', 'none');
        } else if ($("#img2").css('display') == 'block') {
            $("#img1").css('display', 'block');
            $("#img2").css('display', 'none');
        }


    });
});