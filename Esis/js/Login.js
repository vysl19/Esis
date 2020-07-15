$(function () {
    $("#aLogin").click(function () {
        var userName = $("input#UserName").val();
        var password = $("input#Password").val();
        var data = {
            "grant_type": 'password',
            "username": userName,
            "password": password
        }

        $.ajax({
            url: '/token',
            type: "POST",
            data: data,            
            contentType: "application/json",            
            success: function (response) {
                if (response.access_token != null) {
                    sessionStorage.setItem("Token", response.access_token);
                }
                window.location.href = "/admin.html";                
            }
        });
    });
});
