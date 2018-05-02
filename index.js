var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  //var i = 0;
  //while (katzDeliLine.length < i) {
    //katzDeliLine[i] = Object.assign({}, katzDeliLine, { [i]: `Welcome, ${name}. You are number ${i} in line.`});
    //i++;
  //}
  
  //if (katzDeliLine.length === 0){
    //katzDeliLine[0] = Object.assign({}, katzDeliLine, { [0]: `Welcome, ${name}. You are number ${1} in line.`});
  //} else {
    //katzDeliLine[katzDeliLine.length + 1] = Object.assign({}, katzDeliLine, { [katzDeliLine.length + 1]: `Welcome, ${name}. You are number ${katzDeliLine.length + 1} in line.`});
  //}
  //return katzDeliLine;
  
  katzDeliLine.push(name);
  return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var msg = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return msg;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var msg ="";
  if (katzDeliLine.length > 0) {
    for (let i = 0; katzDeliLine.length > i; i++) {
      if (i === 0) {
        msg += `The line is currently: ${i+1}. ${katzDeliLine[i]}`;
      } else {
        msg += `, ${i + 1}. ${katzDeliLine[i]}`;
      }
    }
    return msg;
  } else {
    return "The line is currently empty.";
  }
}