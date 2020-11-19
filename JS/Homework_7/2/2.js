var cur = document.body.firstElementChild.firstElementChild

var parent_b = document.getElementById("parent_b")
var f_child = document.getElementById("f_child")
var l_child = document.getElementById("l_child")
var n_sib = document.getElementById("n_sib")
var p_sib = document.getElementById("p_sib")

function container(){
    let dom = document.body
    container_1 = dom.firstElementChild
    container_1.style.margin="auto"
    container_1.style.border="2px solid green"
    container_1.style.width="500px"
    container_1.style.paddingLeft="5px"
    container_1.style.paddingBottom="5px"
    container_1.children[2].style.backgroundColor="green"
    container_1.children[2].style.width="470px"
    container_1.children[2].style.padding="3px"
    container_1.children[2].style.border="1px solid red"
    
    dom.children[1].style.border="2px solid green"
    dom.children[1].style.margin="auto"
    dom.children[1].style.marginTop="5px"
    dom.children[1].style.paddingLeft="5px"
    dom.children[1].style.width="500px"
    dom.children[1].style.width="500px"

}

function disable_all(){
    f_child.disabled=1    
    l_child.disabled=1    
    n_sib.disabled=1    
    p_sib.disabled=1 
}

function disable_after(){
    disable_all()
    if (cur.children.length>0) {f_child.disabled = 0; l_child.disabled = 0;}
    if (cur != document.body.children[0] && cur.nextElementSibling) n_sib.disabled = 0
    if (cur.previousElementSibling ) p_sib.disabled = 0
}

function change_colors(n){
    switch(n){
        case 1: if (cur == document.body.children[0].children[2]){
                cur.style.backgroundColor="green"
            } 
            else if (cur.parentElement == document.body.children[0].children[2]){
                cur.parentElement.backgroundColor = "green"
                cur.style.removeProperty("background-color")    
            }
            else cur.style.removeProperty("background-color")
            break  

        case 2: cur.style.backgroundColor="red";break;
    }
}

function parent(){
    if(cur.parentElement!=document.body){
        cur.style.removeProperty("background-color")
        cur = cur.parentElement
        cur.style.backgroundColor="red"
        disable_after()
    }
}

function first_child(){
    change_colors(1)
    cur = cur.firstElementChild
    cur.style.backgroundColor="red"
    change_colors(2)
    disable_after()
    
}

function last_child(){
    if (cur.children.length>0){
        change_colors(1)
        cur = cur.lastElementChild
        change_colors(2)
        disable_after()
    }
}

function next_sibling(){
    change_colors(1) 
    cur = cur.nextElementSibling
    change_colors(2) 
    disable_after()
}

function prev_sibling(){   
    change_colors(1)
    cur = cur.previousElementSibling
    change_colors(2)
    disable_after()
}



