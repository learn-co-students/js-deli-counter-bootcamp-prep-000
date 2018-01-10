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
  var original = output;
  for (let i = 0; i >= line.length; i++) {
    if (i === 0) {
      output = output + ":";
    }
    output = output + ` ${i+1}. ${line[i]}`
    if (i !== line.length - 1) {
         output = output + "," ;
    }
  }
  if (output === original) {
    output = output + " empty.";
  }
  return output;
}