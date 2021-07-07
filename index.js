function takeANumber(daLine, pName){
  daLine.push(pName);
  return `Welcome, ${pName}. You are number ${daLine.length} in line.`;
}

function nowServing(theLine){
  if (theLine.length > 0){
    return `Currently serving ${theLine.shift()}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(curLine){
  if(curLine.length > 0){
    var peeps = [];
    for (let i = 0; i < curLine.length; i++){
      peeps.push(` ${i + 1}. ${curLine[i]}`);
    }
  }else{
      return "The line is currently empty.";
    }
    return `The line is currently:${peeps}`;
}