function sAnim() {
    var e = $(window).height(),
        a = $(window).width(),
        s = $("#wraper").offset().top;
    s > 19 && $("#wraper").css({
        "margin-top": "-20px"
    }), $(".mMenu", "#topHeader").off("click.click").on("click.click", function() {
        $("#menuM").toggleClass("act");
        if($("#menuM").hasClass("act")){
            $("a.mMenu").text('CLOSE')
        }else{
            $("a.mMenu").text("MENU")
        }
    }), $("#menuM ul li").on("click.click", function() {
        $("#menuM").removeClass("act"), $("a.mMenu").text('MENU')
    })
}

function about() {
    "about" == presentPageforcube || (document.getElementById("aboutus").className += " ss-pg-ontop ss-pg-curr ss-pg-rotate-UnfoldRight", document.getElementById("contact").className += " ss-pg-moveToLeftFade", document.getElementById("team").className += " ss-pg-moveToLeftFade", document.getElementById("landingpage").className += " ss-pg-moveToLeftFade", presentPageforcube = "about", setTimeout(aboutalertFunc, 1e3))
}

function aboutalertFunc() {
    document.getElementById("aboutus").className = "ss-pg ss-pg-curr", document.getElementById("contact").className = "ss-pg", document.getElementById("landingpage").className = "ss-pg", document.getElementById("team").className = "ss-pg"
}

function contact() {
    "contact" == presentPageforcube || (document.getElementById("contact").className += " ss-pg-ontop ss-pg-curr ss-pg-rotate-UnfoldRight", document.getElementById("aboutus").className += " ss-pg-moveToLeftFade", document.getElementById("team").className += " ss-pg-moveToLeftFade", document.getElementById("landingpage").className += " ss-pg-moveToLeftFade", presentPageforcube = "contact", setTimeout(contactalertFunc, 1e3))
}

function contactalertFunc() {
    document.getElementById("contact").className = "ss-pg ss-pg-curr", document.getElementById("aboutus").className = "ss-pg", document.getElementById("landingpage").className = "ss-pg", document.getElementById("team").className = "ss-pg"
}

function landingpage() {
    "landingpage" == presentPageforcube || (document.getElementById("landingpage").className += " ss-pg-ontop ss-pg-curr ss-pg-rotate-UnfoldRight", document.getElementById("contact").className += " ss-pg-moveToLeftFade", document.getElementById("aboutus").className += " ss-pg-moveToLeftFade", document.getElementById("team").className += " ss-pg-moveToLeftFade", presentPageforcube = "landingpage", setTimeout(landingpagealertFunc, 1e3))
}

function landingpagealertFunc() {
    document.getElementById("landingpage").className = "ss-pg ss-pg-curr", document.getElementById("contact").className = "ss-pg", document.getElementById("aboutus").className = "ss-pg", document.getElementById("team").className = "ss-pg"
}

function team() {
    "team" == presentPageforcube || (document.getElementById("team").className += " ss-pg-ontop ss-pg-curr ss-pg-rotate-UnfoldRight", document.getElementById("aboutus").className += " ss-pg-moveToLeftFade", document.getElementById("contact").className += " ss-pg-moveToLeftFade", document.getElementById("landingpage").className += " ss-pg-moveToLeftFade", presentPageforcube = "team", setTimeout(teamalertFunc, 1e3))
}

function teamalertFunc() {
    document.getElementById("team").className = "ss-pg ss-pg-curr", document.getElementById("aboutus").className = "ss-pg", document.getElementById("contact").className = "ss-pg", document.getElementById("landingpage").className = "ss-pg"
}

var presentPageforcube = "about";

$(document).ready(function() {
    sAnim()
});

var lastWidth = $(window).width();

$(window).on("resize", function() {
    $(window).width() != lastWidth && (sAnim(), lastWidth = $(window).width())
});