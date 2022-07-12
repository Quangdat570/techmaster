// xử lý số
// 1
function sphere(r) {
    let v;
    v = (4/3)*3.14*(r**3);
    return v;
}
console.log(sphere(4));

// 2
// function totalNumber(a,b) {
//     let total;
    
//     for (let i = a; i < b; i++) {
//         total = i;
        
        
        
        
//     } return total += total;
    
   
// }
// console.log(totalNumber(3,8));

//3
function integer(number) {
    let num = 0;
    let total = 0;
  for (let i = 1; i < number; i++) {
    if ( number % i == 0) {
        total =i;
        
    
    }
    
  }return total+=total;
}
console.log(integer(8));

//4
function isdNumber(number) {
    
    if ( number < 2) {
        return false;
    }
    
    if (number == 2) {
        return true;
    } else {
        for (let i = 3; i < number; i+=2) {
            if ( number % i == 0) {
                return false;
                
            }
            
            
        }
    }   return true;
}
console.log(isdNumber(15));

//5 
function totalNumber(number) {
    let total;
    let flag = true;
    if ( number < 2) {
        return  false;
    }
    
    if (number == 2) {
        return true;
    } else {
        for (let i = 3; i <= number; i+=2) {
            if ( number % i == 0) {
                flag = false;
                
                
                
            }
            
            
        } flag = true;
    }   

    if ( flag == true) {
        total = number;
        return total+=total;

    }

}
console.log( totalNumber(17));

// xử lý chuỗi
// 1

function capitalize(str) {
    let trimmed = str.trim();
    let firstChar = str.slice(0,1);
    let lastChar = str.slice(1);
    firstChar = firstChar.toUpperCase();
    lastChar = lastChar.toLowerCase();

    let result = firstChar.concat(lastChar);
    return result;
}
console.log(capitalize("HELLO world"));

//2

function  Spinal(str) {
    let trimmed = str.trim();
    let firstChar = str.slice(0,1);
    let Sencond = str.slice(1,5);
    let lowerChar = str.slice(5,6).replace(" ", "-");
    
    let lastChar = str.slice(6);
    firstChar = firstChar.toUpperCase();
    lastChar = lastChar.toLowerCase();
    lowerChar = lowerChar.toLowerCase();
    Sencond = Sencond.toLowerCase();
    let result = firstChar.concat( Sencond).concat(lowerChar).concat(lastChar);
    return result;
}
console.log(Spinal("HELLO world"));

//3

function reverseWords(str) {
 for (let index = 0; index < str.length; index++) {
    if ( str[index] != str.length-1-index) {
        return false;
    } else return true;
    
 }
}
console.log(reverseWords('Race car'));


//4

function check(str1,str2) {
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if ( str1[i] == str2[j]) {
                return true;
            } return false;
            
        }
        
    }
    

}
console.log(check("world","world"));




// xử lý mảng
//1 
let arr = [false, null, undefined, NaN, 0, " "];
let filterd = arr.filter(function(value) {
    return value != null;
});

//2


// object
//1 
function totalAge(users) {
    const total = users.reduce(function(total,users) {
        return total += users.age;
    }, 0);
    return total/users.length;
}

//2 
const users = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
   ];

function  greaterThan(users) {
    const numberAge = users.sort(function(age) {
        console.log(age);
    });
    
}
console.log(greaterThan(users));






