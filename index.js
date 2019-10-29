function takeANumber(katzDeliLine,name){
  katzDeliLine=katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine} in line.`;
}
function nowServing(katzDeliLine){
  if (katzDeliLine[0]===undefined){
    return "There is nobody waiting to be served!";
  }else{
    var serving = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    return `Currently serving ${serving}.`;
  }
}

function currentLine(katzDeliLine){
  var line = "The line is currently: ";
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }else{
    for (var i=0;i<katzDeliLine.length;i++){
      var number = i + 1;
      if (number===katzDeliLine.length){
      line = line + `${number}. ${katzDeliLine[i]}`;
      }else{
        line = line + `${number}. ${katzDeliLine[i]}, `
      }
    }
    return line;
  }
}