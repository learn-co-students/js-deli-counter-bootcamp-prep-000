function takeANumber(katzDeliLine,name){
var katzDeli = [katzDeliLine.push(name)]
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
    if (katzDeliLine.length==0){
        return `There is nobody waiting to be served!`
    }
    return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine){
    if (katzDeliLine.length===0){
        return `The line is currently empty.`
    }

var line = [];
for (var n = 0; n < katzDeliLine.length; n++){
    line.push(` ${n+1}. ${katzDeliLine[n]}`)
  }
    return "The line is currently:"  + line
}
