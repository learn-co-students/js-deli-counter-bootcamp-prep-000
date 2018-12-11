function takeANumber(katzDeliLine, newName){
 katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine === undefined || katzDeliLine.length ===0){
    return "There is nobody waiting to be served!"
  }
  else{
    return "Currently serving "+katzDeliLine.shift()+"."
  }
}

function currentLine(katzDeliLine){
  var a = [];
  if(katzDeliLine.length ===0){
    return "The line is currently empty."
  }
  else{
    for(var i = 0; i < katzDeliLine.length; i++){
      if(i===0){
        a.push((i+1)+". "+katzDeliLine[i])
      }
      else{
        a.push(" "+(i+1)+". "+katzDeliLine[i])
      }
    }
    return "The line is currently: "+a
  }
}