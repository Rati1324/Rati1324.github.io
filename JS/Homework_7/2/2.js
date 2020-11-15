var cur = dom.firstElementChild.firstElementChild

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
    
    dom.children[1].style.border="2px solid red"
    dom.children[1].style.margin="auto"
    dom.children[1].style.marginTop="5px"
    dom.children[1].style.paddingLeft="5px"
    dom.children[1].style.width="500px"
    
}


function parent(){
    if(cur.parentElement!=document.body){
        cur.style.removeProperty("background-color")
        cur = cur.parentElement
        cur.style.backgroundColor="red"
    }
    
}

function f_child(){
    if (cur.children.length>0){
        cur.style.removeProperty("background-color")
        cur = cur.firstElementChild
        cur.style.backgroundColor="red"
    }
}

function l_child(){
    if (cur.children.length>0){
        cur.style.removeProperty("background-color")    
        cur = cur.lastElementChild
        cur.style.backgroundColor="red"
    }
}

function n_sibling(){
    if(cur!=cur.parentElement.children[cur.parentElement.children.length-1]){
        cur.style.removeProperty("background-color")    
        cur = cur.nextElementSibling
        cur.style.backgroundColor="red"
    }
}

function p_sibling(){   
    if(cur!=cur.parentElement.children[0]){
        cur.style.removeProperty("background-color")    
        cur = cur.previousElementSibling
        cur.style.backgroundColor="red"
    }
    
}

