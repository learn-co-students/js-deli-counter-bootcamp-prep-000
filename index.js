var katzDeli= [];
function takeANumber(katzDeli, name) {
katzDeli.push(name);
  return 'Welcome, ' + name + '. You are number ' + (katzDeli.indexOf(name) + 1) + ' in line.';
}

function nowServing(deliLine) {
  if (deliLine[0] === undefined) {
    return "There is nobody waiting to be served!"
  } else {
  var first = deliLine.shift();
  return 'Currently serving ' + first + ".";
}
}

function currentLine(line) {
  var ordered = [], counter;
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i++) {
ordered.push(" " + (i+1) + '. ' + line[i])
    }
    return "The line is currently:" + ordered;
  }
}
