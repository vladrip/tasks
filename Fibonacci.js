function FibonacciSeq(n) {
var fibo = [1,1]
switch (n) {
    case 0:
        return null
        break;
    case 1:
        fibo.pop(); return fibo;
        break;
    default:    
for(var i=2; i<n; i++) {
fibo[i] = fibo[i-1] + fibo[i-2] }
return fibo }
}
