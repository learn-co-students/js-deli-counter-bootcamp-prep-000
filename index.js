// Inputs: an array (line) and a name (string)
// Outputs: string with spot in line
function takeANumber(line, name) {
    //Add name to end of the line
    line.push(name);
    //line.length is an easy way of outputing postion in line
    return `Welcome, ${name}. You are number ` + line.length + ' in line.';
}

//Inputs: an array (line)
//Outputs: string with name of current customer
function nowServing(line) {
    //line must exist and have at least one entry
    if (line === undefined || line.length < 1) {
        return "There is nobody waiting to be served!";
    }
    else {
        //store name of next person in line
        var serving = line[0];
        //shift the array, removing name 0
        line.shift();
        return `Currently serving ${serving}.`;
    }
}

//Inputs: an array (line)
//Outputs: string with # of ppl in line
function currentLineIterative(line) {
    //line must exist and have at least one entry
    if (line === undefined || line.length < 1) {
        return "The line is currently empty.";
    }
    else {
        //init an empty string to store list of formatted names
        var string = "";
        //step through the array
        for (var i = 0; i < line.length; i++){
            //add to string if not last entry in array
            if (i < line.length - 1) {
                //need trailing comma and position 0 => 1, 1 => 2,...
                string = string + `${i+1}. ` + line[i] + ', ';
            }
            //add last entry in array to string
            else {
                //ommit trailing comma
                string = string + `${i+1}. ` + line[i];
            }
        }
        return `The line is currently: ${string}`;
    }
}

//Inputs: an array (current line), optionally a partial string list
//Outputs: a fully formatted string list
function currentLine(line, string = "") {
    //line must exist and have at least one entry
    if (line === undefined || line.length < 1) {
        return "The line is currently empty.";
    }

    //add last entry in line array to beginning of string
    string = `${line.length}. ` + line[line.length - 1] + string;
    //non-destructively slice last entry off the end of the array
    var newLine = line.slice(0, line.length - 1);

    //check if new line is empty
    if (newLine.length < 1) {
        //return final format string and exit recursion
        return `The line is currently: ${string}`;
    }
    //continue recursively
    else {
        //add comma to beggining of string
        string = ', ' + string
        //call function with the new shorter line and longer string
        return currentLine(newLine, string)
    }
}

var emptyLine = [];
var deliLine = ['Jenny', 'Tom', 'Lisa', 'Phil', 'Dave'];

//Expect: "Welcome, Tom. You are number 6 in line."
console.log(takeANumber(deliLine, 'Tom'));
//Expect "Currently serving Jenny."
console.log(nowServing(deliLine));
//Expect "The line is currently: 1. Tom, 2. Lisa, 3. Phil, 4. Dave, 5. Tom"
console.log(currentLine(deliLine));
console.log(currentLineRecursive(deliLine));
//Expect "There is nobody waiting to be served!"
console.log(nowServing(emptyLine));
//Expect "The line is currently empty."
console.log(currentLine(emptyLine));
console.log(currentLineRecursive(emptyLine));
