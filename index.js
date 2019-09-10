var katzDeliLine = [];


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine (line) {
  var lineStr = 'The line is currently: ';
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  
  for (var i = 0; i < line.length; i++) {
   if (line.length === 1 || i === line.length - 1) {
     lineStr += `${i + 1}. ${line[i]}`;
   } else if (i < line.length) {
     lineStr += `${i + 1}. ${line[i]}, `
   }
  }
  return lineStr;
}