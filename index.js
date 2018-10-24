function takeANumber(line, name) {
  //look at test and ask, "what's being passed through these arguments? in this case, "it's an array and a string; so line is an array, and name is a string.
  //so, what am i doing? I'm adding 'name' to the array that's passed through 'line,' and I'm returning a sentence with that person's number in line, NOT their index value. 
  line.push(name);
  return(`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(number) {
  while (number.length > 0) {
    return(`Currently serving ${number.shift()}.`)
  } 
  return(`There is nobody waiting to be served!`)
}

function currentLine(array) {
  let line = [];
  if (array.length === 0) {
    return ("The line is currently empty.")
  } else {
    for (let i = 0; i < array.length; i++) {
      line.push(` ${i+1}. ${array[i]}`)
    } return (`The line is currently:${line.join()}`)
}
}