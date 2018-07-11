var katzDeli = [];

function takeANumber(katzDeli, newPerson){
  katzDeli.push(newPerson);
  return `Welcome, ${newPerson}. You are number ` + katzDeli.length + " in line.";
}

function nowServing(katzDeli){
  if (katzDeli.length === 0){
  return "There is nobody waiting to be served!";
  }
  else {
  return `Currently serving ${katzDeli.shift()}.`
    //.shift() removes first element *and* returns that element
  }
}
function currentLine(katzDeli){
  var theLineArray = [];

  if (katzDeli.length === 0){
    return "The line is currently empty."
  }

  else {
    for (let i = 0; i < katzDeli.length; i++){
      theLineArray += (i + 1) + ". " + katzDeli[i] + ", "
    }
      var finalLine = theLineArray.slice(0, theLineArray.length - 2)
      return `The line is currently: ` + finalLine
    }
  }

// Use Object.assign to make an object with key : value pairs?
// Make a new array and push() the new object into it so it can be returned as a string?
// Reference: https://www.w3schools.com/js/js_arrays.asplearn