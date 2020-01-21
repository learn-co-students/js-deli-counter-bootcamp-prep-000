var katzDeliLine = [];


//struggled understanding the parameters again, my mistake was to create an empty array instead of
//reading the instructions and use the katzDeliLine array as instructed.
//since I started with an empty array, I had to append the name to the end of the current array. I used push();
//I used a for loop cause we will need to add new customers to the line every time and it will work till the end of the katzDeliLine array.
//Struggled getting the index of an element and then I found the .indexOf("element"); function, and added 1 for the visual effect.
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  for (let i = 0 ; i < katzDeliLine.length; i++){
    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
  }
}


//I struggled with this one cause I didn't understand if I had to use a parameter or not,
//Also I struggled with how to erase the data from the array after 'return' ing the array.
//Since shift() returns the erased value, I erased it first and then I returned the message
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  } else {
    katzDeliLine =  katzDeliLine.shift();
    return `Currently serving ${katzDeliLine}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
      return `The line is currently empty.`;
    } else {
            for(let i = 0, i < katzDeliLine.length ; i++){
                var currentLine = ${i+1}. ${katzDeliLine[i]
              }
              return currentLine;
           }
  // } else {
  //           for(let i = 0; i < katzDeliLine.length ; i++ ){
  //               katzDeliLine.push(`${i+1}. ${katzDeliLine[i]},`);
  //             }
}
