(function ($) {
    var contacts = [
        {
            Title: "İSTANBUL ŞUBESİ",
            Phone: "+90 212 233 4500",
            Fax: "+90 212 234 4500",
            Address: "Şenlikköy Mah. Ünviersite Sk. No:5 Esis Binası 34153 Florya, Bakırköy/Istanbul",
            Location: "34153 no:5 üniverrsite sokak esis",
            Mail:"info@esis.com.tr"
        },
        {
            Title: "ANKARA ŞUBESİ",
            Phone: "+90 312 285 4002",
            Fax: "+90 312 285 4002",
            Address: "Kızılırmak Mah: 1450 Sk Ankara Tic Merk. B blok K:9/48, 06520 Çukurambar, Çankaya/Ankara",
            Location: "06520 1450 sok Ankara ticaret Merkezi",
            Mail: "info@esis.com.tr"
        }
    ]
    SetFooterContacts(contacts.slice(0, 2))
    ContactDiv(contacts.slice(0, 2));
    SetLeftTopMenu(contacts.slice(0, 1));
    function SetFooterContacts(list) {
        var insertedId = "trfooterContact";
        if ($(this).width() < 768) {
            insertedId = "tbfooterContact";
            $("#tdFooterLogo").removeClass("col-4").addClass("col-12");
            $("#tdFooterLogo").removeClass("tdFooterWindows").addClass("tdFooterMobile");
        }
        for (var i = 0; i < list.length; i++) {
            var text = "";
            //Mobilde Sector alanı 2 sutunla gelmesin
            if ($(this).width() < 768) {
                text += "<tr>";
                text += '<td class="text-center align-self-center tdFooterMobile"><table>';
            }
            else {
                text += '<td class="col-4 text-center align-self-center tdFooterWindows"><table>';
            }

            text += '<tr><td><i class="fa fa-phone text-white" aria-hidden="true"></i></td><td><span class="text-white">' + list[i].Phone + '</span></td></tr>';
            text += '<tr><td><i class="fa fa-fax text-white" aria-hidden="true"></i></td><td><span class="text-white">' + list[i].Fax + '</span></td></td>';
            text += '<tr><td><i class="fa fa-map-marker text-white" aria-hidden="true"></i></td><td><span class="text-white">' + list[i].Address + '</span></td></td>';
            text += '</table></td>';
            text += $(this).width() < 768 ? "</tr>" : "";
            $('#' + insertedId).append(text);
        }
    }
    function ContactDiv(list) {
        var text = "<table>"
        for (var i = 0; i < list.length; i++) {
            text += "<thead><tr>";
            text += "<th class='col-12'>" + list[i].Title + "</th></tr></thead>";
            text += "<tbody>";
            text += '<tr><td class="col-12"><i class="fa fa-phone mr-1" aria-hidden="true"></i>' + list[i].Phone + "</td></tr>";
            text += '<tr><td class="col-12"><i class="fa fa-fax mr-1" aria-hidden="true"></i>' + list[i].Fax + "</td></tr>";
            text += '<tr><td class="col-12"><i class="fa fa-map-marker mr-1" aria-hidden="true"></i>' + list[i].Address + "</td></tr>";
            text += "<tr><td class='col-12'><iframe frameborder='0' style='border: 0; width: 100%;height:100%' allowfullscreen src='https://www.google.com/maps/embed/v1/place?key=AIzaSyApiXfNdrsmPl-ZLyKm16_iOLyDKQvcBcA&q=" + list[i].Location + "'></iframe></td></tr>";
            text += "</tbody>";

        }
        text += "</table>";
        if ($(this).width() < 768) {
            text += "</tr><tr>";
            $("#LeftContact").append(text);
            $("#LeftContact").removeClass("col-6").addClass("col-12");
            $("#RightContact").removeClass("col-6").addClass("col-12");
        }
        else {
            $("#LeftContact").append(text);
        }

    }
    function SetLeftTopMenu(list) {
        //var text = '<ul class="list-unstyled">' +
        //    '<li><a id="aFacebook" href="#" target="_blank"><i class="fa fa-phone mr-1"></i>' + list[0].Phone + '</a></li>' +
        //    '<li><a id="aTwitter" href="#" target="_blank"><i class="fa fa-mail-forward mr-1"></i>' + list[0].Mail + '</a></li>' +
        //'</ul>'

        //$("#leftTopSocial").append(text);
        
    }
})(jQuery);