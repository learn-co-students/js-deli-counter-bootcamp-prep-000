function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`)
  return "Welcome, " + `${name}` + ". You are number " + `${katzDeli.length}` + " in line."
}

//should accept the current line of people
//return the first person in line
//remove that individual from the line
//If there is nobody in line, it should return "There is nobody waiting to be served!"
function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++
  }
  if (katzDeli.length === 0) {
    return (`There is nobody waiting to be served!`)
  } else
  return (`Currently serving ${katzDeli.shift()}.`)
}

// function currentLine(katzDeli) {
//   let i = 0;
//   while (i < katzDeli.length) {
//     katzDeli.push(` `+[i+1]+`. `  + katzDeli[i])
//     i++;
//   }
//   if (katzDeli.length === 0) {
//     return "The line is currently empty.";
//   } else
//   return(`The line is currently:` + katzDeli);
// }


function currentLine(line) {
  if (line.length === 0) {
    return (`The line is currently empty.`)
  }

  //since we already figured out what happened when there is an empty line
  //we'll assume there is one person in the line
  let currentLine = `The line is currently: 1. ` + line[0];

  for (let i = 1; i < line.length; i++) {
    currentLine += `, ` + `${i + 1}` + `. ` + `${line[i]}`
  }
  return currentLine;
}
