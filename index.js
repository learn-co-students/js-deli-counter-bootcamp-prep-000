

function takeANumber(line, newName){
  line.push(newName);
  return `Welcome, ${newName}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
} 

function currentLine(peopleLine){
  var array =[];
  
  if (peopleLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
  for (var i = 0; i < peopleLine.length; i++){
    array.push(` ${i + 1}. ${peopleLine[i]}`);
  }
  return `The line is currently:${array}`;
}

}

