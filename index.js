
var katzDeliLine=[];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  var retString="Welcome, "+ name+". You are number " + katzDeliLine.length  + " in line.";
  return retString;
}

function nowServing(katzDeliLine){
   var personinLine;
  if (katzDeliLine.length!==0){
     personinLine="Currently serving " + katzDeliLine.shift()+".";
  }else{
    personinLine="There is nobody waiting to be served!";
  }
  return personinLine;
}
function currentLine(katzDeliLine){
  var personsinLine;
  if (katzDeliLine.length!==0){
    personsinLine ="The line is currently: ";
    for (var i=0;i<katzDeliLine.length;i++){
      if(i===0){
        personsinLine= personsinLine+ "" + (i+1) +". " + katzDeliLine[i];
      }else{
         personsinLine  =personsinLine +", " + (i+1) +". " +katzDeliLine[i];
      }
    }
  }else{
    personsinLine="The line is currently empty.";
  }
  return personsinLine;
}
