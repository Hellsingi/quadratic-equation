module.exports = function solveEquation(equation) {
  var bb=equation.replace(/\s/g, '').match(/\-?\d+/g);
  var a=bb[0];
  var b=bb[2];
  var c=bb[3];
  if(a!=0)
  {
    var d=Math.sqrt(b*b-4*a*c);
    var first=(-b+d)/(2*a);
    var second=(-b-d)/(2*a);
  }
var res = [first,second];
res.sort((first, second) => first - second);
return res;  
  // your implementation
}
