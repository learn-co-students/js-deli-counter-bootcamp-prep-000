var katzDeli = [];
function takeANumber (katzDeli, persName){
  katzDeli.push(`${persName}`);
  return(`Welcome, ${persName}. You are number ${katzDeli.length} in line.`);
}

function nowServing (katzDeli){
  if (katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  }
  var first = katzDeli[0];
  katzDeli.shift();
  return "Currently serving "+ first+".";
}
var line = [];
function currentLine(katzDeli) {
 let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i]);
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
