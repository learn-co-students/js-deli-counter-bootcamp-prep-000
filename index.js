var katzDeli = []
function takeANumber(katzDeliLine, next) {
  katzDeliLine.push(next)
  return (`Welcome, ${next}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return ("There is nobody waiting to be served!")
} else {
  var person = katzDeliLine.shift()
  return (`Currently serving ${person}.`)
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  } else {
    var array = []
     for (let i = 0; i < katzDeliLine.length ;i++) {
       // `${i + 1}. ${katzDeliLine[i]}` == "1. Grace"
      array.push(`${i + 1}. ${katzDeliLine[i]}`)
     }
    //array ['1. Ada', '2. Grace', '3. Morty']
     var string = array.join(', ')
     // string '1. Ada, 2. Grace'
    return "The line is currently: " + string
    }
  }