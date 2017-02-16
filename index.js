var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(deliLine) {
  var name = deliLine.shift()
   if (deliLine.length > 0) {
     return `Currently serving ${name}.`
     --deliLine
   }
   else {
      return "There is nobody waiting to be served!"
   }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    var array = [] // stores a collection of data (strings)
    for (var i = 0; i < line.length; i++) {
      // ['1. Bill', '2. Jane', '3. Ann'] array.push('formatted mini string here')
      array.push(`${i + 1}. ${line[i]}`) // adding to array '1. Bill' on first loop
    } // end of the for loop, return stops any loops as well as any code ran in the function and just returns that value
    return `The line is currently: ${array.join(', ')}`
  }
}

// takeANumber(otherDeli, "Grace")
// ["Steven","Blake","Avi"].push("Grace") => ["Steven","Blake","Avi","Grace"]
