function takeANumber(array, name){
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length +" in line."
}
function nowServing(array){
  if (array.length < 1){
    return "There is nobody waiting to be served!"
  }
  else{
  return "Currently serving " + array.shift() + ".";
  ;
}
}
function currentLine(line){
  if (line.length < 1){
    return "The line is currently empty."
  }
  else{
    const curline = []

    for (let i = 0, l = line.length; i < l; i++) {
      curline.push(`${i + 1}. ${line[i]}`)
    }
      return `The line is currently: ${curline.join(', ')}`
    }
}
