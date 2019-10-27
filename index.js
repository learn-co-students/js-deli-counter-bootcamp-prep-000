function takeANumber(array, person){
  array.push(person);
  return `Welcome, ${person}. You are number ${array.length} in line.`;
}

function nowServing(array){
  if (array.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    var now = `Currently serving ${array[0]}.`;
    array.shift();
    return now;
  }
}

function currentLine(array){
  var sentence = "";
   if (array.length === 0){
    sentence = "The line is currently empty."
  }
  else{
    var i = 0;
    sentence = "The line is currently: ";
    while (i < array.length - 1){
      sentence += `${i+1}. ${array[i]}, `;
      i++
    }
    sentence += `${i+1}. ${array[i]}`;
  }
  return sentence;
}