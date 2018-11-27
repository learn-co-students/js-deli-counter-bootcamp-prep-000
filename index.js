function takeANumber(line, name){
    line.push(name);

    return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line){
    if(line.length > 0){
        return `Currently serving ${line.shift()}.`
    }
    return 'There is nobody waiting to be served!'
}
function currentLine(line){
    if (line.length > 0){
        var numbersNames = [];
        for (var n = 0; n < line.length; n++){
            numbersNames.push(`${n + 1}. ${line[n]}`)
        }
        return `The line is currently: ${numbersNames.join(", ")}`

    } else {
    return "The line is currently empty.";
    }
}
