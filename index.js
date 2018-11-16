 var lineNumber = 0;
function takeANumber(name,line){

  var script = `Welcome, ${line}. You are number ${(name.length+1)} in line.`;
  name.push(line);
  ++lineNumber;
  return script

}
function nowServing(katzDeliLine){
  if (katzDeliLine == 0) {
    return "There is nobody waiting to be served!";
  }
  else {

    return `Currently serving ${katzDeliLine.shift()}.`
}
}
function currentLine(katzDeliLine){
  var kLen = katzDeliLine.length,i;
  if (katzDeliLine.length==0){
    return "The line is currently empty.";
  }

  else {
    i =0;
    var speak = `The line is currently: `;

    while (i < kLen) {
      if (i==kLen-1){
        speak += `${[i+1]}. ${katzDeliLine[i]}`;
i++
      }
else {
  speak += `${[i+1]}. ${katzDeliLine[i]}, `;
  i++
}
}
return speak;
  }
}
