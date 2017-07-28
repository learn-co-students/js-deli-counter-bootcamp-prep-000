// Build a function that a new customer will use when entering the deli.
// The function, takeANumber, should accept the current line of people, katzDeliLine,
// along with the new person's name as parameters. The function should return their
// position in line. And don't go being too programmer-y and give them their index.
// These are normal people. If they are 7th in line, tell them that. Don't get their
// hopes up by telling them they are number 6 in line.
function takeANumber(katzDeliLine, newClient) {
  katzDeliLine.push(newClient)
  let line = "Welcome, " + newClient + ". You are number " + katzDeliLine.length + " in line."
  return line
}

// Build a function nowServing. This function should return the first person
// in line and then remove that individual from the line. If there is nobody in
// line, it should return "There is nobody waiting to be served!"
function nowServing(katzDeliLine){
    if (katzDeliLine.length === 0) {
      return "There is nobody waiting to be served!"
    } else {

      let result = "Currently serving " + katzDeliLine[0] + ".";
      katzDeliLine.shift();
      return result;
    }
}

// Build a function currentLine that returns the current line. For example, if katzDeliLine
// is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return "The line is currently: 1. Ada,
// 2. Grace". If there is nobody in line, it should return "The line is currently empty."
function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var result  = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length; i++) {
      if (i === katzDeliLine.length-1) {
        result = result + (i + 1) + ". " + katzDeliLine[i];
      } else {
        result = result + (i + 1) + ". " + katzDeliLine[i] + ", ";
      }
    }
    return result;
  }
}
