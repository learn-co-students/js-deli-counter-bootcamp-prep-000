var katzDeli = [];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ` + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine[0] + "."
    //how do I return the phrase with the first element and then shift the array?
    katzDeliLine.slice(1)
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {

}
