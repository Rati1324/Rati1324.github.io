function input(){
    x = prompt("sheiyvane sityva")
    count_vowels(x)   
}

function count_vowels(x){
    chars = "აეიოუ"
    count = 0
    for (i=0;i<x.length;i++){
        if(chars.includes(x[i])){count++}
    }
    document.write(count + " xmovania shemdeg stringshi: " + x + "<br>" )
    no_vowels(x)
}

function no_vowels(x){
    res = ""
    chars = "აეიოუ"
    for (i=0;i<x.length;i++){
        if (!chars.includes(x[i])){res+=x[i]}
    }
    document.write("mxolod tanxmovnebit: " + res)
}