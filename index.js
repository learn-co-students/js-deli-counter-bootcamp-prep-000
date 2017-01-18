var katzDeliLine = [];
function takeANumber (katzDeliLine, name){
var numLine;
katzDeliLine.push(name);
var a = katzDeliLine.indexOf(name);
numLine = a+1;
 return "Welcome, "+ name +". You are number "+ numLine +" in line.";

}

function nowServing (katzDeliLine){
    var returnText="";
if (katzDeliLine.length===0){
returnText= "There is nobody waiting to be served!" }
else {

  returnText= "Currently serving "+ katzDeliLine[0]+"."
}
katzDeliLine.shift();
return returnText;
}

function currentLine (katzDeliLine){
  var returnText="";
    var mot ="";
if (katzDeliLine.length===0){
returnText= "The line is currently empty."
}
else {

  for (let i = 0; i < katzDeliLine.length; i++) {
    if(i===katzDeliLine.length-1){
      mot = mot + " "+ (i+1) + ". " + katzDeliLine[i]; }
      else{
    mot = mot + " "+ (i+1) + ". " + katzDeliLine[i]+",";
    }
returnText= "The line is currently:"+ mot
}


}
return returnText
}
