function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `You are number ${katzDeliLine.length + 1}  in line.`;
}

var i = 0

function newTakeANumber(katzDeliLine){
  i += 1
  return `You are number ${i} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var current = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${current}.`;
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var text = '';
    for(var i = 0; i < katzDeliLine.length; i++){
      text += `${i+1}. ${katzDeliLine[i]}`;
      if(i != katzDeliLine.length - 1){
        text += ', ';
      }
    }
    text = `The line is currently: ${text}`;
    return text
  }else{
  	return "The line is currently empty."
  }
}