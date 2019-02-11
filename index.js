var katzDeliLine = [];  

function takeANumber (arr, name)
{
  arr.push(name);
  var number = arr.length ;
  var str = "Welcome, "+ name + ". You are number " + number + " in line.";
  return str;
}

function nowServing (arr)
{
  var x = arr.length
  if (x == 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    var n = arr[0]
    
    for (var j = 0; j + 1 < x ; j++)
    {
      arr[j] = arr[j + 1];
    }
    arr.pop(); 
    return "Currently serving " + n +"."
  }
}

function currentLine(arr)
{
  var n = arr.length
  if (n === 0)
  {
    return "The line is currently empty.";
  }
  else
  {
    var str = "The line is currently: "
    for (var i = 0; i < n; i++)
    {
      str = str + (i + 1 ) + '. ' + arr[i]
      if (i != n-1)
      {
        str += ', ';
      }
    }
    return str;
  }
}