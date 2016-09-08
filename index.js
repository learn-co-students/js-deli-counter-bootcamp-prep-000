function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return 'Welcome, ' + newName + '. You are number ' + katzDeliLine.length + ' in line.';
  katzDeliLine.shift();
}

function nowServing(deliLine) {
  if(deliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    var answer = 'Currently serving ' + deliLine[0] + '.';
    deliLine.shift();
    return answer;
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.';
  }
  else {
    var names ='';
    var text = 'The line is currently: ';
    for(var i = 1; i <= katzDeliLine.length; i++) {
      names += i + '. ' + katzDeliLine[i - 1] + ', ';
    }
    names = names.substring(0, names.length - 2);
    var answer = text + names;
    return answer;
  }
}
