// Возвращает случайное целое число между min (включительно) и max (не включая max)
function getRandomInt(min, max) 
{  
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Возвращает случайное целое ЧЕТНОЕ число между min (включительно) и max (не включая max). Использование Math.round() даст неравномерное распределение!
function getRandomIntEven(min, max)
{
    var a=Math.floor(Math.random() * (max - min + 1)) + min, i=0;
    do{
        if((a%2)==0)
        {
            i=1;
            return a;
        }
        else
            a=Math.floor(Math.random() * (max - min + 1)) + min;
    } while (i!=1)  
}

function circleDraw()
{ 
  document.write('<div class="block">');
  for (var idCircle=1; idCircle<=200; idCircle++)
  { 
  var heightCircle=getRandomIntEven(50, 150), 
      widthCircle=heightCircle, 
      radiusCircle=heightCircle/2,
      colorCircle1=getRandomInt(0, 256),colorCircle2=getRandomInt(0, 256),colorCircle3=getRandomInt(0, 256);
   
    document.write('<style> #circle'+idCircle+' {width:'+widthCircle+'px; height:'+heightCircle+'px; background:rgb('+colorCircle1+','+colorCircle2+','+colorCircle3+'); border-radius:'+radiusCircle+'px;}  </style>');
    document.write('<div id="circle'+idCircle+'"></div>');
  }
  document.write('</div>');
}

circleDraw();
