var katzDeli = [];

function takeANumber(katzDeli, newCustomer){
  katzDeli.push(newCustomer)
  var yourNumber = katzDeli.length
  return "Welcome, " + katzDeli[yourNumber - 1] + ". You are number " + katzDeli.length + " in line."
}

function nowServing(katzDeli){
  if (katzDeli.length>0){
    var nextCustomer = katzDeli[0]
    katzDeli.splice(0,1)
    return ("Currently serving " + nextCustomer + ".")
  }
  else {
      return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli){
  if(katzDeli.length>0){
    var output = "The line is currently: "
    var n = 1
    for(let i = 0; i<katzDeli.length; i++){
        if(i<katzDeli.length-1) {
          output += (n + "." + " " + katzDeli[i] + ", ")
        }
        else if(i===katzDeli.length-1){
        output += (n + "." + " " + katzDeli[i])
        }
        n++

    }
    return output;
  }
  else{
    return "The line is currently empty."
  }
}
