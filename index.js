var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  return katzDeli.length<1 ? "There is nobody waiting to be served!" : `Currently serving ${katzDeli.shift()}.`
}

function currentLine(katzDeli) {
  if (katzDeli.length<1){
    return "The line is currently empty."
  }else{
    var sentence = "The line is currently:"
    for (var i=1;i<=katzDeli.length;i++){
      if (i<katzDeli.length){
        sentence=sentence+` ${i}. ${katzDeli[i-1]},`
      } else{
        sentence=sentence+` ${i}. ${katzDeli[i-1]}`
      }
    }
    return sentence
  }
}
