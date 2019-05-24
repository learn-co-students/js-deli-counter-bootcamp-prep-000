function takeANumber(katzDeliLine,name) {
katzDeliLine.push(name);
return "Welcome, " + name + ". You are number " +  katzDeliLine.length  + " in line.";
}

function nowServing(x) {
 if (x.length === 0) {
   return "There is nobody waiting to be served!";
 }else {
   var name = x[0];
   x.splice(0, 1);
  return "Currently serving " + name + ".";
 }
}

function currentLine(x) {
  var  newLine = []; 
  if (x.length === 0) {
    return "The line is currently empty.";
  }else {
    for (var i = 0; i < x.length; i++) {
  newLine += (i + 1)+ ". " + x[i] + ", ";
    }
    newLine = newLine.slice(0, newLine.length-2);
    return "The line is currently: " + newLine;
  }
}