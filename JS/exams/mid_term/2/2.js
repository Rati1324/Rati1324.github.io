function random_num(){
    return Math.ceil(Math.random() * 40 + 10)
}

function table(){
    body = document.body
    tbl = document.createElement("table")
    for (let i=0;i<3;i++){
        col = document.createElement("tr")
        for (let j=0;j<3;j++){
            row = document.createElement("td")
            row.innerHTML = random_num()
            col.appendChild(row)
        }
        tbl.appendChild(col)
    }
    body.appendChild(tbl)
}