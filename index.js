var Currentline=[]
function takeANumber(katzDeliLine,name){
    katzDeliLine.push(name)
  var position = katzDeliLine.length 
return (`Welcome, `+ name +`. You are number `+ position +` in line.`) 
}

function nowServing (katzDeliLine){
  while (katzDeliLine.length>0){
        return (`Currently serving `+ katzDeliLine.shift()+`.`)
    
      }
     return "There is nobody waiting to be served!"
}

var line=[]
function currentLine(katzDeliLine){
  for (let i=0; i<katzDeliLine.length;i++){
    line.push(` `+[i+1]+`. `+katzDeliLine[i])
    
  }
  if (katzDeliLine.length===0){
    return (`The line is currently empty.`)}
    else{
      return (`The line is currently:`+ line )
      
    }
  }

  
  