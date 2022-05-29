// $(function(){
//     $(".popup").show();
//     cookiedata = document.cookie;
//     console.log(cookidata);
//     if (cookiedata.indexOf("popup_1=done") < 0) {
//         document.getElementById('popup_1').style.visibility = "visible";
//     }
//     else {
//         document.getElementById('popup_1').style.display = "none";
//     }
//     PopupBgDisplay();
// });
function Popup(){
    $(".popup").show();
    cookiedata = document.cookie;
    console.log(cookidata);
    if (cookiedata.indexOf("popup_1=done") < 0) {
        $('#popup_1').style.visibility = "visible";
    }
    else {
        document.getElementById('popup_1').style.display = "none";
    }
    PopupBgDisplay();
}

function PopupNoDisplay_1() {
    //setCookie(cookie_name, value, days)
    setCookie("popup_1","done",1);  // 쿠키값 변경, 하루종일 보지않기 체크 여부
    PopupHide();
}

function PopupHide(){ // 팝업창 없애기 , 닫기 !
    $("#popup_1").hide(); 
    PopupBgDisplay();
}

function PopupBgDisplay(){ // 팝업창 없어진 후 배경 지우기
    cookiedata = document.cookie; 
    if(cookiedata.indexOf("popup_1=done")>0) {
        $("#popupWrap").hide();
    }
}

document.getElementById("btnDay").addEventListener('click',PopupNoDisplay_1);
document.getElementById("btnClose").addEventListener('click',PopupHide);