function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var person = katzDeliLine.shift();
    return `Currently serving ${person}.`;
  } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeliLine) {
  var string = 'The line is currently: '

  if (katzDeliLine.length > 0){

  for (var i=0; i < katzDeliLine.length; i++) {
    string = string + (i + 1) + '. ' + katzDeliLine[i] + ', '
  }
  var subStr = string.slice(0, -2);
  return subStr
} else {
  return `The line is currently empty.`
}
}



/*
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0){
    var string = 'The line is currently: '

  for (var i=0; i < katzDeliLine.length; i++) {
    string = string + (i + 1) + '. ' + katzDeliLine[i] + ', '
  }
  return string
} else {
  return `The line is currently empty.`
}
}*/
