function check_id(){
    var id = document.getElementById("ID").value
    return (id.length===11)
}

function date(){
    var date_value = document.getElementById("date")
    now = new Date
    var year = now.getFullYear()
    var month = now.getMonth()+1
    var day = now.getDate()
    date_value.value = `${day} : ${month} : ${year}`
}

function check_mail(){
    var mail = document.getElementById("e-mail").value
    return mail.includes('@')
}

