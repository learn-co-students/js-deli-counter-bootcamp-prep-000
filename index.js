var katzDeli = [];

function takeANumber (katzDeli, name) {
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + katzDeli.length+" in line.";
}

function nowServing (katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var currentName = katzDeli.shift();
    return "Currently serving " +  currentName + ".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    var str = "The line is currently: ";
    for (var i = 0; i < line.length; i++){
      str+=i+1 +". " + line[i];
      if (i+1 !== line.length) {
        str+= ', ';
      }
    }
    return str;
  }
}