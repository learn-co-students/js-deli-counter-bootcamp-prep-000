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
  var holder = "The line is currently: ";
  let j = 0;
  if(line.length !== 0) {
    while(j < line.length) {
      holder = holder + (j+1) + ". " + line[j];
      if(line[j+1]){
        holder = holder + ", "
      }
      j++;
    }
    return holder;
  } else {
    return "The line is currently empty.";
  }
}