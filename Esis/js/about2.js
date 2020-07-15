(function ($) {
    if ($(this).width() < 768) {
        $("#colAboutImage").css("display", "none");
        $("#colAbout").removeClass("col-8").addClass("col-12");
    }
    $.get('api/About', function () {
    })
        .done(function (response) {
            for (var a = 0; a < response.length; a++) {
                if (response[a].Language == sessionStorage.getItem("UserLang")) {
                    $("#aboutImage").attr("src", response[a].Image);
                    $("#colAbout").html(response[a].Html);
                    break;
                }
            }
        })
        .fail(function (e) {

        });
})(jQuery);