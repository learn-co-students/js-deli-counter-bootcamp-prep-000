var katzDeli = [];

function takeANumber(number, name) {
number.push(name) ;
return 'Welcome, '+ name + '. You are number ' + number.length + ' in line.'
}

function nowServing(line) {
if (line == 0 ) { return 'There is nobody waiting to be served!'}
else {
return 'Currently serving ' + line.shift() + '.'
}
}

function currentLine(currentLine){
  if(currentLine.length > 0){
    var line = 'The line is currently: ';
    for(var i = 0; i < currentLine.length; i++){
      line += i+1 + '. ' + currentLine[i]
      if(i < currentLine.length -1){
        line += ', ';
      }

    }
    return line;
  } else{
    return 'The line is currently empty.';
}
}
