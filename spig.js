
//右鍵菜單
/*
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        	showMessage("秘密通道:<br />    <img src=\"http://pic.sc.chinaz.com/Files/pic/Listfaces/3646/02.gif\"/><br/><a href=\"http://cnblogs.com/flipped\" title=\"水郁\">水郁</a>  ",10000);
		}
	});
	$("#spig").bind("contextmenu", function(e) {
	    return false;
	});
});
*/
//鼠標在消息上時
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠標在上方時

jQuery(document).ready(function ($) {
    $(".mumu").mouseover(function () {
       //$(".mumu").fadeTo("300", 0.3);
       //msgs = ["我隱身了，你看不到我", "我會隱身哦！嘿嘿！", "別動手動腳的，把手拿開！", "把手拿開我才出來！"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
	/*
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
    */
});


//開始
jQuery(document).ready(function ($) {
	var url = window.location.href;
	var title = document.title;
        var now = (new Date()).getHours();
        if (now > 1 && now <= 4) {
            showMessage(visitor + ' 你是夜貓子呀？還不睡覺，明天起的來麽你？', 6000);
        } else if (now > 4 && now <= 7) {
            showMessage(visitor + ' 早上好，早起的鳥兒有蟲吃噢！早起的蟲兒被鳥吃，你是鳥兒還是蟲兒？嘻嘻！', 6000);
        } else if (now > 11 && now <= 13) {
            showMessage(visitor + ' 中午了，吃飯了麽？不要餓著了，餓死了誰來挺我呀！', 6000);
        } else if (now > 14 && now <= 17) {
            showMessage(visitor + ' 下午的時光真難熬', 6000);
        } else {
		showMessage('歡迎' + visitor + '來到《' + title + '》', 6000);
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
//        showMessage("下面播報明日天氣<iframe name=\"xidie\" src=\"http://api.lwl12.com/hitokoto/?encode=js\"frameborder=\“0\” scrolling=\"no\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
//    },
//  4000);
});

//無聊講點什麽
jQuery(document).ready(function ($) {

    window.setInterval(function () {
       msgs = [ "陪我聊天吧！", "好無聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可愛吧！嘻嘻!~^_^!~~","從前有座山，山上有座廟，廟裏有個老和尚給小和尚講故事，講：“從前有座……”"];
       // msgs = ["<iframe src=\"http://api.lwl12.com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\"this.height=50\"  width=\"130px\" allowtransparency=\"true\" ></iframe>"];
        //if(weather.state)msgs.push(weather.c[0],weather.c[2]);
        //msgs = [weather.c[0],weather.c[2],"<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
        //msgs = [$("#hitokoto").text()];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 8000);
    }, 15000);
});
/*
//無聊動動
jQuery(document).ready(function ($) {
    window.setInterval(function () {
       // msgs = ["播報明日天氣<iframe name=\"xidie\" src=\"http://m.weather.com.cn/data/101010100.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "乾坤大挪移！", "我飄過來了！~", "我飄過去了", "我得意地飄！~飄！~"];
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
//評論資料

var spig_top = 50;
//滾動條移動
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

//鼠標點擊時
jQuery(document).ready(function ($) {
    var stat_click = 0;
    s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
	   if (stat_click<20){
                msgs = [ "不要摸我了，小心我咬你！" ,"那裡不行>w<","再摸我就要報警了","你有完沒完呀？", "你已經摸我" + stat_click + "次了", "非禮呀！救命！"];
                var i = Math.floor(Math.random() * msgs.length);
                showMessage(msgs[i]);
            } else if(stat_click>=20){
		 while(1){
		  var x=Math.floor(Math.random() * s.length);
		  var y = Math.floor(Math.random() * s.length);
		  $(".spig").css({
             	    top: y,
		    left: x
                  });
		}    
	    }	    
	}
        
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

//顯示消息函數 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖動
var _move = false;
var ismove = false; //移動標記
var _x, _y; //鼠標離控件左上角的相對位置
jQuery(document).ready(function ($) {
    $(".spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($(".spig").css("left"));
        _y = e.pageY - parseInt($(".spig").css("top"));
	//showMessage("test");
     });
    $(document).mousemove(function (e) {
        if (_move) {
	//showMessage("test");
            var x = e.pageX - _x; 
            var y = e.pageY - _y;
            var wx = $(window).width() - $('.spig').width();
            var dy = $(document).height() - $('.spig').height();
            if(x >= 0 && x <= wx && y > 0 && y <= dy) {
		   // showMessage("CHECK");
                $(".spig").css({
                    top: y,
                    left: x
                }); //控件新位置
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});
