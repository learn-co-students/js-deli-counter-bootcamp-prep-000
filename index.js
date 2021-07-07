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




// HAPPY WORKING CODE WHICH PASSED
//  NEED A NEW 'LINE' TO BE CREATED to hold the variable that goes into the output 
var line = [];

function currentLine(katzDeli) {
  let i = 0;
  while (i<katzDeli.length) {
    line.push(` ` +[i+1]+`. `  + katzDeli[i])   // Interpolation method would look like this - ` ${i+1}. ${katzDeli[i]` 
    i++;
  }
  if (katzDeli.length ===0) {
    return (`The line is currently empty.`);
  } else { 
    // return ("The line is currently:" + line);
    return ("The line is currently:" + line.join());
    
    // join method with default comma separator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  }
}


  

/* TEST
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

