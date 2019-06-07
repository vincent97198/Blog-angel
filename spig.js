
//å³é”®èœå•
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        	showMessage("ç§˜å¯†é€šé“:<br />    <img src=\"http://pic.sc.chinaz.com/Files/pic/Listfaces/3646/02.gif\"/><br/><a href=\"http://cnblogs.com/flipped\" title=\"æ°´éƒ\">æ°´éƒ</a>  ",10000);
		}
	});
	$("#spig").bind("contextmenu", function(e) {
	    return false;
	});
});

//é¼ æ ‡åœ¨æ¶ˆæ¯ä¸Šæ—¶
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//é¼ æ ‡åœ¨ä¸Šæ–¹æ—¶
jQuery(document).ready(function ($) {
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["æˆ‘éšèº«äº†ï¼Œä½ çœ‹ä¸åˆ°æˆ‘", "æˆ‘ä¼šéšèº«å“¦ï¼å˜¿å˜¿ï¼", "åˆ«åŠ¨æ‰‹åŠ¨è„šçš„ï¼ŒæŠŠæ‰‹æ‹¿å¼€ï¼", "æŠŠæ‰‹æ‹¿å¼€æˆ‘æ‰å‡ºæ¥ï¼"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});


//å¼€å§‹
jQuery(document).ready(function ($) {
	var url = window.location.href;
	var title = document.title;
    if (url.indexOf('/p/') < 0) { //å¦‚æžœæ˜¯ä¸»é¡µ
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' ä½ æ˜¯å¤œçŒ«å­å‘€ï¼Ÿè¿˜ä¸ç¡è§‰ï¼Œæ˜Žå¤©èµ·çš„æ¥ä¹ˆä½ ï¼Ÿ', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' æ—©ä¸Šå¥½ï¼Œæ—©èµ·çš„é¸Ÿå„¿æœ‰è™«åƒå™¢ï¼æ—©èµ·çš„è™«å„¿è¢«é¸Ÿåƒï¼Œä½ æ˜¯é¸Ÿå„¿è¿˜æ˜¯è™«å„¿ï¼Ÿå˜»å˜»ï¼', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' ä¸­åˆäº†ï¼Œåƒé¥­äº†ä¹ˆï¼Ÿä¸è¦é¥¿ç€äº†ï¼Œé¥¿æ­»äº†è°æ¥æŒºæˆ‘å‘€ï¼', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' ä¸­åˆçš„æ—¶å…‰çœŸéš¾ç†¬ï¼è¿˜å¥½æœ‰ä½ åœ¨ï¼', 6000);
        } else {
            showMessage(visitor + ' å¿«æ¥é€—æˆ‘çŽ©å§ï¼', 6000);
        }
    }
    else {
        showMessage('æ¬¢è¿Ž' + visitor + 'æ¥åˆ°ã€Š' + title + 'ã€‹', 6000);
    }
    $(".spig").animate({
        top: $(".spig").offset().top + 300,
        left: document.body.offsetWidth - 185
    },
    {
        queue: false,
        duration: 1000
    });
//    window.setTimeout(function () {
//        showMessage("ä¸‹é¢æ’­æŠ¥æ˜Žæ—¥å¤©æ°”<iframe name=\"xidie\" src=\"http://api.lwl12.com/hitokoto/?encode=js\"frameborder=\â€œ0\â€ scrolling=\"no\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
//    },
//  4000);
});

//é¼ æ ‡åœ¨æŸäº›å…ƒç´ ä¸Šæ–¹æ—¶
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//æ ‡é¢˜è¢«ç‚¹å‡»æ—¶
        showMessage('èŒèŒåœ°åŠ è½½ã€Š<span style="color:#0099cc;">' + $(this).text() + '</span>ã€‹ä¸­ï¼Œè¯·ç¨å€™');
    });
    $('h2 a').mouseover(function () {
        showMessage('è¦çœ‹çœ‹ã€Š<span style="color:#0099cc;">' + $(this).text() + '</span>ã€‹è¿™ç¯‡éšç¬”ä¹ˆï¼Ÿ');
    });
    $('li a').mouseover(function () {
        showMessage('åŽ» <span style="color:#0099cc;">' + $(this).text() + '</span> é€›é€›');
    });
    $('.tbCommentBody').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> å‘è¯„è®ºæ å‡ºå‘å§ï¼');
    });
    $('#btn_comment_submit').mouseover(function () {
        showMessage('ç¡®è®¤æäº¤äº†ä¹ˆï¼Ÿ');
    });
    $('#q').focus(function () {
        showMessage('è¾“å…¥ä½ æƒ³æœç´¢çš„å…³é”®è¯å†æŒ‰Enter(å›žè½¦)é”®å°±å¯ä»¥æœç´¢å•¦!');
    });
});


//æ— èŠè®²ç‚¹ä»€ä¹ˆ
jQuery(document).ready(function ($) {

    window.setInterval(function () {
       // msgs = [ "é™ªæˆ‘èŠå¤©å§ï¼", "å¥½æ— èŠå“¦ï¼Œä½ éƒ½ä¸é™ªæˆ‘çŽ©ï¼", "â€¦@â€¦â€¦!â€¦â€¦â€¦", "^%#&*!@*(&#)(!)(", "æˆ‘å¯çˆ±å§ï¼å˜»å˜»!~^_^!~~","è°æ·«è¡å‘€?~è°æ·«è¡?ï¼Œä½ æ·«è¡å‘€!~~ä½ æ·«è¡ï¼~~","ä»Žå‰æœ‰åº§å±±ï¼Œå±±ä¸Šæœ‰åº§åº™ï¼Œåº™é‡Œæœ‰ä¸ªè€å’Œå°šç»™å°å’Œå°šè®²æ•…äº‹ï¼Œè®²ï¼šâ€œä»Žå‰æœ‰åº§â€¦â€¦â€"];
       // msgs = ["<iframe src=\"http://api.lwl12.com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\"this.height=50\"  width=\"130px\" allowtransparency=\"true\" ></iframe>"];
        //if(weather.state)msgs.push(weather.c[0],weather.c[2]);
        //msgs = [weather.c[0],weather.c[2],"<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
        msgs = [$("#hitokoto").text()];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 8000);
    }, 15000);
});
/*
//æ— èŠåŠ¨åŠ¨
jQuery(document).ready(function ($) {
    window.setInterval(function () {
       // msgs = ["æ’­æŠ¥æ˜Žæ—¥å¤©æ°”<iframe name=\"xidie\" src=\"http://m.weather.com.cn/data/101010100.html\"frameborder=\â€œ0\â€ scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "ä¹¾å¤å¤§æŒªç§»ï¼", "æˆ‘é£˜è¿‡æ¥äº†ï¼~", "æˆ‘é£˜è¿‡åŽ»äº†", "æˆ‘å¾—æ„åœ°é£˜ï¼~é£˜ï¼~"];
       // msgs = ["<iframe src=\"http://api.lwl12.com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\"this.height=50\"  width=\"140px\" allowtransparency=\"true\" ></iframe>"];
        // if(weather.state)msgs.push(weather.c[0],weather.c[2]);
         msgs = [weather.c[0],weather.c[2],"<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
        },
            {
                duration: 2000,
                complete: showMessage(msgs[i])
            });
    }, 45000);
});
*/
//è¯„è®ºèµ„æ–™
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("ç•™ä¸‹ä½ çš„å°Šå§“å¤§åï¼");
        $(".spig").animate({
            top: $("#author").offset().top - 70,
            left: $("#author").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#email").click(function () {
        showMessage("ç•™ä¸‹ä½ çš„é‚®ç®±ï¼Œä¸ç„¶å°±æ˜¯æ— å¤´åƒäººå£«äº†ï¼");
        $(".spig").animate({
            top: $("#email").offset().top - 70,
            left: $("#email").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#url").click(function () {

        showMessage("å¿«å¿«å‘Šè¯‰æˆ‘ä½ çš„å®¶åœ¨å“ªé‡Œï¼Œå¥½è®©æˆ‘åŽ»å‚è§‚å‚è§‚ï¼");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#comment").click(function () {
        showMessage("è®¤çœŸå¡«å†™å“¦ï¼ä¸ç„¶ä¼šè¢«è®¤ä½œåžƒåœ¾è¯„è®ºçš„ï¼æˆ‘çš„ä¹–ä¹–~");
        $(".spig").animate({
            top: $("#comment").offset().top - 70,
            left: $("#comment").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
});

var spig_top = 50;
//æ»šåŠ¨æ¡ç§»åŠ¨
jQuery(document).ready(function ($) {
    var f = $(".spig").offset().top;
    $(window).scroll(function () {
        $(".spig").animate({
            top: $(window).scrollTop() + f +300
        },
        {
            queue: false,
            duration: 1000
        });
    });
});

//é¼ æ ‡ç‚¹å‡»æ—¶
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["ä½ æœ‰å®Œæ²¡å®Œå‘€ï¼Ÿ", "ä½ å·²ç»æ‘¸æˆ‘" + stat_click + "æ¬¡äº†", "éžç¤¼å‘€ï¼æ•‘å‘½ï¼OHï¼ŒMy ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["ç­‹æ–—äº‘ï¼~æˆ‘é£žï¼", "æˆ‘è·‘å‘€è·‘å‘€è·‘ï¼~~", "åˆ«æ‘¸æˆ‘ï¼Œå¤§ç”·äººï¼Œæœ‰ä»€ä¹ˆå¥½æ‘¸çš„ï¼", "æƒ¹ä¸èµ·ä½ ï¼Œæˆ‘è¿˜èº²ä¸èµ·ä½ ä¹ˆï¼Ÿ", "ä¸è¦æ‘¸æˆ‘äº†ï¼Œæˆ‘ä¼šå‘Šè¯‰è€å©†æ¥æ‰“ä½ çš„ï¼", "å¹²å˜›åŠ¨æˆ‘å‘€ï¼å°å¿ƒæˆ‘å’¬ä½ ï¼"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
            },
            {
                duration: 500,
                complete: showMessage(msgs[i])
            });
        } else {
            ismove = false;
        }
    });
});

//æ˜¾ç¤ºæ¶ˆæ¯å‡½æ•° 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//æ‹–åŠ¨
var _move = false;
var ismove = false; //ç§»åŠ¨æ ‡è®°
var _x, _y; //é¼ æ ‡ç¦»æŽ§ä»¶å·¦ä¸Šè§’çš„ç›¸å¯¹ä½ç½®
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('#spig').width();
            var dy = $(document).height() - $('#spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
                $("#spig").css({
                    top: y,
                    left: x
                }); //æŽ§ä»¶æ–°ä½ç½®
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});
