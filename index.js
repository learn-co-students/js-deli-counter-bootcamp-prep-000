function currentLine(katzDeliLine) {
  var newLine = [];
  for(var i = 0; i < katzDeliLine.length; i++){
     newLine.push((i + 1) + '. ' +  katzDeliLine[i]);
  }  

  return ('The line is currently: '+ newLine.join(', '));
}