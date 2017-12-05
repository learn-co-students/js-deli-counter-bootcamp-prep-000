var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  katzDeli;
  var i;
  for (i = 0; i < katzDeli.length; i++) {
    return ("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
  }
}

function nowServing(katzDeli) {
  katzDeli;
  var x = katzDeli.length;
  
  if (x > 0) {
    
    var name = `${katzDeli[0]}`;
    katzDeli.shift();
    katzDeli;
    return ("Currently serving " + name + ".");
    
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeli) {
  
  if (katzDeli < 1) {
    return "The line is currently empty.";
  }
  
  var begin = "The line is currently: ";
  for (var i = 0; i < katzDeli.length - 1; i++) {
    var place = i + 1;
    begin += place + ". " + katzDeli[i] + ", ";
  }
  begin += place + 1 + ". " + katzDeli[i];
  return begin;
  
}
