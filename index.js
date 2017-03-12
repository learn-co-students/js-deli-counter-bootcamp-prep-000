//---------------------------------------------------
var takeANumber = (array,name) =>
{
    array.push(name);
    return `Welcome, ${array[array.length-1]}. You are number ${array.length} in line.`
}


//---------------------------------------------------
var nowServing = (array) =>
{
  if (array.length === 0)
  { return "There is nobody waiting to be served!" }

  else
  { return `Currently serving ${array.shift()}.`}

}

//---------------------------------------------------
var currentLine = (array) =>
{
  if (array.length === 0)
  {return 'The line is currently empty.'}

  else
  {
      var currentline = `The line is currently:`
      for (var i = 0; i < array.length; ++i)
      {
        currentline = currentline + ` ${i+1}. ${array[i]}`
      }
      return currentline
  }
}
 'The line is currently: 1. Bill 2. Jane 3. Ann '
 'The line is currently: 1. Bill 2. Jane 3. Ann'
