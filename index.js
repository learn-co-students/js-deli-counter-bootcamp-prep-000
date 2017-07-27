var katzDeli = [];

function takeANumber(line, name) {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
    if (line.length == 0) {
        return "There is nobody waiting to be served!"
    } else {
        var customer = line[0];
        line.shift();
        return `Currently serving ${customer}.`
    }
}

function currentLine(line) {
    var currentLine = "The line is currently:";
    if (line.length == 0) {
        return "The line is currently empty."
    };
    for (var i = 0; i < line.length; i++) {
        if (i+1 == line.length) {
            currentLine += ` ${i+1}. ${line[i]}`;
        } else {
            currentLine += ` ${i+1}. ${line[i]},`;
        };
    }

    return currentLine;
}
