jQuery.noConflict();
//右鍵菜單
//jQuery(document).ready(function ($) {
//    $("#spig").mousedown(function (e) {
//        if(e.which==3){
//        showMessage("秘密通道:<br />    <img src=\"http://pic.sc.chinaz.com/Files/pic/Listfaces/3646/02.gif\"/><br/><a href=\"http://cnblogs.com/zwfymqz\" title=\"自為風月馬前卒\">自為風月馬前卒</a>  ",10000);
//}
//});
//$("#spig").bind("contextmenu", function(e) {
//    return false;
//});
//});

//鼠標在消息上時
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠標在上方時
jQuery(document).ready(function ($) {
    //$(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = "把手拿開我才出來！";
        showMessage(msgs);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});


//開始
jQuery(document).ready(function ($) {
    if (isindex) { //如果是主頁
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' 你是夜貓子呀？還不睡覺，明天起的來麽你？', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' 早上好，早起的鳥兒有蟲吃噢！早起的蟲兒被鳥吃，你是鳥兒還是蟲兒？嘻嘻！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' 中午了，吃飯了麽？不要餓著了，餓死了誰來挺我呀！', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' 中午的時光真難熬！還好有你在！', 6000);
        } else {
            showMessage(visitor + ' 快來逗我玩吧！', 6000);
        }
    }
    else {
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
});

//鼠標在某些元素上方時
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//標題被點擊時
        showMessage('萌萌地加載《<span style="color:#0099cc;">' + $(this).text() + '</span>》中，請稍候');
    });
    $('h2 a').mouseover(function () {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》這篇隨筆麽？');
    });
    $('#prev-page').mouseover(function(){
        showMessage('要翻到上一頁嗎?');
    });
    $('#next-page').mouseover(function(){
        showMessage('要翻到下一頁嗎?');
    });
    $('#index-links li a').mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });
    $('.tbCommentBodys').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向評論欄出發吧！');
    });
    $('#submit').mouseover(function () {
        showMessage('確認提交了麽？');
    });
    $('#s').focus(function () {
        showMessage('輸入你想搜索的關鍵詞再按Enter(回車)鍵就可以搜索啦!');
    });
    $('#go-prev').mouseover(function () {
        showMessage('點它可以後退哦！');
    });
    $('#go-next').mouseover(function () {
        showMessage('點它可以前進哦！');
    });
    $('#refresh').mouseover(function () {
        showMessage('點它可以重新載入此頁哦！');
    });
    $('#go-home').mouseover(function () {
        showMessage('點它就可以回到首頁啦！');
    });
    $('#addfav').mouseover(function () {
        showMessage('點它可以把此頁加入書簽哦！');
    });
    $('#nav-two a').mouseover(function () {
        showMessage('噓，從這裏可以進入控制面板的哦！');
    });
    $('.post-category a').mouseover(function () {
        showMessage('點擊查看此分類下得所有文章');
    });
    $('.post-heat a').mouseover(function () {
        showMessage('點它可以直接跳到評論列表處.');
    });
    $('#tho-shareto span a').mouseover(function () {
        showMessage('你知道嗎?點它可以分享本文到'+$(this).attr('title'));
    });
    $('#switch-to-wap').mouseover(function(){
        showMessage('點擊可以切換到手機版博客版面');
    });
});


//無聊講點什麽
jQuery(document).ready(function ($) {

    window.setInterval(function () {
        msgs = [ "陪我聊天吧！", "好無聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可愛吧！嘻嘻!~^_^!~~","誰淫蕩呀?~誰淫蕩?，你淫蕩呀!~~你淫蕩！~~","從前有座山，山上有座廟，廟裏有個老和尚給小和尚講故事，講：“從前有座……”"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 8000);
    }, 15000);
});
//評論資料
jQuery(document).ready(function ($) {
    $("#author").click(function () {
        showMessage("留下你的尊姓大名！");
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
        showMessage("留下你的郵箱，不然就是無頭像人士了！");
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

        showMessage("快快告訴我你的家在哪裏，好讓我去參觀參觀！");
        $(".spig").animate({
            top: $("#url").offset().top - 70,
            left: $("#url").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
    $("#tbCommentBody").click(function () {
        showMessage("認真填寫哦！不然會被認作垃圾評論的！我的乖乖~");
        $(".spig").animate({
            top: $("#tbCommentBody").offset().top - 70,
            left: $("#tbCommentBody").offset().left - 170
        },
        {
            queue: false,
            duration: 1000
        });
    });
});

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
    $(".mumu").click(function () {
        
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完沒完呀？", "你已經摸我" + stat_click + "次了", "非禮呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                showMessage(msgs[i]);
            } else {
                msgs = ["筋鬥雲！~我飛！", "我跑呀跑呀跑！~~", "別摸我，大男人，有什麽好摸的！", "惹不起你，我還躲不起你麽？", "不要摸我了，我會告訴老婆來打你的！", "幹嘛動我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length);
                showMessage(msgs[i]);
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
                }); //控件新位置
            ismove = true;
            }
        }
    }).mouseup(function () {
        _move = false;
    });
});
