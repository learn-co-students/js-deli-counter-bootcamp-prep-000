var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    var index = katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${index} in line.`;
};

function nowServing(katzDeliLine) {
    if(katzDeliLine.length > 0) {
        var person = katzDeliLine.shift();
        return `Currently serving ${person}.`;
    } else {
        return "There is nobody waiting to be served!";
    }
};

function currentLine(katzDeliLine) {
    if(katzDeliLine.length > 0) {
        var list = "The line is currently: ";
        for (var i = 0; i < katzDeliLine.length; i++) {
            if(i ===  katzDeliLine.length - 1) {
                list += (i + 1) + ". " + katzDeliLine[i];
            } else {
                list += (i + 1) + ". " + katzDeliLine[i] + ", ";
            }
        }
        return list;
    } else {
        return "The line is currently empty.";
    }
};
