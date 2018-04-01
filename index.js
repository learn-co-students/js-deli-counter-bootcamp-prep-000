var katzDeli = [];
// Build a function that a new customer will use when entering the deli. The function, takeANumber,
// should accept the current line of people, katzDeliLine, along with the new person's name as parameters.
//  The function should return their position in line. And don't go being too programmer-y and give them
//  their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes
//  up by telling them they are number 6 in line.

function takeANumber(katzDeli,newDeli) {
    katzDeli.push(newDeli);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}
