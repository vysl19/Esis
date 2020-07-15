(function ($) {
    if ($(this).width() < 768) {
        $("#colAboutImage").css("display", "none");
        $("#colAbout").removeClass("col-8").addClass("col-12");
    }

})(jQuery);