function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return 'Welcome, ' + newName + '. You are number ' + katzDeliLine.length + ' in line.';
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + '.';
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return 'The line is currently empty.'
  } else {
    var str = 'The line is currently: ';

    for(var i = 0; i < katzDeliLine.length - 1; i++){
      str+=i+1 + '. ' + katzDeliLine[i] + ', ';
    }
    // Add last item of the list without a comma at the end.
    str+= katzDeliLine.length + '. ' + katzDeliLine[katzDeliLine.length - 1];
    return str;
  }
}
