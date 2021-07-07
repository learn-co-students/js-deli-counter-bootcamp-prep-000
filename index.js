var katzDeli = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

console.log(takeANumber(katzDeli, 'Ada'));
console.log(takeANumber(katzDeli, 'Kevin'));

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

console.log(nowServing(katzDeli));

/*
3. Build a function `currentLine` that returns the current line. For example,
if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return
`"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should
return `"The line is currently empty."`
*/
function currentLine(katzDeliLine){
  var line = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  for (var i = 0 ; i < katzDeliLine.length; i ++) {
    line.push((i+1).toString() + `. ${katzDeliLine[i]}`);
  }
  return  "The line is currently: " + line.join(', ');
}

console.log(currentLine(katzDeli));
console.log(takeANumber(katzDeli, 'Jeff'));
console.log(takeANumber(katzDeli, 'Kent'));
console.log(currentLine(katzDeli));
