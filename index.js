function takeANumber(array, name){
    array.push(name)
    var position = array.length ;
    return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(array){

    if (array.length > 0){
        var name = array.shift()
        return `Currently serving ${name}.`
    }
    return "There is nobody waiting to be served!"
}

function currentLine (array){
    if (array.length > 0){
        var msg = "The line is currently:"
        for (var i=0; i<array.length ; i++){
            msg += ` ${i+1}. ${array[i]}${i<array.length-1 ? ',' : ''}`
        }
        return msg
    }
    return "The line is currently empty."
}
