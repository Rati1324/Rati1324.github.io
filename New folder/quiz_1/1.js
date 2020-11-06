function random_word(){
    word = ""
    for (var i=0;i<10;i++){
        x = (Math.floor(Math.random() * 26 + 65))
        word += String.fromCharCode(x)
    }
    return word
}

rows = []
function table(r,c){
    body = document.body
    table = document.createElement("table")
    for (var i=0;i<r;i++){
        row = document.createElement("tr")
        for(j=0;j<c;j++){
            col = document.createElement("td")
            row.appendChild(col)
            col.innerHTML = random_word()
            rows.push(col)
        }
        table.appendChild(row)        
    }
    body.appendChild(table)
}

setInterval(change_word,2000)

function change_word(){
    random_num = Math.floor(Math.random()*9)
    for(var i=0;i<9;i++){
        if (i==random_num){
            rows[i].innerHTML = random_word()
        }
    }
}

