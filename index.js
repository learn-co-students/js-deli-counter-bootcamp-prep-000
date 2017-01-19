
function takeANumber(katzDeliLine, customer){
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(katzDeliLine){
  var status = "The line is currently"
  if(katzDeliLine.length===0){
    status += " empty."
  } else {
    for(var i=0;i<katzDeliLine.length;i++){
      status += `${i===0?':':','} ${i+1}. ${katzDeliLine[i]}`
    }
  }
  return status
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  } else{
    var serving = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${serving}.`
  }
}