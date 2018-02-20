var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line."
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var nowS = katzDeli[0]
    katzDeli.shift()
    return "Currently serving " + nowS + "."
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length === 0 ){
    return "The line is currently empty."
  } else {
    var numName = []
    for (var i = 0; i < katzDeli.length; i++){
      numName.push(i+1 + ". " + katzDeli[i]) // this gives you an array with number and name.
    }
    
    return "The line is currently: " + numName.join(', ');
  }

}
