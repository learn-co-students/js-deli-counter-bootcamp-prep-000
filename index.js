var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    var j = katzDeliLine.length+1;
 return `Welcome, ${name}. You are number ${j} in line.`
}

////////////////////////////////////

function nowServing(katzDeliLine) {

  if (katzDeliLine.length === 0) {
    console.log("There is nobody waiting to be served!")
  } else {
    console.log(katzDeliLine[0])
    katzDeliLine.shift()
  }
  return katzDeliLine
}
