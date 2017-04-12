var katzDeli = [];

var takeANumber = (katzDeliLine, name) => {

    var katzDeli = katzDeliLine
    katzDeli.push(name)
    var currentCustomerPosition = "Welcome, " + name + ". You are number " + (katzDeli.length) + ' in line.'

    return currentCustomerPosition
}

var nowServing = (katzDeli) => {

    var serving = katzDeli[0]
    katzDeli.shift()

    return katzDeli.length > 0 ? "Currently serving " + serving + "." : "There is nobody waiting to be served!"
}

var currentLine = (line) => {
    var currentLine = []

    for (var i = 0; i < line.length; i++) {
        currentLine.push(" " + (i+1) + ". " + line[i])
    }

    return line.length > 0 ? "The line is currently:" + currentLine.join() : "The line is currently empty." 
}
