function FibonacciSeq(n) {
var fibo = [1,1]
if(n=1) { fibo.pop(); return fibo}
else{
for(var i=2; i<n; i++) {
fibo[i] = fibo[i-1] + fibo[i-2] }
return fibo }}