var katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if ( katzDeli.length === 0 ) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeli[0]
    katzDeli.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeli) {
 if ( katzDeli.length === 0) {
   return "The line is currently empty."
 } else {
   let i = 0
   var lineString = "The line is currently: "
   while ( i < katzDeli.length - 1) {
     lineString += `${i+1}. ${katzDeli[i]}, `
     i++
   }
  lineString += `${i+1}. ${katzDeli[i]}` 
  return lineString
 }
}