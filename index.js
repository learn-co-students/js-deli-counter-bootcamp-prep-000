
function takeANumber(katzDeliLine,name){
  var length = katzDeliLine.length;
  katzDeliLine.push(name);
 return ("Welcome, " + name + ". You are number " + (length + 1) + " in line.");
}

function nowServing(katzDeliLine){
  var length = katzDeliLine.length;
  if (!length){
    return("There is nobody waiting to be served!");
  }else{
        return ("Currently serving " + katzDeliLine.shift() + ".");
       }
}

function currentLine(katzDeliLine){
  var length = katzDeliLine.length;
  var array = [];
  if (!length){
    return ("The line is currently empty.");
  }else{
    for (let i = 0; i < length; i++) {
      array.push((i + 1) + ". " + katzDeliLine[i]);
       }
  }
  return ("The line is currently: " + array.join(", "));
}
