var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeli) {
  let i = 0;
  while  (i < katzDeli.length) {
    i ++;
  }     // this keeps the counter ccheck  for > 0 going
  // if statement is separate to the while loop iterator
  if (katzDeli.length === 0) {
    return (`There is nobody waiting to be served!`);
  } else {
    return (`Currently serving ${katzDeli.shift()}.`);
    // bring the shift into the interpolated string
  }
} 

//  NEED A NEW LINE TO BE CREATED to store values
var line = [];

function currentLine(katzDeli) {
  let i = 0;
  while (i<katzDeli.length) {
    line.push(` ` +[i+1]+`. `  + katzDeli[i])
    i++;
  }
    // HOW DOES FUNC KNOW TO GET ALL OF THE i's into the current line?
    // e.g. "The line is currently: 1. Ada, 2. Grace"
    // it's clear you need [i+1] for the number and katzDeli[i] for the name
    
  if (katzDeli.length ===0) {
    return (`The line is currently empty.`);
  } else { 
    return ("The line is currently:" + line);
    // return ("The line is currently:" + line.join());
  }
}
  
  
/* OLD CODE
  function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i===1) {
      array.push(`I am 1 strange loop.`);
    } 
    else {
      array.push(`I am ${i} strange loops.`);
    } 
  if (katzDeli.length ===0) {
    return (`The line is currently empty.`);
  } else{ 
    return 
}               */ 


/*
describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})

*/


