function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    var status = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
    return status;
  } else {
    "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  
}