var katzDeliLine = [];

function takeANumber(line, next) {
  line.push(next);
  return (`Welcome, ${next}. You are number ${line.length} in line.`);
}

function nowServing(line) {
  if (line.length > 0) {
    return (`Currently serving ${line.shift()}.`);
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var output = "The line is currently";
  if (line.length === 0) {
    output = output + " empty..";
  }
  else {
    output = output + ":";
    for (let i = 0; i < line.length; i++) {
      output = output + ` ${i+1}. ${line[i]},`;
    }
  }
  return output.slice(0,-1);
}