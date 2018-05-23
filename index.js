function takeANumber(s,n)
{
  if (s.length <1)
  {
    s.unshift(n)
  }
  else
  {
    s.push(n)
   
  }
  var m= s.indexOf(n)
  m=m+1
     return `Welcome, ${n}. You are number ${m} in line.`
}

function nowServing(s)
{
  if (s.length <1)
  {
    return "There is nobody waiting to be served!"
  }
  else 
  {
    var m=s[0];
    s.shift()
    return  "Currently serving "+ m +"."
  }
    
    
}

function currentLine(s)
{
  if (s.length <1)
  {
    return "The line is currently empty."
  }
  else 
  {
    return `The line is currently: 1. ${s[0]}, 2. ${s[1]}, 3. ${s[2]}`
  }
    
    
}