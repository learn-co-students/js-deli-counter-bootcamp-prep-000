var Tienda = []

function takeANumber(Tienda,nombre){
Tienda.push(nombre)
return "Welcome, " + nombre +". You are number " + (Tienda.length) + " in line."
}

function nowServing(Tienda) {
  if (Tienda.length===0){
  return "There is nobody waiting to be served!"
} else {
  return "Currently serving "+ Tienda.shift() + "."
}
}

function currentLine(Tienda) {
if (Tienda.length===0) {
  return "The line is currently empty."
} else {
var Tienda2 = "The line is currently: " 
for (var i = 0; i < Tienda.length; i++) {
  if (i===Tienda.length-1) {
Tienda2 = Tienda2 + (i+1) + ". " + Tienda[i]  
} else {
Tienda2 = Tienda2 + (i+1) + ". " + Tienda[i] + ", "      
}
}
return Tienda2
}
}