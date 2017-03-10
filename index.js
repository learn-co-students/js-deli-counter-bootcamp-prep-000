
var katzDeliLine = [];

var takeANumber = function(myStr, names){
  myStr.push(names);
  return("Welcome, " + names + ". You are number " + myStr.length + " in line." );

}

var nowServing = function(myStr){
//  console.log(myStr + "**********")
  if (myStr.length === 0){
    return ("There is nobody waiting to be served!");
  }
  else{
    var currCust = myStr[0];
    var currSer = "Currently serving " + myStr.shift() + ".";
    return (currSer);
  }
}

var currentLine = function(myStr){
  var newStr = [];
  if (myStr.length === 0){
    return ("The line is currently empty.");
  }
  else{
    for(var i = 0; i< myStr.length; i++){
    var aLine = "";
    aLine = " " + (parseInt(i)+1) + ". " + myStr[i];
    newStr.push(aLine);
   }
 }
  //console.log(newStr);
  return ("The line is currently:" + newStr);
}
