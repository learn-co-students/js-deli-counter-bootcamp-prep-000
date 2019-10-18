var katzDeli = [];
function takeANumber(katzDeliLine, name){
  var spot = katzDeliLine.length;
  var _spot = spot+1;
  katzDeliLine[spot]=name;
  return "Welcome, " + name + ". You are number " +_spot + " in line.";
}

function nowServing(line){
  if(line.length==0){
    return "There is nobody waiting to be served!";
  }
  while(line.length>0){
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line){
  var answer="The line is currently: ";
  if (line.length==0){
    return "The line is currently empty."
  }
  for (let i=0; i<line.length;i++){
    var spot=i+1;
    answer += spot + ". " + line[i] + ", ";
  }
  return answer.substring(0, answer.length - 2);
}
