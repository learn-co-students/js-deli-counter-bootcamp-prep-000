var line = [];

function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

 function nowServing(line) {
  if(!line.length) {
    console.log("There is nobody waiting to be served!");
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line) {
   var order = [];
  if (!line.length) {
    console.log("The line is currently empty.");
    return "The line is currently empty.";
  } else {
     for (var i = 0; i < line.length; i++) {
       order.push(` ${i+1}. ${line[i]}`);
     }
    return "The line is currently:" + order;
  }
}