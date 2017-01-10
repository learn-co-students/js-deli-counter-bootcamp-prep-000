function takeANumber(katzDeliLine, newName) {
    katzDeliLine.push(newName)
    return `Welcome, ${newName}. You are number ${katzDeliLine.indexOf(newName) + 1} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    var name = deliLine[0]
    deliLine.shift()
    return `Currently serving ${name}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
    if (line.length > 0) {
        var newString = "The line is currently: "
        for (var i = 0; i < line.length; i++) {
            var updateString = `${i + 1}. ${line[i]}, `
            newString = newString.concat(updateString)
        }
        newString = newString.slice(0,-2)
        return newString
    }
    else {
        return "The line is currently empty."
    }
}
