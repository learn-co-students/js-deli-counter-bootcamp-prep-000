var katzDeli = [];
function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)
  var n = katzDeliLine.indexOf(name)+1
  return `Welcome, ${name}. You are number ${n} in line.`
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
      var name = katzDeliLine.shift()

      return `Currently serving ${name}.`
  }
  else {
      return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if(line.length<1){
    return "The line is currently empty."
  }
  var result = "The line is currently: "
  for(let i=0; i<line.length ; i++){
    if (i==line.length-1)
      result += `${i+1}. ${line[i]}`
    else
      result += `${i+1}. ${line[i]}, `
  }
  return result
}
