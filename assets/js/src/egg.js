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
    if (url.indexOf("/poem/") === -1) {
        $("body").removeClass("bg_poem").addClass("bg1");
    }
    else {
        $("body").removeClass("bg1").addClass("bg_poem");
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