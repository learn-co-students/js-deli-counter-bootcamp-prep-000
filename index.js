var katzDeli = [];

function takeANumber(line, person){
    line.push(person)
    return "Welcome, "+person+". You are number "+ (line.indexOf(person)+1) +" in line."

}

function nowServing(array){
  if (array.length ===0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${array.shift()}.`}
}

function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty."
  } else {
    const newlist = []
    for (let i=0, l=array.length; i <l; i++){
      newlist.push(`${i+1}. ${array[i]}`)
    }
    return "The line is currently: " + newlist.join(", ")
  }
}
