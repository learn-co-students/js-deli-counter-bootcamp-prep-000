function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  var i = katzDeliLine.indexOf(newPerson) + 1;
  return `Welcome, ${newPerson}. You are number ${i} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
//  return string;
  if(line.length > 0) {
  var array = [];
  for(var i = 0; i < line.length; i++) {
    array.push (` ${i+1}. ${line[i]}`);
  }
  return `The line is currently:${array}`;
} else {
  return `The line is currently empty.`
}
}
