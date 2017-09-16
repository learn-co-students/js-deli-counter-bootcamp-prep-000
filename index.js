var katzDeli = []

function takeANumber(line, person) {
  let number = line.length + 1;
  line.push(person);
  // return line[number - 1];
  return `Welcome, ${line[number - 1]}. You are number ${number} in line.`;
}

function nowServing(line) {
  if (line.length >= 1) {
    let serving = line.shift();
    return `Currently serving ${serving}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var output = "The line is currently:";
    for (var i = 0; i < line.length; i++) {
      output = `${output} ${i + 1}. ${line[i]}${i + 1 === line.length ? '' : ','}`;
    }
    return output;
  } else {
    return "The line is currently empty.";
  }
}
