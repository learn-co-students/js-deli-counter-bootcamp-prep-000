var katzDeliLine = [];

var takeANumber = function(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var nowServing = function(katzDeliLine) {
    if(katzDeliLine.length === 0) {
        return "There is nobody waiting to be served!"
    }
    else {
        var name = katzDeliLine[0]; //Not ideal but something wasn't working right with the test.
        katzDeliLine.shift();
        return `Currently serving ${name}.`
    }
}

var currentLine = function(katzDeliLine) {
    if(katzDeliLine.length === 0) {
        return "The line is currently empty.";
    }
    else {
          return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`
        }    }
