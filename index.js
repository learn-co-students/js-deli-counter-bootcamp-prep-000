var katzDeli = [];
function takeANumber(line, name) {
line.push(name) //adds a person (name) to the line (line)
  return `Welcome, ${name}. You are number ${line.length} in line.`;
  //Error: Expected undefined to equal 'Welcome, Ada. You are number 1 in line.' iterates over
  // the array returns the string welcome ${name template literal placeholder}. You are ${template literal array.length}
  //
}
