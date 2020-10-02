

function f_15(r,c,height=200,width=400,border2=1,font_color="black"){
  body = document.body
  tbl  = document.createElement('table');
  tbl.style.height = height+"px";
  tbl.style.width = width+"px";
  tbl.style.borderWidth = border2+"px";
  for(i = 0; i < r; i++){
      tr = tbl.insertRow();
      for(j = 0; j < c; j++){
          td = tr.insertCell();
          text = document.createTextNode((i+1)+","+(j+1));
          span = document.createElement("span");
          span.appendChild(text);
          span.style.color=font_color;
          td.appendChild(span);
          span.style.color=font_color;
          td.style.textAlign="center";
         }
      }
  body.appendChild(tbl);
}

const button = document.getElementById("button");
const rows = document.getElementById("r");
const col = document.getElementById("c");
const height = document.getElementById("height")
const width = document.getElementById("width")
const border = document.getElementById("border")
const font_color = document.getElementById("font_color")

button.addEventListener('click',function(){
  let table = document.querySelector("table");
  if (table){
    delet();
  }
  f_15(rows.value,col.value,height.value,width.value,border.value,font_color.value)});

function delet(){
  let table = document.querySelector("table");
  table.parentNode.removeChild(table);
}
