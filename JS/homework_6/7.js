function img(){
    x = Math.ceil(Math.random()*10)
    return `<img src=img/${x}.JPG></img>`
}

function f_15(r,c,pics){
    body = document.body
    tbl  = document.createElement('table');
    for(i = 0; i < r; i++){
        tr = tbl.insertRow();
        for(j = 0; j < c; j++){
            td = tr.insertCell();
            if (pics){
                pic = img()
                td.innerHTML=pic;
                pics--
            }
           }
        }
    body.appendChild(tbl);
  }
  
  const button = document.getElementById("button");
  const rows = document.getElementById("r");
  const col = document.getElementById("c");

  const photos = document.getElementById("photos")
  
  button.addEventListener('click',function(){
    let table = document.querySelector("table");
    if (table){
      delet();
    }
    f_15(rows.value,col.value,photos.value)});
  
  function delet(){
    let table = document.querySelector("table");
    table.parentNode.removeChild(table);
  }