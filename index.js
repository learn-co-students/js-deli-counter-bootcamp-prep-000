var katzDeli = []

function takeANumber(arr, name) {
  var line = {}
  line[name] = arr.length + 1
  arr.push(name)
  return `Welcome, ${name}. You are number ${line[name]} in line.`
}

function nowServing(arr) {
  if (arr.length === 0)
    {return "There is nobody waiting to be served!"}
  else
    {return `Currently serving ${arr.shift()}.`}
}

function currentLine(arr) {
  var temp = ""
  if (arr.length === 0)
    {return "The line is currently empty."}
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length-1)
      {temp += i+1 + `. ${arr[i]}`}
    else
      {temp += i+1 + `. ${arr[i]}, `}
   }
    return `The line is currently: ${temp}`
}
