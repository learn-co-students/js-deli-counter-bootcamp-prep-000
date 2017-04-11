var katzDeli = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(katzDeliLine,name)
{
  var position =katzDeliLine.length;
  var place;
  if(position == 0)
  {
    katzDeliLine[0]=name
    place = katzDeliLine.length
  }
  else
  {
    katzDeliLine.push(name)
    place = katzDeliLine.length
  }
  return `Welcome, ${name}. You are number ${place} in line.`
}

function nowServing(deliLine)
{
  var i =deliLine.length
  if(i==0)
  {
    return 'There is nobody waiting to be served!'
  }
  else
  {
    for(var l = i; l>0;--l)
    {
      var sentret = `Currently serving ${deliLine[0]}.`
      deliLine.shift()
      return sentret
      }
  }
}

function currentLine(line)
{
  var j = line.length

  if(j==0)
  {
    return "The line is currently empty."
  }
  else
  {
     var A = "The line is currently: "
     var B = ""
     var C = ""
     var D = ""
     var E = ""
     for(var p =0;p<j;p++)
     {
       if(p==(j-1))
       {
         C =`${p+1}. ${line[p]}`
       }
       else
       {
          B =`${p+1}. ${line[p]}, `
          D = D + B
       }
     }

     return (A+D+C)
  }
  }
