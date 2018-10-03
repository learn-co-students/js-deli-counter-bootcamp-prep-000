function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  }
  
 function nowServing(katzDeliline) {
  if (katzDeliline.length < 1) {
  return("There is nobody waiting to be served!")
} 
else if (katzDeliline.length >= 1) {
  return(`Currently serving ${katzDeliline.shift()}.`)
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var index = 0;
    var newString = "The line is currently: "
    while (index < katzDeliLine.length) {
    newString += `${index + 1}. ${katzDeliLine[index]}, `;
    index++;
    var finalString = newString.substring(0, newString.length - 2 );
    }
      return finalString;
    }
  }