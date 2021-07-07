var katzDeliLine = [];


//struggled understanding the parameters again, my mistake was to create an empty array instead of
//reading the instructions and use the katzDeliLine array as instructed.
//since I started with an empty array, I had to append the name to the end of the current array. I used push();
//I used a for loop cause we will need to add new customers to the line every time and it will work till the end of the katzDeliLine array.
//Struggled getting the index of an element and then I found the .indexOf("element"); function, and added 1 for the visual effect.
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}


//I struggled with this one cause I didn't understand if I had to use a parameter or not,
//Also I struggled with how to erase the data from the array after 'return' ing the array.
//Since shift() returns the erased value, I erased it first and then I returned the message
function nowServing(katzDeliLine){
  if(!katzDeliLine.length){
    return `There is nobody waiting to be served!`;
  } else {
    var firstPersonInLine = katzDeliLine.shift();
    return `Currently serving ${firstPersonInLine}.`;
  }
}

// This function wanted to return the array as a sring, so the difficult part for me
// was first to make the first element of the array show as "1" no "0". I used a for loop and added 1 to i
// 2nd task. to return the string contained in the index. ${katzDeliLine[i]} and display it in order,
// 3rd task, I learned that for me in order to access a variable from outside a for loop, i had first,
// to create an empty array so I could push all the elements in, and be able to access them later.
// 4th
function currentLine(katzDeliLine){
  if (!katzDeliLine.length){
    return `The line is currently empty.`;
  }
  var lineAsAString = [];

	for (let i = 0 ; i < katzDeliLine.length ; i++){
    lineAsAString.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${lineAsAString.join(`, `)}`;
}
