function takeANumber(katzDeliLine, newName){
katzDeliLine.push(newName);
  
return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(x){
  if (x.length === 0){
  return "There is nobody waiting to be served!"
                     } 
  else {
    var newName = x[0];
    x.splice(0,1);
    return "Currently serving " + newName +".";
         }
                              }


function currentLine(x){
  var katzDeliLine =[]
  if (x.length ===0){
  return "The line is currently empty."
}
else {
  for (var i=0; i< x.length; i++){
    katzDeliLine+= (i + 1) + ". " + x[i] + ", "
  }
  katzDeliLine = katzDeliLine.slice(0, katzDeliLine.length-2)
  return "The line is currently: " + katzDeliLine
}
}