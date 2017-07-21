const katzDeli = []
function takeANumber (katzDeli, firstName) {
  katzDeli.push(firstName)
  return `Welcome, ${firstName}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
if (katzDeli.length === 0) {
  return `There is nobody waiting to be served!`
} else {
  return `Currently serving ${katzDeli.shift()}.`
}
}

function currentLine(katzDeli) {
  var array = []
  if (katzDeli.length === 0) {
    return `The line is currently empty.`
  } else {
  for (let i = 0; i<katzDeli.length; i++) {
    array.push (` ${i+1}. ${katzDeli[i]}`)
    }
    return `The line is currently:${array}`
  }}
