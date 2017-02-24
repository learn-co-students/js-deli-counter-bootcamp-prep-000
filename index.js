function takeANumber( katzDeliLine, name ) {

  var myString = ""
  
  katzDeliLine.push( name )

  myString = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.` 
  return( myString )
}

function nowServing( katzDeliLine ) {
  var myString = ""

  if( katzDeliLine.length > 0 )
  {
    myString = `Currently serving ${katzDeliLine[0]}.`

    // Now remove the person
    katzDeliLine.shift()
  }
  else
    myString = "There is nobody waiting to be served!"
  
  return myString
}

function currentLine( line ) {

  var myString = "";
  
  if( line.length == 0 )
    myString = "The line is currently empty."
  else
    myString = "The line is currently: "
    
  for( var i = 0; i<line.length; i++)
  {
    if( i != 0 )
      myString = myString + ", "
      
    myString = myString + `${i+1}. ${line[i]}`
  }
  
  return myString
}
