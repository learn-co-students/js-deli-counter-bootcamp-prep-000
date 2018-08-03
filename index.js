function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing (katzDeli) {
  var i = 0;
  while (i < katzDeli.length) {
    i++;
 }
 if (katzDeli.length === 0) {
   return"There is nobody waiting to be served!" 
 } else {
   return (`Currently serving ${katzDeli.shift()}.`)
 }
}

function currentLine (name) {
  var newName = [];
  var i = 0;
  while (i < name.length) {
    newName.push(` ` + [i+1] + `. ` + name[i]);
    i++;
  }
  if (newName.length === 0) {
    return "The line is currently empty.";
  } else
  return (`The line is currently:` + newName);
}