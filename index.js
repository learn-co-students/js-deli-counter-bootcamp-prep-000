/*
1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept the current line of people, `katzDeliLine`, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

2. Build a function `nowServing`. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."`
*/

function takeANumber(line, name) {
 line.push(name)
 return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }else {
    return `Currently serving ${line.shift()}.`
  }
}
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }else {
    var theLine = "The line is currently: "
    for (let i=0; i<line.length; i++){
      theLine += `${i+1}. ${line[i]}`
      if (i != line.length - 1){
        theLine +=  ', '
      }
    }
    return theLine
  } 
}