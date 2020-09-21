/*-------------TYPES OF FUNCTIONS--------------*/
 
 //  1. NAMED FUNCTION:-
  // EXAMPLE 1:-

 function myNumber(num1 , num2) {
     
      return num1 + num2;
  }
   var sum = myNumber(15 , 15);
   console.log(sum);
 
   // EXAMPLE 2:- 

  function fullName(firstName , lastName) {
    console.log(`My name is ${firstName} ${lastName}`)
   }
      console.log(fullName("Nirbhay", "Singh"));
 
 
   
    // ex 3:-  determine the factorial of a Number

     var factorial = function findFactorial(num) {
        if (num <= 1) {
          return 1;
        }

        return num * findFactorial(num - 1);
      }
        var result = factorial(4);
       document.write (result);   // output -> 24
  

//-----------Naming function ends here-------//

// 2 . Anonymous function"-
// EXAMPLE 1.

var add = function (num1 , num2) {
    var result = num1 + num2;
     return result;
 }
  var sum = add(15 , 15);
 document.write(sum);



// EXAMPLE 2.  


     var fullname = function(firstName , lastName) {
     var result = (`My name is ${firstName} ${lastName}`);
     return result;
     }
    document.write(fullname("Nirbhay", "Singh"));



    // --------Anonymous Function ends here------------//

 // 3. IIFE FUNCTION :-
  // EXAMPLE 1.

    var fullname = (function(firstName , lastName) {
     console.log(`My name is ${firstName} ${lastName}`);
     
      })("Nirbhay", "Singh");
    
 
 // EXAMPLE 2. :- Multiple of two numbers

 
  (function(firstNum , secondNum) {
console.log(firstNum * secondNum);
 
   })(10 , 10);
 


   // 4. ARROW FUNCTION :-

      // EXAMPLE 1. 

      var fullname = ((firstName , lastName) =>
        console.log(`My name is ${firstName} ${lastName}`)
        
         )("Nirbhay", "Singh");
      

         // EXAMPLE 2. 

     
         ((firstNum , secondNum) => 
          console.log(firstNum+secondNum)
           
            )(10 , 10);
            
    
     
  //5 . CALLBACK FUNCTION   WITH SET TIMEOUT 

      function Fullstack(params) {
        console.log("I AM FULLSTACK");
      }// CALLED PART

      function Java(params) {
       console.log("I AM JAVA");
     }// CALLED PART

    // BUILTIN FUNCTION
      setTimeout(Java,1000);

      


      //  ------------PROHRAMS BASED ON FUNTIONS  START HERE -=========//

      // 1. CODE FOR CALCULATING BIGGEST AMONG THREE USER INPUT  NUMBERS   //

      function Biggest()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("Number1").value);
				num2 = Number(document.getElementById("Number2").value);
				num3 = Number(document.getElementById("Number3").value);

				if(num1>num2 && num1>num3)
				{
					window.alert(num1+"-is largest");
				}
				else if(num2>num1 && num2>num3)
				{
					window.alert(num2+"-is largest");
				}
				else if(num3>num1 && num3>num1)
				{
					window.alert(num3+"is largest");
				}
      }
      


// 2. CODE FOR CALCULATING SMALLEST AMONG THREE USER INPUT  NUMBERS   //
    
      function Smallest()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("Number1").value);
				num2 = Number(document.getElementById("Number2").value);
				num3 = Number(document.getElementById("Number3").value);

				if(num1<num2 && num1<num3)
				{
					window.alert(num1+"-is smallest");
				}
				else if(num2<num1 && num2<num3)
				{
					window.alert(num2+"-is smallest");
				}
				else if(num3<num1 && num3<num1)
				{
					window.alert(num3+"is smallest");
				}
      }
      
     

// 3. CODE FOR CHECKING WHETHER THE NUMBER IS PRIME OR NOT   //

     function test_prime(n)
     {
     
       if (n===1)
       {
         return false;
       }
       else if(n === 2)
       {
         return true;
       }else
       {
         for(var i = 2; i < n; i++)
         {
           if(n % i === 0)
           {
             return false;
           }
         }
         return true;  
       }
     }
     
     console.log(test_prime(11));   //true
     


 //4. CODE FOR CHECKING WHETHER THE NUMBER IS EVEN   OR ODD    //

// take input from the user

let number = prompt("Enter a number: ");

//check if the number is even

if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}





//--5. CODE FOR CHECKING WHETHER THE NUMBER IS PALLINDROME  OR NOT   //

function Palindrome()
			{
				var rem, temp, final = 0;
				var number = Number(document.getElementById("Nirbhay").value);

				temp = number;
				while(number>0)
				{
					rem = number%10;
					number = parseInt(number/10);
					final = final*10+rem;
				}
				if(final==temp)
				{
					window.alert("The inputed number is Palindrome");
				}
				else
				{
					window.alert("The inputted number is not palindrome");
				}
      }
      



      //--6. CODE FOR FIBONACCI  //


      function fibonacci(number) 
{ 
    let num1=0; 
    let num2=1; 
    let sum; 
    let i=0; 
    for (i = 0; i < number; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
} 
  
document.write("Fibonacci(3): "+fibonacci(3)+"<br>"); // 3
document.write("Fibonacci(9): "+fibonacci(9)+"<br>"); // 55