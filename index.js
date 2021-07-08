var katzDeli = [];

function takeANumber (x, y) {
    x.push(y);
  return `Welcome, ${y}. You are number ` +  (x.indexOf(y) + 1) + ' in line.'
}

function nowServing (x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var next = x[0];
    x.shift(next);
    return ('Currently serving ' + next + '.');
  }
}

function currentLine (x) {
  if (x.length === 0) {
    return "The line is currently empty.";
  }
  else {
    return "The line is currently:" + ` 1. ${x[0]},` + ` 2. ${x[1]},` + ` 3. ${x[2]}`;
      }
}
