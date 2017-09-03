var katzDeli = []
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return ('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.')
}

function nowServing(deliLine){

  if (deliLine.length > 0){
    var serving = ("Currently serving " + deliLine[0]+".")
    deliLine.shift()
    return serving
  }else{
    return 'There is nobody waiting to be served!'
  }
}

var line = []
function currentLine(deliLine){
  if(deliLine.length > 0){
    for(var i = 0; i < deliLine.length; i++){
      line.push(' ' + (i+1) +'. ' + deliLine[i])
    }
    return 'The line is currently:' + line
  }else{
    return 'The line is currently empty.'
  }

}
