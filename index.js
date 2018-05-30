var katzDeliLine = [];

function takeANumber(katzDeliLine, person)
{
  katzDeliLine.push(person);
  var posInLine = 0;
  for (var i =0; i<katzDeliLine.length; i++)
  {
    if(katzDeliLine === name)  //if a n
    {
      posInLine = i + 1; //since we are not starting pos at zero
    }
  }
  return ('Welcome, ' + person +'. You are number ' + katzDeliLine.length + ' in line.');

}

function nowServing(katzDeliLine, person)
{
  if (katzDeliLine.length > 0) //checks lengh of line
  {
    var currentCustomer = katzDeliLine[0]; 
    katzDeliLine.shift();
    return ('Currently serving ' + currentCustomer + '.')
  }
  else 
  {
    return ('There is nobody waiting to be served!')
  }
  
  }
function currentLine(katzDeliLine)
{
  var currentLine = []; //created dynamic Array
  if (katzDeliLine.length === 0)
  {
    return ('The line is currently empty.')
  }
  else 
  {
    
    var i = 0;
  for(i =0; i < katzDeliLine.length; i++)
    {
     
      currentLine.push(`${i+1}. ${katzDeliLine[i] }`)
    }
    return `The line is currently: ${ currentLine.join(', ') }`
  }
  
}