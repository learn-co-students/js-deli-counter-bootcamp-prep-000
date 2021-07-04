//var katzDeliLine = [];
function takeANumber (line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}


function nowServing (katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return  "Currently serving " + katzDeliLine.shift() + "."
  }
}




function currentLine (line) {
  var answer = "";
  if (line.length === 0) {
    return "The line is currently empty."
  }
  
 else {
    for(var i = 0; i<line.length; i++ ){
       answer += " " + (i+1) + ". " + line[i] + ",";
   }
    return "The line is currently:" + answer.slice(0, -1);
  }
}