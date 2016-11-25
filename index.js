function takeANumber(katzDeliLine, name){
  var check = katzDeliLine.length+ 1
  return(`Welcome, ${name}. you are number ${check} in line.`)
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return "There is nobody waiting to be served!"
  }
  return(`Currently serving ${katzDeliLine[0]}.`)
}

/*
function currentLine(katzDeliLine){
	if(katzDeliLine === 0){
	return (“The line is currently empty”)
	}
	else return(

}
*/
