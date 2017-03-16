function takeANumber(katzDeli, personName){

  katzDeli.push(personName)
  return "Welcome, "+personName+". You are number "+ katzDeli.length+" in line."

}


function nowServing(array){

  if(array.length === 0){
    return "There is nobody waiting to be served!"
  }

  var memberBeingServed = array.shift()
  return `Currently serving ${memberBeingServed}.`
  
}

function currentLine(array){
  if(array.length === 0){
    return "The line is currently empty."
  }

  var linestatus ="The line is currently: "
for (var i=0;i < array.length;i++){
    if(i === array.length-1){
  
    linestatus = linestatus +`${i+1}. `+array[i]
  }else {
        linestatus = linestatus +`${i+1}. `+array[i]+", "
  }
}
  return linestatus
}