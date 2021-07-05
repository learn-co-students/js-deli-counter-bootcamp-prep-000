function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length>0) {
    var current = line[0];
    line.shift();
    return `Currently serving ${current}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if(line.length===0) {
    return "The line is currently empty.";
  }  // no need to use else here - thx, return
  var line_names = "The line is currently: ";
  for(var i=1; i<=line.length; i++) {
    line_names += `${i}. ${line[i-1]}`;
    if(i < line.length) {
      line_names += ", ";
    }
  }
  return line_names;
}
