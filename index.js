var katzDeli = [];
  
function takeANumber(katzDeliLine, name) {
     katzDeliLine.push(name);
   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  }

function nowServing(katzDeliLine, name) {
 if (katzDeliLine.length > 0) {
 var firstPerson = katzDeliLine.shift()
 return `Currently serving ${firstPerson}.`;
 } else {
     return 'There is nobody waiting to be served!';
    }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else if (line.length > 0) {
    var newCurrentLine = [];
  for (var i = 0; i < line.length; i++) {
    newCurrentLine.push(` ${i + 1}. ${line[i]}`);
      }
  return `The line is currently:${newCurrentLine}`;
  }
}
