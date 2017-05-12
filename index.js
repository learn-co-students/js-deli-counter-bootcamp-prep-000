var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeli, name) {
  if (katzDeli.length === 0) {
    return ("There is nobody waiting to be served!")
  }
  return (`Currently serving ${katzDeli.shift()}.`);
}

var line = [];

function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
