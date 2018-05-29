var katzDeliLine =[];

takeANumber(katzDeliLine,"Ada");
takeANumber(katzDeliLine,"Nicole")

function takeANumber (katzDeliLine,name){
katzDeliLine.push(name);
return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing (katzDeliLine, name){
if (katzDeliLine.length === 0) {
return ("There is nobody waiting to be served!");
}
else {
var frontofline = katzDeliLine[0];
katzDeliLine.shift();
return ("Currently serving " + frontofline + ".");
}
}

function currentLine (katzDeliLine){
if (katzDeliLine.length === 0){ 
return ("The line is currently empty.");
}

else {
  var otherLine =[];
  for (var i=0; i < katzDeliLine.length; i++){
  
  var n=i+1;
  otherLine.push (" " +n+ ". " + katzDeliLine[i]);
  }
  return ("The line is currently:" + otherLine);
}
}