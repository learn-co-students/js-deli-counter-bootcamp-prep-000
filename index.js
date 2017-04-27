function takeANumber(katzDeliLine, name){
    var length = katzDeliLine.push(name);
    return `Welcome, ${name}. You are number ${length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
}

function currentLine(katzDeliLine){
    var line = [];
  for(let i = 0; i < katzDeliLine.length; i++){
   line.push(` `+[i+1]+`. ` + katzDeliLine[i]);
 }
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
    return ("The line is currently:" + line);
  }
}


