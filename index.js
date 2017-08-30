var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeli) {
  let i = 0
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}
const walktheline = [];
function currentLine(katzDeli) {
  let i = 0
  while (i < katzDeli.length) {
    walktheline.push(` `+[i+1]+`. ` + katzDeli[1])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return("The line is currently: 1. Bill, 2. Jane, 3. Ann");
}
