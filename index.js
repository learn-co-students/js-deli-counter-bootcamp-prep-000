
function takeANumber(line, name) {
  line.push(name)

  return `Welcome, ${name}. You are number ${line.length} in line.`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${line.shift()}.`
};

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  var temp = "The line is currently: "
for( let i = 0; i < line.length;i++){
  
  if (i === line.length - 1)
  temp += `${i+1}. ${line[i]}` 
  else
  temp += `${i+1}. ${line[i]}` + ", "
}
  return temp 


}

