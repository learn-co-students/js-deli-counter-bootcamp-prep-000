function takeANumber(line,name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing (line) {
if (line.length === 0){
  return 'There is nobody waiting to be served!';
} else {
return `Currently serving ${line.shift(0)}.`;
 }
}
// function currentLine (line) {
//   if (line.length === 0) {
//     return 'The line is currently empty.';
//   }
//   var namesAndNumbers = [];
//   for (var i; i < line.length; i++){
//     namesAndNumbers.push(i+1 + '. ' + line[i]);
//   }
//   console.log(`The line is currently: ${namesAndNumbers}`);
//   return `The line is currently:` + namesAndNumbers.join(', ');
// }
function currentLine(katzDeliLine) {
var line=[];
if(katzDeliLine>[]) {
  for(var i=0;i<katzDeliLine.length;i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
    return "The line is currently:" + line;
}
    else {
      return "The line is currently empty.";
    }
}