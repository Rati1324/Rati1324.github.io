function vowels(){
    div = document.querySelector("div")
    input = document.querySelector("input").value
    res = ""
    count = 0
    for (i=0;i<input.length;i++){
        if ("aeiou".includes(input[i])){
            count++
        }
    }
    res += `${input} has ${count} vowels`
    div.innerHTML += res + "<br>"
    del_vowels()
}

function del_vowels(){
    arr = input.split("")
    len = arr.length-1

    while (len>-1){
        if ("aeiou".includes(arr[len])){
            arr.splice(len,1)
        }
        len--
    }
    res = arr.join("")
    div.innerHTML += `vowels removed: ${res}<br>`
}
