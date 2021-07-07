function takeANumber(katzDeliLine, name){
  var position = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${position} in line.`)
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  } else
  var annoucement = `Currently serving ${katzDeliLine[0]}.`
  katzDeliLine.shift()
  return annoucement
}


function currentLine(katzDeliLine){
	if(katzDeliLine.length === 0){
	return ("The line is currently empty.")
	}
	else {
    var current = "The line is currently: "
    for(var i = 0; i < katzDeliLine.length; i++){
      if(i === (katzDeliLine.length-1)){
        current += `${i+1}. ${katzDeliLine[i]}`
      } else{
        current += `${i+1}. ${katzDeliLine[i]}, `
      }
    }
    return current
  }
}
