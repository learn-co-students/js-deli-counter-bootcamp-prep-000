var katzDeliLine = [];
function takeANumber(line, name) {
  var i = line.length;
  line.push(name);
  return `Welcome, ${name}. You are number ${i+1} in line.`;
}

/*var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {
  var i = katzDeliLine.length;
  katzDeliLine.push(`Welcome, ${name}. You are number ${i + 1} in line.`);
  return katzDeliLine[i];
}*/
function nowServing(line){
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
    return line;
  } else {
    return "There is nobody waiting to be served!"
    return line;
  }
}

function currentLine(line) {
  var num = line.length;
  var str = ""
  i = num
  for (var i = 0; i < num; i++){
    var string = `${i + 1}. ${line[i]}${i < (num - 1)? ", ": ""}`
    str = str + string
  }
    if (i > 0) {
    return `The line is currently: ${str}`
  } else {
    return "The line is currently empty."
  }
}
