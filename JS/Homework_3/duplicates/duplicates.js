function no_duplicate(string){
    document.write("shetanili - " +string + "<br>")
    res = ""
    counter = 0
    string_count = {}
    while (counter<string.length){
        if (!res.includes(string[counter])){
            res+=string[counter]
            string_count[string[counter]] = 1
        }
        else{
            string_count[string[counter]]++;
        }
        counter++
    }
    
    for (i in string_count){
        document.write(i)
        document.write(" - " + string_count[i])
        document.write("<br>")
    }
    document.write("shedegi" + " - " + res )
    document.write("<br>")
    document.write("<br>")

}

