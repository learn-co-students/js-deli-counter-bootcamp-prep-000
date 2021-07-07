function takeANumber(line, name) {
  line.push(name);

  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing (line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line[0];

    line.shift();

    return `Currently serving ${name}.`
  }
}

function currentLine(line) {
  var lineDesc = "The line is currently";

  if (line.length == 0) {
    lineDesc += " empty.";
  } else {
    lineDesc += ": ";

    for (var i = 0; i < (line.length - 1); i++) {
      lineDesc += `${i+1}. ${line[i]}, `;
    }

    lineDesc += `${line.length}. ${line[line.length - 1]}`
  }

  return lineDesc;
}
