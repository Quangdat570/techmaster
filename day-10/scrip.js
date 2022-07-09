// function is0ddNumber(number) {
//     if (number % 2 != 0) {
//         return true;
//     } else {
//         return false;

//     }
// }
// if (is0ddNumber(1)) {
//     console.log("1 la so le");
// }
// else { console.log ("la so chan");
// }

// // 2
// function max0fTwo(a, b) {
//     if (a > b) return a;
//     else return b;
// }
// console.log(max0fTwo(1,2));

// //3 
// function divisibleByThreeAndFive(number) {
//     if (number % 3 == 0) {
//         if (number % 5 == 0) {
//             return true;
//         } return false;
        
//     } else {
//         return false;
//     }
// }

// if (divisibleByThreeAndFive(15)) {
//     console.log(" 15 chia het cho 3 va 5")
// } else {
//     console.log("15 không chia hết")
// }
// // 4 
// function season(month) {
//     if ( month==12 || month==1 || month==2 ) {
//         console.log("winter")
//     }
//     if ( month==3 || month==4 || month==5) {
//         console.log("spring")
//     }
//     if ( month==6 || month==7 || month==8) {
//         console.log("summer")
//     }
//     if ( month==9 || month==10 || month==11) {
//         console.log("fall")
//     }
// }
// //5 
// function trafficLight(light) {
//     if (light == green) { console.log("được phép di chuyển") }

//     if (light == yelow) { console.log("giảm tốc độ và dừng lại") }

//     if (light == red) { console.log("dừng lại") }
// }

// //6
// function calcCommissions(totalSales) {
//     if (totalSales <= 100_000_000) return totalSales * 0.05;
//     else if ( totalSales <= 300_000_000) return totalSales * 0.1;
//     else return totalSales * 0.2;
// }
// console.log(calcCommissions(80_000_000));

//1 
function isLeafYear(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("đây là năm nhuận")
        } else {
            console.log("đây không phải năm nhuận")
        }
    } else {
        console.log("Đây không phải năm nhuận")
    }
    
}

console.log(isLeafYear(2400));
console.log(isLeafYear(2100));

//2 
function daysOfMonth(month, year) {
    if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) {
        console.log("tháng đã cho có 31 ngày")
    } else if ( month==4 || month==6 || month==9 || month==11) {
        console.log("tháng đã cho có 30 ngày")
    } else if (month==2 && year % 100 == 0 && year % 400 == 0) {
        console.log("tháng đã cho có 29 ngày vì là năm nhuận")
    } else {
        console.log("tháng đã cho có 28 ngày vì không phải năm nhuận")
    }
}

console.log(daysOfMonth(11, 2100));
console.log(daysOfMonth(2, 2400));
console.log(daysOfMonth(2, 2300));

//3 
function calcGrade(point) {
    if (point < 4.0) {
        console.log("xếp loại F")
    } else if (point >= 4 && point < 5.5) {
        console.log("xếp loại D")
    } else if (point >= 5.5 && point < 7.0) {
        console.log("xếp loại C")
    } else if (point >=7.0 && point < 8.5) {
        console.log("xếp loại B")
    } else if (point >= 8.5) {
        console.log("xếp loại A")
    }
}

console.log(calcGrade(7.1));

//4 
function calcTaxiFee(km) {
    if ( km <=30) return km*11_000 + 10_000;
    else  return km*9_500 +10_000;
}

console.log(calcTaxiFee(32));

//5 
function maxOfThree(a, b, c) {
    if ( a >= b && a >= c) {
    return a;
    } else if ( b >=a && b >=c ) {
        return b;
    } else return c;
    
}

console.log(maxOfThree(9, 5, 8));

//6 
function solveEquation(a, b, c) {
    
   if ( a == 0 && b == 0 && c == 0) {
    console.log("Infinity")
    } else if ( a == 0 && b == 0 && c != 0) {
    console.log("Null")
} else if ( a == 0 && b != 0 && c !=0) {
    return -c/b; 
} 
else if ( a != 0) {
    var delta = b**2 - 4*a*c;
    if ( delta > 0) {
    x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a)
    
    x2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a)
    
    console.log( 'x1 =' + x1);
    console.log( 'x2 = ' + x2);
    
}   else if ( delta < 0) {
    console.log('null')
}
}
}


console.log(solveEquation(2,7,4));

