function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, "+name+". You are number "+katzDeliLine.length+" in line."
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return "Currently serving "+katzDeliLine.shift()+"."
  }else {
    return "There is nobody waiting to be served!"
  }
  return
}
function currentLine(line){
  if(line.length > 0){
    var string = "The line is currently: "
    for(var i = 0;i < line.length;i++){
      string += (i+1)+". "+line[i];
      if(i != line.length-1){
        string +=", ";
      }
    }
    return string;
  }else{
    return "The line is currently empty.";
  }
}