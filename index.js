var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
    } else {
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0){
    return `The line is currently empty.`;
  } else {
   
    var newK = [];
    for (var i = 0; i < katzDeliLine.length; i++){
      var b = i+1;
      var str = b + ". "+ katzDeliLine[i];
     
      newK.push(str);
    }
    return `The line is currently: ${newK.join(', ')}`;
    }
  
}