var katzdeliline =['Ada','Grace','Kent','Matz'];
var current = "";

function takeANumber(katzdeliline,name){
  var index = 1;
  
  var a = katzdeliline.indexOf(name);
  if (a<0){
    return false;
  }else{
    var b = parseInt(a)+parseInt(index)
    console.log("Welcome "+name+". You are number "+b+" in line");
  }
}

function nowServing(arr) {
  console.log("Currently Serving "+arr[0]);
  arr.splice(0,1);
  katzdeliline = arr;
}

function currentLine(arry){
  var line = arry.length;
  var index = 1;
  for(var i = 0; i < line; i++){
    c = arry[i];
    var a = arry.indexOf(c);
    var b = parseInt(a) + parseInt(index);
    current += b+". "+c+", ";
  }
  console.log("The line is currently: "+current);
}

takeANumber(katzdeliline, "Ada");
takeANumber(katzdeliline, "Grace");
takeANumber(katzdeliline, "Kent");

currentLine(katzdeliline);
nowServing(katzdeliline);
currentLine(katzdeliline);
takeANumber(katzdeliline, "Matz");
currentLine(katzdeliline);
nowServing(katzdeliline);
currentLine(katzdeliline);