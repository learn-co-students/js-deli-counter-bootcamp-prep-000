
function takeANumber(katzDeli, name) {
   katzDeli.push(`${name}`);
return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}

function currentLine (katzDeli) {
  console.log("The line is currently:") + katzDeli;
}

function nowServing(katzdeli) {
var katzDeli =[];
var line =[];
  if (katzdeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  for (let i = 0; i < katzDeli.length; i++) {
 line.shift();
}

  return "Currently serving " + katzdeli.shift() + ".";
}

function currentLine(katzDeli) {
var line = [];
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
}
    for (let i = 0; i < katzDeli.length; i++) {
      line.push(` `+[i+1]+`. `  + katzDeli[i])
    }
    return(`The line is currently:` + line);
  }
