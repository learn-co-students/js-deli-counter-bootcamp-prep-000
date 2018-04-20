var katzDeli = [];


//adds them to the queue and returns their position in the line.
function takeANumber(array, name)
{
  array.push(name);
  return `Welcome, ${name}. You are number ${array.length} in line.`;
}

//returns the first person in the line -- if the line is empty then return
function nowServing(array) {
  if(array.length > 0)
  {
    return `Currently serving ${array.shift()}.`;
  }
  else
  {
    return "There is nobody waiting to be served!";
  }

}

function currentLine(array) {
  var count = 0;
  var line = "The line is currently:";

  if(array.length > 0) {
    while(count < array.length - 1) {
      line += ` ${count + 1}. ${array[count]},`
      count++;
    }
    line += ` ${count + 1}. ${array[count]}`;
  } else {
    line = "The line is currently empty."
  }
  return line;
}
