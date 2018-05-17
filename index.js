function takeANumber(katzDeliLine, name) {
  var katzDeli = []; 
  katzDeliLine.push(name);
  katzDeli += "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
  return katzDeli;
}

function nowServing(katzDeliLine) {
  if( katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    katzDeliLine = katzDeliLine.shift();
    return `Currently serving ${katzDeliLine}.`;
  }
}


function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var newArray = [];
    var result = 'The line is currently: ';
    for(var i = 0; i < katzDeliLine.length; i++) {
      newArray.push(`${i+1}. ${katzDeliLine[i]}`);
    }
    result += newArray.join(", ")
    return result;
  }
}


