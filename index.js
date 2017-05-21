var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return 'Welcome, '+name +'. You are number '+katzDeliLine.length +' in line.'
}

function nowServing(deliLine){
  if (deliLine.length < 1) {
    return "There is nobody waiting to be served!"
  }
  else {
    var KatzLine = deliLine[0]
    deliLine.shift();
    return "Currently serving " +KatzLine +"." 
    
  }
}
function iteration(deliLine){
  var arrayNew = []
  var i
  for (i = 0; i < deliLine.length-1; i++ ) {
    arrayNew[i] = i+1 +". " +deliLine[i] +", "
  }

  arrayNew[i] = i+1  +". " +deliLine[i]
  return arrayNew.join('');
}

function currentLine(deliLine) {
  if (deliLine.length < 1) {
    return "The line is currently empty."
  }
  else {
    return "The line is currently: " + iteration(deliLine)
  }
  
  
}