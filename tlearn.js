var katzDeliLine = []

/*

function takeANumber(katzDeliLine, name) {
  
  var i = 0
  
  do {
    katzDeliLine.push(name)
    console.log(`Welcome, ${katzDeliLine[i]}. You are number ${i + 1} in line.`)
    i += 1
  } while (i > katzDeliLine.length)
  
}


function takeANumber(katzDeliLine, name) {
  var i = 0
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine.push(name)
  } return console.log(`Welcome, ${katzDeliLine[i]}. You are number ${katzDeliLine.length} in line.`)
}


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length - 1} in line.`)
  return katzDeliLine
}

takeANumber(katzDeliLine, "Aga")
takeANumber(katzDeliLine, "Pawel")

*/

var line = ["A", "B", "C", "D", "E"]

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
for (i = 0; i < cars.length; i++) {
  text += i + ". " + cars[i] + " ";
}
console.log(text.substring(0, text.length - 2))