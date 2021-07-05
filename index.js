function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!";
  }
  var first = katzDeliLine.shift();
  return `Currently serving ${first}.`;
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  var str = `The line is currently: `;
  for(var i = 1; i <= katzDeliLine.length ; i++){
    if(i == katzDeliLine.length){
      str = str + `${i}. ${katzDeliLine[i-1]}`;
    }
    else{
    str = str + `${i}. ${katzDeliLine[i-1]}, `;
    }
  }
  
  return str;
}