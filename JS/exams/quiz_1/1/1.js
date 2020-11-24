function random_char(){
    chars = 'qwertyuiopasdfghjklzxcvbnm'
    rand_num = Math.floor(Math.random() * 26)
    return chars[rand_num]
}

function create_word(){
    word = ""
    for (k=0;k<10;k++){word+=random_char()}

    return word
}


function table(r,c){
    body = document.body
    tbl = document.createElement("table")
    for (i=0;i<r;i++){
        row = document.createElement("tr")
        tbl.appendChild(row)
        for (j=0;j<c;j++){
            col = document.createElement("td")
            col.id=i+"-"+j
            col.innerHTML=create_word()
            row.appendChild(col)
        }
    }
    body.appendChild(tbl)
}

function change_random(n,m){
    row = Math.floor(Math.random()*n)
    col = Math.floor(Math.random()*m)    
    console.log(row)
    console.log(col)
    for (i=0;i<n;i++){
        for(j=0;j<m;j++){
            cur = document.getElementById(i+"-"+j)
            if (row==cur.id[0] && col==cur.id[2]){cur.innerHTML = create_word();return}
        }
    }
}
