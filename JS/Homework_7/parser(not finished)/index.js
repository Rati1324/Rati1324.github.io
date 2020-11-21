var text_content = {}

var doms = document.body.getElementsByTagName("*")
var table_obj = []
var tables = document.body.querySelectorAll("table")

for (let i=0;i<tables.length;i++){
    parse_table(tables[i])
    // console.log(i)
}
function parse_table(tbl){
    var ths = tbl.querySelectorAll("th")
    var tbody_tr = tbl.querySelectorAll("tbody")
    tbody_tr = tbody_tr[0].querySelectorAll("tr")

    var tfoot_tr = tbl.querySelectorAll("tfoot")
    tfoot_tr = tfoot_tr[0].querySelectorAll("tr")

    var cur_obj = {}
    console.log(tbody_tr)    
    console.log(tfoot_tr)    
    for (let i=0;i<ths.length;i++){
        console.log(ths[i])
        
    }
    
}

// var texts = []
// for (i=0;i<doms.length;i++){

//     if (doms[i].children.length==0 && doms[i].textContent.length>0){
//         text_content[doms[i].nodeName+i] = doms[i].textContent
//         texts.push(doms[i])
//         console.log(doms[i])
//     }
// }

