function takeANumber (katzDeli,name){
  var position = katzDeli.length+1 
  katzDeli.push (name);
 return ("Welcome," + " "+name +"."+ " "+ "You are number" + " "+ position + " "+"in line.");
}

function nowServing(katzDeliLine){
if (katzDeliLine.length === 0){
  return("There is nobody waiting to be served!");
}
var name = katzDeliLine.shift();
return ("Currently serving"+" "+ name+".");
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
  return ("The line is currently empty.");
  }
  var currentLine=[];
 for (var i = 0; i < katzDeliLine.length; i++){
     currentLine.push(i + 1 + "."+ katzDeliLine[i]);
 }
     return ("The line is currently: " + currentLine.join(", "));
}