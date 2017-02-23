//var katzDeli = [];

function takeANumber(katzDeliLine, personName) {
   katzDeliLine.push(personName);
   return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeliLine.shift()}.` ;
  }
}

function currentLine(katzDeliLine) {
  var line = 'The line is currently';
  if (katzDeliLine.length === 0) {
    line += ' empty. '
  } else {
    var line = 'The line is currently:'
    for (var i = 0; i < katzDeliLine.length ; i++) {
      line +=` ${i +1}. ${katzDeliLine[i]},`
    }
  }
  return line.slice(0,line.length-1);
}
