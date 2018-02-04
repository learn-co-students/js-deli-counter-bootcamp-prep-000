var katzDeliLine = []; 

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name); 
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
} 

function nowServing(serving) {
    if (serving.length === 0) {
        return 'There is nobody waiting to be served!';
    } else {
       return 'Currently serving ' + serving.shift() + ".";
    }
}

function currentLine(line) {
    var i = 0;
    var newLine = [];
    if (line.length < 1) {
        return "The line is currently empty."
    } else {
        for (i; i < line.length; i++) {
            ( (i === 0) ? newLine.push((i+1) + ". " + line[i]) : newLine.push(" " + (i+1) + ". " + line[i]) );
        }
       return 'The line is currently: ' + newLine;
    }
    
}