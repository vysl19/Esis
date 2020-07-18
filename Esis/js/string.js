var strings = {};
var userLang = sessionStorage.getItem("UserLang");
var services = {};
services.List = [];

var sectors = {};
sectors.List = [];
(function ($) {
    //$.get('api/Meta', function () {
    //})
    //    .done(function (response) {
    //        $("head").append("<meta name='title' content='" + response[0].Title + "'>");
    //        $("head").append("<meta name='author' content='" + response[0].Author + "'>");
    //        $("head").append("<meta name='keywords' content='" + response[0].Keywords + "'>");
    //        $("head").append("<meta name='description' content='" + response[0].Description + "'>");
    //    })
    //    .fail(function (e) {

    //    });
    GetTranslationList();
    function GetTranslationList() {
        $.get('api/String', function () {
        })
            .done(function (response) {
                strings = response;
                $('a[data-text], span[data-text], button[data-text], th[data-text], label[data-text]').each(function () {
                    $(this).append(page.Methods.GetString($(this).attr("data-text")));
                });
                services.Title = page.Methods.GetString("OurMainServices");
                sectors.Title = page.Methods.GetString("Sectors");
            })
            .fail(function (e) {
            });
    }
    page.Methods.GetString = function (text) {
        if (strings[text + "-" + userLang]) {
            return strings[text + "-" + userLang];
        }
        return text;
    }

})(jQuery);
