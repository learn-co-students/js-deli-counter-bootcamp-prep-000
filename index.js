var katzDeliLine = [];
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0) {
    var dupe = katzDeliLine;
    var name = dupe[0];
    katzDeliLine = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
  else {return "There is nobody waiting to be served!";}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 1) {
    var a = "The line is currently: ";
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length-1) {
        a += `${i+1}. ${katzDeliLine[i]}`
      }
      else { a += `${i+1}. ${katzDeliLine[i]}, `; }
    }
    return a;
  }
  else if (katzDeliLine.length === 1) {
    return `Currently serving ${katzDeliLine[0]}.`;
  }
  else {
    return `The line is currently empty.`
  }
}
