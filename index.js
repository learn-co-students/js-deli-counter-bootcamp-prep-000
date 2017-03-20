function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if( line.length === 0 )
  {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(line) {
  if( line.length === 0 )
  {
    return "The line is currently empty."
  }
  var out = "The line is currently:";
  for( var i = 1; i < line.length; i++ )
  {
    out += ` ${i}. ${line[i-1]},`  
  }
  out += ` ${i}. ${line[i-1]}`
  return out
}
