function takeANumber(current,fresh){
  current.push(fresh)
  
  for (var i = 0; i < current.length; i++){
    
    if(current[i] === fresh ){
     i++
      return `Welcome, ${fresh}. You are number ${i} in line.`
    }
  }
   
  
}

function nowServing(katzDeliLine){
  var s = ""
  if(katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  }
s = katzDeliLine[0] 
 katzDeliLine.shift()
 return "Currently serving " +s+ "."
 
}

function currentLine(katzDeliLine){
  var s =""
  var f = 1
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }
  do {
  
  s = s + f + ". " + katzDeliLine[0] + ", "
  katzDeliLine.shift() 
  f++
    
  }
  while (katzDeliLine.length > 1);
    s = s + f + ". " + katzDeliLine[0] 
    
  
  return "The line is currently: " + s
}