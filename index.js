var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine) {
  
  if  (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + serving + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var n = line.length;
    var sentence = "The line is currently:";
    for (let i = 0; i < n; i++) {
      sentence = `${sentence} ${i + 1}. ${line[i]},`; 
    }
    return sentence.substr(0,sentence.length-1);
  }
}


