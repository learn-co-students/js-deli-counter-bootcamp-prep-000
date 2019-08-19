var arrayname;
var custname;

function takeANumber(arrayname, custname)
{
  var len = arrayname.length; 
  arrayname.push(custname)
  var text = "Welcome, "+ arrayname[len] +". You are number " +  (len + 1) + " in line.";
  return text
  return arrayname
}

function nowServing(arrayname)
{
  var len2 = arrayname.length; 
  if (len2 === 0) return "There is nobody waiting to be served!";
  //
  
  var text = "Currently serving "+ arrayname[0] +"." ;
  arrayname.shift(custname)
  
  return text
  return arrayname
}

function currentLine(arrayname)
{
  var len3 = arrayname.length; 
  if (len3 === 0) return "The line is currently empty.";
  //
  
  var text = "The line is currently:";
  arrayname.forEach(function (item, index) {
    var item_number = index + 1;
    if (item_number < arrayname.length)
    {text = text + " " + item_number + ". " + item + ",";}
    else{text = text + " " + item_number + ". " + item;}
  });
  
  return text
  return arrayname
}
