var katzDeliLine = []

function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
    var first = line[0]
    if (line.length == 0){
        return "There is nobody waiting to be served!"
    } else {
        line.shift()
        return `Currently serving ${first}.`
    }
}


function currentLine(line){
    var newline = "The line is currently:"
    var counter = 1
    if (line.length == 0){
        return "The line is currently empty."
    }
    while (counter < line.length){
        newline = newline + ` ${counter}. ${line[counter-1]},`
        counter += 1
		if (counter == line.length){
		newline = newline + ` ${counter}. ${line[counter-1]}`
        }
    }
    return newline
}
