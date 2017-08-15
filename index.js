function takeANumber(katzDeliLine, newPersonName) {
    katzDeliLine.push(newPersonName);
    return `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
    var servingName = katzDeliLine.shift()
    return servingName ? `Currently serving ${servingName}.` : "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
        return "The line is currently empty.";
    }

    var names = "";
    for (var i = 0; i < katzDeliLine.length; i++) {
        names += `${i + 1}. ${katzDeliLine[i]}`;
        if (i < katzDeliLine.length-1) {
            names += ", ";
        }
    }
    return "The line is currently: " + names;
}
