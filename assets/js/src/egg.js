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

    if(inputString.indexOf("EnterblograndomEnter") !== -1){
        window.location.href = "/random/";
    }
});

$(document).ready(function(){
    var url = document.URL;
    if (url.indexOf("/read") !== -1) {
        $("body").addClass("bg_read");
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