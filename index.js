

/* Build a function that a new customer will use when entering the deli.
The function, takeANumber, should accept the current line of people,
katzDeliLine, along with the new person's name as parameters.
The function should return their position in line. And don't go being too programmer-y and give them their index.
These are normal people. If they are 7th in line, tell them that.
Don't get their hopes up by telling them they are number 6 in line. */

// deli takeANumber adds a person to the line:

var katzDeli = []; // "At the beginning of the day. The deli is empty and is represented by an empty array."

// deli takeANumber appends the person the end of the line if there are already people on it:

function takeANumber(katzDeli, tourist) {
  katzDeli.push(`${tourist}`);
  return (`Welcome, ${tourist}. You are number ${katzDeli.length} in line.`);
}


// deli nowServing returns the line is empty when no on is on line:

// deli nowServing returns an announcement about the person it is serving, and shifts the line:

function nowServing (katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
}

if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!"
}

else
return (`Currently serving ${katzDeli.shift()}.`);

}


// deli currentLine(line) returns "The line is currently empty." if no one is in line: 2

// deli currentLine(line) says who is in line when there are people waiting: 2


var line = ['The line is currently: 1. Bill, 2. Jane, 3. Ann'];

function currentLine(katzDeli) {
  for (let i = 0; i < katzDeli.lenght; i++) {
    line.push(` ` +[i+1]+`. ` + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
    return(`The line is currently:` + line);

}
