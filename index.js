function takeANumber(deli, name){
  deli.push(name)
  return "Welcome, " + name + ". You are number " + (deli.length ) + " in line."
}
function nowServing(deli){
  if(deli.length === 0){
  return "There is nobody waiting to be served!"
  }else{
    
  return "Currently serving " + deli.shift() + "."
}
}
function currentLine(deli){
  if(deli.length === 0){
    return "The line is currently empty."
  }else{
  var statement = "The line is currently:" 
  for(var i = 0; deli.length < i; i++){
    statement = statement.concat((i + 1) + ". " + deli[i])
    console.log(statement)
  }
  return statement
  }
}
