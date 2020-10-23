setTimeout(choice,1000)
function choice(){
    ans = prompt("sheiyvane kviris dghe 1-7")
    days = ["ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი","კვირა"]
    body = document.body
    if (0<ans && ans<8){
        ans--
        body.innerHTML=`<div> დღეს ${days[ans]}ა... </div>`
    }
    else if (ans<0 || ans>7){
        body.innerHTML="<div>ესეთი დღე არ არსებობს </div>"
    }
    else{body.innerHTML="<div style='color:burlywood;border-radius:0px;text-shadow: 2px 1px 1px green'>თვენ დააჭირეთ cancel ღილაკს. გისირვებთ ბედნიერ დღეს!!! </div>"}
}  