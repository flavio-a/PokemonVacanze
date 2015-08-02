//Hiding and showing sidebar button
$("#sidebar-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#page-content-wrapper").css('width', function (idx, oldVal) {
        oldVal = parseInt(oldVal.substr(0, oldVal.length-2));
        var shift = parseInt($("#sidebar-wrapper").css('left'));
        if ($("#wrapper").hasClass("toggled"))
            return oldVal - shift;
        else
            return oldVal + shift;
    });
    $("#sidebar-wrapper").css("height", function () {
        if ($("#wrapper").hasClass("toggled"))
            return $("#wrapper").height()
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

//Stretching sidebar mobile
function setWrapperHeight() {
    if ($(window).width() < 768)
        $("#wrapper").css("height", $("#page-content-wrapper").height() + 2*$("#page-content-wrapper").css("padding-top").replace("px", ""));
    else 
        $("#wrapper").css("height", '100%');
}
$(window).load( setWrapperHeight );
$(window).resize( setWrapperHeight );