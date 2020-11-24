function random_num(){

    var n = Number(document.getElementById("n").value)
    var min = Number(document.getElementById("min").value)
    var max = Number(document.getElementById("max").value)
    var output = document.getElementById("output")
    output.innerHTML = ""
    for (i=0;i<n;i++){
        cur = Math.floor(Math.random() * (max-min) + min)
        output.innerHTML += cur + "<br>"
    }

    
}