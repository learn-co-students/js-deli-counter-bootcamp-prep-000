function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+(katzDeliLine.length)+" in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length==0){
    return "There is nobody waiting to be served!";
  }
  else {
    var text = "Currently serving "+katzDeliLine[0]+".";
    katzDeliLine.shift();
    return text;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length==0){
    return "The line is currently empty.";
  }
  else{
    var text=[];
    for (var num =1;katzDeliLine.length>=num;num++){
      if (num == 1){
        text.push(num+". "+katzDeliLine[num-1]);
      }
      else{
        text.push(" "+num+". "+katzDeliLine[num-1]);
      }
    }
    return "The line is currently: "+ text;
  }
}
