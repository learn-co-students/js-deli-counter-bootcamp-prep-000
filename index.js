function takeANumber(line,name) {
  line.push(name)
  let position = line.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`
  
} 
// indexof - didn't have capital O
function nowServing(line) {
  if (line.length > 0) {
    let a = line.shift()
    return `Currently serving ${a}.`
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  var linearray = []
  for (let i = 0; i<line.length; i++) {
      var pos = line.indexOf(line[i])+1
      var t = ' '+pos.toString()+`. ${line[i]}`
      linearray.push(t)
    }
    
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    var string1 = 'The line is currently:'
    return string1.concat(linearray)
    }
    
  }
// trying a for loop
// tried using map to concat line item position and line item
// tried pushing each position/name into one array and concatenating that
//had to add spaces into array items 