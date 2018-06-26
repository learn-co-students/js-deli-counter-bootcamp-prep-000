var katzDeli = [];

function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`)
}

function nowServing(katzDeliLine)
{
  if (katzDeliLine.length < 1)
  {
    return "There is nobody waiting to be served!"
  }
  else
  {
    var name = katzDeliLine.shift()
    return ("Currently serving " + name + ".")
  }
}

function currentLine(katzDeliLine)
{
  if (katzDeliLine.length == 0)
  {
    return ("The line is currently empty.")
  }
  else
  {
    var line = "The line is currently:";
	katzDeliLine.forEach(function(val,index){
	    line += ` ${index+1}. ${katzDeliLine[index]}`;
	    if (index < katzDeliLine.length - 1){ line += ',';}
	});
	return line;
  }
}
