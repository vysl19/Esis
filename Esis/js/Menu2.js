var width = 0;
(function ($) {
    var userLang = sessionStorage.getItem("UserLang");
    width = window.innerWidth;
    page.Methods.LoadSubMenu = function () {
        $.get('api/SubMenu', function () {
        })
            .done(function (response) {
                //Mobilde Sector alanı 2 sutunla gelmesin                
                if (!response["Service-" + userLang]) {
                    response["Service-" + userLang] = [];
                }
                if (!response["Sector-" + userLang]) {
                    response["Sector-" + userLang] = [];
                }
                setMenu(response["Service-" + userLang], 1, "ServiceMenu");
                setMenu(response["Sector-" + userLang], 1, "SectorMenu");
                services.List = response["Service-" + userLang];
                sectors.List = response["Sector-" + userLang];
                page.Methods.LoadHomePage();
                $("a.pagevk_a").unbind("click");
                $("a.pagevk_a").click(ClickMenu);
            })
            .fail(function (e) {
                var a = 4;
            });
    }
 
    //Mobilde Sector alanı 2 sutunla gelmesin
    //if ($(this).width() < 768) {
    //    setMenu(sectors, 1, "SectorMenu");
    //}
    //else {
    //    setMenu(sectors, 1, "SectorMenu");
    //}
    //setMenu(services, 1, "ServiceMenu");

    function setMenu(list, columnSize, id) {
        $("#" + id).html("");
        var text = "<table class='table table-borderless'>";
        var counter = 0;
        var row = "<tr class='p-1'>";
        text += row;
        for (var a = 0; a < list.length; a++) {
            if (counter != 0 && counter % columnSize == 0) {
                text += "</tr>" + row;
            }
            text += "<td class='text-nowrap p-1'><table>" + row + "<td class='p-1'><a href='#' class='pagevk_a fontcambria' data-id='" + id.replace("Menu", "") + "-" + list[a].Id + "'><span class='menuColor'>" + list[a].Title + "</span></a></td></tr>";

            counter++;
            // submenu kaltığı için commentlendi satır
            //var subMenus = list[a].SubMenus;
            var subMenus = [];
            for (var i = 0; i < subMenus.length; i++) {
                text += row + "<td class='text-nowrap p-1'><a><span>" + subMenus[i].Title + "</span></a></td></tr>";
            }
            text += "</table></td>";
        }
        text += "</tr></table>"
        $("#" + id).append(text);
    }

    function setMenuHtml(id) {
        var title = "";
        var list = [];
        var ids = id.split("-");
        var divId = ids[0];
        var menuId = ids[1];
        $("#div" + divId).css("display", "block");
        $("div#footerContact").css("display", "block");
        switch (divId) {
            case "Service":
                list = services.List;
                title = page.Methods.GetString("OurMainServices");
                break;
            case "Sector":
                list = sectors.List;
                title = page.Methods.GetString("Sectors");
                break;
            case "Contact":
            //$("div#footerContact").css("display", "none");
        }
        if (list.length == 0) {
            return;
        }
        $("#" + divId + "SideMenu").empty();
        $("#" + divId + "Html").empty();
        if (width > 768) {
            $("#" + divId + "SideMenu").append(getSideMenu(list, divId, title, menuId));
        }
        else {
            $("#" + divId + "SideMenu").css("display", "none");
            $("#" + divId + "Html").removeClass("col-7");
        }
        $(document).off("click", "a.pagevk_a", ClickMenu);
        $(document).on("click", "a.pagevk_a", ClickMenu);
        var div = "<div class='divContent'></div>";
        $("#" + divId + "Html").append(div);
        $("#" + divId + "Html div").append(GetHtml(list, menuId));
    }
    function getSideMenu(list, id, title, menuId) {
        var text = "<table class='table p-0 m-0 side-bg-color table-borderless'>";
        //text += "<thead class='fontcambria mainTitleColor'><th>" + title + "</th></thead><tbody>";
        for (var a = 0; a < list.length; a++) {
            var tdClassName = "tdSubMenu";
            var textColor = "";
            if (a == list.length - 1) {
                tdClassName = "tdLastSubMenu";
            }
            if (list[a].Id == menuId) {
                textColor += "mainTitleColor";
            }
            //text += "<tr class='mb-4'><td class='text-primary border-bottom-0'><div class='inner'><a href='#' class='pagevk_a' data-id='" + id.replace("Menu", "") + "-" + list[a].Id + "'><span>" + list[a].Title + "</span></a></div></td></tr>";
            text += "<tr><td class='p-0'><a href='#' class='pagevk_a fontcambria p-0 text-white " + textColor + "' data-id='" + id.replace("Menu", "") + "-" + list[a].Id + "'><div class='" + tdClassName + "'><span class='hoverSideMenu'>" + list[a].Title + "</span></a></div></td></tr>";
            var subMenus = [];
            //var subMenus = list[a].SubMenus
            for (var i = 0; i < subMenus.length; i++) {
                text += "<tr><td class='p-0'><a><span class='ml-5'>" + subMenus[i].Title + "</span></a></td></tr>";
            }
        }
        text += "</tbody></table>"
        return text;
    }

    function ClickMenu() {
        $("div.pagevk").css("display", "none");
        var id = $(this).attr("data-id");
        setMenuHtml(id);
        $(".dropdown-menu").css("display", "none");
        $("#collapsibleNavbar").removeClass("show");
    }
    function GetHtml(list, menuId) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].Id == menuId) {
                return list[i].Html;
            }
        }
    }

    ////$(window).on('resize', function() {
    ////    var win = $(this); //this = window      
    ////    if (win.width() < 800) {
    ////        setMenu(services, 1, "ServiceMenu");
    ////        setMenu(sectors, 1, "SectorMenu");
    ////        /* ... */
    ////    }
    ////});  
    page.Methods.LoadSubMenu();
})(jQuery);