function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var string = "The line is currently: "
  if (katzDeliLine.length < 1) {return "The line is currently empty."} else {
  for(let i = 0; i < katzDeliLine.length; i++) if (i === katzDeliLine.length - 1) {
    return string += `${i+1}. ${katzDeliLine[i]}`
   } else {
   string += `${i+1}. ${katzDeliLine[i]}, `
} 
} return string
}

 
    // now instead of returning inside the for loop add to the string with += operator

      // return the string after the for loop

