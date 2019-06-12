function takeANumber(katzDeliLine, name){
  var i = katzDeliLine.length
      katzDeliLine.push(name)
      return (`Welcome, ${name}. You are number ${i+1} in line.`)
}


function nowServing(katzDeliLine){
  var result

  if(katzDeliLine.length === 0) {return ("There is nobody waiting to be served!")}
  else {
    var next = katzDeliLine[0]
  katzDeliLine.shift(1)
  return (`Currently serving ${next}.`)}
}

function currentLine(katzDeliLine){
var line
if(katzDeliLine.length ===0){ line = ("The line is currently empty.")}
else{
  line = (`The line is currently:`)
  for (var i=0;i<katzDeliLine.length;i++){
line = line + (` ${i+1}. ${katzDeliLine[i]},`)}
line = line.slice(0,-1)
  
}
return line

}