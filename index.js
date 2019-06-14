function takeANumber(currentLine, newGuest){
  var newLine = currentLine.push(newGuest);
  return `Welcome, ${newGuest}. You are number ${newLine} in line.`;
}
function nowServing(deliLine){
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var currentServe = deliLine.shift(0)
    return `Currently serving ${currentServe}.`;
   }
}
function currentLine(deliLine){
 let i = 0;
 let line = [];
 while (i < deliLine.length){
   line.push(' '+[i+1] + '. ' + deliLine[i])
   i++;
 }
 if (deliLine.length === 0){
 return 'The line is currently empty.';
 }
 else {
 return `The line is currently:${line}`;
 }
}