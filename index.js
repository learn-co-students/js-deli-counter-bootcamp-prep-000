var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
  
function nowServing (line) {

  return `Welcome ${name}. You are number ${katzDeliLine.length} in line.`
  }
  
  function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
    }
    var name = line[0]
    line.shift()
    return `Currently serving ${name}.`
    }
    
function currentLine(line) {
  if (line.length === 0) {
        return "The line is currently empty."
      }
      return `The line is currently: ${name}.`
    return `Now serving ${name}.`
    }