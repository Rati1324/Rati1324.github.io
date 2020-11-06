function random_img(){
    random_num = Math.floor(Math.random()*10)+1;
    x = "<img src=" + "imgs/" + random_num + ".jpg </img>"
    return x
}
function delete_table(){
    const table = document.querySelector("table");
    table.parentNode.removeChild(table);
}

function draw_table(rows,columns,amount){
    const check = document.querySelector("table");
    if (check){
        delete_table()
    }

    body = document.body
    tbl = document.createElement("table")
    for (i=0; i<rows; i++){
        row = document.createElement("tr")
        tbl.appendChild(row)
        for (j=0; j < columns; j++){
            column = document.createElement("td")
            row.appendChild(column)
            if (amount){
                column.innerHTML = random_img()
                amount--
            }
        }
    }
    body.appendChild(tbl)
}


