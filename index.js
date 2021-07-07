function takeANumber(line, name) {
  var number = line.length + 1;
  
  line.push(name);
  
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(line) {
  var str = "The line is currently:";
  
  if (line.length < 1) {
    return "The line is currently empty."; 
  } else {
    for (var i = 0; i < line.length; ++i) {
      str = str + ` ${i+1}. ${line[i]},`;
    }
  }
  str = str.substring(0, str.length -1);
  return str;
}