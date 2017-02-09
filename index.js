var katzDeli = [];

var katzDeliLine=[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name)+1;
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine){
 while(katzDeliLine[0]) {
   var first = katzDeliLine.shift();
   return `Currently serving ${first}.`;
   }
   return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length>0){
    return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
  }else {
    return "The line is currently empty."
  }
}
