var katzDeliLine = [];

function takeANumber (katzDeliLine, name){
  katzDeliLine.push("name");
  var pos = katzDeliLine.length;
  return pos;
}

function nowServing(){
  if(katzDeliLine.length>0){
    return katzDeliLine.shift;
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var n = 1;
  var arr = ["The line is currently: "]
  if(katzDeliLine.lenght > 0){
    for(var i = 0; i<katzDeliLine; i++){
      arr.push(n++ + ". " + katzDeliLine[i] + " ")
    }
    return arr
  }
  else{
    return ("The line is currently empty.")
    }
}