var menus = [];
var subMenus = {};
var content = [];
var myEditor;
var mainMenu = [{ "Id": 1, "Title": "Service", "Language": "tr" }, { "Id": 2, "Title": "Sector", "Language": "tr" }, { "Id": 3, "Title": "Service", "Language": "en" }, { "Id": 4, "Title": "Sector", "Language": "en" }]
var selectedMenu = {};
var selectedSubMenuIndex;
var languages = [{ "Code": "tr", "Title": "Türkçe" }, { "Code": "en", "Title": "İngilizce" }];
var about = {};
var contacts = [];
$(function () {
    if (!sessionStorage.getItem("Login")) {
        window.location.href = "./login.html";
    }
    CloseOtherPanelsAndOpenPanel("divSubMenu");
    $("#aSubMenu").click(function () {
        CloseOtherPanelsAndOpenPanel("divSubMenu");
    });
    $("#aSubMenuAdd").click(function () {
        CloseOtherPanelsAndOpenPanel("divSubMenuAdd");

    });
    $("#aSubMenuDelete").click(function () {
        CloseOtherPanelsAndOpenPanel("divSubMenuDelete");

    });
    $("#aAbout").click(function () {
        CloseOtherPanelsAndOpenPanel("divAbout");

    });
    $("#aContact").click(function () {
        CloseOtherPanelsAndOpenPanel("divContact");

    });
    $("#aSocialMedia").click(function () {
        CloseOtherPanelsAndOpenPanel("divSocialMedia");

    });
    $("#aMail").click(function () {
        CloseOtherPanelsAndOpenPanel("divMail");

    });
    $("#aMeta").click(function () {
        CloseOtherPanelsAndOpenPanel("divMeta");

    });
    $("#aTranslate").click(function () {
        CloseOtherPanelsAndOpenPanel("divTranslate");
    });
    $("#aTranslationList").click(function () {
        CloseOtherPanelsAndOpenPanel("divTranslatationList");
    });

    $("#aCache").click(function () {
        var data = {};
        data.UserName = sessionStorage.getItem("UserName");
        data.Password = sessionStorage.getItem("Password");
        $.post('api/Cache', data)
            .done(function (response) {
                alert("Islem Yapıldı");
                location.reload();
            })
            .fail(function (e) {
                alert("Hata alındı");
            });
    });

    setMainMenu();
    LoadSubMenu();
    setLanguage();
    LoadAbout();
    LoadContact();
    LoadSocialMedia();
    LoadMail();
    LoadMeta();
    GetTranslationList();
    $("#MainMenus, #MainMenusDelete").change(function () {
        setSubMenu();
    });
    $("#SubMenus").change(function () {
        setSubMenuHtml();
    });
    $("#languages").change(function () {
        SetAbout();
    });
    $("#Contacts").change(function () {
        SetContact();
    });
    //$("#aProductType").click(function () {
    //    CloseOtherPanelsAndOpenPanel("divProductType");
    //    LoadProductType();
    //});

    //$("#aProduct").click(function () {
    //    CloseOtherPanelsAndOpenPanel("divProduct");
    //    LoadProductTypeSelect();
    //});
    //$("#aAbout").click(function () {
    //    CloseOtherPanelsAndOpenPanel("divAbout");   
    //    LoadAbout();
    //}); 
    //$("#aContact").click(function () {
    //    CloseOtherPanelsAndOpenPanel("divContact");  
    //    LoadContact();
    //});
    //$("#aReference").click(function () {
    //    CloseOtherPanelsAndOpenPanel("divReference");
    //    LoadReference();
    //});



    //LoadSlider();
    //Slider 
    $(document).on('change', '#SubMenuImageBrowser', function () {
        var reader = new FileReader();
        reader.readAsArrayBuffer(this.files[0]);

        reader.onloadend = function () {
            $("#SubMenuImage").attr("src", "data:image/jpeg;base64," + arrayBufferToBase64(this.result));
        }

    });
    $(document).on('change', '#SubMenuImageBrowserAdd', function () {
        var reader = new FileReader();
        reader.readAsArrayBuffer(this.files[0]);

        reader.onloadend = function () {
            $("#SubMenuImageAdd").attr("src", "data:image/jpeg;base64," + arrayBufferToBase64(this.result));
        }

    });
    $(document).on('change', '#AboutImageBrowserAdd', function () {
        var reader = new FileReader();
        reader.readAsArrayBuffer(this.files[0]);

        reader.onloadend = function () {
            $("#AboutImage").attr("src", "data:image/jpeg;base64," + arrayBufferToBase64(this.result));
        }

    });

});
function CloseOtherPanelsAndOpenPanel(panelId) {
    $(".container-fluid").addClass("collapse");
    $("#" + panelId).removeClass("collapse in");

}
function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
};

function LoadSubMenu() {
    $.get('api/SubMenu', function () {
    })
        .done(function (response) {
            subMenus = response;
        })
        .fail(function (e) {
        });
}
function setMainMenu() {
    $("#MainMenus").html('');
    $("#MainMenusAdd").html('');
    $("#MainMenusDelete").html('');

    var text = "<option selected>Seç...</option>";
    for (var a = 0; a < mainMenu.length; a++) {
        text += "<option value='" + mainMenu[a].Id + "' text='" + mainMenu[a].Title + "-" + mainMenu[a].Language + "'>" + mainMenu[a].Title + "-" + mainMenu[a].Language + "</option>";
    }
    $("#MainMenus").append(text);
    $("#MainMenusAdd").append(text);
    $("#MainMenusDelete").append(text);
}
function setSubMenu() {
    $("#SubMenus").html('');
    $("#SubMenusDelete").html('');
    var text = "<option selected>Seç...</option>";
    var title = $("#MainMenus option:selected").attr("text");
    if (!title) {
        title = $("#MainMenusDelete option:selected").attr("text");
    }
    var list = subMenus[title];
    selectedMenu = title;
    for (var a = 0; a < list.length; a++) {
        text += "<option value='" + list[a].Id + "' data-id='" + a + "'>" + list[a].Title + "</option>";
    }
    $("#SubMenus").append(text);
    $("#SubMenusDelete").append(text);
}
function setLanguage() {
    $("#languages").html('');
    var text = "<option selected>Seç...</option>";
    for (var a = 0; a < languages.length; a++) {
        text += "<option value='" + languages[a].Code + "'>" + languages[a].Title + "</option>";
    }
    $("#languages").append(text);
}
function setSubMenuHtml() {
    selectedSubMenuIndex = $("#SubMenus option:selected").attr("data-id");
    CKEDITOR.instances.editor1.setData(subMenus[selectedMenu][selectedSubMenuIndex].Html);
    $("#SubMenuTitle").val(subMenus[selectedMenu][selectedSubMenuIndex].Title);
    $("#SubMenuDescription").val(subMenus[selectedMenu][selectedSubMenuIndex].Description);
    $("#SubMenuImage").attr("src", subMenus[selectedMenu][selectedSubMenuIndex].Image);
}
function updateSubMenu() {
    var data = subMenus[selectedMenu][selectedSubMenuIndex];
    data.Description = $("#SubMenuDescription").val();
    data.Title = $("#SubMenuTitle").val();
    data.Html = CKEDITOR.instances.editor1.getData();
    data.Image = $("#SubMenuImage").attr("src");
    data.UserName = sessionStorage.getItem("UserName");
    data.Password = sessionStorage.getItem("Password");

    $.post('api/SubMenu/Post', data)
        .done(function (response) {
            alert("Islem Yapıldı");
        })
        .fail(function (e) {
            alert("Hata alındı");
        });
}
function addSubMenu() {
    var data = {};
    data.Description = $("#SubMenuDescriptionAdd").val();
    data.Title = $("#SubMenuTitleAdd").val();
    data.Html = CKEDITOR.instances.editor2.getData();
    data.Image = $("#SubMenuImageAdd").attr("src");
    data.MenuId = $("#MainMenusAdd option:selected").attr("value");
    data.UserName = sessionStorage.getItem("UserName");
    data.Password = sessionStorage.getItem("Password");

    if (data.Description == "") {
        alert("Açiklama alanı boş olamaz");
        return;
    }
    if (data.Title == "") {
        alert("Başlık alanı boş olamaz");
        return;
    }
    if (data.Html == "") {
        alert("İçerik alanı boş olamaz");
        return;
    }
    if (data.Image == "" || data.Image == undefined) {
        alert("Image alanı boş olamaz");
        return;
    }
    $.post('api/SubMenu/Post', data)
        .done(function (response) {
            alert("Islem Yapıldı");
        })
        .fail(function (e) {
            alert("Hata alındı");
        });
}
function LoadAbout() {
    $.get('api/About', function () {
    })
        .done(function (response) {
            about = response;
            //for (var i = 0; i < response.length; i++) {
            //    if (response[a].Language == userLang) {
            //        $("#aboutImage").attr("src", response[a].Image);
            //        $("#colAbout").val(response[a].Html);
            //        break;
            //    }
            //}
        })
        .fail(function (e) {

        });
}
function deleteSubMenu() {
    var id = $("#SubMenusDelete option:selected").attr("value");
    var data = {};
    data.Id = id;
    data.UserName = sessionStorage.getItem("UserName");
    data.Password = sessionStorage.getItem("Password");
    $.post('api/SubMenu/Delete', data)
        .done(function (response) {
            alert("Islem Yapıldı");
        })
        .fail(function (e) {
            alert("Hata alındı");
        });
}
function SetAbout() {
    var code = $("#languages option:selected").attr("value")
    for (var i = 0; i < about.length; i++) {
        if (about[i].Language == code) {
            $("#AboutImage").attr("src", about[i].Image);
            CKEDITOR.instances.AboutHtml.setData(about[i].Html);
            break;
        }
    }
}
function LoadContact() {
    $.get('api/Contact', function () {
    })
        .done(function (response) {
            contacts = response;
        })
        .fail(function (e) {
        });
}
function SetContact() {
    var index = $("#Contacts option:selected").attr("value");
    if (index >= 0) {
        $("#TextForContactId").val(contacts[index].Id);
        $("#TextForTitle").val(contacts[index].Title);
        $("#TextForAddress").val(contacts[index].Address);
        $("#TextForTelephone").val(contacts[index].Telephone);
        $("#TextForFax").val(contacts[index].Fax);
        $("#TextForEmail").val(contacts[index].Mail);
        $("#TextForLocation").val(contacts[index].Location);
    }
}
function SaveAbout() {
    var data = {};
    data.Language = $("#languages option:selected").attr("value");
    data.Html = CKEDITOR.instances.AboutHtml.getData();
    data.Image = $("#AboutImage").attr("src");
    data.UserName = sessionStorage.getItem("UserName");
    data.Password = sessionStorage.getItem("Password");
    if (!data.Language) {
        alert("Dil kodu seçilmeili");
        return;
    }
    if (data.Html == "") {
        alert("İçerik alanı boş olamaz");
        return;
    }
    if (data.Image == "" || data.Image == undefined) {
        alert("Image alanı boş olamaz");
        return;
    }
    $.post('api/About', data)
        .done(function (response) {
            alert("Islem Yapıldı");
            location.reload();
        })
        .fail(function (e) {
            alert("Hata alındı");
        });
}
function SaveContact() {
    var data = {};
    data.Id = $("#TextForContactId").val();
    data.Location = $("#TextForLocation").val();
    data.Title = $("#TextForTitle").val();
    data.Fax = $("#TextForFax").val();
    data.Telephone = $("#TextForTelephone").val();
    data.Address = $("#TextForAddress").val();
    data.Mail = $("#TextForEmail").val();
    data.UserName = sessionStorage.getItem("UserName");
    data.Password = sessionStorage.getItem("Password");
    if (data.Id > 0) {
        if (data.Location == "") {
            alert("Location alanı boş olamaz");
            return;
        }
        if (data.Title == "") {
            alert("Başlık alanı boş olamaz");
            return;
        }
        if (data.Fax == "") {
            alert("Fax alanı boş olamaz");
            return;
        }
        if (data.Telephone == "") {
            alert("Telephone alanı boş olamaz");
            return;
        }
        if (data.Address == "") {
            alert("Address alanı boş olamaz");
            return;
        }
        if (data.Mail == "") {
            alert("Mail alanı boş olamaz");
            return;
        }
        $.post('api/Contact', data)
            .done(function (response) {
                alert("Islem Yapıldı");
                location.reload();
            })
            .fail(function (e) {
                alert("Hata alındı");
            });
    }

}
function SaveSocialMedia() {
    var data = {};
    data.Linkedin = $("#TextForLinkedin").val();
    data.Instagram = $("#TextForInstagram").val();
    data.Facebook = $("#TextForFacebook").val();
    data.Twitter = $("#TextForTwitter").val();
    data.UserName = sessionStorage.getItem("UserName");
    data.Password = sessionStorage.getItem("Password");
    if (data.Linkedin == "") {
        alert("Linkedin alanı boş olamaz");
        return;
    }
    if (data.Instagram == "") {
        alert("Instagram alanı boş olamaz");
        return;
    }
    if (data.Fax == "") {
        alert("Fax alanı boş olamaz");
        return;
    }
    if (data.Facebook == "") {
        alert("Facebook alanı boş olamaz");
        return;
    }
    if (data.Address == "") {
        alert("Address alanı boş olamaz");
        return;
    }
    if (data.Twitter == "") {
        alert("Twitter alanı boş olamaz");
        return;
    }
    $.post('api/SocialMedia', data)
        .done(function (response) {
            alert("Islem Yapıldı");
            location.reload();
        })
        .fail(function (e) {
            alert("Hata alındı");
        });

}
function LoadSocialMedia() {
    $.get('api/SocialMedia', function () {
    })
        .done(function (response) {
            $("#TextForLinkedin").val(response[0].Linkedin);
            $("#TextForFacebook").val(response[0].Facebook);
            $("#TextForTwitter").val(response[0].Twitter);
            $("#TextForInstagram").val(response[0].Instagram);
        })
        .fail(function (e) {
        });
}
function LoadMail() {
    $.get('api/Mail', function () {
    })
        .done(function (response) {
            $("#TextForMailEmail").val(response[0].Email);
            $("#TextForMailHost").val(response[0].Host);
            $("#TextForMailPassword").val(response[0].Password);
            $("#TextForMailPort").val(response[0].Port);
        })
        .fail(function (e) {
        });
}
function LoadMeta() {
    $.get('api/Meta', function () {
    })
        .done(function (response) {
            $("#TextForMetaTitle").val(response[0].Title);
            $("#TextForMetaAuthor").val(response[0].Author);
            $("#TextForMetaDescription").val(response[0].Description);
            $("#TextForMetaKeywords").val(response[0].Keywords);
        })
        .fail(function (e) {
        });
}
function SaveMail() {
    var data = {};
    data.Email = $("#TextForMailEmail").val();
    data.Host = $("#TextForMailHost").val();
    data.Port = $("#TextForMailPort").val();
    data.Password = $("#TextForMailPassword").val();
    data.UserName = sessionStorage.getItem("UserName");
    data.Password = sessionStorage.getItem("Password");
    if (data.Email == "") {
        alert("Email alanı boş olamaz");
        return;
    }
    if (data.Host == "") {
        alert("Host alanı boş olamaz");
        return;
    }
    if (data.Port == "") {
        alert("Port alanı boş olamaz");
        return;
    }
    if (data.Password == "") {
        alert("Password alanı boş olamaz");
        return;
    }
    $.post('api/Mail', data)
        .done(function (response) {
            alert("Islem Yapıldı");
            location.reload();
        })
        .fail(function (e) {
            alert("Hata alındı");
        });
}
function SaveMeta() {
    var data = {};
    data.Title = $("#TextForMetaTitle").val();
    data.Author = $("#TextForMetaAuthor").val();
    data.Description = $("#TextForMetaDescription").val();
    data.Keywords = $("#TextForMetaKeywords").val();
    data.UserName = sessionStorage.getItem("UserName");
    data.Password = sessionStorage.getItem("Password");
    if (data.Title == "") {
        alert("Title alanı boş olamaz");
        return;
    }
    if (data.Author == "") {
        alert("Author alanı boş olamaz");
        return;
    }
    if (data.Description == "") {
        alert("Description alanı boş olamaz");
        return;
    }
    if (data.Keywords == "") {
        alert("Keywords alanı boş olamaz");
        return;
    }
    $.post('api/Meta', data)
        .done(function (response) {
            alert("Islem Yapıldı");
            location.reload();
        })
        .fail(function (e) {
            alert("Hata alındı");
        });
}
function SaveTranslate() {
    var data = {};
    data.Language = $("#TranslateLanguages option:selected").attr("value");
    data.Title = $("#TextForTranslateTitle").val();
    data.Text = $("#TextForTranslateText").val();
    data.UserName = sessionStorage.getItem("UserName");
    data.Password = sessionStorage.getItem("Password");
    if (data.Language == "") {
        alert("Dil seçimi Yapmalısınız");
        return;
    }
    if (data.Title == "") {
        alert("Id alanı boş olamaz");
        return;
    }
    if (data.Text == "") {
        alert("Text alanı boş olamaz");
        return;
    }
    $.post('api/String', data)
        .done(function (response) {
            alert("Islem Yapıldı");
            location.reload();
        })
        .fail(function (e) {
            alert("Hata alındı");
        });
}
function GetTranslationList() {
    $.get('api/String', function () {
    })
        .done(function (response) {
            var text = "";
            $("#TranslationList").html();
            for (var key in response) {
                var arrKey = key.split("-");
                text += "<tr>";
                text += "<td>" + arrKey[0] + "</td>";
                text += "<td>" + arrKey[1] + "</td>";
                text += "<td>" + response[key] + "</td>";
                text += "</tr>";
            }
            $("#TranslationList").append(text);
        })
        .fail(function (e) {
        });
}