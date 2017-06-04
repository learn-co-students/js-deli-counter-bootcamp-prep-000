function takeANumber(deli,customer) {
  deli.push(customer)
  return "Welcome, " + customer + `. You are number ${deli.length} in line.`
}
function nowServing(deli) {
  if (deli.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
  var cust1 = deli[0]
  deli.shift()
  return "Currently serving " + cust1 + "."
  }
}
function currentLine(deli) {
  if (deli.length === 0) {
    return "The line is currently empty."
  }
  else {
  var string = "The line is currently: "
  var i=0
  while (i<deli.length) {
    var len = deli.length-1
    if(i===len){
    string = string + `${i+1}` + ". " + deli[i]
    i+=1
    }
    else {
      string = string + `${i+1}` + ". " + deli[i] + ", "
      i+=1
    }
  }
  return string
  }
}