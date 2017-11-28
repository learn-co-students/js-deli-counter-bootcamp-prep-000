function takeANumber(katzDeliLine, name) {
var position = katzDeliLine.length+1;
katzDeliLine.push(name);
return  "Welcome, " + name +". You are number "+ position +" in line."
 }



 function nowServing (katzDeliLine, name) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeliLine.shift(name) + ".";
  }
}

 function currentLine (katzDeliLine){
   var line =[]
   for (var i = 0; i < katzDeliLine.length; i++) {
     line.push(" "+[i+1]+". "  + katzDeliLine[i])
   }
   if (katzDeliLine.length === 0) {
     return "The line is currently empty.";
   }
   else {
     return "The line is currently:" +line;
   }
 }
