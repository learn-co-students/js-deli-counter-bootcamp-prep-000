var katzDeli = [];

function takeANumber(array,name){
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing(line){
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else{
    var name = line.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(line){
  if (line.length == 0) {
    return "The line is currently empty."
  }
  else{
    var str = "The line is currently: "
    for (let i = 0; i < line.length; i++){
      str += `${i+1}. ${line[i]}${i==line.length-1 ? '' : ', '}`
    }
    return str
  }
}
