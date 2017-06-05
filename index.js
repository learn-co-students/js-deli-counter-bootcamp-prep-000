var katzDeliLine=[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position= parseInt(katzDeliLine.indexOf(name))+1;
  return "Welcome, "+name+". You are number "+position+" in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    var frontOfLine=katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving "+frontOfLine+".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  var theLine=[];
  if(katzDeliLine.length<1){
    return "The line is currently empty.";
  }else{
    var i=1;
    theLine.push("1. "+katzDeliLine[0]);
    while(i<katzDeliLine.length){
      theLine.push(" "+(i+1)+". "+katzDeliLine[i]);
      i++;
    }
   return "The line is currently: "+theLine;
  }
}
