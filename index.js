var katzDeli = []
var katzDeliLine =[]

function takeANumber (katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`
}