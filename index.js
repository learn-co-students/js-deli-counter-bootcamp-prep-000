var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
      return (`Currently serving ${katzDeliLine.shift()}.`);
    } else {
     return "There is nobody waiting to be served!";
   }
  }

  function currentLine(line) {
    var lineNow = [];
    var i;
    i = 0
    if (line.length > 0) {
      while (i < line.length) {
        lineNow.push(`${lineNow.length + 1}. ${line[i]}`)
        i++
      }
      return `The line is currently: ${lineNow.join(', ')}`;
    } else {
      return "The line is currently empty."
    }
  }
