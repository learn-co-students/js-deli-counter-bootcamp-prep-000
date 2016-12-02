var takeANumber = (katzDeli, name) => {katzDeli.push(name); return `Welcome, ${name}. You are number ${katzDeli.length} in line.`}

var nowServing = (katzDeli) => {
  if (katzDeli.length>0) {
  return `Currently serving ${katzDeli.shift()}.`}
  else {return "There is nobody waiting to be served!"}
  }

var currentLine = (katzDeli) => {var array = [];
  for(var i=0; katzDeli.length > i; i++) {array.push(` ${i+1}. ${katzDeli[i]}`)}

  if(katzDeli.length>0) {
  return `The line is currently:${array}`
} return "The line is currently empty."
}
