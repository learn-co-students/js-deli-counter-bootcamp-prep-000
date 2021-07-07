function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`;
}

function nowServing(line) {
  return line.length > 0 ? `Currently serving ${line.shift()}.` : "There is nobody waiting to be served!";
}

function currentLine(line) {
  if (line.length == 0) {
    return  "The line is currently empty.";
  }

  var str =  "The line is currently:";
  for (let i = 0; i < line.length; i++) {
    str += ` ${i+1}. ${line[i]}${i < line.length - 1 ? ',' : ''}`
  }
  return str;
}
