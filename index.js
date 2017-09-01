var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  var array = [];
  if (line.length !== 0) {
    for (var i = 0; i < line.length; i++) {
      array.push(" " + `${i + 1}` + ". " + `${line[i]}` + "");
    }
  } else {
    return "The line is currently empty.";
  }
  return "The line is currently:" + `${array}`;
}