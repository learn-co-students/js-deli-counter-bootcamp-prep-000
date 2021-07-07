var katzDeli = []

function takeANumber(katzDeliLine, name) {

    katzDeliLine.push(name)

    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."

}

function nowServing(katzDeliLine) {
    var currentServe = "Currently serving "
    var period = "."
    var serveLine = currentServe + katzDeliLine[0] + period
    if (katzDeliLine.length === 0) {
        return "There is nobody waiting to be served!"
    }   else {
            katzDeli = katzDeliLine.shift()
            return serveLine
    }
}

function currentLine(katzDeliLine) {
    var n = 1
    var currentServe = "The line is currently:"
    var period = "."
    var newLine = []
    if (katzDeliLine.length === 0) {
        return "The line is currently empty."
    }   else {
            for(var i=0; i < katzDeliLine.length; i++) {
              newLine.push (" " + n++ + ". " + katzDeliLine[i])
            }
            return currentServe + newLine
    }
}
