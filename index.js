function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    var string = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift();
    return string;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if(line.length > 0) {
    var string = "The line is currently:"
    for(var i = 0; i < line.length; i++) {
      string += ` ${i+1}. ${line[i]}${i===line.length-1 ? '' : ','}`
    }
    return string;
  }
  else {
    return "The line is currently empty."
  }
}
