// At the beginning of the day, the deli is empty and is represented by an empty array
var katzDeliLine = []

/*
Build a function that a new customer will use when entering the deli. The function, 
takeANumber, should accept the current line of people, katzDeliLine, along with the 
new person's name as parameters. The function should return their position in line. 
And don't go being too programmer-y and give them their index. These are normal people. 
If they are 7th in line, tell them that. Don't get their hopes up by telling them they 
are number 6 in line.
*/

function takeANumber(katzDeliLine, name)
{
  var queueNumber = 0
  
  katzDeliLine.push(name)
  
  queueNumber = katzDeliLine.length
  
  return `Welcome, ${name}. You are number ${queueNumber} in line.`
}

/*
Build a function nowServing. This function should return the first person in line and then 
remove that individual from the line. If there is nobody in line, it should return "There 
is nobody waiting to be served!"
*/

function nowServing(katzDeliLine)
{
  // check if anyone is in the queue
  if(katzDeliLine.length > 0)
  {
    // first grab the first element in the queue
    var personBeingServed = katzDeliLine[0]
    
    // take them off the queue
    katzDeliLine.shift()
    
    // report who is being served
    return `Currently serving ${personBeingServed}.`
  } 
  else 
  {
    // when the queue is empty
    return "There is nobody waiting to be served!"
  }
}

/*
Build a function currentLine that returns the current line. For example, if katzDeliLine 
is currently ["Ada", "Grace"], currentLine(katzDeliLine) would return 
"The line is currently: 1. Ada, 2. Grace". If there is nobody in line, it 
should return "The line is currently empty."
*/

function currentLine(katzDeliLine)
{
  // variable for the last comma
  var commaPlacement = katzDeliLine.length
  
  // if the queue contains people, begin taking names
  if(katzDeliLine.length > 0)
  {
    // begin the return string
    var retString = "The line is currently: "
    
    // loop through the list to add to retString
    for(let i = 0; i < katzDeliLine.length; i++)
    {
      // add person
      retString += `${i + 1}. ${katzDeliLine[i]}`
      
      // decrement commaPlacement
      commaPlacement--
      
      // check if the queue is on the last person
      if(commaPlacement >= 1)
      {
        retString += ", "
      }
    }
    
    // return the result
    return retString
  } 
  else 
  {
    // when there are no peeps in the queue 
    return "The line is currently empty."
  }
}