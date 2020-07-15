(function ($) {
    $.get('api/Meta', function () {
    })
        .done(function (response) {
            $("head").append("<meta name='title' content='" + response[0].Title + "'>");
            $("head").append("<meta name='author' content='" + response[0].Author + "'>");
            $("head").append("<meta name='keywords' content='" + response[0].Keywords + "'>");
            $("head").append("<meta name='description' content='" + response[0].Description + "'>");
        })
        .fail(function (e) {

        });
    
})(jQuery);