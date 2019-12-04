function takeANumber(queue, name)
{
  queue.push(name)
  return `Welcome, ${name}. You are number ${queue.length} in line.`
}
function nowServing(queue)
{
  var name = queue[0]
  return queue.shift() ? `Currently serving ${name}.` : `There is nobody waiting to be served!`
}

function currentLine(queue)
{
  var output = "The line is currently:"
  for(var i = 0; i < queue.length; i++)
  {
    i === 0 ? output += ` ${i + 1}. ${queue[i]}` : output += `, ${i + 1}. ${queue[i]}`
  }
  return queue.length === 0 ? "The line is currently empty." : output
}