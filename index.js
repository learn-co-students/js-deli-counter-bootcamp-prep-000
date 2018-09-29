function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
  }

function nowServing(katzDeli) {
  if (katzDeli.length < 1) {
  return("There is nobody waiting to be served!")
} else if (katzDeli.length >= 1) {
  return(`Currently serving ${katzDeli.shift()}.`)
  }
}

function currentLine(line) {
    if (line.length === 0) {
    return("The line is currently empty.")
  } else {

    var lineArray = [];
    for (var i = 0; i < line.length; i++);
    while (line.length > 0) {
    line.push(` ` + [i+1] + `. ` + line[i]);
    }
    return lineArray.push(`The line is currently: ` + line);
  }
}
