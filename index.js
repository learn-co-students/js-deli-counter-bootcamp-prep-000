function takeANumber(currentQue, newName){
  currentQue.push(newName);
  return `Welcome, ${newName}. You are number ${currentQue.length} in line.`
}

function nowServing(currentQue){
  var tempText = ""
  if(currentQue.length < 1){
    tempText = "There is nobody waiting to be served!"
  }
  else{
    tempText = `Currently serving ${currentQue[0]}.`
    currentQue.shift();
  }
  return tempText;
}

function currentLine(line){
  var tempText = ""
  if(line.length < 1){
    tempText = "The line is currently empty."
  }
  else {
    tempText = "The line is currently: "
    for(let i=0; i < line.length-1; i++){
      tempText = tempText + `${i+1}. ${line[i]}, `
    }
    tempText = tempText + `${line.length}. ${line[line.length-1]}`
  }
  return tempText
}
