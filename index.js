function takeANumber(line, name){
  line.push(name);
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 1){
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(arr){
  if(arr.length > 1){
    var customer = [];
    for(let i=0; i<arr.length; i++){
      customer.push(` ${i+1}. ${arr[i]}`)
     }
     return `The line is currently:${customer}`
    } else {
      return "The line is currently empty."
    }
}
