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
    var index = 0;
    var message = [];
    while (index < katzDeli.length) {
      message.push(` ${index+1}. ${katzDeli[index]}`);
      index++;
    }
    return `The line is currently:${message}`;
  }
}