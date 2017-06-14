var katzDeli = [];

function takeANumber(katzDeli, person) {
  for (var i = 0; i <= katzDeli.length; i++) {
    katzDeli[i] = person
    var placeInLine = i + 1
    return `Welcome, ${person}. You are number ${placeInLine} in line.`
  }
}

function nowServing() {
  if (katzDeli.length < 1) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${katzDeli[0]}.`
  }
}

function currentLine() {
  if (katzDeli.length < 1) {
    return 'The line is currently empty.'
  } else {
    return `The line is currently: ${katzDeli[0]}`
  }
}
/*
function theBeatlesPlay (musicians, instruments) {
  var whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat[i] = (`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat
}
*/
