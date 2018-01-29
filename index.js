function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
  return "There is nobody waiting to be served!"
  }
  else{
    var s = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${s}.`
  }
}

function currentLine(line){
  if(line.length===0){
  return "The line is currently empty."
  }
  else{
     var m=[]
     for(var i=0;i<line.length;i++){
     if(i<line.length-1){
     m=m+`${i+1}. ${line[i]}, `
     }
    
     if(i===line.length-1){
      m=m+`${i+1}. ${line[i]}`
      console.log(m)
     } 
     }
     }
  return `The line is currently: ${m}`
}