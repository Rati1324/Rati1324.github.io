input = document.querySelector("input")
result = document.getElementById("result")

function calc(){
    value = input.value
    result.innerHTML = eval(value)
}

function operations(op){
    input.value += op;
}

setInterval(function(){
    var focusbox;
    focusbox = document.querySelector("input");
    focusbox.focus();
});

document.addEventListener("keypress",function(e){if (e.key==13 || e.keyCode==13)calc()})
