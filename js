mylist = [77,0.03,-0.009,59,0.1901,100,89];

function choose(x)
{
var i = Math.floor(Math.random() * x.length);
return x[i];
}

console.log(choose(mylist));
