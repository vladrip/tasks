function FibonacciSeq(n) {
var fibo = [1,1]
for(var i=2; i<n; i++) {
fibo[i] = fibo[i-1] + fibo[i-2] }
return fibo }
