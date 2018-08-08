function takeANumber(line, name) {
  // var position = line.length + 1;
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if(line.length < 1){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  if(line.length < 1){
    return "The line is currently empty.";
  } else {
    var i = 0;
    var string = "The line is currently:";
    while(i < line.length){
      string += ` ${i+1}. ${line[i]}`
      if(i < line.length - 1){
        string += ",";
      }
      i++;
    }
    return string;
  }
}