function takeANumber(deliLine, person) {
    deliLine.push(person);
    return `Welcome, ${person}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine, person) {
    if (deliLine.length > 0) {
        var person = deliLine.shift();
        return `Currently serving ${person}.`;
    } else {
        return 'There is nobody waiting to be served!';
    }
}

function currentLine(deliLine) {
    if (deliLine.length > 0) {
        var deliLineNotification = 'The line is currently: ';
        for (var i = 0; i < deliLine.length; i++) {
            deliLineNotification = deliLineNotification + `${i + 1}. ${deliLine[i]}, `
        }

        return deliLineNotification.slice(0, deliLineNotification.length - 2);
    } else {
        return 'The line is currently empty.';
    }
}
