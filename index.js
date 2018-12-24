var takeANumber = function(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.` //new customers - only need to know their new place in the index
};

var nowServing = function (katzDeliLine) {
  if (katzDeliLine.length === 0) {  // if katz deli line has no one
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine.shift()  // create a new name, remove them from that line
    return `Currently serving ${name}.` // serving that name
  }
};

var currentLine = function (line) {  // take the line as a parameter
  if (line.length === 0) {  // if no one, etc
    return "The line is currently empty."
  } else {
    var call = 'The line is currently: ' // start your call-out
    for(let i = 0; i < line.length; i++){
     call +=  `${i + 1}. ${line[i]}, `  // call-out = call-out + the loop through
    }
   return call.slice(0, -2) // call-out index (start of call), -2 to shave off space & comma from end of call-out
  }
};
