var katzDeli = [];

function takeANumber (katzDeli, customer) {
 var katzDeliLine = [];
  katzDeli.push (customer);
 var length = katzDeli.length;
   katzDeliLine.push('Welcome, ' + customer + '. You are number ' + length + ' in line.');
   return katzDeliLine;


};

var deliLine = ["Steven", "Blake", "Avi"];

function nowServing(deliLine) {
  var deliLine2 = [];
   if (deliLine.length > 0) {
     deliLine2 = deliLine.shift();
    return "Currently serving " + deliLine2 + ".";
    } else  {
     return "There is nobody waiting to be served!";
   }
};


currentLine(["Bill", "Jane", "Ann"]);

function currentLine (katzDeliLine) {
   if(katzDeliLine.length === 0) {
     return 'The line is currently empty.';
   } else if (katzDeliLine.length > 0) {


     return 'The line is currently: ' + '1. ' + katzDeliLine[0] + ', 2. ' + katzDeliLine[1] + ', 3. ' + katzDeliLine[2] ;
    }
  
};
