var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
  return `Currently serving ${katzDeliLine.shift()}.`;
 }
}

var line = [];

function currentLine(katzDeli) {
let i = 0;
while (i < katzDeli.length) {
  line.push(` `+[i+1]+`. `+ katzDeli[i])
  i++;
}
if(katzDeli.length === 0) {
  return "The line is currently empty.";
} else {
  return(`The line is currently:` + line);
}
}
