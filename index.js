
function takeANumber(deliLine,name){
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine){
  var firstCustomer = deliLine[0];
  deliLine.shift();
  if (deliLine.length===0){
    return "There is nobody waiting to be served!";
  }
  else{ 
    return `Currently serving ${firstCustomer}.`;
  }
}

function currentLine(deliLine){
  var textDisplay = [];
  var baseText = "The line is currently:"
   if (deliLine.length===0){
    return "The line is currently empty.";
  }
  else{
  for (var i=0; i<deliLine.length; i++){
    textDisplay[i] = ` ${i+1}. ${deliLine[i]}`;
    }
    return baseText + textDisplay;
  }
}
