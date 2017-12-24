function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line){
  if(i = 0; i < line.length; i++){
  return `Currently serving ${line.shift}`
  }
  return "There is nobody waiting to be served!"
}
function currentLine(){
  return "nothing"
}