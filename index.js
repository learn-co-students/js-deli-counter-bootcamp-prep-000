var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli) {

     if (katzDeli.length === 0 ) {
      return `There is nobody waiting to be served!`;
     }
     else {
       var serving = `Currently serving ${katzDeli[0]}.`
       katzDeli.shift()
       return serving
     }
  }

function currentLine(katzDeli){
  if (katzDeli.length === 0) {
    return `The line is currently empty.`
  }
  else {
    var array = []
    for (let i = 0; i < katzDeli.length; i++){
      var index = i + 1
      var name = katzDeli[i]
      array.push(` ${index}. ${name}`)
    }
  }
  return `The line is currently:${array}`
}


//return `The line is currently: ${katz} ${katzDeli.slice(0)}`;
