function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name)
  let pos = katzDeliLine.length
  
  return ('Welcome, ' + name + '. You are number ' + pos + ' in line.')
  }
  
  
  function nowServing (katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return ('There is nobody waiting to be served!')
    }
    else {
     return ('Currently serving ' + katzDeliLine.shift() + '.')
    }
  }
  
  
  function currentLine(line) {
    
    if (line.length === 0) {
        return ('The line is currently empty.')
      }
      
      for (let i = 0; i < line.length; i++) {
        let linepos = line[i]
        let linenum = 1 + i
        
          line[i] = (' ' + linenum + '. ' + linepos)
      }
      return ('The line is currently:' + line)
  }