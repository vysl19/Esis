var page = {};
page.Methods = {};
(function ($) {    
    if (!sessionStorage.getItem("UserLang")) {
        sessionStorage.setItem("UserLang", (navigator.language || navigator.userLanguage).substring(0, 2));
    }
    $("a#aTurkish").removeAttr("href");
    $("a#aEnglish").removeAttr("href");
    if (sessionStorage.getItem("UserLang") == "tr") {
        $("a#aEnglish").attr("href", "#");
        $("a#aTurkish").css("color", "#ff4157");
    }
    else {
        $("a#aTurkish").attr("href", "#");
        $("a#aEnglish").css("color", "#ff4157");
    }
    $("a#aEnglish").click(function () {
        
        sessionStorage.setItem("UserLang", "en");
        if (!$("a#aEnglish").attr("href")) {
            return;
        }
        //page.Methods.LoadSubMenu();
        location.reload();
        //$("a#aEnglish").removeAttr("href");
        //$("a#aTurkish").attr("href", "#");
        //$("a#aTurkish").css("color", "#fff");
        //$("a#aEnglish").css("color", "#ff4157");
    });
    $("a#aTurkish").click(function () {

        sessionStorage.setItem("UserLang", "tr");
        //userLang = "tr";
        if (!$("a#aTurkish").attr("href")) {
            return;
        }
        location.reload();
        //page.Methods.LoadSubMenu();
        //$("a#aTurkish").removeAttr("href");
        //$("a#aEnglish").attr("href", "#");
        //$("a#aEnglish").css("color", "#fff");
        //$("a#aTurkish").css("color", "#ff4157");
    });
})(jQuery);