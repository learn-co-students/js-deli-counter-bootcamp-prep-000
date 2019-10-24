var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine){
const i = 0;
if (katzDeliLine.length === 0){
return "There is nobody waiting to be served!"}
else {
  return `Currently serving ${katzDeliLine.shift(i)}.`;
}
}
function currentLine(line){
  var lines = [];
     if (line.length === 0){
       return "The line is currently empty."
     } else {
       for (let i = 0; i < line.length; i++){
    lines.push(`${i + 1}. ${line[i]}`);}
    return `The line is currently: ${lines.join(", ")}`;
  }
}
