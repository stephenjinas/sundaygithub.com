const pwd  = document.getElementById("pwd");
const chk = document.getElementById("chk");

chk.onchange = function(){
    pwd.type = chk.checked? "text": "password";
};