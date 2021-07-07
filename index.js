/*Function takeANumber should accept 2 paramaters - current line and name of person.
Should return a welcome message including the name and position in line.*/
function takeANumber(line, name){
    line.push(name);

    return `Welcome, ${name}. You are number ${line.length} in line.`
}
/*Function nowServing accept current line of people, return first person in line.
Then remove that person from line. Shift method removes first element from array.*/
function nowServing(line){
    if(line.length > 0){
        return `Currently serving ${line.shift()}.`
    }
    return 'There is nobody waiting to be served!'
}
/*Function currentLine accepts current line, and returns line as a string.
If no one is in line, return that it is empty.*/
function currentLine(line){
    if (line.length > 0){
        var numbersNames = [];
        //Sets variable before loop starts - Condition for the loop to run - Increases value of n each loop.
        for (var n = 0; n < line.length; n++){
            numbersNames.push(`${n + 1}. ${line[n]}`)
        }
        //Join method creates and returns new string. Concatenates all elements in array.
        return `The line is currently: ${numbersNames.join(", ")}`

    } else {
    return "The line is currently empty.";
    }
}
