//adds a person to the line, and returns a welcome message
function takeANumber(line, name) {
    line.push(name)
    return `Welcome, ${name}. You are number ${line.length} in line.`
}
// take first person in line, return string "now serving xx", then remove from the currentLine, or else, if no one is in th line, "there's nobody waiting"
function nowServing(katzDeliLine) {
    if (katzDeliLine.length > 0) {
         var firstPerson = katzDeliLine[0]
         katzDeliLine.shift(0)
         return `Currently serving ${firstPerson}.`
    }
    else {
        return `There is nobody waiting to be served!`
    }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length > 0) {
        var tempLine = "The line is currently:"
        // var lineNumber = 0
        //tempLine += katzDeliLine[0]
        //tempLine += katzDeliLine[1]
        //tempLine += katzDeliLine[2]
        for (let ind = 0; ind < katzDeliLine.length; ind++) {
            tempLine += ` ${ind + 1}. ${katzDeliLine[ind]}`
            if (lineNumber !== katzDeliLine.length) {
            tempLine += "," 
            }
            //" " + ++lineNumber  + "." + " " + katzDeliLine[ind] + 
        }
        
        return tempLine
    } else { 
        return `The line is currently empty.`
    }
}