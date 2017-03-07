function takeANumber(katzDeliLine,newName){
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length ===0){
    return "The line is currently empty.";
  }else{
    var lineMsg = `The line is currently: 1. ${katzDeliLine[0]}`;
    for (let i=1; i<katzDeliLine.length;i++){
      lineMsg = `${lineMsg}, ${i+1}. ${katzDeliLine[i]}`;
    }
      lineMsg
    return lineMsg;
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}
