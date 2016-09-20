function takeANumber(line, name) {
    line.push(name);
    var no = line.length;
    return `Welcome, ${name}. You are number ${no} in line.`;
}

function nowServing(line) {
    if (line.length > 0) {
        var name = line.shift();
        return `Currently serving ${name}.`;
    }
    return 'There is nobody waiting to be served!';
}

function currentLine(line) {
    var length = line.length;
    var ans = "The line is currently:";
    if (length > 0) {
        for (var i = 0; i < length; i++) {
            ans = ans + ` ${i + 1}. ${line[i]}`;
            if (i + 1 < length) {
                ans += ",";
            }
        }
        return ans;
    }
    return "The line is currently empty."
}
