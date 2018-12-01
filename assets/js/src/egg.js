/**
 * @Description : 神秘彩蛋
 * @author Weixiao
 * @Date 2018-10-27 21:04:58
 * @email rjxyweixiao@163.com
 */

var input = new Array(30);
$(document).keydown(function(e){
    input.push(e.key);
    input.shift();
    var inputString = input.toString().replace(/,/g,"");
    if(inputString.indexOf("EnterhideblogcontentEnter") !== -1){
        hideContent();
    }
    if(inputString.indexOf("EntershowblogcontentEnter") !== -1){
        showContent();
    }
});

$(document).ready(function(){
    var domain = document.domain;
    var url = document.URL;

    console.log(domain);
    console.log(url);
    if (url.indexOf("/poem/") !== -1) {
        // $("body").css("background-image","url(https://iunique.gitee.io/assets/background/bg_poem.jpg)");
    }

});


function hideContent() {
    $(".container.sidebar-position-left").hide();
    $(".tpwthwidt").hide();
    $(".bdshare-slide-button-box.bdshare-slide-style-l5").hide();
}

function showContent() {
    $(".container.sidebar-position-left").show();
    $(".tpwthwidt").show();
    $(".bdshare-slide-button-box.bdshare-slide-style-l5").show();
}