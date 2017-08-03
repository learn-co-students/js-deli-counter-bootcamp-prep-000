var katzDeli = [];

function takeANumber(katzDeli,name){
  katzDeli.push(name);
  var lineNumber = katzDeli.length
  return `Welcome, ${name}. You are number ${lineNumber} in line.`;
}

function nowServing(deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  if (deliLine.length > 0){
    var customer = deliLine[0];
    deliLine.shift();
    return `Currently serving ${customer}.`;
  }
}

function currentLine(deliLine){
  if (deliLine.length > 0){
    var line = []
    var answer = 'The line is currently: '
    for(var i =0; i <deliLine.length; i++){
    var lengther = i+1;
    answer += `${lengther}. ${deliLine[i]}` ;
    if(i < deliLine.length-1){
      answer+= ', '
    }
    }
    return answer;
  }
  if (katzDeli.length === 0){
    return "The line is currently empty.";
  }
}
