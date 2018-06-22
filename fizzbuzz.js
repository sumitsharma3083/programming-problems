// write a program a take 1 to 100 number if number is and print fizz if number is multiple of 3 and write buzz if number is multiple of 5 and print 'fizzbuzz' if number is divisble by both


for(var i=1 ; i<=100 ; i++)
{

  if(i%3 == 0 && i%5 == 0)
  {
      console.log(i+'-fizzbuzz');
  }
  else if(i%3== 0)
  {
      console.log(i+'-fizz')
  }
  else if(i%5 == 0)
  {
      console.log(i+'-buzz')
  }
  else
  {
      console.log(i+'-Not divisble');
  }
}