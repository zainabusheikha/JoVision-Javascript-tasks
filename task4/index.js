const points = new Array(101);
let point = points.length ;
function sum()
{
let i = 0 ;
let sum = 0 ;
for(let i = 0 ; i < point ; i++ )
{
points[i] = i ;
sum += points[i];
}
document.getElementById("sum").innerHTML = "The sum of numbers from 1 to 100 is " + sum ;
}