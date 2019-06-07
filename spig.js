

//右键菜单
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

//鼠标在消息上时
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠标在上方时
jQuery(document).ready(function ($) {
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "把手拿开我才出来！"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});


//开始
jQuery(document).ready(function ($) {
	var url = window.location.href;
	var title = document.title;
    if (url.indexOf('/p/') < 0) { //如果是主页
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(visitor + ' 中午的时光真难熬！还好有你在！', 6000);
        } else {
            showMessage(visitor + ' 快来逗我玩吧！', 6000);
        }
    }
    else {
        showMessage('欢迎' + visitor + '来到《' + title + '》', 6000);
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
//        showMessage("下面播报明日天气<iframe name=\"xidie\" src=\"http://api.lwl12.com/hitokoto/?encode=js\"frameborder=\“0\” scrolling=\"no\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
//    },
//  4000);
});

//鼠标在某些元素上方时
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//标题被点击时
        showMessage('萌萌地加载《<span style="color:#0099cc;">' + $(this).text() + '</span>》中，请稍候');
    });
    $('h2 a').mouseover(function () {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》这篇随笔么？');
    });
    $('li a').mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });
    $('.tbCommentBody').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向评论栏出发吧！');
    });
    $('#btn_comment_submit').mouseover(function () {
        showMessage('确认提交了么？');
    });
    $('#q').focus(function () {
        showMessage('输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!');
    });
});


//无聊讲点什么
jQuery(document).ready(function ($) {

    window.setInterval(function () {
       // msgs = [ "陪我聊天吧！", "好无聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可爱吧！嘻嘻!~^_^!~~","谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~","从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”"];
       // msgs = ["<iframe src=\"http://api.lwl12.com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\"this.height=50\"  width=\"130px\" allowtransparency=\"true\" ></iframe>"];
        //if(weather.state)msgs.push(weather.c[0],weather.c[2]);
        //msgs = [weather.c[0],weather.c[2],"<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
        msgs = [$("#hitokoto").text()];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 8000);
    }, 15000);
});
/*
//无聊动动
jQuery(document).ready(function ($) {
    window.setInterval(function () {
       // msgs = ["播报明日天气<iframe name=\"xidie\" src=\"http://m.weather.com.cn/data/101010100.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "乾坤大挪移！", "我飘过来了！~", "我飘过去了", "我得意地飘！~飘！~"];
       // msgs = ["<iframe src=\"http://api.lwl12.com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\"this.height=50\"  width=\"140px\" allowtransparency=\"true\" ></iframe>"];
        // if(weather.state)msgs.push(weather.c[0],weather.c[2]);
         msgs = [weather.c[0],weather.c[2],"<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" >
//Yòujiàn càidān
jQuery(document).Ready(function ($) {
    $("#spig").Mousedown(function (e) {
        if(e.Which==3){
        	showMessage("mìmì tōngdào:<Br/>    <img src=\"http://Pic.Sc.Chinaz.Com/Files/pic/Listfaces/3646/02.Gif\"/><br/><a href=\"http://Cnblogs.Com/flipped\" title=\"shuǐ yù\">shuǐ yù </a>  ",10000);
		}
	});
	$("#spig").Bind("contextmenu", function(e) {
	    return false;
	});
});

//shǔbiāo zài xiāoxī shàng shí
jQuery(document).Ready(function ($) {
    $("#message").Hover(function () {
       $("#message").FadeTo("100", 1);
     });
});


//shǔbiāo zài shàngfāng shí
jQuery(document).Ready(function ($) {
    $(".Mumu").Mouseover(function () {
       $(".Mumu").FadeTo("300", 0.3);
       Msgs = ["wǒ yǐnshēnle, nǐ kàn bù dào wǒ", "wǒ huì yǐnshēn ó! Hēihēi!", "Bié dòngshǒu dòng jiǎo de, bǎshǒu ná kāi!", "Bǎshǒu ná kāi wǒ cái chūlái!"];
       Var i = Math.Floor(Math.Random()* msgs.Length);
        showMessage(msgs[i]);
    });
    $(".Mumu").Mouseout(function () {
        $(".Mumu").FadeTo("300", 1)
    });
});


//kāishǐ
jQuery(document).Ready(function ($) {
	var url = window.Location.Href;
	var title = document.Title;
    if (url.IndexOf('/p/') < 0) { //rúguǒ shì zhǔyè
        var now = (new Date()).GetHours();
        if (now > 0&& now <= 6) {
            showMessage(visitor +' nǐ shì yèmāozi ya? Hái bù shuìjiào, míngtiān qǐ de lái me nǐ?', 6000);
        } Else if (now > 6&& now <= 11) {
            showMessage(visitor +' zǎoshang hǎo, zǎoqǐ de niǎo er yǒu chóng chī ō! Zǎoqǐ de chóng er bèi niǎo chī, nǐ shì niǎo er háishì chóng er? Xī xī!', 6000);
        } Else if (now > 11&& now <= 14) {
            showMessage(visitor +' zhōngwǔle, chīfànle me? Bùyào èzhele, è sǐle shéi lái tǐng wǒ ya!', 6000);
        } Else if (now > 14&& now <= 18) {
            showMessage(visitor +' zhōngwǔ de shíguāng zhēn nán'áo! Hái hǎo yǒu nǐ zài!', 6000);
        } Else {
            showMessage(visitor +' kuài lái dòu wǒ wán ba!', 6000);
        }
    }
    Else {
        showMessage('huānyíng' + visitor +'lái dào “' + title +'”', 6000);
    }
    $(".Spig").Animate({
        top: $(".Spig").Offset().Top + 300,
        left: Document.Body.OffsetWidth - 185
    },
    {
        queue: False,
        duration: 1000
    });
//    Window.SetTimeout(function () {
//        showMessage("xiàmiàn bōbào míngrì tiānqì <iframe name=\"xidie\" src=\"http://Api.Lwl12.Com/hitokoto/?Encode=js\"frameborder=\“0\” scrolling=\"no\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
//    },
//  4000);
});

//shǔbiāo zài mǒu xiē yuánsù shàngfāng shí
jQuery(document).Ready(function ($) {
    $('h2 a').Click(function () {//biāotí bèi diǎnjī shí
        showMessage('méng méng de jiāzài “<span style="color:#0099Cc;">' + $(this).Text() +'</span>” zhōng, qǐng shāo hòu');
    });
    $('h2 a').Mouseover(function () {
        showMessage('yào kàn kàn “<span style="color:#0099Cc;">' + $(this).Text() +'</span>” zhè piān suíbǐ me?');
    });
    $('Li a').Mouseover(function () {
        showMessage('qù <span style="color:#0099Cc;">' + $(this).Text() +'</span> guàng guàng');
    });
    $('.TbCommentBody').Mouseover(function () {
        showMessage('<span style="color:#0099Cc;">' + visitor +'</span> xiàng pínglùn lán chūfā ba!');
    });
    $('#Btn_comment_submit').Mouseover(function () {
        showMessage('quèrèn tíjiāole me?');
    });
    $('#Q').Focus(function () {
        showMessage('shūrù nǐ xiǎng sōusuǒ de guānjiàn cí zài àn Enter(huí chē) jiàn jiù kěyǐ sōusuǒ la!');
    });
});


//Wúliáo jiǎng diǎn shénme
jQuery(document).Ready(function ($) {

    window.SetInterval(function () {
       // msgs = [ "péi wǒ liáotiān ba!", "Hǎo wúliáo ó, nǐ dōu bù péi wǒ wán!", "…@……!………", "^%#&*!@*(&#)(!)(", "Wǒ kě'ài ba! Xī xī!~^_^!~~","Shéi yíndàng ya?~Shéi yíndàng?, Nǐ yíndàng ya!~~Nǐ yíndàng!~~","Cóngqián yǒu zuò shān, shānshàng yǒu zuò miào, miào li yǒu gè lǎo héshàng gěi xiǎo héshàng jiǎng gùshì, jiǎng:“Cóngqián yǒu zuò……”"];
       // msgs = ["<iframe src=\"http://Api.Lwl12.Com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\"this.Height=50\"  width=\"130px\" allowtransparency=\"true\" ></iframe>"];
        //if(weather.State)msgs.Push(weather.C[0],weather.C[2]);
        //msgs = [weather.C[0],weather.C[2],"<iframe src=\"http://Api.Myhloli.Com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://Api.Myhloli.Com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://Api.Myhloli.Com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
        msgs = [$("#hitokoto").Text()];
        var i = Math.Floor(Math.Random()* msgs.Length);
        showMessage(msgs[i], 8000);
    }, 15000);
});
/*
//wúliáo dòng dòng
jQuery(document).Ready(function ($) {
    window.SetInterval(function () {
       // msgs = ["bōbào míngrì tiānqì <iframe name=\"xidie\" src=\"http://M.Weather.Com.Cn/data/101010100.Html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "qiánkūn dà nuóyí!", "Wǒ piāo guòláile!~", "Wǒ piāo guòqùle", "wǒ déyì dì piāo!~Piāo!~"];
       // Msgs = ["<iframe src=\"http://Api.Lwl12.Com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\"this.Height=50\"  width=\"140px\" allowtransparency=\"true\" ></iframe>"];
        // if(weather.State)msgs.Push(weather.C[0],weather.C[2]);
         msgs = [weather.C[0],weather.C[2],"<iframe src=\"http://Api.Myhloli.Com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" >
顯示更多內容
5000/5000
字元限制：5000
//右鍵菜單
jQuery(document).ready(function ($) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        showMessage("秘密通道:<br /> <img src=\"http://pic.sc.chinaz.com/Files/pic/Listfaces/3646/02.gif\"/><br/><a href =\"http://cnblogs.com/flipped\" title=\"水鬱\">水鬱</a> ",10000);
}
});
$("#spig").bind("contextmenu", function(e) {
return false;
});
});

//鼠標在消息上時
jQuery(document).ready(function ($) {
    $("#message").hover(function () {
       $("#message").fadeTo("100", 1);
     });
});


//鼠標在上方時
jQuery(document).ready(function ($) {
    $(".mumu").mouseover(function () {
       $(".mumu").fadeTo("300", 0.3);
       msgs = ["我隱身了，你看不到我", "我會隱身哦！嘿嘿！", "別動手動腳的，把手拿開！", "把手拿開我才出來！"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    $(".mumu").mouseout(function () {
        $(".mumu").fadeTo("300", 1)
    });
});


//開始
jQuery(document).ready(function ($) {
var url = window.location.href;
var title = document.title;
    if (url.indexOf('/p/') < 0) { //如果是主頁
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(visitor + ' 你是夜貓子呀？還不睡覺，明天起的來麼你？', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(visitor + ' 早上好，早起的鳥兒有蟲吃噢！早起的蟲兒被鳥吃，你是鳥兒還是蟲兒？嘻嘻！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(visitor + ' 中午了，吃飯了麼？不要餓著了，餓死了誰來挺我呀！', 6000);
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
// window.setTimeout(function () {
// showMessage("下面播報明日天氣<iframe name=\"xidie\" src=\"http://api.lwl12.com/hitokoto/?encode=js\"frameborder=\“0\” scrolling=\ "no\" width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
// },
// 4000);
});

//鼠標在某些元素上方時
jQuery(document).ready(function ($) {
    $('h2 a').click(function () {//標題被點擊時
        showMessage('萌萌地加載《<span style="color:#0099cc;">' + $(this).text() + '</span>》中，請稍候');
    });
    $('h2 a').mouseover(function () {
        showMessage('要看看《<span style="color:#0099cc;">' + $(this).text() + '</span>》這篇隨筆麼？');
    });
    $('li a').mouseover(function () {
        showMessage('去 <span style="color:#0099cc;">' + $(this).text() + '</span> 逛逛');
    });
    $('.tbCommentBody').mouseover(function () {
        showMessage('<span style="color:#0099cc;">' + visitor + '</span> 向評論欄出發吧！');
    });
    $('#btn_comment_submit').mouseover(function () {
        showMessage('確認提交了麼？');
    });
    $('#q').focus(function () {
        showMessage('輸入你想搜索的關鍵詞再按Enter(回車)鍵就可以搜索啦!');
    });
});


//無聊講點什麼
jQuery(document).ready(function ($) {

    window.setInterval(function () {
       // msgs = [ "陪我聊天吧！", "好無聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&# )(!)(", "我可愛吧！嘻嘻!~^_^!~~","誰淫蕩呀?~誰淫蕩?，你淫蕩呀!~~你淫蕩！~~","從前有座山，山上有座廟，廟裡有個老和尚給小和尚講故事，講：“從前有座……”"];
       // msgs = ["<iframe src=\"http://api.lwl12.com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\" this.height=50\" width=\"130px\" allowtransparency=\"true\" ></iframe>"];
        //if(weather.state)msgs.push(weather.c[0],weather.c[2]);
        //msgs = [weather.c[0],weather.c[2],"<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\ "no\" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http: //api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency =\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id= \"external-frame\" height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
        msgs = [$("#hitokoto").text()];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 8000);
    }, 15000);
});
/*
//無聊動動
jQuery(document).ready(function ($) {
    window.setInterval(function () {
       // msgs = ["播報明日天氣<iframe name=\"xidie\" src=\"http://m.weather.com.cn/data/101010100.html\"frameborder=\“0\” scrolling= \"no\" height=\"15px\" width=\"130px\" allowtransparency=\"true\" ></iframe>", "乾坤大挪移！", "我飄過來了！~", "我飄過去了", "我得意地飄！~飄！~"];
       // msgs = ["<iframe src=\"http://api.lwl12.com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\" this.height=50\" width=\"140px\" allowtransparency=\"true\" ></iframe>"];
        // if(weather.state)msgs.push(weather.c[0],weather.c[2]);
         msgs = [weather.c[0],weather.c[2],"<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no \" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency=\"true\" >
//Yòujiàn càidān
jQuery(document).Ready(function ($) {
    $("#spig").Mousedown(function (e) {
        if(e.Which==3){
        showMessage("mìmì tōngdào:<Br/> <img src=\"http://Pic.Sc.Chinaz.Com/Files/pic/Listfaces/3646/02.Gif\"/><br/><a href =\"http://Cnblogs.Com/flipped\" title=\"shuǐ yù\">shuǐ yù </a>",10000);
}
});
$("#spig").Bind("contextmenu", function(e) {
return false;
});
});

//shǔbiāo zài xiāoxī shàng shí
jQuery(document).Ready(function ($) {
    $("#message").Hover(function () {
       $("#message").FadeTo("100", 1);
     });
});


//shǔbiāo zài shàngfāng shí
jQuery(document).Ready(function ($) {
    $(".Mumu").Mouseover(function () {
       $(".Mumu").FadeTo("300", 0.3);
       Msgs = ["wǒ yǐnshēnle, nǐ kàn bù dào wǒ", "wǒ huì yǐnshēn ó! Hēihēi!", "Bié dòngshǒu dòng jiǎo de, bǎshǒu ná kāi!", "Bǎshǒu ná kāi wǒ cái chūlái!"];
       Var i = Math.Floor(Math.Random()* msgs.Length);
        showMessage(msgs[i]);
    });
    $(".Mumu").Mouseout(function () {
        $(".Mumu").FadeTo("300", 1)
    });
});


//kāishǐ
jQuery(document).Ready(function ($) {
var url = window.Location.Href;
var title = document.Title;
    if (url.IndexOf('/p/') < 0) { //rúguǒ shì zhǔyè
        var now = (new Date()).GetHours();
        if (now > 0&& now <= 6) {
            showMessage(visitor +' nǐ shì yèmāozi ya? Hái bù shuìjiào, míngtiān qǐ de lái me nǐ?', 6000);
        } Else if (now > 6&& now <= 11) {
            showMessage(visitor +' zǎoshang hǎo, zǎoqǐ de niǎo er yǒu chóng chī ō! Zǎoqǐ de chóng er bèi niǎo chī, nǐ shì niǎo er háishì chóng er? Xī xī!', 6000);
        } Else if (now > 11&& now <= 14) {
            showMessage(visitor +' zhōngwǔle, chīfànle me? Bùyào èzhele, èsǐle shuí lái tǐng wǒ ya!', 6000);
        } Else if (now > 14&& now <= 18) {
            showMessage(visitor +' zhōngwǔ de shíguāng zhēn nán'áo! Hái hǎo yǒu nǐ zài!', 6000);
        } Else {
            showMessage(visitor +' kuài lái dòu wǒ wán ba!', 6000);
        }
    }
    Else {
        showMessage('huānyíng' + visitor +'lái dào “' + title +'”', 6000);
    }
    $(".Spig").Animate({
        top: $(".Spig").Offset().Top + 300,
        left: Document.Body.OffsetWidth - 185
    },
    {
        queue: False,
        duration: 1000
    });
// Window.SetTimeout(function () {
// showMessage("xiàmiàn bōbào míngrì tiānqì <iframe name=\"xidie\" src=\"http://Api.Lwl12.Com/hitokoto/?Encode=js\"frameborder=\“0\” scrolling=\ "no\" width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
// },
// 4000);
});

//shǔbiāo zài mǒu xiē yuánsù shàngfāng shí
jQuery(document).Ready(function ($) {
    $('h2 a').Click(function () {//biāotí bèi diǎnjī shí
        showMessage('méng méng de jiāzài “<span style="color:#0099Cc;">' + $(this).Text() +'</span>” zhōng, qǐng shāo hòu');
    });
    $('h2 a').Mouseover(function () {
        showMessage('yào kàn kàn “<span style="color:#0099Cc;">' + $(this).Text() +'</span>” zhè piān suíbǐ me?');
    });
    $('Li a').Mouseover(function () {
        showMessage('qù <span style="color:#0099Cc;">' + $(this).Text() +'</span> guàng guàng');
    });
    $('.TbCommentBody').Mouseover(function () {
        showMessage('<span style="color:#0099Cc;">' + visitor +'</span> xiàng pínglùn lán chūfā ba!');
    });
    $('#Btn_comment_submit').Mouseover(function () {
        showMessage('quèrèn tíjiāole me?');
    });
    $('#Q').Focus(function () {
        showMessage('shūrù nǐ xiǎng sōusuǒ de guānjiàn cí zài àn Enter(huí chē) jiàn jiù kěyǐ sōusuǒ la!');
    });
});


//Wúliáo jiǎng diǎn shénme
jQuery(document).Ready(function ($) {

    window.SetInterval(function () {
       // msgs = [ "péi wǒ liáotiān ba!", "Hǎo wúliáo ó, nǐ dōu bù péi wǒ wán!", "…@……!………", "^%#&*!@*(&# )(!)(", "Wǒ kě'ài ba! Xī xī!~^_^!~~","Shuí yíndàng ya?~Shuí yíndàng?, Nǐ yíndàng ya!~~Nǐ yíndàng!~~","Cóngqián yǒu zuò shān, shānshàng yǒu zuò miào, miào lǐ yǒu gè lǎo héshàng gěi xiǎo héshàng jiǎng gùshì, jiǎng:“Cóngqián yǒu zuò……”"];
       // msgs = ["<iframe src=\"http://Api.Lwl12.Com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\" this.Height=50\" width=\"130px\" allowtransparency=\"true\" ></iframe>"];
        //if(weather.State)msgs.Push(weather.C[0],weather.C[2]);
        //msgs = [weather.C[0],weather.C[2],"<iframe src=\"http://Api.Myhloli.Com/hitokoto/\" frameborder=\"0\" scrolling=\ "no\" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http: //Api.Myhloli.Com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency =\"true\" ></iframe>","<iframe src=\"http://Api.Myhloli.Com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
        msgs = [$("#hitokoto").Text()];
        var i = Math.Floor(Math.Random()* msgs.Length);
        showMessage(msgs[i], 8000);
    }, 15000);
});
/*
//wúliáo dòng dòng
jQuery(document).Ready(function ($) {
    window.SetInterval(function () {
       // msgs = ["bōbào míngrì tiānqì <iframe name=\"xidie\" src=\"http://M.Weather.Com.Cn/data/101010100.Html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\" width=\"130px\" allowtransparency=\"true\" ></iframe>", "qiánkūn dà nuóyí!", "Wǒ piāo guòláile!~", "Wǒ piāo guòqùle", "wǒ déyì dì piāo!~Piāo!~"];
       // Msgs = ["<iframe src=\"http://Api.Lwl12.Com/hitokoto\"frameborder=\"0\" scrolling=\"no\" id=\"test\" onload=\" this.Height=50\" width=\"140px\" allowtransparency=\"true\" ></iframe>"];
        // if(weather.State)msgs.Push(weather.C[0],weather.C[2]);
         msgs = [weather.C[0],weather.C[2],"<iframe src=\"http://Api.Myhloli.Com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency=\"true\" >

</iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\"  height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
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
//评论资料
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
        showMessage("留下你的邮箱，不然就是无头像人士了！");
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

        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
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
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
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
//滚动条移动
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

//鼠标点击时
jQuery(document).ready(function ($) {
    var stat_click = 0;
    $(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，大男人，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
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

//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").hide().stop();
    jQuery("#message").html(a);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
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

原文語言： 英文
4781/5000
</iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://api.myhloli.com/hitokoto/\" frameborder =\"0\" scrolling=\"no\" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"] ;
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top: document.body.offsetheight/2*(1+s[i1])
        },
            {
                duration: 2000,
                complete: showMessage(msgs[i])
            });
    }, 45000);
});
*/
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

        showMessage("快快告訴我你的家在哪裡，好讓我去參觀參觀！");
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
        showMessage("認真填寫哦！不然會被認作垃圾評論的！我的乖乖~");
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
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完沒完呀？", "你已經摸我" + stat_click + "次了", "非禮呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["筋斗雲！~我飛！", "我跑呀跑呀跑！~~", "別摸我，大男人，有什麼好摸的！", "惹不起你，我還躲不起你麼？", "不要摸我了，我會告訴老婆來打你的！", "幹嘛動我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            $(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top: document.body.offsetheight/2*(1+s[i1])
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
</Iframe>","<iframe src=\"http://Api.Myhloli.Com/hitokoto/\" frameborder=\"0\" scrolling=\"no\" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>","<iframe src=\"http://Api.Myhloli.Com/hitokoto/\" frameborder =\"0\" scrolling=\"no\" id=\"external-frame\" height=\"70px\" width=\"150px\" allowtransparency=\"true\" ></iframe>"];
        var i = Math.Floor(Math.Random()* msgs.Length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        Var i1 = Math.Floor(Math.Random()* s.Length);
        var i2 = Math.Floor(Math.Random()* s.Length);
            $(".Spig").Animate({
            left: Document.Body.OffsetWidth/2*(1+s[i1]),
            top: Document.Body.Offsetheight/2*(1+s[i1])
        },
            {
                duration: 2000,
                Complete: ShowMessage(msgs[i])
            });
    }, 45000);
});
*/
//pínglùn zīliào
jQuery(document).Ready(function ($) {
    $("#author").Click(function () {
        showMessage("liú xià nǐ de zūn xìng dàmíng!");
        $(".Spig").Animate({
            top: $("#Author").Offset().Top - 70,
            left: $("#Author").Offset().Left - 170
        },
        {
            queue: False,
            duration: 1000
        });
    });
    $("#Email").Click(function () {
        showMessage("liú xià nǐ de yóuxiāng, bùrán jiùshì wú tóuxiàng rénshìle!");
        $(".Spig").Animate({
            top: $("#Email").Offset().Top - 70,
            left: $("#Email").Offset().Left - 170
        },
        {
            queue: False,
            duration: 1000
        });
    });
    $("#Url").Click(function () {

        showMessage("kuài kuài gàosù wǒ nǐ de jiā zài nǎlǐ, hǎo ràng wǒ qù cānguān cānguān!");
        $(".Spig").Animate({
            top: $("#Url").Offset().Top - 70,
            left: $("#Url").Offset().Left - 170
        },
        {
            queue: False,
            duration: 1000
        });
    });
    $("#Comment").Click(function () {
        showMessage("rènzhēn tiánxiě ó! Bùrán huì bèi rèn zuò lèsè pínglùn de! Wǒ de guāiguāi ~");
        $(".Spig").Animate({
            top: $("#Comment").Offset().Top - 70,
            left: $("#Comment").Offset().Left - 170
        },
        {
            queue: False,
            duration: 1000
        });
    });
});

Var spig_top = 50;
//gǔndòng tiáo yídòng
jQuery(document).Ready(function ($) {
    var f = $(".Spig").Offset().Top;
    $(window).Scroll(function () {
        $(".Spig").Animate({
            top: $(Window).ScrollTop() + f +300
        },
        {
            queue: False,
            duration: 1000
        });
    });
});

//Shǔbiāo diǎnjī shí
jQuery(document).Ready(function ($) {
    var stat_click = 0;
    $(".Mumu").Click(function () {
        if (!Ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["nǐ yǒu wán méiwán ya?", "Nǐ yǐjīng mō wǒ" + stat_click +"cìle", "fēilǐ ya! Jiùmìng!OH,My ladygaga"];
                var i = Math.Floor(Math.Random()* msgs.Length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["jīndǒu yún!~Wǒ fēi!", "Wǒ pǎo ya pǎo ya pǎo!~~", "Bié mō wǒ, dà nánrén, yǒu shé me hǎo mō de!", "Rě bù qǐ nǐ, wǒ hái duǒ bù qǐ nǐ me?", "Bùyào mō wǒle, wǒ huì gàosù lǎopó lái dǎ nǐ de!", "Gàn ma dòng wǒ ya! Xiǎoxīn wǒ yǎo nǐ!"];
                Var i = Math.Floor(Math.Random()* msgs.Length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        Var i1 = Math.Floor(Math.Random()* s.Length);
        var i2 = Math.Floor(Math.Random()* s.Length);
            $(".Spig").Animate({
            left: Document.Body.OffsetWidth/2*(1+s[i1]),
            top: Document.Body.Offsetheight/2*(1+s[i1])
            },
            {
                duration: 500,
                Complete: ShowMessage(msgs[i])
            });
        } else {
            ismove = false;
        }
    });
});

//xiǎnshì xiāoxī hánshù
function showMessage(a, b) {
    if (b == null) b = 10000;
    jQuery("#message").Hide().Stop();
    jQuery("#message").Html(a);
    jQuery("#message").FadeIn();
    jQuery("#message").FadeTo("1", 1);
    jQuery("#message").FadeOut(b);
};

//tuō dòng
var _move = false;
var ismove = false; //yídòng biāojì
var _x, _y; //shǔbiāo lí kòngjiàn zuǒshàng jiǎo de xiāngduì wèizhì
jQuery(document).Ready(function ($) {
    $("#spig").Mousedown(function (e) {
        _move = true;
        _x = e.PageX - parseInt($("#spig").Css("left"));
        _y = e.PageY - parseInt($("#spig").Css("top"));
     });
    $(document).Mousemove(function (e) {
        if (_move) {
            var x = e.PageX - _x;
            var y = e.PageY - _y;
            var wx = $(window).Width() - $('#spig').Width();
            var dy = $(document).Height() - $('#spig').Height();
            if(x >= 0&& x <= wx&& y > 0&& y <= dy) {
                $("#spig").Css({
                    top: Y,
                    left: X
                }); //kòngjiàn xīn wèizhì
            ismove = true;
            }
        }
    }).Mouseup(function () {
        _move = false;
    });
});


