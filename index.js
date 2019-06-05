function takeANumber(line, otherKatz) {
  line.push(otherKatz);
  return `Welcome, ${otherKatz}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line[0];
    line.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(line) {
  var array = [];
  if (line.length === 0) {
    return `The line is currently empty.`;
  } else {
    for (var i = 0; i < line.length; i++) {
      array.push(` ${i+1}. ${line[i]}`);
    }
  return `The line is currently:` + array;  
  }
}