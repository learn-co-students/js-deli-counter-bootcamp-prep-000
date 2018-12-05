function takeANumber(deliLine, name) {
  deliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${deliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(array) {
    var line = []
    if (array.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < array.length; i++) {
        line += (i + 1) + ". " + array[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}
