// Build a function that a new customer will use when entering the deli. The function, takeANumber, should accept the current
 // line of people, katzDeliLine, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people.
//  If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
var katzDeliLine = [];
function takeANumber(deli, new_name) {

  deli.push(new_name);
  for(var i = 0; i < deli.length; i++){

    if(new_name === deli[i]) {
      return "Welcome, " + deli[i] + "." + " You are number " + (i + 1) + " in line.";

    }
}
}

// Build a function nowServing. This function should return
// the first person in line and then remove that individual
// from the line. If there is nobody in line,
//  it should return "There is nobody waiting to be served!"

 function nowServing(array) {
   if(typeof(array[0]) === 'string') {
    var next = array.shift();
    return "Currently serving " + next + ".";

   }else{
     return "There is nobody waiting to be served!";
   }
 }

// Build a function currentLine that returns the
// current line. For example, if katzDeliLine is
// currently ["Ada", "Grace"], currentLine(katzDeliLine)
// would return "The line is currently: 1. Ada, 2. Grace".

function currentLine(line) {
  var newLine = [];
  if(typeof(line[0]) === 'string' ){


    for(var i = 0; i < line.length; i++) {
      newLine.push(" " + (i + 1) + ". " + line[i]);
    }
  return `The line is currently:${newLine}`;
  }else{
    return "The line is currently empty.";
  }

}
