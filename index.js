var katzDeli = [];

//A new customer uses this function when coming into the Deli to take a number for the line. I used the .push method to add them to the end, and I am a big fan of using the ${} to reuse variables. i is delcared so that we can show the length of the line is the original array +1.
function takeANumber(katzDeliLine, name){
  var i = katzDeliLine.length;
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${i+1} in line.`
  
}


//Now serving returns the name of the first customer in line and removes them. For this I used the .shift method to remove from the front of array. This was harder to figure out because it took me a long time to realize I could use the .shift right in my return code.
function nowServing(katzDeliLine){
  if (katzDeliLine[0] === undefined){
      return "There is nobody waiting to be served!"}
      else{
        return `Currently serving ${katzDeliLine.shift()}.`
 }
  
}


//This one also took some playing around with so that I could get the code to say "the line is currently empty" when the array was empty. To do this I used the === undefined to make sure there was nothing indexed in the array. I'm sure there are much simpler ways to write this function but it made the most sense to me. Probably I wasn't supposed to write the order numbers as strings, and it would have been more efficient to use i in the return code rather than typing out 0-2, but it passed :).
function currentLine(katzDeliLine){
          var i = 0; i<katzDeliLine.length; i++;
    if (katzDeliLine[0] === undefined){
      return "The line is currently empty."}
      else{
 return `The line is currently: 1. ${katzDeliLine[0]}, 2. ${katzDeliLine[1]}, 3. ${katzDeliLine[2]}`;
}

}