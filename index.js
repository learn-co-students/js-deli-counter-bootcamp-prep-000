var katzDeli = [ ]

/* function takeANumber(katzDeliLine, name) {
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.indexOf(name)  + " in line."
} */

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return("There is nobody waiting to be served!")
  } else {
      return "Currently serving " + line.shift() + "."
  }
}
//How come no loop here?


function currentLine(line) {
  var katzDeliLine = [];
  let i = 0;
  while (i < line.length) {
    katzDeliLine.push(" " + (i + 1) + ". " + line[i]);
    i++;
  } if (line.length === 0) {
    return "The line is currently empty."
  } else {
    return "The line is currently:" + katzDeliLine
  }
}

/* function currentLine(line) {
  var katzDeliLine = [];
  if (line.length === 0) {
    return ("The line is currently empty.")
  } else {
    for (var i = 0; i < line.length; i++) {
      katzDeliLine += (i + 1) + ". " + line[i] + ", "
    }
    return "The line is currently: " + katzDeliLine
  }
} */
//Above: how to remove the comma