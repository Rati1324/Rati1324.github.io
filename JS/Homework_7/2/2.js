function container(){
    let dom = document.body
    container_1 = dom.firstElementChild
    container_1.style.margin="auto"
    container_1.style.border="2px solid green"
    container_1.style.width="500px"
    container_1.style.paddingLeft="5px"
    container_1.style.paddingBottom="5px"
    container_1.children[3].style.backgroundColor="green"
    container_1.children[3].style.width="470px"
    container_1.children[3].style.padding="3px"
    
    dom.children[1].style.border="2px solid red"
    dom.children[1].style.margin="auto"
    dom.children[1].style.marginTop="5px"
    dom.children[1].style.paddingLeft="5px"
    dom.children[1].style.width="500px"
    
}

function parent(){
    let dom = document.body
    parent = dom.firstElementChild
    parent.style.backgroundColor="red"
}

function f_child(){
    let dom = document.body
    dom.firstElementChild.firstElementChild.style.backgroundColor="red"

}

function n_sibling(){
    let dom = document.body
    console.log(dom.firstElementChild.style)
    
}


