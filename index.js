var katzDeliLine = [];

function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if(currentLine.length > 0){
    var currentCustomer = currentLine[0];
    currentLine.shift();
    return `Currently serving ${currentCustomer}.`;
  } else{
    return 'There is nobody waiting to be served!';

  }
}

function currentLine(currentLine){
  if(currentLine.length > 0){
    var line = 'The line is currently: ';
    for(var i = 0; i < currentLine.length; i++){
      line += `${i+1}. ${currentLine[i]}`;
      if(i < currentLine.length -1){
        line += ', ';
      }

    }
    return line;
  } else{
    return 'The line is currently empty.';
  }
}
