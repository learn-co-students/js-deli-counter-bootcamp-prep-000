var katzDeline = [];

function takeANumber(katzDeline, name) {
  katzDeline.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeline.length} in line.`);
}

function nowServing(katzDeline) {
  let i = 0;
  while (i < katzDeline.length) {
    i++;
  }
  if (katzDeline.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeline.shift()}.`);
}	

var line = [];

function currentLine(katzDeline) {
  let i = 0;
  while (i < katzDeline.length) {
    line.push(` `+[i+1]+`. `  + katzDeline[i])
    i++;
  }
  if (katzDeline.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}


