const number = new Array(101);
let lengthnum = number.length ;
function summ()
{ 
let sum = 0 ;
let i = 0 ;
for(let i = 0 ; i < lengthnum ; i++ )
{
	
	number[i] = i ;
	if(number[i]%2 == 0 )
	sum += number[i];
}
document.getElementById("sum").innerHTML = sum ;
}