var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
};

function currentLine(katzDeliLine) {
 if (!katzDeliLine.length) {
   return "The line is currently empty."
 }

 const peopleInLine = []

 for (i = 0; i < katzDeliLine.length; i++) {
   if(katzDeliLine[i].length > 1) {
     peopleInLine.push(`${i + 1}. ${katzDeliLine[i]}`)
   }
  return `The line is currently: ${peopleInLine.join(" , ")}`
};
