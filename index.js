var katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var line = katzDeli[0] /*reassigned array to keep intact since I will be shifting before returning array.length and we need array.length to reflect current index position and not position after its been shifted*/
    katzDeli.shift()   /*when code reaches return it stops running so i shifted before returning*/
    return `Currently serving ${line}.`
  } else if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length > 0) {
    var announcement = "The line is currently: "
    for (var i = 0; i < katzDeli.length; i++) {
      announcement = announcement + `${i+1}. ${katzDeli[i]}, ` /*remember iteration applies everytime the loop runs*/
    }
    return announcement.slice(0, announcement.length -2)
  } else {
    return 'The line is currently empty.'
  }
}
