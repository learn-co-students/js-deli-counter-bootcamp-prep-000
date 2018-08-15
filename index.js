function takeANumber (array, name) {
  array.push(name);
  return 'Welcome, ' + name + '. You are number ' + (array.indexOf(name) + 1) + ' in line.';
}

function nowServing (array) {
  var first = [];
  if (array.length < 1) {
    return 'There is nobody waiting to be served!';
  } 
  else {
    first.push(array[0]);
    array.shift();
    return 'Currently serving ' + first[0] + '.';
  }
}

function currentLine(array){
  var outputString;
  if (array.length === 0){
    outputString = 'The line is currently empty.'
  }
  else{
    outputString = 'The line is currently: ';
     for(var i = 0; i < array.length ; i++){
        if (i === 0){
          outputString = outputString + (i+1) + '. ' + array[i]; 
        }
        else{
          outputString = outputString + ', '  + (i+1) + '. ' + array[i];
        }
      }
  }
  return outputString;
}