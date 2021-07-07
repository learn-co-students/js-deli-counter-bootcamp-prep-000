var katzDeliLine = [];

function takeANumber(line, name) {
    //function should accept katzDeliLine, along with newName.
    //The function should return their position in line.
    //Remember: don't their position in line is different than their index position
    line.push(name);

    return `Welcome, ${name}. You are number ${line.length} in line.`


}

function nowServing(deliLine) {
    //should return the first person in line and then remove them from the line.
    //if no one is in line, should return 'There is nobody waiting to be served!'
    if(!deliLine.length) {
        return 'There is nobody waiting to be served!'
    }
    return `Currently serving ${deliLine.shift()}.`;
}

function currentLine(line) {
    //should return current line with orderNumber-name key-value pairs.
    //'The line is currently: 1. Rob 2. Juan'
    //If no one in line, return 'The line is currently empty'
    if (!line.length) {
        return 'The line is currently empty.';
    }

    const numbersNames = [];

    for (let i = 0, l = line.length; i < l; i++) {
        numbersNames.push(`${i + 1}. ${line[i]}`)
    }

    return `The line is currently: ${numbersNames.join(', ')}`;

}
