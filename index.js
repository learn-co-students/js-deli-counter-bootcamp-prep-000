function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing (katzDeliLine){
  if (katzDeliLine.length > 0){
    var person = katzDeliLine.shift()
    return `Currently serving ${person}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(array){
  if (array.length > 0){
 var message = "The line is currently: " 
   for (let i = 0; i < array.length; i++){
     message += `${i + 1}. ${array[i]}, `
   }
   return message.slice(0, -2)
  } else {
    return "The line is currently empty."
  }
}