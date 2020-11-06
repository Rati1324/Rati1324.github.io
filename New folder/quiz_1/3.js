function img(){
    x = Math.ceil(Math.random()*10)
    return `<img src=imgs/${x}.JPG></img>`
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
            rows.push(col)
        }
        table.appendChild(row)        
    }
    body.appendChild(table)

    used_img = []
    used_col = []
    count = 0
    while(count!=5){
        cur_col = Math.floor(Math.random() * (rows.length))
        cur_img = img()
        if(!(used_col.includes(cur_col)) && !(used_img.includes(cur_img))){
            used_col.push(cur_col)
            used_img.push(cur_img)
            rows[cur_col].innerHTML = cur_img
            count++
        }
    }
    // console.log(used_img)
}

