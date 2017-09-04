var katzDeli = []
function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var currentCustomer = katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`
  }
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.';
  }
  else {
    var str = 'The line is currently:';
    for (var i = 0; i < line.length; i++){
      str += ` ${i+1}. ${line[i]}`;
      i+1 < line.length ? str += ',' : str += '';
    }
    return str;
  }
}
