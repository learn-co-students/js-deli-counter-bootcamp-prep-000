var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if(katzDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
  }
}

function currentLine(katzDeli) {
  
  // It's just a little easier to type 
  // and we're going to be using this a lot.
  const lineLength = katzDeli.length
  
  if(lineLength === 0) {
    return 'The line is currently empty.';
  } else {
    
    // First open the list 
    var list = `The line is currently: 1. ${katzDeli[0]}, `;
    
    // Loop through the middle of the array
    // attaching commas appropriately 
    for(let i = 1 ; i < lineLength - 1 ; i++) {
      list = list + `${i+1}. ${katzDeli[i]}, `;
    }
    
    // Attaches the last item seperately so it
    // doesn't have a comma at the end.
    list = list + `${lineLength}. ${katzDeli[lineLength - 1]}`;
    return list;
  }
}