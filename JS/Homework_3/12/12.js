function random_num(m,n){
    return Math.floor(Math.random() * (n-m+1)) + m;
}

function create_word(word_len,lang){
    chars_en = "qwertyuiopasdfghjklzxcvbnm"
    chars_geo = "ქწერტყუიოპასდფგჰჯკლზხცვბნმშძჭღთჟჩ"

    if (lang == "ქართული") {max = 32;cur = chars_geo}
    else {max = 25; cur = chars_en}

    word = ""
    for (i=0;i<word_len;i++){
        random_n = Math.ceil(Math.random() * max)   
        console.log(random_n)
        word += cur[random_n]
    }
    return word
}

function create_par(par_num,m,n,par_min,par_max,lang){
    const text = document.querySelector("textarea")
    if (text.value.length){text.value = ""}
    len_par = random_num(par_min,par_max)
    for (let i = 0;i < par_num; i++){
        text.value += " "
        for (let o = 0;o < len_par;o++){
            len_word = random_num(m,n)
            text.value += create_word(len_word,lang) + " " 
            
        }
        text.value += '\r\n'
        len_par = random_num(par_min,par_max)
    }
}

const button = document.querySelector("button")
button.addEventListener("click",function(){
    const min = Number(document.getElementById("min").value)
    const max = Number(document.getElementById("max").value)
    const par_num = Number(document.getElementById("par_num").value)
    const par_min = Number(document.getElementById("min_word").value)
    const par_max = Number(document.getElementById("max_word").value)
    const lang = document.querySelector("select").value
    
    create_par(par_num,min,max,par_min,par_max,lang)
})




