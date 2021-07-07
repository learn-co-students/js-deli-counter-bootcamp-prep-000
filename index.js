var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var current = line.shift();
    return `Currently serving ${current}.`;
  }
}

function currentLine(line) {
  var status = "The line is currently: "
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
      for (var i = 0; i < line.length; i++) {
        if (i === line.length-1) {
          status += `${i+1}. ${line[i]}`;
        } else {
          status += `${i+1}. ${line[i]}, `;
        }
      }
  }
  return status;
}



