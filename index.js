function takeANumber(katzDeliLine, newPerson) {
    katzDeliLine.push(newPerson)
    let positionInLine = katzDeliLine.length
    return 'Welcome, ' + newPerson + '. You are number ' + positionInLine + ' in line.'
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length == 0) {
        var message = 'There is nobody waiting to be served!'
    } else {
        var message = 'Currently serving ' + katzDeliLine[0] + '.'
    }
    katzDeliLine.shift()
    return message
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length == 0) {
        return 'The line is currently empty.'
    } else {
        var message = 'The line is currently: '
        for (let i = 1; i <= katzDeliLine.length; i++) {
            message += i + '. ' + katzDeliLine[i - 1]
            if (i != katzDeliLine.length) {
                message += ', '
            }
        }
        return message
    }
}
