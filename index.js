function takeANumber(katzDeliLine, deliCustomer) {
  katzDeliLine.push(deliCustomer)
  return `Welcome, ${deliCustomer}. You are number ${katzDeliLine.length} in line.`
} /* takes in two parameters, the amount of people in line and the name of the customer in line. Using array.push() adds a new element to the end of the array, thus adding each new customers name in the order they are standing in line. Return message uses template literals, which had me tripped up until I realized you have to use backticks to make sure it properly interprets the ${} value. Using .length() makes sure the number given is the actual number in line and not the index value they are stored in the array, which would be wrong since index values start at 0 */

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
} /* takes in one parameter, the list of people currently in line. What we're trying to do is accept the first person in line and give them a message that we are currently serving them, which basically means we need to take our array and find the first value in it, return that value and use it in the message. Using array.shift() lets us remove the first element in the array and return it, which is perfect for our use. However, it also wants us to return a message that there is nobody in line if the current # of people is 0. So inside the function we use if-else to handle the two possibilities. As long as there are people in line, it will take the first person and serve them */

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var strOutput = ""
    for(let i = 0; i < katzDeliLine.length; i++) {
      strOutput += (i + 1) + ". " + katzDeliLine[i] + ", "
    }
    strOutput = strOutput.slice(0, -2)
    return `The line is currently: ${strOutput}`
  }
  else {
    return "The line is currently empty."
  }
}
/* takes in one parameter, the list of people currently in line. Just as in the function above, we have two different messages to give depending on whether there are people in line or not, so we'll use an if-else expression again. If there are people in line, we are trying to return the list of people as 1. Name, 2. nextName, and so on. Since we are looping through an array multiple times, it's best to use a for loop. Each pass through the loop adds one to the counter, ie the 1, 2, 3, etc, in front of the customer name, followed by the name associated with that spot in line. All of this gets added to an empty string we created called strOutput. But we still have to return a message utilizing this list of strings. Using string.splice() lets us cut off the last comma that unfortunately gets added in our for loop. .slice(0, -1) returns the whole string while .slice(0, -2) returns the whole string minus the very last character, which is the commma we don't want */