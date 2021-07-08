function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine){
  if (currentLine.length !== 0) {
    var announcement = `Currently serving ${currentLine[0]}.`;
    currentLine.splice(0,1);
    return announcement;
    
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(currentLine){
  var announcement = ""
  if(currentLine.length !== 0){
    announcement = "The line is currently: "
    for (let i = 0; i < currentLine.length; i++){
      announcement += `${i + 1}. ${currentLine[i]}`;
      if (i < currentLine.length - 1){
        announcement += `, `
      }
    }
  }else{
    announcement = "The line is currently empty.";
  }
  return announcement;
}

