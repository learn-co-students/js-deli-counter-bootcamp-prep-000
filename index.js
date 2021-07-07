var katzDeli = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  //return katzDeliLine.length+1;
  var line = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return line;
}

//  accept the current line of people, katzDeliLine,//  along with the new person's name as parameters.
//  The function should return their position in line.
//  And don't go being too programmer-y and give them their index. These are normal people.
//   If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

  //
  // 1) deli takeANumber adds a person to the line:
  //    Error: Expected 2 to equal 'Welcome, Ada. You are number 1 in line.'
  //     at assert (node_modules/expect/lib/assert.js:29:9)
  //     at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
  //     at Context.it (test/index-test.js:14:44)


function nowServing(katzDeliLine){
if(katzDeliLine.length === 0){return "There is nobody waiting to be served!"}
  var first = katzDeliLine[0];
  katzDeliLine.shift();
  // return first;
  // return `Currently serving ${katzDeliLine[0]}`
  return `Currently serving ${first}.`
}

// Build a function nowServing. This function should return the first person in line and then remove that individual from the line.
//  If there is nobody in line, it should return "There is nobody waiting to be served!"

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){return "The line is currently empty."}
  var line = "The line is currently:"
  for(var i=0;i<katzDeliLine.length;i++){
    line+=` ${i+1}. ${katzDeliLine[i]}`
    if(katzDeliLine.length-1>i){line+=","}
  }
  return line;
}

// Build a function currentLine that returns the current line.
// For example, if katzDeliLine is currently ["Ada", "Grace"],
//  currentLine(katzDeliLine) would return "The line is currently: 1. Ada, 2. Grace".
//   If there is nobody in line, it should return "The line is currently empty."
