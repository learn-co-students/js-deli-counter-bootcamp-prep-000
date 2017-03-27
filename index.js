function takeANumber(katzDeliLine, name) {
    // return position in line
    var i = 0;
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeli) {
    if (katzDeli.length > 0) {
        var name = katzDeli.shift();
        return "Currently serving " + name + ".";
    } else {
        return "There is nobody waiting to be served!";
    }
}

function currentLine(array) {
    // returns current line
    // if array is empty, return "The line is currently empty."
    // if array is populated, return "The line is currently: "
        // if 1: "1. " {name}
        // if more than 1: "1. " {name}, "2. " {name}

    if (array.length < 1) {
        return "The line is currently empty.";
    } else if (array.length === 1) {
        return "The line is currently: 1. " + array[0];

    } else {
        var leng = array.length;
        var text = "The line is currently: ";
        // loop through array
        for (var i = 0; i < (leng - 1); i++) {
            // var name = array[i];
            // return "The line is currently: 1. " + array[0] + ", " + (i + 1) + ". " + name + ", ";
            text += ((i + 1) + ". " + array[i] + ", ");
        }
        return text + ((leng) + ". " + array[leng-1]);
    }
}
