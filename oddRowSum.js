// DESCRIPTION:
// Given the triangle of consecutive odd numbers:

// EXAMPLES:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29


// MY SOLUTION:

function rowSumNumbers(n){
    return n * n * n;
}


// BEST PRACTICE/MORE EFFICIENT:

function rowSumNumbers(n){
    return Math.pow (n, 3);
}