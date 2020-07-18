$(function () {
    $("#aLogin").click(function () {
        var userName = $("input#UserName").val();
        var password = $("input#Password").val();
        var data = {
            "UserName": userName,
            "Password": password
        }

        $.post('api/Login', data)
            .done(function (response) {
                if (!response) {
                    alert("Geçersiz Login");
                    return;
                }
                alert("Islem Yapıldı");
                sessionStorage.setItem("Login", true);
                sessionStorage.setItem("UserName", data.UserName);
                sessionStorage.setItem("Password", data.Password);
                window.location.href = "./admin.html";
            })
            .fail(function (e) {
                alert("Hata alındı");
            });
    });
});
