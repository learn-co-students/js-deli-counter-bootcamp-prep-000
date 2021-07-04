// Straight forward takeANumber function
function takeANumber(line, name)
{
  // Push this customer's name to the end of the line.
  line.push(name);
  // Return the newly added name by pointing to last item in array.
  // Return correct index number by retrieving the length of the array.
  return `Welcome, ${line[line.length-1]}. You are number ${line.length} in line.`;
}

// nowServing function with compact ternary logic
// Using this approach allows compact code in a single line
function nowServing(line)
{
  // If the line has no people in it, say there are no people. Otherwise, announce who is being served.
  var result = (line.length===0) ? `There is nobody waiting to be served!` : `Currently serving ${line.shift()}.`;
  return result;
}

// currentLine function with compact ternary logic
// This approach was used to simplify and compact the logic
function currentLine(line)
{
  var i = 0;
  var result = `The line is currently`;
  // If the line has no people in it, append ` empty.` to result. Otherwise, append `: `.
  result += (line.length===0) ? ` empty.` : `: `;

  // Using while, because we don't know how many people there are
  while (line.length > 0 && i < line.length)  // Don't run the loop unless there are people.
  {
    // Append the correct index followed by a period, space, and customer's name.
    result += `${i+1}. ${line[i]}`;
    // If we have not reached the last person, append `, ` to result. Otherwise, append nothing.
    result += (i!==line.length - 1) ? `, ` : ``;
    // Increment
    i += 1;
  }
  return result;
}
