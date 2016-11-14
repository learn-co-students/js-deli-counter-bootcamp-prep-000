var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  var el = katzDeliLine.shift();

  if(el === undefined) return "There is nobody waiting to be served!";
  else return "Currently serving " + el + ".";
}

function currentLine(katzDeliLine) {
  var str;

  if(katzDeliLine.length <= 0) str = "The line is currently empty.";
 else {
   str = "The line is currently: ";
   for(var i = 0; i < katzDeliLine.length; i++) {
     str += (i+1) + ". " + katzDeliLine[i];
     if(i != katzDeliLine.length - 1) str += ", "
   }
 }

 return str;
}
