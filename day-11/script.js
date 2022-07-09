// // function dayOfMonth(month,year) {
// //     switch (month) {
// //         case 2:
// //             if (isLeafYear(year)) return 29;
// //             else return 28;
// //         case 4:
// //         case 6:
// //         case 9:
// //         case 11:
// //             return 30;
// //         default return 31;    
// //     }
// // }


// // lặp từ 1 đến 10
// // for (let i = 1; i < 11; i = i + 1) {
// //     console.log(i);
    
// // }

// // in ra các số chắn
// // for (let i = 1;  i < 101; i++) {
// //     if ( i % 2 == 0) {
// //         console.log(i);
// //     }
   
// // }


// // for (let i = 1; i < 11; i++) {
// //     const x = i*3;
// //     console.log('3 *' + i "=" + x);
// // }

// // for (let i = 100; i > 0; i--) {
// //     if ( i % 2 != 0) 
// //         console.log(i);
       
// // }

// // while (accept == false) {
// //     accept = confirm("yêu anh đi");
// // }
// // console.log("đi chơi thôi");
// // -------------------------

// // const user = {
// //     username: "dat",
// //     password:"123456",
// // };

// // let username;
// // let password;

// // while ( username!= user.username || password != user.password) {
// //     username = prompt("Tên tài khoản");
// //     password = prompt("Mất khẩu");
// // }
// // console.log("chào mừng " + user.username + " quay trở lại");


// // -------------------------

// // const girls = [ "xinh" , "xấu", "xấu", "xinh", "xấu"];

// // for (let each of girls) {
// //     if (each != xinh) {
// //         continue;
// //     }
// //     console.log("nhắn tin");
// //     console.log("đi chơi");
// // }


// // -------------------------

// function printNumbers(a, b) {
//     if (a < b) {
//         for (let i = a; i < b; i++) {
//            console.log(i);
            
//         }
//     }
// }
// console.log(printNumbers(4, 9));

// //2
// function printNumbers(a, b) {
//     if ( a < b) {
//         for (let i = b; i > a; i--) {
//             console.log(i);
             
//          }
//     }
// }
// console.log(printNumbers(6,15));

// //3 
// function sumOfOddNumbers(a, b) {
//     let total = 0;
//     let min = a;
//     let max = b;
//     if (a > b) {
//         min = b;
//         max = a;
//     }
//     for (let i = min; i <= max; i++) {
//        if (i %2 !=0) 
//        total +=i;
        
//     }
//     return total;
// }
// console.log(sumOfOddNumbers(1, 10));

// //4 
// function divisor(number) {
    
//     for (let i = 1; i <= number; i++) {
//         if ( number % i ==0) 
//         console.log(i);
        
//     }
// }
// console.log(divisor(24));

// //5
// // function factorial(number) {
// //     let total = 1;
// //     for (let i = 2; i <=n ; i++) {
// //         total *=i;
       
// //     }
// //     return total;
// // }

// // console.log(factorial(3));

// //6
// function countFolding(thickness) {
//     thickness *=1000;
//     let count = 0;
//     let currentThickness = 0.1;
//     while ( currentThickness < thickness) {
//         currentThickness*=2;  // gấp đôi tờ giấy
//         count++; // đếm 1 lần
//     }
//     return count;
// }
// console.log(countFolding(10));

// //7
// function countYears(dad, son) {
//     let year = 0;
//     while (son*2 != dad) {
//         son++;
//         dad++;
//         year++;
//     }
//     return year;
// }
// console.log(countYears(40, 8));

// //8
// function numOfLeg() {
//     const CHICKEN_LEG = 2;
//     const DOG_LEG = 4;

//     let chicken = 1;
//     let dogs = 36-1;

//     while ( chicken * CKICKEN_LEG + dogs *DOG_LEG !=100) {
//         chicken++;
//         dogs--;
//     }

//     console.log("số chân gà là: " , chicken);
//     console.log("số chân chó là:", dogs);
// }



//--------------------------------------------------------------------------
//1 
function isPrime(number) {
    if ( number < 2) return false;
    for (let i = 2; i < number; i++) {
        if ( number % i === 0) {
            return false;
        } 
        
    }

    // nếu không chia hết tất cả các số nào khác 
    return true;
}

// ------------------------------------
// kiểm tra số nguyên tố
// nếu number < 2 thì không phải số nguyên tố

console.log(isPrime(7));

//2 
function sumOfPrimes(a, b) {
// tạo biến để tính tổng
    let total = 0;
// lọc qua các số trong khoảng a-b
    for (let i = a; i <= b; i++) {
        // kiểm tra i có phải số nguyên tố không
        // nếu là số nguyên tố thì cộng dồn vào total
       if ( isPrime(number: i )) total +=i;
        
    }
    return total;
 
}
console.log(sumOfPrimes(4, 1));

//3 in ra n số trong dãy fibonaci
// dãy fibonaci bắt đầu 0 1
// các số tiếp theo bằng 2 số trước cộng lại
function  fibonacci(n) {
    let a = 0, b = 1, stemp;
    console.log(a);
    console.log(b);
    stemp = a + b;
   while ( stemp <= n) {
    console.log(stemp);
    a = b;
    b = stemp;
    stemp = a + b;
    
   }
   console.log(n);
} 

console.log(fibonacci(32));
// -----------------------------
// function fibonacci(n) {
//     let a = 0;
//     let b = 1;
//     let c;
//     for (let i = 1; i < n; i++) {
//         if ( i==1) 
        
//     }
// }

//4  
function isPalindrome(n) {
    let sum = 0, stemp, sr;
    for (let stemp = n; n != 0; n = n % 10) {
        sr = n % 10;
        sum = ( sum * 10) + sr;
        if ( stemp = sum) {
            return true;
        } else return false;
        
    }
}

//---------------------
// let rest;  giữ phần dư
// let reverseNumber = 0;  số đảo ngược
// let copy = number;
// while ( copy > 0) {
//     rest = copy % 10;    lấy số đơn vị cuối cùng
//     reverseNumber = reverseNumber * 10 + rest;     tính tổng cộng dồn vào reverseNumber
//     (copy = copy -rest) / 10;      giảm số ban đầu đi hàng đơn vị
// }
// return number == reverseNumber;

console.log(isPalindrome(131));

//5
