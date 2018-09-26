module.exports = function solveEquation(equation) {

  var bb=equation.match(/\d+/g);
  var a=bb[0];
  var b=bb[2];
  var c=bb[3];
  if(a!=0)
  {
  var first=(-b+(b^2-4*a*c)^(1/2))/(2*a);
  var second=(-b-(b^2-4*a*c)^(1/2))/(2*a);
  }
  if(second>first)
  {
    var third;
    second=third;
    firs=second;
    third=first;
  }
  var array=[first,second];
return array;
  // your implementation
}
