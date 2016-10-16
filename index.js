
function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var serving = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return serving;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
 var line =[]
  if(katzDeliLine.length > 0){
    for (var i = 1; i < katzDeliLine.length+1; i++){
      line.push (` ${i}. ${katzDeliLine[i-1]}`)
    }
  }
    else{
      return "The line is currently empty."
    }
    return `The line is currently:${line}`
}
