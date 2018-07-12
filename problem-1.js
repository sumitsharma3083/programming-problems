// create a function that will take a string as a parameter and it will return the same string in which every character of the every word in the uppercase


 function charactertouppercase(str)
 {
       var myarray;
       var i;
       var newstr = '';
       myarray = str.split('');
       
       for(i=0;i<myarray.length; i++)
       {
           if(i == 0)
           {
             newstr += myarray[i].toUpperCase()
           }
          else if(myarray[i-1] == ' ')
           {
               newstr += myarray[i].toUpperCase();
           }
           else
           {
               newstr += myarray[i]
           }
       }
        
      return newstr;
      
 } 


 var specialstr = charactertouppercase('sumit sharma')
   
   console.log(specialstr);