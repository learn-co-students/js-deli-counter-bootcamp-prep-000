var katzDeli = [];
function takeANumber(katzDeliLine, name){
var place = katzDeliLine.length + 1;
 katzDeliLine.push(name);
 return "Welcome, " + name + ". You are number " +place+ " in line.";
}

function nowServing(katzDeliLine){
  var hold = katzDeliLine[0];
  if  (katzDeliLine.length === 0){
    return"There is nobody waiting to be served!";
  }
  else {
    katzDeliLine.shift();
    return "Currently serving "+ hold+".";
  }
}

function currentLine(katzDeliLine){
 var ammount = katzDeliLine.length;
 var lineArray = [];
    if  (katzDeliLine.length === 0){
        return "The line is currently empty.";
    }
    else {
       for (var i = 0; i < ammount; i++){
         var place = i+1;
         lineArray.push(" " +place + ". "+katzDeliLine[i]);
       }
  }
  return "The line is currently:" + lineArray;
}