function takeANumber(currentLine, newName) {
  //Push newName into currentLine ArrayBuffer
  currentLine.push(newName);
  
  //Return line position (array.length)
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
  
};

function nowServing(katzDeliLine) {
  
  //Remove first person from array and store as variable
  const firstCustomer = katzDeliLine.shift();

  //If array is empty, return "The line is currently empty."
  if (katzDeliLine.length === 0) {
      return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${firstCustomer}.`;
  };

};

function currentLine(arr) {
  
  if (arr.length === 0) {
    return "The line is currently empty." 
    } else {
      return `The line is currently: 1. ${arr[0]}, 2. ${arr[1]}, 3. ${arr[2]}`
    };
  
};