// 2. Build a method that a new customer will use when 
// entering the deli. The take_a_number method should 
// accept two arguments, the array for the current line of people
// (katz_deli), and a string containing the name of the person 
// joining the end of the line. The method should call out (puts) 
// the person's name along with their position in line. Top-Tip: 
// Remember that people like to count from 1, not from 0 ("zero") 
// like computers.

// TAKE A NUMBER

var katz_deli = ["Annie", "Bat", "Man", "Spidey"]
function take_a_number(arr, string) {
	arr.push(string)
	return "Hi " + string + ", you are number " + arr.length
	 + " in the queue!";

}

// 1. Build the line method that shows everyone their current place
// in the line. If there is nobody in line, it should say "The line
// is currently empty.".

// LINE FUNCTION
function line(arr){
	var s = ""
	if (arr == ""){
		return "The line is currently Empty!!!"
	} else {
	for(var i = 0; i<=arr.length-1; i++){
		s+= i+1 + ". " + arr[i] + " ";
	} 
 }
}

// 3. Build the now_serving method which should call out (i.e. puts) 
// the next person in line and then remove them from the front. 
// If there is nobody in line, it should call out (puts) that 
// "There is nobody waiting to be served!".


// NOW SERVING

function nowServing(arr){
	if(arr != ""){
console.log("Now serving " + arr[0])
} else {
	console.log("There is nobody waiting to be served!")
  }
}

// some tests
nowServing(katz_deli)
console.log(katz_deli)
take_a_number(katz_deli, "Wolverine")
console.log(katz_deli)
katz_deli.shift()
line(katz_deli)
nowServing(katz_deli)