// INSTRUCTIONS
// A pretty important deli needs somebody to program the "Take a Number" feature for their counter.
// At the beginning of the day, the deli is empty and is represented by an empty array, e.g., var katzDeli = [];
var katzDeliLine = [];

// Build a function that a new customer will use when entering the deli.
// The function, takeANumber, should accept the current line of people, katzDeliLine,
// along with the new person's name as parameters. The function should return their position in line.
// And don't go being too programmer-y and give them their index. These are normal people.
// If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
function takeANumber(line, customer) {
  line.push(customer);
  var customerIndex = line.indexOf(customer);
  var customerLinePlace = customerIndex + 1;
  var currentCustomer = line[customerIndex];

  return `Welcome, ${currentCustomer}. You are number ${customerLinePlace} in line.`
}

// Build a function nowServing.
// This function should return the first person in line and
// then remove that individual from the line.
// If there is nobody in line, it should return "There is nobody waiting to be served!"
function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }

  var currentCustomer = line.slice(0, 1);
  line.shift();

  return `Currently serving ${currentCustomer}.`;
}

// Build a function currentLine that returns the current line.
// For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine)
// would return "The line is currently: 1. Ada, 2. Grace".
// If there is nobody in line, it should return "The line is currently empty."
function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }

  var message = "The line is currently: ";

  for (var i = 0; i < line.length; i++) {
    var isNotAtEnd = i !== (line.length - 1);
    var currentCustomer = line[i];
    var customerLinePlace = i + 1;

    message += `${customerLinePlace}. ${currentCustomer}`;

    message += isNotAtEnd ? ", " : "";
  }

  return message;
}
