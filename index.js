function takeANumber(katzDeliLine, name) {
  katzDeliLine = katzDeliLine.push(name);
  var position = katzDeliLine.length;
  if(katzDeliLine <= 1) {return `Welcome, ${name}. You are number 1 in line.`}
  else{return position}//`Welcome, ${name}. You are number ${position} in line`;}
  //make it return welcome NAME you are number NUMBER in line.
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length < 1) {return 'There is nobody waiting to be served!';}
  else {
    var up = katzDeliLine.shift()
    return `Currently serving ${up}.`
  }
}
function currentLine(katzDeliLine) {
  if(katzDeliLine.length < 1) {return 'The line is currently empty.';}
  else {
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
  }
}
