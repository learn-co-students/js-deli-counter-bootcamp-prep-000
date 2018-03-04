var katzDeli = []
var katzDeliLine =[]

function takeANumber (katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length >=1){
  return `Currently serving ${}.`
  } else {
    return "There is nobody waiting to be served!"
  }
    
  }
}