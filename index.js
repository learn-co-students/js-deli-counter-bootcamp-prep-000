var katzDeli = []
function takeANumber(katzDeli, name){
  katzDeli.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}
function nowServing(katzDeli){
  if (katzDeli.length ===0 ){
    return ("There is nobody waiting to be served!")
  }else {
    var deliLine = katzDeli.shift()
    return ("Currently serving " + deliLine + ".")
  }
}
function currentLine(katzDeli){
  if (katzDeli.length === 0){
    return ("The line is currently empty.")
  }else {
    var line = []
    katzDeli.forEach(function(person,index){
      line.push ((index+1).toString() + ". " + person);
    })
    return ("The line is currently: " + line.join(", "))
  }
}
