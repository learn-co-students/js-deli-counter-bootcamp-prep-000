var katzDeli = [];

function takeANumber(katzDeli, name) {
  var position = katzDeli.length + 1;
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
    var message = [];
    for (var i = 0; i < katzDeli.length; i++) {
      message.push(` ${i+1}. ${katzDeli[i]}`);
    }
    return `The line is currently:${message}`;
  }
}