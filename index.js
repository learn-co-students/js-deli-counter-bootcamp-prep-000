function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  const numbersAndNames = []
  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
};

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
};

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

// super fail interview, seppuku

function takeANumber(line) {
  if (!line.length) {
      if (!i) {
         return `You are number 1.`; 
      }
    return `You are number {i++}.`; 
  }
  
  let lastIndex = line.length - 1;
  let i = line[lastIndex] + 1;
  
	return `You are number ${i}.`; 
}

// first person enters empty line
// initial line [], first person of the day
// 1

// first person enters empty line
// initial line [], last number that left was 16
// 16++ = 17
// does the value of i get saved? if not then I'm wrong here

// a second person enters a one person line
// initial line [1]
// 0 = 1 - 1
// 2 = 1 + 1 

// a third person enters a two person line
// initial line [4, 5]
// 1 = 2 - 1
// 6 = 5 + 1

// a fourth person enters a three person line
// initial line [5, 6, 7]
// 1 = 3 - 1
// 8 = 7 + 1

// a fifth person enters a six person line
// initial line [10, 11, 12, 13, 14, 15]
// 5 = 6 - 1
// 16 = 15 + 1 

//





