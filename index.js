
var marxDeli = []

function takeANumber(marxDeli, name) {
  if (name){
    marxDeli.push(name);
    return(`Welcome, ${name}. You are number ${marxDeli.length} in line.`);
  }
  else {
    return(`Please tell us your name so we can hold your spot in line.`);
  }
}

function nowServing(marxDeli) {
  if (marxDeli.length === 0) {
    return (`There is nobody waiting to be served!`);
  }
  else {
    return (`Currently serving ${marxDeli.shift()}.`);
  }
}

function currentLine(marxDeli) {
  var line = []
  for (var i = 0; i < marxDeli.length; i++) {
    line.push(` ${i+1}. ${marxDeli[i]}`);
  }
  if (marxDeli.length === 0) {
    return (`The line is currently empty.`);
  }
  else {
    return (`The line is currently:${line}`);
  }
}

// Extras

function vip(marxDeli, name) {
if (name){
    marxDeli.unshift(name);
    return(`Hey, ${name}. We'll get you seated ASAP!`);
  }
  else {
    return(`We'll get you seated ASAP!`);
  }
}
