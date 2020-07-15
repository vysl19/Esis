var services = {};
services.Title = "ANA HİZMET ALANLARIMIZ";
services.List = [];

var sectors = {};
sectors.Title = "SEKTÖRLER";
sectors.List = [];
(function ($) {
    //var services = {
    //    Title: "ANA HİZMET ALANLARIMIZ",
    //    List: [
    //        {
    //            Name: "HİBE/FON YÖNETİM </br>DANIŞMANLIĞI",
    //            Description: "Özel sektör ve kamuya yönelik olarak; finansal özgürlük, kaynak verimliliği, memnuniyet, prestijli projeler ve ödüller",
    //            Image: 'Icons/ESIS_WEBSITE_icon-08.png'
    //        },
    //        {
    //            Name: "İNOVASYON YÖNETİM </br> DANIŞMANLIĞI",
    //            Description: "Özel sektör ve kamuya yönelik olarak; inovasyon, benchmarking (kıyaslama ), şirket değer artışı, ulusal ve uluslararası sıralamalarda üstlerde olma, farkındalık, prestijli projeler ve ödüller",
    //            Image: 'Icons/ESIS_WEBSITE_icon-09.png'
    //        },
    //        {
    //            Name: "EĞİTİM HİZMETLERİ YÖNETİM </br> DANIŞMANLIĞI",
    //            Description: "Özel sektör ve kamuya yönelik olarak; kurumsal gelişim ve aidiyet, profesyonellik, kaynak verimliliği, farkındalık, prestijli projeler ve ödüller",
    //            Image: 'Icons/ESIS_WEBSITE_icon-10.png'
    //        },
    //        {
    //            Name: "HUKUK YÖNETİM </br> DANIŞMANLIĞI",
    //            Description: "Özel sektör ve kamuya yönelik olarak; güvenilirlik, profesyonellik, kaynak verimliliği, kurumsal gelişim ve aidiyet",
    //            Image: 'Icons/ESIS_WEBSITE_icon-11.png'
    //        },
    //        {
    //            Name: "BİLGİ TEKNOLOJİLERİ YÖNETİM </br> DANIŞMANLIĞI",
    //            Description: "Özel sektör ve kamuya yönelik olarak; dijitalleşme, kaynak verimliliği, profesyonellik, kurumsal gelişim ve aidiyet,  prestijli projeler ve ödüller",
    //            Image: 'Icons/ESIS_WEBSITE_icon-12.png'
    //        }
    //    ]
    //};
    //var sectors = {
    //    Title: "SEKTÖRLER",
    //    List: [
    //        {
    //            Name: "KAMU",
    //            Description: "Kamunun öncü kurumlarına, (Cumhurbaşkanlığı, Bakanlıklar, Yerel Yönetimler, Uluslararası ve Ulusal Kuruluşlar, Odalar ve Sivil Toplum Kuruluşları vb.) &nbsp;vatandaş memnuniyeti ve kamu yararı ön planda tutularak, talep ve ihtiyaçlarına özel hizmetler sunmakta ve destek sağlamaktayız.",
    //            Image: 'Icons/ESIS_WEBSITE_icon-13.png'
    //        },
    //        {
    //            Name: "SAĞLIK HİZMETLERİ VE YAŞAM BİLİMLERİ",
    //            Description: "Yenilikçi sağlık uygulamaları ve dijitalleşen sağlık hizmetlerinin artmasıyla küresel ve yerel zorluklara çözüm fırsatları artmıştır. ’’Sağlıktan büyük zenginlik yoktur ‘’anlayışıyla tüm müşterilerimizin en etkin ve kaliteli hizmetler sunmalarına destek sağlamaktayız.",
    //            Image: 'Icons/ESIS_WEBSITE_icon-14.png'
    //        },
    //        {
    //            Name: "TÜKETİM VE ÜRETİM",
    //            Description: "Tüketim ve üretim sektöründeki şirketlerin performanslarını, tüketici eğilimindeki değişimler ciddi biçimde etkilemektedir. Müşterilerimizin stratejik ve operasyonel konumlanmalarında, piyasadaki tüm olanaklardan maksimum seviyede faydalanmasına ilişkin özel hizmetler sunmakta ve destek sağlamaktayız.",
    //            Image: 'Icons/ESIS_WEBSITE_icon-15.png'
    //        },
    //        {
    //            Name: "ENDÜSTRİYEL ÜRETİM",
    //            Description: "Müşterilerimizin hizmetlerinde pozitif değişimlerine öncü olarak, ihtiyaçlarına en uygun çözümleri sunarken, kurumsal etik anlayışı çerçevesinde endüstri bilgi birikimimiz ve teknik bilgilerimizle entegre bir şekilde destek sağlamaktayız.",
    //            Image: 'Icons/ESIS_WEBSITE_icon-16.png'
    //        },
    //        {
    //            Name: "TEKNOLOJİ VE TELEKOMÜNİKASYON",
    //            Description: "Müşterilerimizin şirket değerlemelerine ilişkin analiz çalışmaları, kullanıcı uygulamalarına yönelik mevzuat kaynaklı çalışmaların yapılması, kaynak oluşturma, kaynakların etkin ve verimli kullanılması konusunda inovatif bir yönetim yaklaşımı ile destek sağlamaktayız.",
    //            Image: 'Icons/ESIS_WEBSITE_icon-17.png'
    //        },
    //        {
    //            Name: "MEDYA, EĞLENCE VE KÜLTÜR",
    //            Description: "Globalleşen dünyamızda, kültürlerarası etkileşimin etkilerini olumlu bir güç olarak kullanarak, geliştirdiğimiz network ağları sayesinde müşterilerimizin mutluluğu için farklı disiplinler arası işbirliği ve yenilikçi uygulamaları ön planda tutarak, etkin ve kaliteli hizmetler sunmalarına destek sağlamaktayız.",
    //            Image: 'Icons/ESIS_WEBSITE_icon-18.png'
    //        },
    //        {
    //            Name: "FİNANSAL HİZMETLER",
    //            Description: "Dijitalleşmenin de etkisiyle küreselleşen dünyada, müşterilerimizin iş problemlerine çözümler sunarak, stratejik ve operasyonel aksiyonlar almalarına katkı sağlıyoruz. Bu çerçevede danışmanlık ve kurumsal finans özgürlük desteği sağlamaktayız.",
    //            Image: 'Icons/ESIS_WEBSITE_icon-19.png'
    //        },
    //        {
    //            Name: "ENERJİ VE DOĞAL KAYNAKLAR",
    //            Description: "İnsanlığa faydalı hizmetler üreten ve sürekliliği önemseyen müşterilerimize, derin bilgi birikimimiz ve uzmanlığımızla stratejik ve operasyonel olarak kendini konumlandırmalarında yardımcı olmakta ve hizmetlerinde yenilikçi, verimliliği ön planda tutan yönetim anlayışımızla destek sağlamaktayız.",
    //            Image: 'Icons/ESIS_WEBSITE_icon-20.png'
    //        },
    //    ]
    //};


    page.Methods.LoadHomePage = function () {
        $("#secHome").html("");
        SetSummaryFields(services, "mainServices", 5, "sector-bg-color");
        SetSummaryFields(sectors, "mainSectors", 4, "sector-bg-color");
    }
    function SetSummaryFields(obj, divId, maxRowCount, bgcolor) {
        if ($(this).width() < 768) {
            var header = '<div class="text-center my-xl-5 mx-auto"><span class="Hometitles fontcambria">' + obj.Title + '</span></div>';
        }
        else {
            var header = '<div class="text-center col-4 my-xl-5 mx-auto"><span class="Hometitles fontcambria">' + obj.Title + '</span></div>';
        }

        $("#secHome").append(header);
        var div = '<div class ="table-responsive-sm ' + bgcolor + '" id="' + divId + '">';
        var counter = 0;
        while (true) {
            list = obj.List.slice(counter, maxRowCount + counter);
            if (list.length == 0) {
                break;
            }
            counter += maxRowCount;
            div += '<table class="table table-borderless my-xl-5 text-center animated wow  zoomIn"><tbody>';
            div += setRow(list, 'Image', 'img', 'Title');
            div += setRow(list, 'Title', 'text');
            div += setRow(list, 'Description', 'text');
            div += "</tbody></table>";

        }

        $("#secHome").append(div);
        //$.each(obj.List, function (i) {
        //    var text = '<div class="col-' + cols + ' border-right mb-5 mx-auto">';
        //    text += '<div class="row">';
        //    text += '<img src="' + obj.List[i].Image + '" class="rounded-circle mx-auto" alt="' + obj.List[i].Name+'"></div>';
        //    text += '<div class="row">';
        //    text += '<span class="mx-auto text-center mt-3">';
        //    text += obj.List[i].Name;
        //    text += '</span></div>';
        //    text += '<div class="row">';
        //    text += '<span class="mx-auto text-center mt-3">';
        //    text += obj.List[i].Description;
        //    text += '</span>';
        //    text += '</div></div>'
        //    div += text;
        //    if (i + 1 == count) {
        //        div + "</tbody></table></div>";
        //        $("#secHome").append(div);
        //    }
        //});       
    }
    function setRow(list, columnName, columnType, altName) {
        var text = "<tr>";
        var border = "border-right";
        for (var i = 0; i < list.length; i++) {
            if (i == list.length - 1) {
                // last td shouldnot have border
                border = "";
            }
            text += "<td class='" + border + " animated fadeInUp wow'>"
            if (columnType == 'img') {
                text += '<img src="' + list[i][columnName] + '" class="rounded-circle mx-auto animated fadeInDown wow" alt="' + list[i][altName] + '"></td>'
            }
            else {
                text += '<span class="homeText">' + list[i][columnName] + '</span>'
            }

        }
        text += "</tr>";
        return text;
    }
})(jQuery);