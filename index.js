var katzDeliLine = []

function takeANumber(katzDeliLine, name){
var lengthplusone = katzDeliLine.length + 1
var welcome = `Welcome, ${name}. You are number ${lengthplusone} in line.`
katzDeliLine.push(name)
return welcome}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var serving = `Currently serving ${katzDeliLine[0]}.` 
    katzDeliLine.shift()} else {
      serving = "There is nobody waiting to be served!"}
  return serving
}

function currentLine(katzDeliLine){
  
  if(katzDeliLine.length > 0){
    for(var i = 0; i < katzDeliLine.length - 1; i++){
      var line1 = `The line is currently:`
      if(i === 0){var line2 = ` ${i + 1}. ${katzDeliLine[i]},`} else{var line2 = line2 + ` ${i + 1}. ${katzDeliLine[i]},`}
      var line3 = ` ${i + 2}. ${katzDeliLine[katzDeliLine.length - 1]}`
      var line = line1 + line2 + line3
    }
  } 
  else{line = "The line is currently empty."}
return line}