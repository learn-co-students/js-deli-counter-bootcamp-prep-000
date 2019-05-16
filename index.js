function takeANumber(deli_line, name) {
  deli_line.push(name);
  return `Welcome, ${name}. You are number ${deli_line.length} in line.`
}

function nowServing(deli_line) {
  if (deli_line.length > 0) {
    return `Currently serving ${deli_line.shift()}.`
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(deli_line) {
  let string = "The line is currently:"
  if (deli_line.length > 0) {
    for (var i = 0; i < deli_line.length; i++) {
      if (i == deli_line.length - 1) {
        string += ` ${i + 1}. ${deli_line[i]}`
      } else {
      string += ` ${i + 1}. ${deli_line[i]},`
    }
    }
  } else {
    string = "The line is currently empty.";
  }
  return string;
}
