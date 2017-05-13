function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name)+ 1) + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine){
  let line = 'The line is currently: ';
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
    for(let i = 0; i < katzDeliLine.length; i++){
      line += (i+1) + ". " + katzDeliLine[i] + ", ";
    }
  }
  line = line.substring(0,line.length-2);
  return line;
}
