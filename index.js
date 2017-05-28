var katzDeli = [];

function takeANumber(line, name) {
  line.push(name)
  var ind = line.indexOf(name)+1
  return `Welcome, ${name}. You are number ${ind} in line.`
}

function nowServing(line) {
  if(line.length > 0) {
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if(line.length > 0) {
    var str = "The line is currently: "
    for(let i = 0; i < line.length; i++) {
      if(i === line.length-1){
        str += `${i+1}. ${line[i]}`
      } else {
      str += `${i+1}. ${line[i]}, `
    }}
    return str
  } else {
    return "The line is currently empty."
  }
}