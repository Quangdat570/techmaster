// name.slice ( -5, -2); (-1 bắt đầu từ từ cuối cùng)
// indexOf nếu k có trong chuỗi thì trả về -1.
// indexOf nếu có trong chuỗi trả về số đầu tiên bắt đầu của chuỗi tìm kiếm


//1 
const str = "hello world";
let jif = "javascirpt is fun"

function capitalize(str) {
    let trimmed = str.trim();
    let firstChar = str.slice(0,1);
    let lastChar = str.slice(1);
    firstChar = firstChar.toUpperCase();
    lastChar = lastChar.toLowerCase();

    let result = firstChar.concat(lastChar);
    return result;
}
console.log(capitalize(str));

// function capitalize(jif) {
//     return jif.trim().jif.slice(0,1).toUpperCase().concat.jif.slice(1).toLowerCase();
// }
// console.log(capitalize(jif));



//typeOf arry - object
// arry - length có thể thay đổi được. khi length = 0 thì sẽ xóa hết các phần tử trong mảng.
//---------------------------------------


// number = [1 , 2, 4, 6 ,7, 9]
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
    
// }
// for of sử dụng cho tất cả các thể loại sequense(chuỗi,...)

//------------------------------------------


// for ( let name of "Đạt") {
//     console.log(name);
// }



// xóa phần tử đầu mảng- arr.shift()--- (unshift)
// tách, cắt chuôi thành mảng --- split(",")
// 



let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"]

console.log(arr);

console.log(arr.length);

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[4]);

console.log(arr[-1]);

for ( let name of arr) {
    console.log(name);
}

for (let i = 0; i < arr.length; i++) {
    const name = arr[i];
    console.log(i, name);
    
}

for (let index = arr.length-1; index >= 0; index--) {
    const name = arr[index];
    console.log(index, name);
   
}

arr.push("Ba");

console.log(arr);

arr.splice(
    7,
    0,
    "Thảo",
);

arr.unshift("Béo ú");

arr.pop();

arr.shift();

arr.slice(0,2);

// console.log(arr.slice(0,2));

arr.slice();

// console.log(arr.slice());

arr.slice(3,6);

// console.log(arr.slice(3,6));

arr.splice(1,2);

console.log(arr);

console.log(arr[3]);

// console.log(arr[4]);

arr.includes("Mai Anh");

console.log(arr.includes("Mai Anh"));

arr.toString();

console.log(arr.toString());

arr.join(" - ");

console.log(arr.join(" - "));

arr.reverse();

console.log(arr);

[arr[0],arr[3]] = [arr[3], arr[0]];

console.log(arr);

arr.splice(0, 4);
console.log(arr);

//---------------------------------------------------------------------------
//1 

// function max(arr){
//     let max =  arr[0];
//     let max_index= 0;   
   
//     for (let i = 0; i < arr.length; ++i) {
//         if (max < arr[i]) { 
//             max = arr[i];
//             max_index =i;
//         }
//     }
//     console.log("max= ",max);
   
// }

function max(arr) {
    let max = arr[0];
    for ( let number of arr) {
        if ( number > max) {
            max = number;
        }
    } return max;
}

let num = [1, 5, 3, 4, 2];

max(num);

//2 

// function minMax(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     let min_index = 0;
//     let max_index = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) { 
//             max = arr[i];
//             max_index =i;
           
//         }

//         else if (min > arr[i]) { 
//             min = arr[i]
//             min_index = i;
            
//         }
        


        
//     } return [min, max];
// }

function minMax(arr) {
    let min = max = arr[0];
    for ( let number of arr) {
        if ( number > max) max = number;

        if (number< min) min = number
    }
    return [min,max];
}


arr = [2, 5, 9, 8, 7];

console.log(minMax(arr));

// 3
array = [1, 5, 3, 4, 2];
function avg(arr) {
    let total = arr.reduce(function(sum, number) {
        sum += number;
        return sum;
    });
}


//4 --------------------------------------------------------
arr = [1, 5, 3, 4, 2];

function swap(arr, x, y) {
    let temp = arr[0];
    arr[x] = arr[y];
    arr[y] = temp;
}


// 6 ---------------------------------------------------------------
function mix(arr1, arr2) {
    let result = [];
    for (let index = 0; index < arr1.length; index++) {
        result.push(arr1[index], arr2[index]);
        
    }
    return result;
}
mix([1, 2, 3], [4, 5, 6]);

//7 ------------------------------------------------
function shuffle(arr) {
    for (let index = 0; index < arr.length-1; index++) {
        const ramdomIndex = Math.floor(Math.ramdom() * (arr.lenght - 1 - (index + 1))) + index + 1;
        swap(arr, index, ramdomIndex);
        
    }
}