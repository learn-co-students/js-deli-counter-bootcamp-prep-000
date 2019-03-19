function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ` + line.length + ' in line.';
}

function nowServing(line) {
  if (line === undefined || line.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else {
    var serving = line[0];
    line.shift();
    return `Currently serving ${serving}.`;
  }
}

function currentLine(line) {
  if (line === undefined || line.length < 1) {
    return "The line is currently empty.";
  }
  else {
    var string = "";
    for (var i = 0; i < line.length; i++){
      if (i < line.length - 1) {
        string = string + `${i+1}. ` + line[i] + ', '; 
      } 
      else {
        string = string + `${i+1}. ` + line[i];
      }
    }
    return `The line is currently: ${string}`;
  }
}