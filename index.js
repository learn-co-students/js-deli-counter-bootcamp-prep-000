function takeANumber(katzDeliLine,newName) {
 katzDeliLine.push(newName);
   var pos = katzDeliLine.length;
  return `Welcome, ${newName}. You are number ${pos} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return 'There is nobody waiting to be served!';
  }
    else {
      var temp = katzDeliLine[0];
      katzDeliLine.shift();
return `Currently serving ${temp}.`;
  } 
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return 'The line is currently empty.'
  }
  else {
   var katzDeliLineNew = [];
      for (let i = 0; i < katzDeliLine.length; i++) {
    katzDeliLineNew.push(`${i+1}. ${katzDeliLine[i]}`)
}

  return `The line is currently: ${katzDeliLineNew.join(', ')}`;
}
}
