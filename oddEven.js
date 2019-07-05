function countOddEvenNumbers(n) {
    var result = {odd: 0, even: 0};
    if (typeof n === 'number') {
       n = n.toString();
    }
    var arr = Array.from(n);
    arr.forEach(function(oddEven) {
      if (oddEven % 2 === 0) {
        result.even += 1;
      } else {
        result.odd += 1;
      }
    });
  
    return result;
}
