function random_chars(){
    var output = document.getElementById("input1")
    output.innerHTML = ''
    var chars = '123456789qwertyuiopasdfghjklzxcvbnm'
    var random_num
    var word = ''
    for (i=0;i<6;i++) {
        random_num = Math.floor(Math.random() * 35)
        console.log(chars[random_num])
        word += chars[random_num]
    }
    output.value = word
}

function input(status){
    var buttons = document.querySelectorAll("button")
    var output = document.getElementsByClassName("status")[0]

    for (let i=3;i<39;i++){
        if(status==1) buttons[i].disabled = false
        else buttons[i].disabled = true
    }
    if(status==1) output.innerHTML = 'აკრიფეთ სიმბოლოები'
}

function keys(char){
    var input = document.getElementById("input2")
    input.value += char
}

function check(){
    var input1 = document.getElementById("input1")
    var input2 = document.getElementById("input2")
    var output = document.getElementsByClassName("status")[0]
    if (input1.value == input2.value){output.innerHTML = "სწორია";console.log("1")}
    else {output.innerText = "არასწორია";console.log("2")}
}