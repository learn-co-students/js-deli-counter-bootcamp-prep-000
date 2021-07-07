var katzDeliLine = [];

function takeANumber(katzDeliLine, newPersonName){
  katzDeliLine.push(newPersonName);
  
  return `Welcome, ${newPersonName}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!";
    } else {
      var string = `Currently serving ${katzDeliLine[0]}.`;
      katzDeliLine.shift();
      
      return string;
    }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var string = `The line is currently: `;
    
    for(var i = 0; i < katzDeliLine.length; i++){
      string = string + `${i + 1}. ${katzDeliLine[i]}` + (katzDeliLine[i+1] ? ', ' : '');
    }
    
    return string;
  }
}