

function takeANumber(lineName, cusName){
  lineName.push(cusName)
  return `Welcome, ${cusName}. You are number ${lineName.length} in line.`
}

function nowServing(lineName){
  
  if(lineName.length > 0){
    var cusRemoved = lineName.shift()
    return `Currently serving ${cusRemoved}.` 
  }
   else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(lineName){
  var listReturn = []
  for (var i = 0; i < lineName.length; i++){
    listReturn.push(` ${i + 1}. ${lineName[i]}`)
   }
  
  if (lineName.length === 0){
   return "The line is currently empty."
 } else {
   return `The line is currently:${listReturn}`
 }
}
