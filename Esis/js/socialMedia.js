(function ($) {    
    $.get('api/SocialMedia', function () {
    })
        .done(function (response) {
            $("a.twitter").attr("href", response[0].Twitter);
            $("a.instagram").attr("href", response[0].Instagram);
            $("a.facebook").attr("href", response[0].Facebook);
            $("a.linkedin").attr("href", response[0].Linkedin);
        })
        .fail(function (e) {

        });
})(jQuery);