//var katzDeli = []

function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name)

  var katzDeli = `Welcome, ${katzDeliLine[katzDeliLine.length - 1]}. You are number ${katzDeliLine.length} in line.`

  // console.log(katzDeli);
  return katzDeli
}
function nowServing(deliLine) {

 if(deliLine.length === 0) {
   return 'There is nobody waiting to be served!'
 } else {
return `Currently serving ${deliLine.shift()}.`
 }
}
function currentLine(line) {
  if(line.length === 0) {
    return 'The line is currently empty.'
  } else {
    var string1 = 'The line is currently: '
  for(let i = 0; i < line.length; i++) {
   string1 += `${i + 1}. ${line[i]}, `
  }
  string1 = string1.slice(0, -2)
 }
 return string1
}
