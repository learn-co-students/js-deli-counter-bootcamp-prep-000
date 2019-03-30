function takeANumber(array, name){
array.push(name);
var place = array.indexOf(name) + 1;
return "Welcome, " + name + ". You are number " + place + " in line."
}