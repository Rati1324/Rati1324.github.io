function days(to){
    from = new Date()
    from.setMonth(from.getMonth()-(12 + from.getMonth()))
    from.setDate(from.getDate()-from.getDate())

    to = new Date(to)
    return Math.round((to - from) / (24 * 60 * 60 * 1000)) + " days";
}

function weeks(to){
    from = new Date()
    from.setMonth(from.getMonth()-(12 + from.getMonth()))
    from.setDate(from.getDate()-from.getDate())
    
    to = new Date(to)
    return Math.round((to - from ) / (7 * 24 * 60 * 60 * 1000)) + " weeks";
}