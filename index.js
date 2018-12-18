function takeANumber(line,person){
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}
function nowServing(line){
  if (!line.length){
    return "There is nobody waiting to be served!"
  }
  let front = line[0]
  line.shift()
  return `Currently serving ${front}.`
}
function currentLine(line){
  if(!line.length){
    return "The line is currently empty."
  }
  var result = "The line is currently: "
  for (var i = 0; i < line.length;i++){
    result += `${i+1}. ${line[i]}, `
  }
  return result.substring(0,result.length-2)
}