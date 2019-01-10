function takeANumber (currentLine, name) {
  currentLine.push(name);
  return "Welcome, " + name + ". You are number " + (currentLine.length) + " in line."
}

function nowServing (KatzDeliLine) {
  if (KatzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + KatzDeliLine.shift() +"."
  }
}

function currentLine(line) {
  if (line.length === 0 ) {
    return "The line is currently empty."
  } else {
   
    var txt = ""
    line.forEach(testFunction)
 
    function testFunction (value, index, array) {
      txt = txt + (index+1) + ". " + value + ", ";
    return txt;
    }

    var lineIs = "The line is currently: "
    txt = txt.replace(/,\s*$/, "");
    return lineIs + txt;
  }
}