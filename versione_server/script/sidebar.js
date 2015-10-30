//Hiding and showing sidebar button
$("#sidebar-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#page-content-wrapper").css('width', function (idx, oldVal) {
        if ($("#wrapper").hasClass("toggled"))
            return parseInt(oldVal.substr(0, oldVal.length-2)) - parseInt($("#sidebar-wrapper").css('left'));
        else
            return '100%';
    });
    $("#sidebar-wrapper").css("height", function () {
        if ($("#wrapper").hasClass("toggled"))
            return $("#page-content-wrapper").height() + 2*$("#page-content-wrapper").css("padding-top").replace("px", "");
        else
            return '100%';
    });
});

//removing toggle class upon screen-size change
$(window).resize( function(){
    if ($(window).width() >= 768){
        $("#wrapper").removeClass("toggled");
        $("#sidebar-wrapper").css("height", '100%');
   }
});