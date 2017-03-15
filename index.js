
// Deli counter
//
// var katzDeli = [];
//
// var katzDeliLine = ['Ada', 'Grace', 'Kent' ];

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line. "
}

//return person being served then remove from line
function nowServing(katzDeliLine){
    if(katzDeliLine.length >= 0){
    katzDeliLine.shift(katzDeliLine);
    return katzDeliLine;
}}

// returns current line , if empty return msg
function currentLine(katzDeliLine){
    for(i = 0; i < katzDeliLine.length; i++)
    return `the current line is ${i+1} ${katzDeliLine[i]}`
}
