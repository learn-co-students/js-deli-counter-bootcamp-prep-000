var katzDeli = []

function takeANumber(katzDeli, customer){

  katzDeli.push(customer)
  return (`Welcome, ${customer}. You are number ${katzDeli.length} in line.`)

}

function nowServing(katzDeli){


  if(katzDeli.length > 0){
      var nowServed=katzDeli.shift()
  }
  else{
    return "There is nobody waiting to be served!"
  }
  return (`Currently serving ${nowServed}.`)
}

function currentLine(line){
  var returnString ="The line is currently: "

  if (line.length == 0){
    return ("The line is currently empty.")
  }
  else{
    for (var i = 0; i < line.length; i++) {
      returnString = returnString + (i+1) +". " + line[i] + ", "
    }
  }
return returnString.slice(0,-2)
}
