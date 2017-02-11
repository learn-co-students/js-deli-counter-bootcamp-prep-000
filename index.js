var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var i = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + i + " in line."

}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    var person = katzDeliLine[0]
    katzDeliLine.shift();
    return "Currently serving " + person + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var line = [];
    for (let i = 0; i <= katzDeliLine.length + 1; i++){
        var m = i + 1
        line.push(` ${m}. ${katzDeliLine.shift()}`);
    }
    return `The line is currently:${line}`;
  }
}

/*function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    var line = "The line is currently: 1. " + katzDeliLine[0];
    for (let i = 1; i < katzDeliLine.length; i++){
      line += ", " + parseInt(i) +1 + ". " + katzDeliLine[i]
    }
    return line
  }
}
*/
