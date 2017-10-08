var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${katzDeliLine[katzDeliLine.length-1]}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  var serving = katzDeliLine[0];
  katzDeliLine.splice(0, 1);
  if(katzDeliLine.length>0){
    return `Currently serving ${serving}.`;
  }else if(katzDeliLine.length===0){
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine){
  var i = 0;
  if(katzDeliLine.length>0){
    var lineString = "The line is currently:"
    for(i=0;i<katzDeliLine.length;i++){
      if(i===katzDeliLine.length-1){
        lineString = lineString + ` ${i+1}. ${katzDeliLine[i]}`
      }else{
      lineString = lineString + ` ${i+1}. ${katzDeliLine[i]},`
      }
    }
  }else{
    lineString = "The line is currently empty."
  }
  return lineString;
}
