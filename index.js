var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
    if (katzDeliLine.length > 0) {
        return `Currently serving ${katzDeliLine.shift()}.`;
    } else {
        return "There is nobody waiting to be served!";
    }
}

function currentLine (katzDeliLine){
    if(katzDeliLine.length == 0){
        return "The line is currently empty."
    }

    var myString = `The line is currently: 1. ${katzDeliLine[0]}`

    for(let i = 1; i<katzDeliLine.length;i++){
        myString += `, ${i+1}. ${katzDeliLine[i]}`
    }
    return myString
    }
