// Program to find the third largest element in the Array
  // I think i need to perform sorting if  i want to findout the largets number from an array
  // To findout the largest number in an array
  var Numbers = [1,2,4,3,5,6,4,7,8];
  var large;

  console.log(Numbers);
      for(j=0 ; j<=2 ; j++)
      {
        var left;
        var right;
        var temp;
      for(var i=0 ; i<Numbers.length-1 ; i++)
      {
       left = Numbers[i];
       right = Numbers[i+1];
   
        if(left > right)
        {
          temp = Numbers[i+1];
         Numbers[i+1] = Numbers[i];
         Numbers[i] =temp;
        }
      }
           
      if(j!=2)
      {
        Numbers.splice(Numbers.length-1 , 1);
      }
        

      }
      console.log(`Third Largest Number in the Array is: ${Numbers[Numbers.length-1]}`);