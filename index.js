var katzDeliLine = [];

function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

function nowServing(line){
  if(line.length > 0){
    var serving = line.shift()
    return `Currently serving ${serving}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if(line.length > 0){
    var output = "The line is currently: "
    for(var i = 0; i < line.length; i++){
      if(i === line.length-1){
        return output + (i+1).toString() + '. ' + line[i]
      }
      output += (i+1).toString() + '. ' + line[i] + ", "
    }
  } else {
    return "The line is currently empty."
  }
}

// console.log(takeANumber(katzDeliLine, "Ada")); // "Welcome, Ada. You are number 1 in line."
// console.log(takeANumber(katzDeliLine, "Grace")); // "Welcome, Grace. You are number 2 in line."
// console.log(takeANumber(katzDeliLine, "Kent")); // "Welcome, Kent. You are number 3 in line."
// console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"
//
// console.log(nowServing(katzDeliLine)); // "Currently serving Ada."
// console.log(takeANumber(katzDeliLine, "Matz")); // "3"
//
// console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"
//
// console.log(nowServing(katzDeliLine)); // "Currently serving Grace."
//
// console.log(currentLine(katzDeliLine)); // "The line is currently: 1. Kent, 2. Matz"
