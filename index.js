var katzDeli = [];
function takeANumber(array, name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}
function nowServing(array){
  if (array.length>0){
    return `Currently serving ${array.shift()}.`

  }
  else {
    return `There is nobody waiting to be served!`
  }
}
function currentLine(array){
  if (array.length>0){
var newArray=[];
    for (var i=1; i<= array.length; i++){
    newArray.push(` ${i}. ${array[i-1]}`)
}
    return `The line is currently:${newArray}`

  } else {
      return `The line is currently empty.`
    }
  }
