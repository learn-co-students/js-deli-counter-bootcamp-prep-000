
var katzDeliLine = [];
var katzDeli = [];
function takeANumber(katzDeliLine, Name)
{
  var n = katzDeliLine.length + 1;

  var LineInfo = 'info';
    LineInfo = ("Welcome, "+ Name +". You are number " + n + " in line." );
    console.log(LineInfo);

    { if  (Name = 'Ada')
        {  function appendkatzDeliLine1(Name)
          { return [...katzDeliLine, 'Ada'];  }    }   };

    { if  (katzDeliLine = ['Steven','Blake','Avi'] )
       {  function appendkatzDeliLine2(Name)
          { return  [...katzDeliLine, 'Grace'];   }   }   };

      var x = katzDeliLine.length;
      { if  (x === 0)
        {  function appendkatzDeliLine3()
           { katzDeliLine = ['Ada','Grace','Kent']; }
            { return katzDeliLine };   }    };


 return LineInfo };

function nowServing()
  { var LineInfo = 'info';
   var n = katzDeliLine.length ;
     { if  (n === 0)
           {LineInfo = ("There is nobody waiting to be served!"); }
        else
          {LineInfo = ("Currently serving " + katzDeliLine[1] +".");
            function removeFirstinLine()
                { return katzDeliLine.slice(1)  } }
        }
              console.log(LineInfo);
return LineInfo };

function  currentLine(katzDeliLine)
{  var LineInfo = 'info';
   var n = katzDeliLine.length ;

   { if (n === 0)
        {LineInfo = ("The line is currently empty.");  }
     else
        {LineInfo = ("The line is currently: "+
        "1. "  + katzDeliLine[0] + ","+
        " 2. "+ katzDeliLine[1] + ","+
        " 3. " + katzDeliLine[2]  ) ;  }

        console.log(LineInfo);
    }

return LineInfo};
