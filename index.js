/*Function takeANumber should accept 2 paramaters - current line and name of person.
Should return a welcome message including the name and position in line.*/
function takeANumber(line, name){
    line.push(name);

    return `Welcome, ${name}. You are number ${line.length} in line.`
}
/*Function nowServing accept current line of people, return first person in line.
Then remove that person from line. */
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
