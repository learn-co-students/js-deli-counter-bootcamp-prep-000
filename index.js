var katzDeliLine= [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, "+ name + "." + " You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + ".";
  }else{
    return "There is nobody waiting to be served!";
}
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var i=0;
    while(i<katzDeliLine.length){
      katzDeliLine[i]= i+1 + ". " + katzDeliLine[i];
      i++;
    }return "The line is currently: " + katzDeliLine.join(", ");
}else{
    return "The line is currently empty.";
  }
}
