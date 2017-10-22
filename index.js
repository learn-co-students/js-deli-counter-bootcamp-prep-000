var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);

  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}

function nowServing(arr){
  if (arr.length > 0){
    var serving = arr.shift();
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var str = "The line is currently:";

  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      str += " " + (i+1) + ". " + line[i] + ",";
    }
  } else {
    return "The line is currently empty.";
  }
  
  return str.slice(0, -1);
}
