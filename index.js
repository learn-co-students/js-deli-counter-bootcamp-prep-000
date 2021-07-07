var katzDeli = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ` + (katzDeliLine.indexOf(name) + 1) + ' in line.'
}

function nowServing (katzDeliLine) {
    let i = 0;
    while (i < katzDeliLine.length) {
        i++;
    }
    if (katzDeliLine.length === 0) {
        return "There is nobody waiting to be served!";
    }
    else {
        return `Currently serving ${katzDeliLine.shift()}.`;
    }
}

function currentLine(line) {
    if (line.length === 0) {
        return "The line is currently empty."
    }
    else {
        var new_array = []
        for (var i = 0; i <= line.length - 1; i++) {
            new_array = [...new_array, `${i + 1}. ${line[i]}`]
        }
        return `The line is currently: ${new_array.join(', ')}`
    }
}
