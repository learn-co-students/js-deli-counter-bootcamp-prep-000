function takeANumber(deliLine, name){
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}
function nowServing(deliLine){
  if(deliLine > []){
    return `Currently serving ${deliLine.shift()}.`
  }
  else{ 
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(deliLine){
  var line = []
  if(deliLine > []){
for (var i = 0; i < deliLine.length; i++){
  line.push(` ${i + 1}. ${deliLine[i]}`)
}
  return 'The line is currently:' + line}
else{
  return 'The line is currently empty.'}
}


  

