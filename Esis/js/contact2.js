(function ($) {
    LoadContact();
    function LoadContact() {
        $.get('api/Contact', function () {
        })
            .done(function (response) {
                SetFooterContacts(response.slice(0, 2))
                ContactDiv(response.slice(0, 2));
                SetLeftTopMenu(response.slice(0, 1));
            })
            .fail(function (e) {

            });
    }
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

            text += '<tr><td><i class="fa fa-phone text-white" aria-hidden="true"></i></td><td><span class="text-white">' + list[i].Telephone + '</span></td></tr>';
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
            text += "<th class='col-12'>" + list[i].Title + " " + page.Methods.GetString("Branch") + "</th></tr></thead>";
            text += "<tbody>";
            text += '<tr><td class="col-12"><i class="fa fa-phone mr-1" aria-hidden="true"></i>' + list[i].Telephone + "</td></tr>";
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
function SendMail() {
    var data = {};
    data.NameSurname = $("#ContactNameSurname").val();
    data.Email = $("#ContactEmail").val();
    data.PhoneNumber = $("#ContactPhoneNumber").val();
    data.Message = $("#ContactMessage").val();

    if (data.NameSurname == "") {
        alert("Isim alanı boş olamaz");
        return;
    }
    if (data.Email == "") {
        alert("Email alanı boş olamaz");
        return;
    }
    if (data.PhoneNumber == "") {
        alert("Telefon alanı boş olamaz");
        return;
    }
    if (data.Message == "") {
        alert("Message alanı boş olamaz");
        return;
    }
    $.post('api/Notification', data)
        .done(function (response) {
            alert("Islem Yapıldı");
        })
        .fail(function (e) {
            alert("Islem Yapıldı");
        });
}