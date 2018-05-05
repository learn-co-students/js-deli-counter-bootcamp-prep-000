var katzDeli = [];

function takeANumber(katzDeliLine,newName){
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  var next=katzDeliLine.shift();
  if (next) {
      return `Currently serving ${next}.`;
  }else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length==0){
    return "The line is currently empty."
  }
  else{
    var line="The line is currently: ";
    for(var i=0;i<katzDeliLine.length;i++){
      line=line+`${i+1}. ${katzDeliLine[i]}`
      if(i==katzDeliLine.length-1){
        return line
      }
      line=line+", ";
    }
    return line
  }
}
