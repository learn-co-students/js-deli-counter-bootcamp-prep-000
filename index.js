var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  var i = katzDeliLine.length + 1;
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+i+" in line.";
}

function nowServing(katzDeliLine){
  if(0 === katzDeliLine.length){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving "+katzDeliLine.shift()+".";
  }
}

function currentLine(katzDeliLine){
   if(0 === katzDeliLine.length){
    return "The line is currently empty.";
  } else {
    var str = "";
    for(var i=0; i<katzDeliLine.length; i++){
      var j = i+1;
      if(i == katzDeliLine.length - 1)
        str = str +" "+j+". "+katzDeliLine[i];
      else{
        str = str +" "+j+". "+katzDeliLine[i]+",";
      }
    }
    return "The line is currently:"+str;
  }
}