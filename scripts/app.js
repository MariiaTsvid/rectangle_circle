function rectangleDraw(width,height)
{ 
  document.write('<style> .redRectangle {width:'+width+'px; height:'+height+'px; background: red;}  </style>');
  document.write('<div class="redRectangle"></div>');
}
rectangleDraw(100,50);


