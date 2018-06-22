// Problem 1 : 
// Let us suppose we have a string and write a code in which pass a string and that function will return the longest word from that string  example -- javascript is a good language === 'javascript';

 var word; 
 var mystr = '';
 var myarr = [];
  function longword(str)
  {
 
    for(var i= 0 ; i<str.length ; i++)
    {
        if(str[i] == ' ' )
        {
           myarr.push(mystr);
           mystr = '';
        }
        else
        {  
            mystr += str[i]; 
            
            if(i  == str.length-1)
            {
                myarr.push(mystr); 
            }
        }
    } 
   var mysen;
    for(var j= 0 ; j< myarr.length ; j++)
    {
        if(j==0)
        {
          mysen = myarr[j];
        }
        else
        {
            if(myarr[j].length > mysen.length)
            {
                mysen = myarr[j];
            }
        }
      
    }
   return mysen;
  }

  console.log( longword('javascript is a good language'));   
