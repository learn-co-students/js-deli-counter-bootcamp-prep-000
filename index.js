var takeANumber = (line, person) => {
  line.push(person);
  return "Welcome, " + person + ". You are number " + line.length + " in line.";
}

var nowServing = line => {
  if(line.length > 0) {
    var serving = line[0];
    line = line.splice(0, 1);
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

var currentLine = line => {
  if(line.length > 0) {
    var waiting = '';
    for(let i=1; i<=line.length; i++) {
      waiting += i + '. ' + line[i-1] + ', ';
    }
    return "The line is currently: " + waiting.substr(0, waiting.length-2);
  } else {
    return "The line is currently empty.";
  }
}
