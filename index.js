function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {

  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return  `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine) {
  var tmpStr = "";
  if(katzDeliLine.length === 0) {
    tmpStr = "The line is currently empty.";
  } else {
      tmpStr = "The line is currently:";
      for(let i=0; i<katzDeliLine.length; i++) {
        if(i === katzDeliLine.length-1) {
          tmpStr += ` ${i+1}. ${katzDeliLine[i]}`
        } else {
            tmpStr += ` ${i+1}. ${katzDeliLine[i]},`
        }
      }
    }
  return tmpStr;
}
