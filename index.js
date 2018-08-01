function takeANumber(line, name) {
  var welcomeMessage = "Welcome, " + name + ". You are number "+ (line.length + 1) + " in line.";
  
  line.push(name);
  return welcomeMessage;
}


 function nowServing(line) {
  if(line.length !== 0) {
    var temp = line[0]
    line.shift();
    return "Currently serving " + temp + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}
 function currentLine(line) {
  var hold = "The line is currently: ";
  let i = 0;
  
  if(line.length !== 0) {
    while(i < line.length) {
      hold = hold + (i+1) + ". " + line[i];
      if(line[i+1]) {
        hold = hold + ", "
      }
      i++;
    }
    return hold;
  } else {
    return "The line is currently empty.";
  }
}