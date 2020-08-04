var katzDeli=[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array){
  if (array.length==0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${array.shift()}.`;
  }
}

function currentLine(array){
  if (array.length===0){
    return "The line is currently empty."
  }
  var line="The line is currently: "
  for (var i =0; i<array.length; i++){
    line+=(i<array.length-1 ? `${i+1}. ${array[i]}, ` : `${i+1}. ${array[i]}` )
  }
  return line
}
