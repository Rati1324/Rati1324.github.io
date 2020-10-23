function clock(){
    now = new Date();
    hour = now.getHours()
    minute = now.getMinutes()
    sec = now.getSeconds()
    document.write(hour)
    document.write(":")
    document.write(minute)
    document.write(":")
    document.write(sec)
    document.write(":")
}