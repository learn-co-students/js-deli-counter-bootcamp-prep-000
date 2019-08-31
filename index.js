
function takeANumber(katzDeliLine, person) {
        katzDeliLine.push(person)
    return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
    if (!katzDeliLine.length) {
        return "There is nobody waiting to be served!"
    }
    return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
    if (!katzDeliLine.length) {
        return "The line is currently empty."
    }
    const numbersAndNames = [];

    for ( let i = 0; i < katzDeliLine.length; i++) {
        numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${numbersAndNames.join(', ')}`
}
