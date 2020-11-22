var doms = document.body.getElementsByTagName("*")
var tables = document.body.querySelectorAll("table")


for (let i=0;i<tables.length-1;i++){
    parse_table(tables[i])
}

var table_objs = []
parse_table(tables[0])

function parse_table(tbl){
    var thead_rows = tbl.querySelectorAll("th")
    var tbody_rows = tbl.querySelectorAll("td")
    var count = 0
    var count2 = 0

    for (let i=0; i<(tbody_rows.length/thead_rows.length); i++){
        table_objs.push({})
        for (let j=0; j < thead_rows.length; j++){
            table_objs[count][thead_rows[j].innerText] = tbody_rows[count2].innerText
            if(count2<tbody_rows.length-1)count2++
        }
        count++
    }
}

var other_text = {}
parse_other()

function parse_other(){
    body = document.body
    x = []
    for (let i=0;i<body.children.length;i++){
        if(body.children[i].nodeName!="TABLE" && body.children[i].nodeName!="SCRIPT"){
            if (body.children[i].children.length == 0 && body.children[i].nodeName!="TABLE" && body.children[i].nodeName!="SCRIPT"){
                x.push(body.children[i])
            }

            else for (let j=0;j<body.children[i].children.length;j++){
                x.push(body.children[i].children[j])
            }
        }    
    }
    for (let i=0;i<x.length;i++) other_text[x[i].nodeName] = []
    for (let i=0;i<x.length;i++){
        other_text[x[i].nodeName].push(x[i].innerText)
    }
}

var all_text = {"table content": table_objs,"other text content": other_text}
all_text = JSON.stringify(all_text)


localStorage.setItem("test",all_text)








