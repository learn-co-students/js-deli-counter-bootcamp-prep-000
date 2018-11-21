function takeANumber(line, newPerson) {
    line.push(newPerson)
    var welcome = `Welcome, ${newPerson}. You are number ${line.length} in line.`
    return welcome
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var serving = line.shift()
    return `Currently serving ${serving}.`
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineCopy = [];
    var i = 0;
    do {
      lineCopy.push(` ${i+1}. ${line[i]}`);
      var i = i+1;
    }
    while (i < line.length);
    return "The line is currently:" + `${lineCopy.toString()}`;
  }
  else {
    return "The line is currently empty."
  }
}

// function currentLine(line) {
//  if (line.length > 0) {
//    var listStart = "The line is currently:"
//    for (i = 0; i < line.length; i++) {
//      listStart += (` ${i+1}. ${line[i]},`)
//    }
//    return listStart
//  }
//  else {
//    return "The line is currently empty."
//  }
// }
