var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return ("Welcome, " + `${name}` + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length > 0) {
        return ("Currently serving " + `${katzDeliLine.shift()}` + ".");
    }
    else {
        return ("There is nobody waiting to be served!");
    }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length > 0) {
        var i = 0;
        var deliLine = "The line is currently:";
        while (i < katzDeliLine.length) {
            deliLine = deliLine + (" " + `${i + 1}` + ". " + `${katzDeliLine[i]}`);
            i++;
            if (i < katzDeliLine.length) {
                deliLine = deliLine + ","
            }
        }
        return deliLine
    }
    else {
        return "The line is currently empty."
    }
}
