function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  else{
    let names = "";
    for(let i = 0; i < katzDeliLine.length; i++){
      if(i%2 === 0 && i !== 0){
        names += " " + (i+1) + ". " + katzDeliLine[i];
      }
      else{
        names += " " + (i+1) + ". " + katzDeliLine[i] + ",";
      }
    }
    return `The line is currently:${names}`;
  }
}