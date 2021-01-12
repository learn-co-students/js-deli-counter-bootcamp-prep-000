var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}
function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length ) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

function currentLine(katzDeli) {
  var linelength = [];
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < katzDeli.length; i++) {
      linelength += `${i+1}. ${katzDeli[i]}, `
    }

  return (`The line is currently: ` + linelength.slice(0, -2));
 }
}
