var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return ("Welcome, " + name + ". You are number " + katzDeli.length + " in line.");
}

function nowServing (katzDeli) {
  if (katzDeli.length < 1) {
    return "There is nobody waiting to be served!";
  } else{
    return ("Currently serving " + katzDeli.shift() + ".");
  }
}

function currentLine (katzDeli){
  var fancyName = [];
  for (var i = 0; i < katzDeli.length; i++) {
    if (i > 0) {
    fancyName.push(" " + (i + 1) + ". " + katzDeli[i]);
    }  else {
      fancyName.push((i + 1) + ". " + katzDeli[i]);
    }
  }
  
    if (katzDeli.length < 1){
      return ("The line is currently empty.");
    } else {
      return ("The line is currently: " + fancyName);
    }
}