var katzDeli = []

function takeANumber(katzDeli,name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  var l = katzDeli.length
  if(l>0) {
    return `Currently serving ${katzDeli.shift()}.`
  }
  else {
    return `There is nobody waiting to be served!`
  }
  }

  function currentLine(katzDeli) {
    var l = katzDeli.length
    var array = []
    if(l>0) {
      for(var i=0;i<l;i++) {
        array.push(` ${i+1}. ${katzDeli[i]}`)
      }
      return `The line is currently:${array}`
    }  
  else {
    return `The line is currently empty.`
  }
}
