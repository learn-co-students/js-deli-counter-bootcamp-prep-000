var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeli.length) + " in line.";
}

function nowServing(katzDeli){
  var otherDeli = katzDeli[0];
 if (katzDeli.length > 0){
     katzDeli.shift();
    return "Currently serving " + otherDeli  + ".";
 }

else if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!";
  }
}


function currentLine(katzDeli) {
    var otherArray= [];

   if (katzDeli.length > 0)  {
    for (var i = 0; i < katzDeli.length; i++){

     otherArray.push((i + 1) + ". " +  katzDeli[i]);
    }
    return "The line is currently: " + otherArray.join(", ")
}
  else {
    return "The line is currently empty.";
  }
}
