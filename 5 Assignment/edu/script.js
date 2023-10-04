//function for displaying values
function dis(val)
{
document.getElementById("result").value+=val;}
//function for evaluation
function solve()
{
var x = document.getElementById("result").value
var y = eval(x)
document.getElementById("result").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("result").value = ""
}
function backspace()
{
var inp = document.getElementById("result").value
inp = inp.substr(0,inp.length-1)
document.getElementById('result').value=inp;
}