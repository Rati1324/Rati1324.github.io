function random_img(){
    random_num = Math.floor(Math.random()*7)+1;
    x = "<img src=" + "/19/imgs/" + random_num + ".jpg </img>"
    return x
}

function draw_table(rows,columns,amount){
    body = document.body
    tbl = document.createElement("table")
    for (i=0; i<rows; i++){
        row = document.createElement("tr")
        tbl.appendChild(row)
        for (j=0; j < columns; j++){
            column = document.createElement("td")
            row.appendChild(column)
            if (amount != 0){
                column.innerHTML = random_img()
                amount--
            }
        }
    }
    body.appendChild(tbl)
}

