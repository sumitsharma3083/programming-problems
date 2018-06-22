// Problem - Flatten Array 
// Take the arrays of array and put that into the single array

var input = [[1,2,3,4],[4,5,6,7],[43,45,65],[34]];
var result = [];
var str = '';
     for(var i= 0 ; i<input.length ; i++)
     {
           for(var j=0 ; j<input[i].length ; j++)
           {
             result.push(input[i][j]);
           }
     }
   

        for(var i= 0 ; i<result.length ; i++)
        {
           if(i==0)
           {
               str += result[i];
           }
           else
           {
               for(var j=0 ; j<i; j++)
               { 
                    if(result[i] == result[j])
                    {
                       j = 100;
                    }
                    else
                    {
                        if(j == i)
                        {
                            str += result[i];
                        }
                    }
               }
           }
 


        }
        console.log(str);