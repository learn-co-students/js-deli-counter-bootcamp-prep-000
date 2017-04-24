var katzDeliLine = [];

//should accept the current line of people and person's name
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
  //return person's posiiton in line, not index!
  //console.log(katzDeliLine);
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length > 0) {
    ("Currently serving " + katzDeliLine.shift() + ".")
  } else {
    return ("There is nobody waiting to be served!")
  }

  //Display "There is nobody waiting to be served!" if noone is in line
}
