window.onload = function () {
    window.onresize = function () {
        $(window).width() < 1200 ? init_show() : bg();
    }
    $(window).width() < 1200 ? init_show() : bg();
    $(".masking-out").height($(".masking-out").parent().height());
    $(".masking-out").width($(".masking-out").parent().width());
    hrefs();
}

function hrefs() {
    let href = window.location.href;
    $("a[cacode-href='cacode']").each(function () {
        if (typeof ($(this).attr("cacode-href-end")) !== "undefined") {
            if ($(this).attr("cacode-href-end") === 'false') {
                href = href.substr(0, href.lastIndexOf('/'));
            }
        }
        $(this).attr("href", href + $(this).attr('href'));
    })
}

function bg() {
    $('.bg-sm').each(function () {
        $(this).css('width', $(this).attr('bg-width'));
    })
}

function sm() {
    $('.bg-sm').each(function () {
        $(this).css('width', $(this).attr('sm-width'));
    })
}

function init_show() {
    sm();
    $('#section').css('width', '100%');
    $(".bagatelle").css('display', 'none');
}

// 下拉框
function equal_element_innerText(element, target) {
    $(target).html(element.innerText + "<span class=\"caret\"></span>");
}

$(".display-init-hide").hover(function () {
    $(this).show();
}, function () {
    $(this).hide();
});

setInterval(() => {
    if ($(window).scrollTop() > 400) {
        $("#select").css("position", "fixed");
        $("#select").css("top", "0px");
        $("#btn_top").show();
    } else {
        $("#select").css("position", "");
        $("#select").css("top", "");
        $("#select").css("width", "");
        $("#btn_top").hide();
    }
}, 20);


$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('#btn_top').fadeIn();
        } else {
            $('#btn_top').fadeOut();
        }
    });
    init()
});

$('#btn_top').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});

function init() {
    var padding = $('.padding');
    for (var i = 0; i < padding.length; i++) {
        var padsize = $(padding[i]).attr("pad-size");
        var pad = $(padding[i]).attr("pad");
        var pada = pad.split(" ");
        for (var j = 0; j < pada.length; j++) {
            $(padding[i]).css("padding-" + pada[j], padsize);
        }
        if (pad == "") {
            $(padding[i]).css("padding", padsize);
        }
    }

    var margin = $('.margin');
    for (var i = 0; i < margin.length; i++) {
        var marsize = $(margin[i]).attr("margin-size");
        var mar = $(margin[i]).attr("margin");
        var mara = mar.split(" ");
        for (var j = 0; j < mara.length; j++) {
            $(margin[i]).css("margin-" + mara[j], marsize);
        }
        if (mar == "") {
            $(margin[i]).css("margin", marsize);
        }
    }

    var color = $('.color');
    for (var i = 0; i < color.length; i++) {
        var colora = $(color[i]).attr("color");
        $(color[i]).css("color", colora);
    }

    var backColor = $('.back-color');
    for (var i = 0; i < backColor.length; i++) {
        var color = $(backColor[i]).attr("backcolor");
        $(backColor[i]).css("background-color", color);
    }

    var font = $('.font');
    for (var i = 0; i < font.length; i++) {
        var fonta = $(font[i]).attr("font");
        $(font[i]).css("font-size", fonta);
    }


    var width = $('.width');
    for (var i = 0; i < width.length; i++) {
        var widtha = $(width[i]).attr("width");
        $(width[i]).css("width", widtha);
    }

    var height = $('.height');
    for (var i = 0; i < height.length; i++) {
        var heighta = $(height[i]).attr("height");
        $(height[i]).css("height", heighta);
    }

    var border = $('.border');
    for (var i = 0; i < border.length; i++) {
        var bordera = $(border[i]).attr("border-size");
        var borderb = $(border[i]).attr("border");
        var borderbc = borderb.split(" ");
        for (var j = 0; j < borderbc.length; j++) {
            $(border[i]).css("border-" + borderbc[j], bordera);
        }
        if (borderb == "") {
            $(border[i]).css("border", bordera);
        }
    }

    var stylea = $(".style");
    for (var i = 0; i < stylea.length; i++) {
        var styles = $(stylea[i]).attr("sty");
        var stytext = $(stylea[i]).attr("stytext");
        $(stylea[i]).css(styles, stytext);
    }

    var float = $('.float');
    for (var i = 0; i < float.length; i++) {
        var floata = $(float[i]).attr("float");
        $(float[i]).css('float', floata);
    }

    var position = $('.position');
    for (var i = 0; i < position.length; i++) {
        var po = $(position[i]).attr("position");
        var top = $(position[i]).attr("top");
        var right = $(position[i]).attr("right");
        var bottom = $(position[i]).attr("bottom");
        var left = $(position[i]).attr("left");
        $(position[i]).css('position', po);

        if (top !== undefined) {
            $(position[i]).css('top', top);
        }
        if (right !== undefined) {
            $(position[i]).css('right', right);
        }
        if (bottom !== undefined) {
            $(position[i]).css('bottom', bottom);
        }
        if (left !== undefined) {
            $(position[i]).css('left', left);
        }
    }
}

/**
 * 获取Cookie
 * @param {*} cname cookie name
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

/**
 * 时间戳转时间
 * @param {*} date
 */
function timetrans(date) {
    var date = new Date(date); //如果date为13位不需要乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
}

function timeFn(d1) { //di作为一个变量传进来
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    var dateBegin = new Date(d1.replace(/-/g, "/")); //将-转化为/，使用new Date
    var dateEnd = new Date(); //获取当前时间
    var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
    var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);

    if (dayDiff > 365) {
        dayDiff / 365;
    }


    return dayDiff + "天" + hours + "小时"
    // console.log(" 相差 " + dayDiff + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
    // console.log(dateDiff + "时间差的毫秒数", dayDiff + "计算出相差天数", leave1 + "计算天数后剩余的毫秒数", hours + "计算出小时数", minutes + "计算相差分钟数", seconds + "计算相差秒数");
}

function dateToString(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second = date.getSeconds();
    second = minute < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};