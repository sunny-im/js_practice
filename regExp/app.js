//특수문자 유무
function checkSpecial(str) {
  const special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
  if(special_pattern.test(str) == true) {
    return true;
  } else {
    return false;
  }
}
//공백유무1
function checkSpace(str) {
  if (str.search(/\s/) != -1) {
    return true;
  } else {
    return false;
  }
}
//공백유무2
const space = /\s/g;

// 숫자만
const regExp_no = /[0-9]/g;

// 한글만 (한글 false, 그 외 true)
const regexp_kr = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;

//=======================================
const submit = () => {
  const name = document.getElementById("name");
  const tel = document.getElementById("tel");
  const text = name.value;
//=======================================
  if(regexp_kr.test(text)) {
    alert("이름을 올바르게 입력해주세요.");
    name.focus();
    return;
  }

  if (name.value.length < 2 || name.value.length > 10) {
    alert("이름을 입력해 주세요.");
    name.focus();
    return;
  }
  if (tel.value.length !== 11) {
    alert("연락처를 올바르게 입력해 주세요.");
    tel.focus();
    return;
  }
  if (checkSpace(name.value)) {
    alert("이름을 올바르게 입력해 주세요.");
    name.focus();
    return;
  }
  if (checkSpace(tel.value)) {
    alert("연락처를 올바르게 입력해 주세요.");
    tel.focus();
    return;
  }
  if (!$.isNumeric(tel.value)) {
    alert("연락처를 올바르게 입력해 주세요.");
    tel.focus();
    return;
  }
}
//=======================================

function maxLengthCheck1(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice( 0, object.maxLength );
  }
}
//=======================================
function maxLengthCheck2(object) {
  object.value = object.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|-]/g, "");
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}
//=======================================
function onlyNumber(event) {
  if ((event.keyCode < 48 && event.keyCode !== 13) || event.keyCode > 57) {
    event.returnValue = false;
    alert("숫자만 입력하세요");
  }
}