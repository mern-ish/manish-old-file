/* 1. ISBN Number
 An ISBN (International Standard Book Number) is a unique 10-digit number assigned to books. The ISBN is valid if the sum of its digits, each multiplied by its position (1 to 10), is divisible by 11.
Example
Input: 02013145
Output: Invalid ISB
Explanation: The sum of the digits multiplied by their positions is not divisible by 11.
Input: 047195869
Output: Valid ISB
Explanation: (0×1 + 4×2 + 7×3 + … + 7×10) is divisible by 11.
Hint: Use a loop to multiply each digit by its respective position and check divisibility by 11 */

let num = Number(prompt("enter the ISBN number"));
let i = 10;
let sum = 0;
let lastnum;
do{
    lastnum = num % 10;
    console.log(lastnum);
    sum = sum +(lastnum * i);
    console.log(lastnum);
    num = Math.floor(num/10);
    i--;

}while(i == 0)
    console.log(sum);
