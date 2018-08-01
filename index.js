function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`)
  return "Welcome, " + `${name}` + ". You are number " + `${katzDeli.length}` + " in line."
}

//should accept the current line of people
//return the first person in line
//remove that individual from the line
// If there is nobody in line, it should return "There is nobody waiting to be served!"
function nowServing(katzDeli) {
  if (katzDeli.length >= 1) {
    return ("Currently serving " + `${name}`)
  } else
  return (`There is nobody waiting to be served!`)
}
