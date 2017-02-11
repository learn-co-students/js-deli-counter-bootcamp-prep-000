var katzDeli = []; 

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  let n = 0;
  while (n < katzDeli.length) {
    n++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

var deliLine = [];

function currentLine(katzDeli) {
  let n = 0;
  while (n < katzDeli.length) {
    deliLine.push(` `+ [n+1] +`. `  + katzDeli[n])
    n++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + deliLine);
}