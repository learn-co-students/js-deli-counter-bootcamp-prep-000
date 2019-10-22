var katzDeliLine = [];

function takeANumber(array, person){
  array.push(person);
  return `Welcome, ${person}. You are number ${array.length} in line.`
}

function nowServing(array){
  if(array.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
      return `Currently serving ${array.shift()}.`;
    }
    return array
}
function currentLine(line) {
  var emptyarray = [];
  if(line.length === 0){
    return "The line is currently empty."
  }
  else{
      for(var i = 0; i < line.length; i++){
      emptyarray.push(` ${i + 1}. ${line[i]}`)
    } 
    return `The line is currently:${emptyarray}`
  }
}