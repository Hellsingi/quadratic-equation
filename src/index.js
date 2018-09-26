module.exports = function solveEquation(equation) {

  var bb=equation.replace(/\s/g, '').match(/\-?\d+/g);
  var a=bb[0];
  var b=bb[2];
  var c=bb[3];
  if(a!=0)
  {
    var d=Math.sqrt(b*b-4*a*c);
    var first=(-b+Math.sqrt(b*b-4*a*c))/(2*a);
    var second=(-b-Math.sqrt(b*b-4*a*c))/(2*a);
  }
  /*if(second>first)
  {
    var third;
    second=third;
    firs=second;
    third=first;
  }*/
  var array=[first,second];
return array;



  // your implementation
}
