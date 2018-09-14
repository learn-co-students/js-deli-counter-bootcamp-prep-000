var katzDeliLine = [];
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
    let next = katzDeliLine.splice(0,1);
    return `Currently serving ${next}.`
    return katzDeliLine
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length===0){
    return 'The line is currently empty.'
  } else {
    let line = [];
    for(var i=0; i<katzDeliLine.length; i++){
      if(i===0){
        line.push(`${i+1}. ${katzDeliLine[i]}`)  
      }else {
          line.push(` ${i+1}. ${katzDeliLine[i]}`)  
      }
    }
    return `The line is currently: ${line}`
  }
}