function takeANumber(katzDeli, name)
{
  katzDeli.push(name)
  var position = katzDeli.indexOf(name) + 1
  var response = 'Welcome, ' + name + '. You are number ' + position + ' in line.'
  return response
}

function nowServing(katzDeli)
{
  if (katzDeli.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    var response = 'Currently serving ' + katzDeli[0] + '.'
    katzDeli.shift()
    return response
  }
}

function currentLine(katzDeli)
{
  if (katzDeli.length === 0)
  {
    return 'The line is currently empty.'
  }
  else
  {
    var line = 'The line is currently: '
    for (let i = 1; i < katzDeli.length + 1; ++i)
    {
      if (i < katzDeli.length)
      {
        line = line + i + '. ' + katzDeli[i - 1] + ', '
      }
      else
      {
        line = line + i + '. ' + katzDeli[i - 1]
      }
    }
    return line
  }
}
