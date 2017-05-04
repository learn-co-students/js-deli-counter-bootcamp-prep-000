var katzDeliLine = []
function takeANumber(array, name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.indexOf(name)+1} in line.`
}
function nowServing(array){
  if(array.length === 0){return "There is nobody waiting to be served!"}
  else {return `Currently serving ${array.shift()}.`}
}
function currentLine(line){
  if(line.length === 0){return "The line is currently empty."}
  else{
    var statement = "The line is currently: "
    for(var i=1; i<line.length+1; i++){
      statement += `${i}. ${line[i-1]}, `
    }
  }
  return statement.slice(0,-2)
}