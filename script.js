
// program to find out the max character in a given string


var str = 'javascript is a good langauge';
  var j =0;
var char = '';
for(var i=0 ; i<str.length ; i++)
{
       if(i==0)
       {
         char += str[i];
       }
       else
       {
           while(j<i)
           {
               if(str[i] == str[j])
               {
                   j=100;
               }
               else
               {
                   j++;
               }
           }
           if(i==j)
           {
               char += str[i];
           }
       }
       j=0;
}


console.log(str);
console.log(char);
var more = '';
 for(var i=0 ; i<char.length ; i++)
 {   
    for(var j=0 ; j< str.length ; j++)
    {
      if(char[i] == str[j])
      {
      more += char[i];
      }
    }
 }


  console.log(more);