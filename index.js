var kline = [];

function takeANumber(kline, name) {
    kline.push(name);
    return `Welcome, ${name}. You are number ${kline.length} in line.`;
}

function nowServing(kline) {
    if (kline.length > 0){
        var name = kline.shift();
        return `Currently serving ${name}.`;
    } else {
        return 'There is nobody waiting to be served!';
    }
}

function currentLine(kline) {
    if (kline.length > 0){
        var line_string = "The line is currently: ";
        for (var i=0; i < kline.length; i++){
            line_string = line_string + `${i+1}. ${kline[i]}, `
        }
        return line_string.slice(0, line_string.length-2)
    }else{
        return 'The line is currently empty.'
    }
}
