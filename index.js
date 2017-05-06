var katzDeli = [];

function takeANumber(deliLine, name) {
  deliLine.push(name);
  let num = deliLine.length;
  return 'Welcome, ' + name + '. You are number ' + num + ' in line.';
}
function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    let cus = deliLine.shift();
    return 'Currently serving ' + cus + ".";
  }
}
function currentLine(deliLine) {
  let line = deliLine.length;
  if (line === 0) {
    return "The line is currently empty."
  }
  else {
    let str = deliLine.map((peep) => {
      return (deliLine.indexOf(peep) + 1) + '. ' + peep;
    });
    return "The line is currently: " + str.join(", ");
  }
}