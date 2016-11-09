var katzDeliLine = [];

function takeANumber(line, name) {
    line.push(name);
    var reply = 'Welcome, ' + name + '. You are number ' + line.length + ' in line.';
    return reply;
}

function currentLine(line) {
    if (line.length > 0) {
        var ret_str = "The line is currently: ";
        for (var i = 0; i < line.length-1; i++) {
            ret_str = ret_str + (i + 1) + ". " + line[i] + ", ";
        }
        ret_str = ret_str + line.length + ". " + line.slice(-1);
        return ret_str;
    } else {
        return "The line is currently empty.";
    }
}

function nowServing(line) {
    if (line.length == 0) {
        return "There is nobody waiting to be served!";
    } else {
        return "Currently serving " + line.shift() + ".";
    }
}
