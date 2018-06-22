// In this exercise a string is processed and output is to print the newstring as the everycharacter of the string is the successor of the character of old string
//Example == abc == bcd;

var str = 'ABC';
var newstr = '';
 
for(var i=0 ; i<str.length ; i++)
{
       if(str[i] == ' ')
       {
        newstr +=  ' ';
       }
       else
      {
        newstr +=   String.fromCharCode(str.charCodeAt(i)+1);
      }
      
} 
var mystr = '';
       for(var i= 0 ; i< newstr.length ; i++)
       {
       if(newstr[i] == 'a' || newstr[i] == 'e' || newstr[i] == 'i' || newstr[i]== 'o' || newstr[i] == 'u')
       {
           mystr  += newstr[i].toUpperCase();
       } 
       else
       {
           mystr += newstr[i];
       }


       }
       console.log(mystr);