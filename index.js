function takeANumber(currentLine, newName) {
    currentLine.push(newName)
    return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
    if (currentLine.length > 0) {
        return `Currently serving ${currentLine.shift()}.`
    } else {
        return "There is nobody waiting to be served!"
    }

}

function currentLine(currentLine) {
    var output
    if (currentLine.length === 0) {
        output = "The line is currently empty."
    } else {
        output = "The line is currently: 1."
        for (var i = 0; i < currentLine.length; i++) {
            if (i === 0) {
                output = `${output} ${currentLine[i]}`
            } else {
                output = output + `, ${i+1}. ${currentLine[i]}`
            }
        }
    }
    return output
}