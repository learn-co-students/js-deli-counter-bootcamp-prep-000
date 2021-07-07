var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`);

  return "Welcome, " +`${name}`+". You are number " +`${katzDeliLine.length}`+ " in line.";
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length!==0){
    return "Currently serving " +katzDeliLine.shift()+".";
    katzDeliLine.shift();
  }
  else{
    return "There is nobody waiting to be served!"
  }
}
function currentLine(katzDeliLine){
  var newLine = [];
  var output = "The line is currently empty.";
  for(var i=0; i<katzDeliLine.length; i++){
      if(katzDeliLine.length===0){
      output = "The line is currently empty.";
      }
     else{
     newLine[i] = ` ${i+1}. `+ katzDeliLine[i];
     output = "The line is currently:" +newLine;
     }
  }
  return output;
}
