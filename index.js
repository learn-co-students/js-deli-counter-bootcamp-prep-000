var katzDeliLine = [];
function takeANumber(KatzLine, newName) {
  KatzLine.push(newName);
  return `Welcome, ${newName}. You are number ${KatzLine.length} in line.`
}

function nowServing(KatzLine) {
  if (KatzLine.length === 0) {
  return "There is nobody waiting to be served!";
  } else { 
      return `Currently serving ${KatzLine.shift()}.`
      ;
    }
}

var array = [];
function currentLine(KatzLine) {
  if (KatzLine.length === 0) {
    return "The line is currently empty." } else {
      for (var i=0; i<KatzLine.length; i++) {
        array.push(`${i+1}. ${KatzLine[i]}`)
      }
    }
    return `The line is currently: ${array.join(', ')}`;
} 
