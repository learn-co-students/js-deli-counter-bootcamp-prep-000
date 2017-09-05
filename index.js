var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ` + katzDeli.length + ` in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else if (katzDeli.length > 0) {
    return "Currently serving " + katzDeli.shift() + ".";
  }
}

function currentLine(katzDeli) {
  var newArray = [];
  var counter = 1;
  if (katzDeli.length > 0) {
    for (var i = 0; i < katzDeli.length; i++) {
      newArray.push(counter + ". " + katzDeli[i]);
      counter++;
    }
    return "The line is currently: " + newArray.join(', ');
  } else {
    return "The line is currently empty.";
  }
}
