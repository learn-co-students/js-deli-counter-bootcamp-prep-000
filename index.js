
// 1======================================
function takeANumber(array, name) {
  array.push(name);
  let place = (array.indexOf(name) + 1);
  return `Welcome, ${name}. You are number ${place} in line.`
}

// 2======================================
function nowServing(array) {
  var removedItem = array.splice(0, 1);
  if (removedItem.length > 0){
    return `Currently serving ${removedItem}.`
  } else{
    return "There is nobody waiting to be served!"
  }
}


function currentLine(katzDeliLine) {
  
  let string = 'The line is currently:'
  let namesNumbers = [];
  
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  let n = 0; 
  for(let i = 0; i < katzDeliLine.length; i++) {
      
  if (katzDeliLine.length > 0) {
   n++;
 
 namesNumbers.push(`${n}. ${katzDeliLine[i]}`);
  }
}
return `${string} ${namesNumbers.join(', ')}`;
}


// string += `${n}. ${katzDeliLine[i]}, `