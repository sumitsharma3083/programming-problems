// Problem
// In this problem let us create a function and that function will take two parameters first is array and second is size and that function will return the array of subarray with specific length
//example  -- ([1,2,3,4,5,6],3) === [[1,2,3],[4,5,6]]
   function arraychunk(numbers,size)
   {
 var sub = [];
 var sup = [];    
 var mysize = size;
 for(var i= 0 ; i <= numbers.length ; i++)
 {

   if(mysize > 0)
   {
     sub.push(numbers[i]);
     mysize = mysize -1;
   }
   else
   {
     sup.push(sub);
     sub = [];
     mysize = size ;
     i = i-1;
   }
  
 }

     console.log(sup);
 }

          arraychunk([1,2,3,4,5,6],3);
    


