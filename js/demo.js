var wrap = document.getElementsByClassName('wrap')[0];
var btn = document.getElementById('btn');
var h1 = wrap.getElementsByTagName('h1');
var flag = true;
btn.onclick = function() {
    console.log(0);
    if (flag) {
        wrap.style = "display:none";
        flag = false;
    } else {
        wrap.style = "display:blcok"
        flag = true;
    }

}