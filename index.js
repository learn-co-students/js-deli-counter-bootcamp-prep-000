function takeANumber(cr_line,new_name){
  cr_line.push(new_name)
  if (cr_line.length === 1 ){
    return "Welcome, " + new_name + "." + " You are number " + cr_line.length + " in line."
  }
  else
  {
  return "Welcome, " + new_name + "." + " You are number " + cr_line.length + " in line."
  }
}
function nowServing(cr_line){
  var x = ""
  if (cr_line.length > 0){
    x = cr_line.shift()
    return "Currently serving " + x + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}
function currentLine(cr_line){
  var x = []
  if (cr_line.length > 0)
  {
  for(var i = 0 ; i < cr_line.length ; i++){
    x[i] = ((i+1) + '. ' + cr_line[i])
  }
   return "The line is currently: " + x.join(', ') 
  }
  else {
    return "The line is currently empty."
  }
}