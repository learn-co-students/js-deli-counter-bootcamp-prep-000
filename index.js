function takeANumber(currLine, personName){
  currLine.push(personName);
  return `Welcome, ${personName}. You are number ${currLine.length} in line.`;
}
function nowServing(katzDeliLine){
  var str;
  if (katzDeliLine.length === 0)
    str = "There is nobody waiting to be served!";
  else {
    str = `Currently serving ${katzDeliLine.shift()}.`;
  }
  return str;
}
function currentLine(line){
  var str;
  if (line.length === 0)
    str = "The line is currently empty.";
  else {
    str = "The line is currently:";
    for (var i=0; i<line.length; i++){
      str += ` ${i+1}. ${line[i]}`;
      if (i != line.length-1)
        str += ",";
    }
  }
  return str;
}
