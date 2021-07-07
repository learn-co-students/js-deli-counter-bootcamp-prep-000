var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine[katzDeliLine.length] = name;
  var line_position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${line_position} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return 'There is nobody waiting to be served!';
  }
  else{
    var currently_serving = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${currently_serving}.`;
  }
}

function currentLine(line){
  if (line.length == 0){
    return 'The line is currently empty.';
  }
  else{
    let newString = 'The line is currently: ';
    for (let i=0; i<line.length-1; i++){
      newString = newString + `${[i+1]}. ${line[i]}, `;
    }
    newString = newString + `${line.length}. ${line[line.length-1]}`;
    return newString;
  }
}
