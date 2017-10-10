var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array) {
  if(array.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${array.shift()}.`
  }
}

function currentLine(array){
  if(array.length === 0){
    return "The line is currently empty."
  }
  else{
    var str = "The line is currently:"
    for(let i = 0;i < array.length;i++){
        str = str + ` ${i+1}. ${array[i]}`
        if(i !== array.length - 1){
          str += ','
        }
    }
    return str
  }
}
